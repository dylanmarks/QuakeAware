
/*
if (PageParameters != null && PageParameters.category != null) //see navigationControl openUrl function for where PageParameters set
{
	Ti.API.info("From PageParameters: "  + PageParameters.category);
	categoryFilter = PageParameters.category;
}
*/
var categoryFilter = Titanium.App.Properties.getString('checkListCategory');	
Ti.API.info("category:" + categoryFilter);
//uses sqlite database to store which items have been checked
function getDatabase()
{
	
	var db = Titanium.Database.open('mydb');
	return db;
}

/*
 * @returns ID
 */
function ensureItemInDBTable(strItemName, strCategory, db) {
	//
	db.execute(
		"INSERT INTO SurvivalList (Name, hasCheck, Category ) " + 	
		"SELECT  ?, ?, 0 WHERE NOT EXISTS (SELECT Name FROM SurvivalList WHERE Name = ?)", strItemName, strCategory, strItemName); 
	//Titanium.API.info('JUST INSERTED ' + strItemName + ' lastInsertRowId = ' + db.lastInsertRowId);
	db.execute(
		"UPDATE SurvivalList SET Category = ? WHERE Name = ?", strCategory, strItemName); 
	//print("Updating " + strItemName + " with cat " + strCategory);
	var id = db.lastInsertRowId;
	
	return id;
	
}

function updateHasCheckInDatabase(RowID, boolHasCheck) {
	var db = getDatabase();
	db.execute("UPDATE SurvivalList SET hasCheck = ? WHERE RowID = ?", 
		(boolHasCheck) ? 1 : 0, 
		RowID);
	Ti.API.info('Updated check in database for ID ' + RowID);
	db.close(); //not sure why, but this works
}

function addCategoryColumnIfNotExists(db)
{
	if (Ti.Platform.osname != "iphone") {
		return;
	} 
	//var db = getDatabase();
	var found = false;
	var databaseRows = db.execute("PRAGMA table_info('SurvivalList');");
	while (databaseRows.isValidRow()) {
		if (databaseRows.fieldByName('Name') == "Category") {
			found = true;
			break;
		}
		databaseRows.next();
	}	
	Ti.API.info("category column found = " + found);
	if (found != true) {
		db.execute("ALTER TABLE SurvivalList ADD COLUMN Category TEXT");
	}
	databaseRows.close();
	//db.close();
}


Ti.API.info("About to open database.js");

//ensure that the different options are already stored in the database. This should be pulled from an xml file or something!
var db = getDatabase();
Ti.API.info("Database open!");
//db.execute('DROP TABLE IF EXISTS SurvivalList'); //for testing only

db.execute('CREATE TABLE IF NOT EXISTS SurvivalList  (Name TEXT, hasCheck INTEGER, Category TEXT)'); //ROWID is automatically built in with SQLite db
addCategoryColumnIfNotExists(db);

//db.execute('DELETE FROM SurvivalList');

//This is where the survival checklist items are defined in a javascript object
Ti.include("checklist-data.js");
//{Name:"Food: 3 day supply", Category:"Basic"},

var id;
for (var i = 0; i < checklistData.length; i++)
{
	Ti.API.info("checkData " + checklistData[i].Category);
	if (checklistData[i].Category == categoryFilter) {
		id = ensureItemInDBTable(checklistData[i].Name, categoryFilter, db);
	}
}

Ti.API.info("check:" + checklistData.length);

var databaseRows = db.execute('SELECT RowID, Name, hasCheck, Category FROM SurvivalList WHERE Category = ?', categoryFilter);

//var databaseRows = db.execute('SELECT RowID, Name, hasCheck, Category FROM SurvivalList ORDER BY hasCheck ASC');

Titanium.API.info('ROW COUNT = ' + databaseRows.getRowCount());


var viewData = [];
index = 0;
while (databaseRows.isValidRow())
{
	//should really check whether this is still a valid row, and delete from the database if not
	var id = databaseRows.fieldByName('RowID');
	var tableRow = Ti.UI.createTableViewRow();
	Ti.API.info("db row cat: " + databaseRows.fieldByName("Category"));
	tableRow.hasCheck = (databaseRows.fieldByName("hasCheck") == 1) ? true : false;
	//tableRow.hasDetail = true;
	tableRow.ID = id;
	var l = Ti.UI.createLabel({
		left:5,
		font:{fontSize:13, fontWeight:'bold'},
		color:(tableRow.hasCheck) ? '#000': '#336699',
		text:databaseRows.fieldByName('Name')
	});
	tableRow.add(l);
	viewData[index] = tableRow;
	
	Ti.API.info('ID: ' + databaseRows.field(0) + ' NAME: ' + databaseRows.fieldByName('name'));
	databaseRows.next();
	index++;
}
databaseRows.close();
db.close();

// create table view
var tableview = Titanium.UI.createTableView({
	data:viewData,
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	
	//db.execute('UPDATE SurvivalList SET CHECKED = ? WHERE ID = ?',e.ID,'Shotgun', 0);
	
	setTimeout(function()
	{
		// reset checks... this is so only one has a check at a time.  Need to change this!
		//instead, we want to save the check event to the database
		
		/* this is for having the row selection mutually exclusive.  We are doing more of a check list instead.
		for (var i=0;i<section.rows.length;i++)
		{
			section.rows[i].hasCheck = false;
			section.rows[i].children[0].color = '#000';
		}
		*/
		
		// set current check
		//might want to consider having a checkbox item in the table instead...
		var row = section.rows[index];
		
		row.hasCheck = !row.hasCheck;
		if (row.children != null && row.children[0] != null) {
			row.children[0].color = (row.hasCheck) ? '#000' : '#336699';
		}
		updateHasCheckInDatabase(row.ID, row.hasCheck);
		
	},250);
	
	
});

// add table view to the window
var win = Ti.UI.currentWindow;
win.add(tableview);

