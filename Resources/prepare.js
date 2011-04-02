// load in a utility file for opening html and js files 
Ti.include("navigationControl.js");

// create table view data object
var data = [
	{title:'How To Prepare', hasChild:true, url:'prepare.html'},
	{title:'Emergency Contact Plan', hasChild:true, url:'emergencycontact.js'},
	{title:'Survival Kit Checklist', hasChild:true, url:'checklist-categories.js'},
	{title:'During a Quake', hasChild:true, url:'during.html'}

	//,{title:'Knowledge Assessment', hasChild:true, url:'http://quakeaware.org/assessment.html'}

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

//
//  ADD EVENT LISTENERS FOR CUSTOM EVENTS
//
var win = Titanium.UI.createWindow({
	height:30,
	width:250,
	bottom:110,
	borderRadius:10
});

var view = Titanium.UI.createView({
	backgroundColor:'#000',
	opacity:0.7,
	height:30,
	width:250,
	borderRadius:10
});

var label = Titanium.UI.createLabel({
	color:'#fff',
	font:{fontSize:13},
	textAlign:'center',
	width:'auto',
	height:'auto'
});
win.add(view);
win.add(label);
