
//this holds functions for creating map annotations, and in the future logic for saving info to local database.
Ti.include("../../libraries/mapping.js"); 



var win = Titanium.UI.currentWindow;



addMapLocation("Richmond General Hospital","604-278-9711", 
49.170249, -123.147614, "medical");

var mapview = getCityView("Richmond", "BC", 49.169864, -123.136311,getAllLocations());

win.add(mapview);
/*

var fire1 = Titanium.Map.createAnnotation({
	latitude:49.163256,longitude:-123.147783,
	title:"No. 1 Hall (Headquarters)",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:12 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var fire2 = Titanium.Map.createAnnotation({
	latitude:49.133334,longitude:-123.158923,
	title:"No. 2 Hall (Steveston)",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:13 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var fire3 = Titanium.Map.createAnnotation({
	latitude:49.191905,longitude:-123.123666,
	title:"No. 3 Hall (Bridgeport)",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:14 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var fire4 = Titanium.Map.createAnnotation({
	latitude:49.189080,longitude:-123.143220,
	title:"No. 4 Hall (Sea Island)",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:15 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var fire5 = Titanium.Map.createAnnotation({
	latitude:49.175144,longitude:-122.973990,
	title:"No. 5 Hall (Hamilton)",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:16 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var fire6 = Titanium.Map.createAnnotation({
	latitude:49.143693,longitude:-123.114060,
	title:"No. 6 Hall (Shellmont)",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:17 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var fire7 = Titanium.Map.createAnnotation({
	latitude:49.171969,longitude:-123.069312,
	title:"No. 7 Hall (Crestwood)",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:18 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var millitary = Titanium.Map.createAnnotation({
	latitude:49.173556,longitude:-123.113822,
	title:"Richmond Military Armories",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:19 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var medical = Titanium.Map.createAnnotation({
	latitude:49.170249,longitude:-123.147614,
	title:"Emergency Medical Services",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:20 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var police = Titanium.Map.createAnnotation({
	latitude:49.163374,longitude:-123.140078,
	title:"Police Services",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:21 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

*/


//
// PRE-DEFINED REGIONS
//
/*
var regionSeaIsland = {latitude:49.191985,longitude:-123.144441,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionThompson = {latitude:49.162609,longitude:-123.167362,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionLang = {latitude:49.169008,longitude:-123.131963,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionCambie = {latitude:49.184542,longitude:-123.082431,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionWest = {latitude:49.146219,longitude:-123.181037,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionSteve = {latitude:49.125272,longitude:-123.179579,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionSouth = {latitude:49.140685,longitude:-123.126390,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionHam = {latitude:49.177379,longitude:-122.965835,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};

var regionFire1 = {latitude:49.163256,longitude:-123.147783,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionFire2 = {latitude:49.133334,longitude:-123.158923,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionFire3 = {latitude:49.191905,longitude:-123.123666,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionFire4 = {latitude:49.189080,longitude:-123.143220,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionFire5 = {latitude:49.175144,longitude:-122.973990,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionFire6 = {latitude:49.143693,longitude:-123.114060,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionFire7 = {latitude:49.171969,longitude:-123.069312,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};

var regionMilitary = {latitude:49.173556,longitude:-123.113822,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionMedical = {latitude:49.170249,longitude:-123.147614,animate:true,latitudeDelta:0.01, longitudeDelta:0.01};
var regionPolice = {latitude:49.163374,longitude:-123.140078,animate:true,latitudeDelta:0.01, longitudeDelta:0.01}; 




//
// CREATE ANNOTATIONS
//
var richmondView = Titanium.Map.createAnnotation({
	latitude:49.169864,
	longitude:-123.136311,
	title:"Richmond",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_RED,
	animate:true,
	leftButton: '../images/QuakeAware-Logo-small.png',
	myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
});




var richmond = Titanium.Map.createAnnotation({
	latitude:49.169864,
	longitude:-123.136311,
	title:"City of Richmond",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_GREEN,
	animate:true,
	rightButton: '../images/QuakeAware-Logo-small.png',
	myid:2 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
});
*/
/*
var bc = Titanium.Map.createAnnotation({
	latitude:53.999827,
	longitude:-125.003202,
	title:"British Columbia",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
//	leftButton:'../images/atlanta.jpg',
//	rightButton: Titanium.UI.iPhone.SystemButton.DISCLOSURE,
	myid:3 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var seaIsland = Titanium.Map.createAnnotation({
	latitude:49.162609,longitude:-123.144441,
	title:"Sea Island Community Centre",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:4 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});



var thompson = Titanium.Map.createAnnotation({
	latitude:49.162609,longitude:-123.167362,
	title:"Thompson Community Centre",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:5 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var lang = Titanium.Map.createAnnotation({
	latitude:49.169008,longitude:-123.131963,
	title:"Lang Centre",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:6 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var cambie = Titanium.Map.createAnnotation({
	latitude:49.184542,longitude:-123.082431,
	title:"Cambie Community Centre",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:7 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var west = Titanium.Map.createAnnotation({
	latitude:49.146219,longitude:-123.181037,
	title:"West Richmond Community Centre",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:8 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var steve = Titanium.Map.createAnnotation({
	latitude:49.125272,longitude:-123.179579,
	title:"Steveston Community Centre",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:9 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var south = Titanium.Map.createAnnotation({
	latitude:49.140685,longitude:-123.126390,
    title:"South Arm Community Centre",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:10 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});

var ham = Titanium.Map.createAnnotation({
	latitude:49.177379,longitude:-122.965835,
	title:"Hamilton Community Centre",
	subtitle:'BC',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'../images/atlanta.jpg',
	myid:11 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});
*/
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
*/


//
// TOOLBAR BUTTONS
//
/*
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