/**
 * See KitchenSink web_views
 * html files need to be opened using a webview now, instead of directly. 
 * need to write a set of methods to check the data in the table view, and respond appropriately:
 * 	If data.html or data.innerHTML, render a webview
 *  otherwise, if a .js file, open a window with that js. 
 *
 *  This whole thing seems pretty low level. I'm sure a future version of the framework will handle this more elegantly
 * @author dmarks;
 */ 
Ti.API.info("Loading navigationControl.js");

//this is used to remap links clicked in webviews so they open in an external url.
Ti.App.addEventListener('openWebViewLink', function(e){
	Ti.API.info("opening url in safari " + e.href);
	Titanium.Platform.openURL(e.href);
});

/*
 * See tableViewNavigationEvent
 */
function openUrl(rowdata, parameters)
{
	//	two ways to open: .js or .html.  JS files are parsed directly in the window, whereas html files
	// need to be added to a webview and that is attached to the window
	
	//first is to check if we are opening a js file. Either have a data property named jsurl, or it reads 
	//the file format and opens it directly.
	if (rowdata.jsurl || 
	   (rowdata.url != null && rowdata.url.indexOf(".js") > 0))
	{
		if (rowdata.url.indexOf(".js") > 0) {
			rowdata.jsurl = rowdata.url;
		}
		Ti.API.info("url:" + rowdata.url);
		
		var win = null;
		if (Ti.Platform.name == "android") {
			win = Titanium.UI.createWindow({
				url:rowdata.jsurl,
				title:rowdata.title,
				backgroundColor:'#fff' 
			});	
		} else {
			win = Titanium.UI.createWindow({
				url:rowdata.jsurl,
				title:rowdata.title
				
				
			});
			//backgroundColor:'#fff',
				//barColor:'#111'
		}
		
		if (parameters != null) {
			win.PageParameters = parameters;
			Ti.API.info("adding page parameters: " + win.PageParameters);
		}
		
		Ti.API.info("opening js tab");
		Titanium.UI.currentTab.open(win,{animated:true});
		return;
	}
	
	Ti.API.info("opening web view");
	//this url must be an html file, so spawn a webview
	win = Titanium.UI.currentWindow;	
	var w = Ti.UI.createWindow();
	w.orientationModes = [
		Titanium.UI.PORTRAIT,
		Titanium.UI.LANDSCAPE_LEFT,
		Titanium.UI.LANDSCAPE_RIGHT
	];
	
	Ti.API.info("Creating web view");
	var webview = Ti.UI.createWebView();
	webview.name = rowdata.title;
	if (rowdata.url)
	{
		webview.url = rowdata.url;
	}
	else
	{
		webview.html = rowdata.innerHTML;
	}
	if (rowdata.scale)
	{
		// override the default pinch/zoom behavior of local (or remote) webpages
		// and either allow pinch/zoom (set to true) or not (set to false)
		webview.scalesPageToFit = true;
	}
	webview.addEventListener('load',function(e)
	{
		Ti.API.info("webview loaded: "+e.url);
		/*Ti.API.info("webview loaded: "+e.url);
		if (rowdata.evaljs)
		{
			alert("JS result was: "+webview.evalJS("window.my_global_variable")+". should be 10");
		}
		if (rowdata.evalhtml)
		{
			alert("HTML is: "+webview.html);
		}*/
	});
	if (rowdata.bgcolor)
	{
		webview.backgroundColor = rowdata.bgcolor;
	}
	if (rowdata.border)
	{
		webview.borderRadius=15;
		webview.borderWidth=5;
		webview.borderColor = '#1766b1';
	}
	w.add(webview);
	/*
	 //adding an event like below will still click events away from the webview. 
	 //one result of this is that scrolling will not work!!
	webview.addEventListener('click', function()
	{
		Ti.API.info('RECEIVED CLICK ON WEBVIEW');
	});*/
	win.tab.open(w);
}



/*
 * Can be used for a table view click event to display html
 * The data object needs to be properly formatted:
 * 
 * 
 * @example
// create table view data object
var data = [
	{title:'Native JS file', hasChild:true, url:'page1.js'},
	{title:'Native JS file 2', hasChild:true, jsurl:'page1.js'},
	{title:'External URL', hasChild:true, url:'http://www.google.com'},
	{title:'Local URL', hasChild:true, url:'local_webview.html'},
		{title:'Image URL', hasChild:true, url:'http://www.appcelerator.com/wp-content/uploads/2010/01/TABWAVE_graph1.png'},
	{title:'Inline HTML', hasChild:true, innerHTML:'<html><body>Hello from inline HTML.</body></html>'},
	{title:'Logging and Unicode', hasChild:true, url:'webview_logging.html'},
	{title:'Local Eval', hasChild:true, url:'local_webview.html', evaljs:true},
	{title:'Inline HTML w/ Trans Bg', hasChild:true, innerHTML:'<html><body><div style="color:white;">Hello from inline HTML. You should see white text and black background</div></body></html>', bgcolor:'black'},
	{title:'Inline HTML w/ Color Bg', hasChild:true, innerHTML:'<html><body><div style="color:red;">Hello from inline HTML. You should see red text and yellow background</div></body></html>', bgcolor:'yellow'},
];

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', tableViewNavigationEvent);

// add table view to the window
Titanium.UI.currentWindow.add(tableview);

 */
function tableViewNavigationEvent(e)
{
	Ti.API.info("Table click event");
	var rowdata = e.rowData;
	openUrl(rowdata);
} //end function tableViewNavigationEvent 



