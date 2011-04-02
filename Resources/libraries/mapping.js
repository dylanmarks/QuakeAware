Ti.API.info("mapping loaded");


var annotations = [];
var hospitalAnnotations = [];
var centerAnnotations = [];

//this will internally call createAnnotation to add a point on a map.  
//At the moment specifics types can be either 'medical', 'center'. If not one of these it defaults to a standard  
function addMapLocation(title, description, latitude, longitude, type)
{
	Ti.API.info("adding location " + title);

	var annArray = annotations;
	
	var pincolor = Titanium.Map.ANNOTATION_PURPLE;
	//can use a logic block to change pin color based on type param
	if (type == "medical") {
		annArray = hospitalAnnotations;
		pincolor = Titanium.Map.ANNOTATION_RED;
	}
	else if (type == "center") {
		annArray = centerAnnotations;
		pincolor = Titanium.Map.ANNOTATION_GREEN;
	}
			
	var a = Titanium.Map.createAnnotation({
		latitude:latitude,longitude:longitude,
		title:title,
		subtitle:description,
		pincolor: pincolor,
		animate:true,
		leftButton:'../images/atlanta.jpg',
		myid:annotations.length+1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
	});

	annArray.push(a);
}

function getAllLocations()
{
	
	return annotations.concat(hospitalAnnotations).concat(centerAnnotations);
}

function getCityView(cityName, subTitle, latitude, longitude, annotations)
{
		Ti.API.info("adding city view " + cityName);
		Ti.API.info("annotation count " + annotations.length);

	// CREATE MAP VIEW
	//
	var mapview = Titanium.Map.createView({
		mapType: Titanium.Map.STANDARD_TYPE,
		region: {latitude:latitude, longitude:longitude, latitudeDelta:0.05, longitudeDelta:0.05},
		animate:true,
	    regionFit:true,
		userLocation:true,
		annotations:annotations
	});
	return mapview;
	
}




