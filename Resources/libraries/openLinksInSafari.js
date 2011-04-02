//see navigationControl.js for the event that will catch what is fired here. 
function tiLink(e){
       
        e = e || window.event;
        var t = e.target || e.srcElement;
        while(t.parentNode && t.nodeName !== 'A'){
            t = t.parentNode;
        }
		if (t.className == "inAppLink")
		{
			Ti.API.info("in app link");
			
			
		}
		/* //failed attempt but almost there!
		 if (t.className == "popUp")
		{
	
			Ti.API.info("popup link: "+ t.href);
			
			var webview = Ti.UI.createWebView();
			var win = Titanium.UI.currentWindow;	

			webview.url = t.href;
			win.add(webview);
			win.show(webview,
			{
		        animated:true,
		        animationStyle:(Titanium.Platform.name == 'android')?Titanium.UI.Android.AnimationStyle.SLIDE_FROM_LEFT:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,
		        animationDuration:1000
		    }
			);
			currentTab.open(win);
			
			return false; 
		}*/
        if(t.href && t.className != "inAppLink" && t.className != "popUp"){         
		 	e.preventDefault();     
            Ti.App.fireEvent('openWebViewLink', {href:t.href});     //see navigationControl        
        }
		
        //return false;
}

setTimeout(function() {
	var tds = document.getElementsByTagName('a');
	 
	for(var i=0; i < tds.length; ++i){ 
	    tds[i].onclick = tiLink;
	
	}
}, 1000);
