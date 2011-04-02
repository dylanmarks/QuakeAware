// load in a utility file for opening html and js files
Ti.include("navigationControl.js"); 


// create table view data object
var data = [
	{title:'About', hasChild:true, url:'aboutmycity.html'},
	{title:'Record Personal Notes', hasChild:true, url:'personalnotes.js'},
	{title:'Burnaby, BC, Canada', hasChild:true, url:'cities/BC-Burnaby/main.js'},
	{title:'Richmond, BC, Canada', hasChild:true, url:'cities/BC-Richmond/richmond.js'},
	/*{title:'North Delta, BC, Canada', hasChild:true, url:'cities/BC-Vancouver/main.js'},
	{title:'Surrey, BC, Canada', hasChild:true, url:'cities/BC-Vancouver/main.js'},*/
	{title:'Vancouver, BC, Canada', hasChild:true, url:'cities/BC-Vancouver/main.js'}
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
	
	openUrl(e.rowData); //see navigationControl.js
}); 

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
