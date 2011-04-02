try { 
	//android debugger: ddms
	
	Ti.API.info("The application has loaded version 4.");
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');
	
	// create tab group
	var tabGroup = Titanium.UI.createTabGroup();
	
	Ti.API.info("Tab group.");
	
	var win1 = Titanium.UI.createWindow({
		url: 'index.js',
		titleImage: 'images/QuakeAware-Logo-small.png',
		backgroundColor:'#fff' 		
	});
	
	var tab1 = Titanium.UI.createTab({
		icon: 'icons/house.png',
		title: 'Home',
		window: win1
	});
	
	//
	var win2 = Titanium.UI.createWindow({
		url: 'prepare.js',
		title: 'Prepare',
		backgroundColor:'#fff' 
	});
	var tab2 = Titanium.UI.createTab({
		icon: 'icons/tick.png',
		title: 'Prepare',
		window: win2
	});
	
	//
	var win3 = Titanium.UI.createWindow({
		url: 'react.js',
		title: 'React',
		backgroundColor:'#fff' 
	});
	var tab3 = Titanium.UI.createTab({
		icon: 'icons/lightning.png',
		title: 'React',
		window: win3
	});
	
	//
	var win4 = Titanium.UI.createWindow({
		url: 'mycity.js',
		title: 'My City',
		backgroundColor:'#fff' 
	});
	var tab4 = Titanium.UI.createTab({
		icon: 'icons/world.png',
		title: 'My City',
		active: true,
		window: win4
	});
	
	//
	// create mashup tab and root window
	//
	var win5 = Titanium.UI.createWindow({
		url: 'firstaid.js',
		title: 'First Aid',
		backgroundColor:'#fff' 
	});
	var tab5 = Titanium.UI.createTab({
		icon: 'icons/firstaid.png',
		title: 'First Aid',
		window: win5
	});
	
	//
	//  add tabs
	//
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	tabGroup.addTab(tab3);
	tabGroup.addTab(tab4);
	tabGroup.addTab(tab5);
	Ti.API.info("Tab group loaded.");
	
	
	tabGroup.addEventListener('open', function(){
		// set background color back to white after tab group transition
		Titanium.UI.setBackgroundColor('#fff');
	});
	
	
	
//tabGroup.setActiveTab(1);

//Ti.API.info("osname: " + Ti.Platform.osname);
// open tab group with a transition animation
if (Ti.Platform.osname == "android")
{
	Ti.API.info("Set tab android.");
	tabGroup.open();
			Ti.API.info("After set tab.");
}
else
{
	Ti.API.info("Set tab.");
	tabGroup.open({
		transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
			Ti.API.info("After set tab.");
}
		

/*
Ti.App.addEventListener('backToHome', function() {
	Ti.API.info("webview back!");
	//Ti.API.info(webview);
	//	webview.goBack();
});
*/
/*
// tab group open event
tabGroup.addEventListener('click', function(e)
{
		//Ti.API.info("Double click on tab bar for full refresh");
Ti.UI.currentTab.open();
	//var win = Titanium.UI.currentWindow;	
	//win.close();
	
//	tabGroup.open();
});
		
// tab group open event
tabGroup.addEventListener('doubletap', function(e)
{
		Ti.API.info("Double tap on tab bar for full refresh");

	var win = Titanium.UI.currentWindow;	
	win.close();
	
	tabGroup.open();
});
		
	*/
	
	/*
	 //
	 //  CREATE CUSTOM LOADING INDICATOR
	 //
	 var indWin = null;
	 var actInd = null;
	 function showIndicator()
	 {
	 // window container
	 indWin = Titanium.UI.createWindow({
	 height:150,
	 width:150
	 });
	 
	 // black view
	 var indView = Titanium.UI.createView({
	 height:150,
	 width:150,
	 backgroundColor:'#000',
	 borderRadius:10,
	 opacity:0.8
	 });
	 indWin.add(indView);
	 
	 // loading indicator
	 actInd = Titanium.UI.createActivityIndicator({
	 style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
	 height:30,
	 width:30
	 });
	 indWin.add(actInd);
	 
	 // message
	 var message = Titanium.UI.createLabel({
	 text:'Loading',
	 color:'#fff',
	 width:'auto',
	 height:'auto',
	 font:{fontSize:20,fontWeight:'bold'},
	 bottom:20
	 });
	 indWin.add(message);
	 indWin.open();
	 actInd.show();
	 
	 };
	 function hideIndicator()
	 {
	 actInd.hide();
	 indWin.close({opacity:0,duration:500});
	 };
	 //
	 // Add global event handlers to hide/show custom indicator
	 //
	 Titanium.App.addEventListener('show_indicator', function(e)
	 {
	 Ti.API.info("IN SHOW INDICATOR");
	 showIndicator();
	 });
	 Titanium.App.addEventListener('hide_indicator', function(e)
	 {
	 Ti.API.info("IN HIDE INDICATOR");
	 hideIndicator();
	 });
	 // trap app shutdown event
	 Titanium.App.addEventListener('close',function(e)
	 {
	 //	Ti.API.info("The application is being shutdown");
	 });
	 // test for loading in a root-level include
	 //Ti.include("welcome.js");
	 // test out logging to developer console
	 //Ti.API.info("Welcome to Kitchen Sink for Titanium/"+Titanium.version);
	 //Ti.API.debug("user agent set to "+Titanium.userAgent);
	 */
}
catch(e)
{
	Ti.API.info("crash");
}
