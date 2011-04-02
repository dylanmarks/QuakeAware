Ti.include("../../navigationControl.js"); 
//this holds functions for creating map annotations, and in the future logic for saving info to local database.
Ti.include("../../libraries/mapping.js");


var win = Titanium.UI.currentWindow;

Ti.API.info("loading map ");

// CREATE MAP VIEW
//
//title,  description, latitude, longitude, type
//type can be 'medical', 'center', or another value. 

addMapLocation("Burnaby General Hospital", "3935 kincaid street Burnaby, B.C. V5G 2X6 (604) 434-4211", 
49.24891, -123.01555, "medical");

var mapview = getCityView("Vancouver", "BC", 49.24891, -123.01555,getAllLocations());

win.add(mapview);


/*
Titanium.Geolocation.getCurrentPosition(function(pos) 
{
//   var coords = pos.coords;
//   var clatitude = coords.latitude;
//   var clongitude = coords.longitude;
   
//   mapview = Titanium.Map.createView({
//	mapType: Titanium.Map.STANDARD_TYPE,
//	region: {latitude:clatitude, longitude:clongitude, latitudeDelta:0.05, longitudeDelta:0.05},
//	animate:true,
//	regionFit:true,
//	userLocation:true,
//	annotations:[seaIsland, thompson, lang, cambie, west, steve, south, ham]
//   });
   var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region: {latitude:49.169864, longitude:-123.136311, latitudeDelta:0.05, longitudeDelta:0.05},
	animate:true,
	regionFit:true,
	userLocation:true,
	annotations:[seaIsland, thompson, lang, cambie, west, steve, south, ham]
    });
win.add(mapview);

});



//
// TOOLBAR BUTTONS
//

// button to change to ATL
var atl = Titanium.UI.createButton({
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title:'Reception Center'
});
atl.addEventListener('click', function()
{
//	Titanium.Geolocation.getCurrentPosition(function(pos) 
//    {
//        var coords = pos.coords;
//        var clatitude = coords.latitude;
//        var clongitude = coords.longitude;
   
//        mapview = Titanium.Map.createView({
//            mapType: Titanium.Map.STANDARD_TYPE,
//            region: {latitude:clatitude, longitude:clongitude, latitudeDelta:0.05, longitudeDelta:0.05},
//            animate:true,
//            regionFit:true,
//            userLocation:true,
//            annotations:[seaIsland, thompson, lang, cambie, west, steve, south, ham]
//        });
//        win.add(mapview);
//    });
    var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region: {latitude:49.169864, longitude:-123.136311, latitudeDelta:0.05, longitudeDelta:0.05},
	animate:true,
	regionFit:true,
	userLocation:true,
	annotations:[seaIsland, thompson, lang, cambie, west, steve, south, ham]
    });
win.add(mapview);
});

// button to change to SV
var sv = Titanium.UI.createButton({
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title:'Stations'
});
sv.addEventListener('click', function()
{
//	Titanium.Geolocation.getCurrentPosition(function(pos) 
//    {
//        var coords = pos.coords;
//        var clatitude = coords.latitude;
//        var clongitude = coords.longitude;
//   
//        mapview = Titanium.Map.createView({
//            mapType: Titanium.Map.STANDARD_TYPE,
//            region: {latitude:clatitude, longitude:clongitude, latitudeDelta:0.05, longitudeDelta:0.05},
//            animate:true,
//            regionFit:true,
//            userLocation:true,
//            annotations:[fire1, fire2, fire3, fire4, fire5, fire6, fire7, millitary, medical, police]
//        });
//        win.add(mapview);
//    });
    var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region: {latitude:49.169864, longitude:-123.136311, latitudeDelta:0.05, longitudeDelta:0.05},
	animate:true,
	regionFit:true,
	userLocation:true,
	annotations:[fire1, fire2, fire3, fire4, fire5, fire6, fire7, millitary, medical, police]
    });
win.add(mapview);

});

// button to change to Current Position
var currPos = Titanium.UI.createButton({
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title:'Current Position'
});
currPos.addEventListener('click', function()
{
	Titanium.Geolocation.getCurrentPosition(function(pos) 
    {
        var coords = pos.coords;
        var clatitude = coords.latitude;
        var clongitude = coords.longitude;
   
        mapview = Titanium.Map.createView({
            mapType: Titanium.Map.STANDARD_TYPE,
            region: {latitude:clatitude, longitude:clongitude, latitudeDelta:0.05, longitudeDelta:0.05},
            animate:true,
            regionFit:true,
            userLocation:true,
            annotations:[seaIsland, thompson, lang, cambie, west, steve, south, ham, fire1, fire2, fire3, fire4, fire5, fire6, fire7, millitary, medical, police]
        });
        win.add(mapview);
    });
});

var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

win.setToolbar([flexSpace,atl,flexSpace,sv,flexSpace,currPos,flexSpace]);

//
// EVENT LISTENERS
//


// region chnage event listener
mapview.addEventListener('regionChanged',function(evt)
{
	Titanium.API.info('maps region has updated to '+evt.longitude+','+evt.latitude);
});

var annotationAdded = false;

// map view click event listener
mapview.addEventListener('click',function(evt)
{
	// map event properties 
	var annotation = evt.annotation;
	var title = evt.title;
	var clickSource = evt.clicksource;
	
	// custom annotation attribute
	var myid = evt.annotation.myid;
	
	Titanium.API.info('MAPVIEW EVENT - you clicked on '+title+' with click source = '+clickSource);

	// use custom event attribute to determine if atlanta annotation was clicked
	if (myid == 3 && evt.clicksource == 'rightButton')
	{
		//  change the annotation on the fly
		evt.annotation.rightView = Titanium.UI.createView({width:20,height:20,backgroundColor:'red'});
		evt.annotation.leftView = Titanium.UI.createView({width:20,height:20,backgroundColor:'#336699'});
		evt.annotation.title = "Atlanta?";
		evt.annotation.pincolor = Titanium.Map.ANNOTATION_GREEN;
		evt.annotation.subtitle = 'Appcelerator used to be near here';
		evt.annotation.leftButton = 'images/appcelerator_small.png';
		
	}
	if (myid == 2 && annotationAdded==false)
	{
		Ti.API.info('adding richmond view annotation');
		mapview.addAnnotation(richmondView);
		annotationAdded=true;
	}
	else
	{
		Ti.API.info('removing richmond view annotation');
		mapview.removeAnnotation(richmondView);
		annotationAdded=false;
	}
});

// annotation click event listener (same as above except only fires for a given annotation)
richmond.addEventListener('click', function(evt)
{
	// get event properties
	var annotation = evt.source;
	var clicksource = evt.clicksource;
	
	Titanium.API.info('ANNOTATION EVENT - you clicked on '+annotation.title+' with click source = '+clicksource);
	
});
*/