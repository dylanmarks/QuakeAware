/**
 * @author dmarks 
 */
Ti.API.info("Loading react.html");
Ti.include("navigationControl.js");

var data = [
    {title:'Send your location', hasChild:true, url:'sendlocation.js'},
	{title:'Essential Steps', hasChild:true, url:'essential.html'},
    {title:'Utilities - Gas', hasChild:true, url:'gas.html'},
    {title:'Utilities - Hydro', hasChild:true, url:'hydro.html'},
    {title:'Utilities - Sanitation', hasChild:true, url:'sanitation.html'},
    {title:'How to Purify Water', hasChild:true, url:'water.html'}
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

