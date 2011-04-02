/** 
 * @author dmarks
 */
Ti.API.info("Loading firstaid.html");
Ti.include("navigationControl.js");

var data = [
    {title:'Introduction', hasChild:true, url:'firstaid/introduction.html'},
	 {title:'First Aid for Injuries', hasChild:true, url:'firstaid/firstaidinjure.html'},
    {title:'Treat for Shock', hasChild:true, url:'firstaid/shock.html'},
	{title:'Bleeding', hasChild:true, url:'firstaid/bleed.html'},
	{title:'Sprains/Fractures/Breaks', hasChild:true, url:'firstaid/sprains.html'},
    {title:'First Aid ABCs', hasChild:true, url:'firstaid/firstaidabc.html'},
	
    {title:'Tips', hasChild:true, url:'firstaid/tips.html'},
	{title:'Additional Links', hasChild:true, url:'firstaid/additional.html'}
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

