 
//uses sqlite database to store which items have been checked
function getDatabase()
{
	var db = Titanium.Database.open('mydb');
	return db;
}
function save(ContactName, ContactNumber, WorkDay, WorkEvening, NonWorkDay, NonWorkEvening)
{
	var db = getDatabase();
	db.execute("UPDATE EmergencyPlan SET ContactName = ?,  ContactNumber = ?, WorkDay = ?," + 
			 "WorkEvening = ?, NonWorkDay = ?, NonWorkEvening = ? ",
			 ContactName, ContactNumber, WorkDay, WorkEvening, NonWorkDay, NonWorkEvening);
	Ti.API.info("Contact info saved");
	db.close();
}

var db = getDatabase();

//this is a simple table with one row of one cell. should not be multiple cells.
db.execute('CREATE TABLE IF NOT EXISTS EmergencyPlan ' + 
		' (ContactName TEXT,  ContactNumber TEXT, WorkDay TEXT, WorkEvening TEXT, NonWorkDay TEXT, NonWorkEvening TEXT)'); //ROWID is automatically built in with SQLite db

db.execute(
		"INSERT INTO EmergencyPlan (ContactName) " + 	
		"SELECT '' WHERE NOT EXISTS (SELECT ContactName FROM EmergencyPlan)"); 

// add table view to the window
var win = Ti.UI.currentWindow;
var scrollView = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true
});

var lDescription = Titanium.UI.createLabel({
	top:10,
	left:10,
	width:300,
	height:'auto',
	color:'#777',
	font:{fontSize:13},
	text:"You and each family member should agree on an emergency contact and meeting place ahead of time. Store the information here so that it is always available. The contact should be out of your area and you should choose meeting locations that would be easy to access if bridges or roads were inaccessible."
});
scrollView.add(lDescription);


var spacing = 45;
var labelSpacing = 20;
var topPos = 130;

//-------
var lContactName = Titanium.UI.createLabel({
	top:topPos,
	left:10,
	width:300,
	height:'auto',
	color:'#000',
	font:{fontSize:13},
	text:"Contact Name"
});
scrollView.add(lContactName);
topPos += labelSpacing;
var tContactName = Titanium.UI.createTextField({
	value:'',
	height:35,
	top:topPos,
	left:10,
	width:290,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
scrollView.add(tContactName);
topPos += spacing;
//--------

//-------
var lContactNumber = Titanium.UI.createLabel({
	top:topPos,
	left:10,
	width:300,
	height:'auto',
	color:'#000',
	font:{fontSize:13},
	text:"Contact Phone Number"
});
scrollView.add(lContactNumber);
topPos += labelSpacing;
var tContactNumber = Titanium.UI.createTextField({
	value:'',
	height:35,
	top:topPos,
	left:10,
	width:290,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
scrollView.add(tContactNumber);
topPos += spacing;
//--------

//-------
var lWorkDay = Titanium.UI.createLabel({
	top:topPos,
	left:10,
	width:300,
	height:'auto',
	color:'#000',
	font:{fontSize:13},
	text:"Meeting Place During Work Day"
});
scrollView.add(lWorkDay);
topPos += labelSpacing;
var tWorkDay = Titanium.UI.createTextField({
	value:'',
	height:35,
	top:topPos,
	left:10,
	width:290,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
scrollView.add(tWorkDay);
topPos += spacing;
//--------

//-------
var lWorkEvening = Titanium.UI.createLabel({
	top:topPos,
	left:10,
	width:300,
	height:'auto',
	color:'#000',
	font:{fontSize:13},
	text:"Meeting Place During Work Evening"
});
scrollView.add(lWorkEvening);
topPos += labelSpacing;
var tWorkEvening = Titanium.UI.createTextField({
	value:'',
	height:35,
	top:topPos,
	left:10,
	width:290,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
scrollView.add(tWorkEvening);
topPos += spacing;
//--------


//-------
var lNonWorkDay = Titanium.UI.createLabel({
	top:topPos,
	left:10,
	width:300,
	height:'auto',
	color:'#000',
	font:{fontSize:13},
	text:"Meeting Place During Non-Work Day"
});
scrollView.add(lNonWorkDay);
topPos += labelSpacing;
var tNonWorkDay = Titanium.UI.createTextField({
	value:'',
	height:35,
	top:topPos,
	left:10,
	width:290,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
scrollView.add(tNonWorkDay);
topPos += spacing;
//--------


//-------
var lNonWorkEvening = Titanium.UI.createLabel({
	top:topPos,
	left:10,
	width:300,
	height:'auto',
	color:'#000',
	font:{fontSize:13},
	text:"Meeting Place During Non-Work Evening"
});
scrollView.add(lNonWorkEvening);
topPos += labelSpacing;
var tNonWorkEvening = Titanium.UI.createTextField({
	value:'',
	height:35,
	top:topPos,
	left:10,
	width:290,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
scrollView.add(tNonWorkEvening);
topPos += spacing;
//--------

//---------
var saveBtn = Titanium.UI.createButton({
	top:topPos,
	height:40,
	width:200,
	title:'Save'
});

scrollView.add(saveBtn);

topPos += spacing;

var lDesc2 = Titanium.UI.createLabel({
	top:topPos,
	left:10,
	width:300,
	height:'auto',
	color:'#777',
	font:{fontSize:13},
	text: "After a major disaster, local phone service may be limited so phone your out-of-area contact to keep in touch with your family. Listen to the radio or TV for phone use instructions, then phone your contact person to say how you are, where you are and what your plans are. Keep the call short, and, if possible, arrange to call back at a specified time for another check-in."
});
scrollView.add(lDesc2);



win.add(scrollView);

var databaseRows = db.execute('SELECT * FROM EmergencyPlan');
Titanium.API.info('ROW COUNT = ' + databaseRows.getRowCount());

while (databaseRows.isValidRow())
{
	Ti.API.info( databaseRows.fieldByName('ContactName'));
	tContactName.value = databaseRows.fieldByName('ContactName');
	tContactNumber.value = databaseRows.fieldByName('ContactNumber');
	tWorkDay.value = databaseRows.fieldByName('WorkDay');
	tWorkEvening.value = databaseRows.fieldByName('WorkEvening');
	tNonWorkDay.value = databaseRows.fieldByName('NonWorkDay');
	tNonWorkEvening.value = databaseRows.fieldByName('NonWorkEvening');
	
	databaseRows.next();
	
}
databaseRows.close();
db.close();




//
//  TAB GROUP EVENTS
//
var messageWin = Titanium.UI.createWindow({
	height:30,
	width:250,
	bottom:70,
	borderRadius:10,
	touchEnabled:false
});
var messageView = Titanium.UI.createView({
	height:30,
	width:250,
	borderRadius:10,
	backgroundColor:'#000',
	opacity:0.7,
	touchEnabled:false
});

var messageLabel = Titanium.UI.createLabel({
	text:'',
	color:'#fff',
	width:250,
	height:'auto',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:13
	},
	textAlign:'center'
});
messageWin.add(messageView);
messageWin.add(messageLabel);

saveBtn.addEventListener('click', function()
{	
	Ti.API.info("saving " + tContactName.value);
	save(tContactName.value, tContactNumber.value, tWorkDay.value, tWorkEvening.value, tNonWorkDay.value, tNonWorkEvening.value);
	messageLabel.text = 'Changes saved';
	messageWin.open();
	setTimeout(function()
	{
		messageWin.close({opacity:0,duration:500});
	},1000);
});



