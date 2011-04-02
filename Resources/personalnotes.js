//uses sqlite database to store which items have been checked 
function getDatabase()
{
	var db = Titanium.Database.open('mydb');
	return db;
}
function saveNote(txt, db)
{
	
	db.execute("Update PersonalNotes SET Note = ?",txt);
	Ti.API.info("Note saved");
	//db.close();
}

var db = getDatabase();

Ti.API.info("Database open!");
//this is a simple table with one row of one cell. should not be multiple cells.
db.execute('CREATE TABLE IF NOT EXISTS PersonalNotes  (Note TEXT)'); //ROWID is automatically built in with SQLite db

db.execute(
		"INSERT INTO PersonalNotes (Note) " + 	
		"SELECT '' WHERE NOT EXISTS (SELECT Note FROM PersonalNotes)"); 



// add table view to the window
var win = Ti.UI.currentWindow;

var l = Titanium.UI.createLabel({
	top:10,
	left:10,
	width:300,
	height:'auto',
	color:'#777',
	font:{fontSize:13},
	text:"Store any important personal data, contact information or prearranged meeting places here."
});
win.add(l);

var tf1 = Titanium.UI.createTextArea({
	color:'#336699',
	height:200,
	top:100,
	left:10,
	width:290,
	borderWidth:2,
	borderColor:'#bbb',
	borderRadius:5,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var databaseRows = db.execute('SELECT Note FROM PersonalNotes');
Titanium.API.info('ROW COUNT = ' + databaseRows.getRowCount());

while (databaseRows.isValidRow())
{
	var note = databaseRows.fieldByName('Note');
	databaseRows.next();
	if (note != null) {
		tf1.value = note;
	}
}
databaseRows.close();
//db.close();

tf1.addEventListener('blur',function(e)
{
	//l.text = 'blur received, val = ' + e.value;	
	saveNote(e.value, db);
});


var saveBtn = Titanium.UI.createButton({
	top:50,
	height:40,
	width:200,
	title:'Save note'
});

saveBtn.addEventListener('click', function()
{
	saveNote(tf1.value);
	tf1.blur();
});

win.add(saveBtn);

win.add(tf1);


