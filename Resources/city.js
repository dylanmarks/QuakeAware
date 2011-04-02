//create table view data object 
var data = [
	{title:'Map', hasChild:true, test:'map.js'}
];


// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});


// // create table view 
// var tableview = Titanium.UI.createTableView();
// 
// // create table view event listener 
// tableview.addEventListener('click', function(e) 
// {
// 
// });

// add table view to the window
Titanium.UI.currentWindow.add(tableview);

/// / It will crash because the table probably have no index 0 
// var data = {title:'New Row'}; 
// tableview.appendRow(data,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.LEFT}); 


