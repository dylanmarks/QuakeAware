
function openEmail(text) 
{
	var emailDialog = Titanium.UI.createEmailDialog();
	emailDialog.subject = "Sending my location";
	emailDialog.setHtml(true);
	//emailDialog.toRecipients = ['foo@yahoo.com'];
	emailDialog.messageBody = '<br /><br /><br />' + text + '<br /><br /><em>This message has been sent using <a href="http://quakeaware.org">QuakeAware Mobile</a></em>';
	//could we grab a screenshot of the map and send that as well?
	//var f = Ti.Filesystem.getFile('cricket.wav');
	//emailDialog.addAttachment(f);
	emailDialog.open();
	
}


// add table view to the window
var win = Ti.UI.currentWindow;

var l = Titanium.UI.createLabel({
	top:10,
	left:10,
	width:300,
	height:'auto',
	color:'#777',
	font:{fontSize:13},
	text:"Click the button to send an email to a friend with a link to your location on Google Maps. An email will be prepared with your location pre-populated. Note that this will only work with GPS and an internet connection available."
});
win.add(l);

var sendBtn = Titanium.UI.createButton({
	top:100,
	height:40,
	width:200,
	title:'Email Location to Friend'
});

win.add(sendBtn);

sendBtn.addEventListener('click', function()
{
	
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	
	//
	//  SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES
	//  THIS VALUE IS IN METERS
	//
	Titanium.Geolocation.distanceFilter = 10;
	
	//
	// GET CURRENT POSITION - THIS FIRES ONCE
	//
	Titanium.Geolocation.getCurrentPosition(function(e){
		if (e.error) {
			alert('Cannot find your current location');
			return;
		}
		
		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;
		
		var url = "http://maps.google.com/maps?q=loc:" + latitude + "," + longitude;
		
		var text = '<a href="' + url + '">Open google maps with my location</a>.<br /><br />';
		text += "My latitude: " + latitude + "<br />";
		text += "My longitude:" + longitude+ "<br />";
		text += "My altitude:" + altitude+ "<br />";
		text += "Note that this information may not be completely accurrate, " + 
					"since it depends on the availability of a strong GPS reading from the phone.";
		
		//text += "<br />" + url;
		openEmail(text);
		
		/*    //
		 //CREATE MAP VIEW
		 //
		 var mapview = Titanium.Map.createView({
		 mapType: Titanium.Map.STANDARD_TYPE,
		 region: {latitude: latitude, longitude: longitude, latitudeDelta:0.01, longitudeDelta:0.01},
		 animate:true,
		 regionFit:true,
		 userLocation:true,
		 annotations:[annotation]
		 });
		 
		 win.add(mapview);
		 */
	});

});



