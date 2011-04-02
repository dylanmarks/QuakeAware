Ti.API.info("Loading index.html"); 
Ti.include("navigationControl.js");


//this url must be an html file, so spawn a webview
	var win = Titanium.UI.currentWindow;	
	/*var w = Ti.UI.createWindow();
	w.orientationModes = [
		Titanium.UI.PORTRAIT,
		Titanium.UI.LANDSCAPE_LEFT,
		Titanium.UI.LANDSCAPE_RIGHT
	];*/
	Ti.API.info("Creating web view");
	var webview = Ti.UI.createWebView();
	//win.open();
	webview.url = "index.html";
	win.add(webview);
	/*if (Titanium.Platform.name == 'iOS')
	{
		win.show(webview,
		{
	        animated:true,
	        animationStyle:(Titanium.Platform.name == 'android')?Titanium.UI.Android.AnimationStyle.SLIDE_FROM_LEFT:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,
	        animationDuration:1000
	    }
		);
	}
	else*/ 
	
	//win.show(webview);
		
	

	
	Ti.App.addEventListener('openPage', function(url) {
   	
		 // put code here to open a new web view with the url
		var popup = Ti.UI.createWebView();
	
		popup.url = url;
		
		win.add(popup);
		win.show(popup,
		{
	        animated:true,
	        animationStyle:(Titanium.Platform.name == 'android')?Titanium.UI.Android.AnimationStyle.SLIDE_FROM_LEFT:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,
	        animationDuration:1000
	    }
		);
	});


	/*
 //possible approach to adding advertisements
	var ad = Ti.UI.iOS.createAdView({
 width: 'auto',
 height: 'auto'
})
	win.add(ad);
	*/
	//w.add(webview);
	//win.tab.open(w,{animated:true})
//	win.open(w);
	