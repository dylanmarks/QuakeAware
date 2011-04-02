Ti.include("../../navigationControl.js");
//this holds functions for creating map annotations, and in the future logic for saving info to local database.
Ti.include("../../libraries/mapping.js"); 


var win = Titanium.UI.currentWindow;

Ti.API.info("loading map ");

// CREATE MAP VIEW
//
//title,  description, latitude, longitude, type
//type can be 'medical', 'center', or another value. 

addMapLocation("BC Children's Hospital", "4500 Oak Street, Vancouver, BC V6H 3N1 (604) 875-2000", 
49.24379, -123.12606, "medical");

addMapLocation("Mount Saint Joseph Hospital","3080 Prince Edward Street, Vancouver, BC (604) 874 1141",
			49.25768, -123.09600, "medical");

addMapLocation("BC Women's Hospital and Health Centre", "4500 Oak Street, Vancouver, BC V6H 3N1 (604) 875-2424", 
49.24498, -123.12599, "medical");

addMapLocation("St. Paul's Hospital", "1081 Burrard Street, Vancouver BC. (604) 682-2344", 
49.28042, -123.12812, "medical");

addMapLocation("Vancouver General Hospital","855 West 12th Avenue, Vancouver BC. (604) 875-4111", 
49.26102, -123.12151, "medical");

addMapLocation("UBC Hospital","2211 Wesbrook Mall, Vancouver, BC. 604-822-7121", 
49.26478, -123.24459, "medical");

var mapview = getCityView("Vancouver", "BC", 49.2643, -123.1211,getAllLocations());

win.add(mapview);
