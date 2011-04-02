// load in a utility file for opening html and js files
Ti.include("../../navigationControl.js"); 


// create table view data object
var data = [
	{title:'Numbers & Locations', hasChild:true, url:'numbers.html'},
	{title:'Area Map', hasChild:true, url:'map.js'},
	{title:'Where to buy equipment', hasChild:true, url:'survivalkitInfo.html'}
];

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e == null) {
		Ti.API.info("Click event did not have an event object passed to function!.");
	}
	Ti.API.info("Table click event");
	var rowdata = e.rowData;
	openUrl(rowdata); //see navigationControl.js
}); 

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
