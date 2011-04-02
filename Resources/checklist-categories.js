
Ti.API.info("test");
Ti.include("navigationControl.js");
Ti.include("checklist-data.js");

function tableRowContainsCat(tableRows, cat) {
	Ti.API.info("checking " + cat);
  var i = tableRows.length;
  while (i--) {
    if (tableRows[i].title == cat) {
		Ti.API.info("found " + tableRows[i].title);
      return true; 
    }
  }
  return false;
}

Ti.API.info("test3");
Titanium.API.info('checklistData = ' + checklistData.length);


var tableRows = [];

function getCategoryList(checklistData, tableRows){
	for (var i = 0; i < checklistData.length; i++) {
		var cat = checklistData[i].Category;

		//Titanium.API.info('checking for ' +cat);
		
		if (!tableRowContainsCat(tableRows, cat)) {
			var tableRow = Ti.UI.createTableViewRow();
			tableRow.title = cat;
			tableRows.push( tableRow );
		}
		
	}
	return tableRows;
}
Titanium.API.info('tableRows = ' + tableRows.length);

tableRows = getCategoryList(checklistData, tableRows);
//Titanium.API.info('ROW COUNT = ' + tableRows.length);
	
// create table view
var tableview = Titanium.UI.createTableView({
	data:tableRows,
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});



// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var row = e.section.rows[e.index];
	var category = row.title;
	var rowData = {
		title: category,
		url: "checklist.js"
	};
	var Props = Titanium.App.Properties; 
	Props.setString("checkListCategory", category);
	Ti.API.info("prop in event: " + Props.getString("checkListCategory"));
	openUrl(rowData, {category:category} );	
	
});

// add table view to the window
var win = Ti.UI.currentWindow;
win.add(tableview);
win.open();
