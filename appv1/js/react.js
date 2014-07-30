    var menu_toggled = false;
    var bottom_menu_toggled = false;

    var news_extended = false;
    var ichsuchehilfe_extended = false;
    var ichbietehilfe_extended = false;
    var profil_extended = false;

    init();

    function init() {
        toggle_menu();
        $("#news").next("ul").hide();
        $("#ichsuchehilfe").next("ul").hide();
        $("#ichbietehilfe").next("ul").hide();
        $("#profil").next("ul").hide();
    }

    $( "#menu-button" ).click(function() {
        toggle_menu();
        $( ".form" ).animate({ "top": 960 }); 
    });


    $( "#form-ichsuchehilfe-erstellen > .form-head").click(function() {
        var current_value = parseFloat($(this).parent().css('top'));
        if (current_value == 200) { $(this).parent().animate({ "top": 880 }); }
        else { $(this).parent().animate({ "top": 200 }); }
    }); 


    $( "#form-ichsuchehilfe-suchen > .form-head").click(function() {
        var current_value = parseFloat($(this).parent().css('top'));
        if (current_value == 400) { $(this).parent().animate({ "top": 880 }); }
        else { $(this).parent().animate({ "top": 400 }); }
    }); 


    $( "#form-ichbietehilfe-einstellen > .form-head").click(function() {
        var current_value = parseFloat($(this).parent().css('top'));
        if (current_value == 200) { $(this).parent().animate({ "top": 880 }); }
        else { $(this).parent().animate({ "top": 200 }); }
    }); 


    $( "#ichsuchehilfe" ).click(function() {
        if (ichsuchehilfe_extended == false) {
            $( "#news" ).animate({ "opacity": 0.2 });
            $( "#ichsuchehilfe" ).animate({ "opacity": 1 });
            $( "#ichbietehilfe" ).animate({ "opacity": 0.2 });
            $( "#profil" ).animate({ "opacity": 0.2 });
            ichsuchehilfe_extended = true;
            map.addLayer(requests);
            map.removeLayer(offers);
            $( "#menu" ).css({ "borderRight": "6px solid #69a74b" });
        } else {
            $( "#news" ).animate({ "opacity": 1 });
            $( "#ichsuchehilfe" ).animate({ "opacity": 1 });
            $( "#ichbietehilfe" ).animate({ "opacity": 1 });
            $( "#profil" ).animate({ "opacity": 1 });   
            ichsuchehilfe_extended = false;
            map.addLayer(offers);
            $( "#menu" ).css({ "borderRight": "none" });
        }
        $( "#ichbietehilfe" ).next("ul").hide();
        ichbietehilfe_extended = false; 
        $(this).next("ul").slideToggle(300);
        return false;
    });
  

    $( "#ichsuchehilfe-suchen" ).click(function() {
        toggle_menu();
        $( "#form-ichsuchehilfe-suchen" ).animate({ "top": 400 });
        bottom_menu_toggled = true;
    });


    $( "#ichsuchehilfe-erstellen" ).click(function() {
        toggle_menu();
        $( "#form-ichsuchehilfe-erstellen" ).animate({ "top": 200 });
        bottom_menu_toggled = true;
    });


    $( "#ichbietehilfe-einstellen" ).click(function() {
        toggle_menu();
        $( "#form-ichbietehilfe-einstellen" ).animate({ "top": 200 });
        bottom_menu_toggled = true;
        newOffer = L.circleMarker([52.415884, 13.050331], { stroke: false, fillColor: "#69a74b", fillOpacity: 0.8});
        newOffer.addTo(map);
    });


    $( "#news" ).click(function() {
        $(this).next("ul").slideToggle(300);
        return false;
    });


    $( "#ichbietehilfe" ).click(function() {
        if (ichbietehilfe_extended == false) {
            $( "#news" ).animate({ "opacity": 0.2 });
            $( "#ichsuchehilfe" ).animate({ "opacity": 0.2 });
            $( "#ichbietehilfe" ).animate({ "opacity": 1 });
            $( "#profil" ).animate({ "opacity": 0.2 });
            ichbietehilfe_extended = true;
            map.addLayer(offers);
            map.removeLayer(requests);
            $( "#menu" ).css({ "borderRight": "6px solid #e69038" });
        } else {
            $( "#news" ).animate({ "opacity": 1 });
            $( "#ichsuchehilfe" ).animate({ "opacity": 1 });
            $( "#ichbietehilfe" ).animate({ "opacity": 1 });
            $( "#profil" ).animate({ "opacity": 1 });   
            ichbietehilfe_extended = false;
            map.addLayer(requests);      
            $( "#menu" ).css({ "borderRight": "none" });
        }
        $( "#ichsuchehilfe" ).next("ul").hide();
        ichsuchehilfe_extended = false;
        $(this).next("ul").slideToggle(300);
        return false;
    });


    $( "#profil" ).click(function() {
        $(this).next("ul").slideToggle(300);
        return false;
    });


    function toggle_menu() {
        if (menu_toggled == false) {
            $( "#menu" ).animate({ "left": "0px" }); 
            $( "#menu-button" ).animate({ "left": '440px' });  
            menu_toggled = true;         
        } else {
            $( "#menu" ).animate({ "left": "-440px" }); 
            $( "#menu-button" ).animate({ "left": '0px' });        
            menu_toggled = false;          
        }
    }


    function toggle_opacity(element, new_opacity) {
        var current_opacity = $( element ).css('opacity');
        current_opacity = parseFloat(current_opacity);
        current_opacity = current_opacity.toFixed(1);
        
        if (current_opacity == 1) {
            $( element ).animate({ "opacity": new_opacity });
        } else {
            if (current_opacity != new_opacity) {
                $( element ).animate({ "opacity": 1 });
            }
        }
        

    }




// #################
// MAP

var map = L.map('map');


var offer1 = L.circleMarker([52.413744, 13.045997], { stroke: false, fillColor: "#e69038", fillOpacity: 0.8}),
    offer2 = L.circleMarker([52.411205, 13.051286], { stroke: false, fillColor: "#e69038", fillOpacity: 0.8}),
    offer3 = L.circleMarker([52.410682, 13.048271], { stroke: false, fillColor: "#e69038", fillOpacity: 0.8}),
    offer4 = L.circleMarker([52.412403, 13.049494], { stroke: false, fillColor: "#e69038", fillOpacity: 0.8}),
    offer5 = L.circleMarker([52.415734, 13.053174], { stroke: false, fillColor: "#e69038", fillOpacity: 0.8});
var offers = L.layerGroup([offer1, offer2, offer3, offer4, offer5]);
offers.addTo(map);

var request1 = L.circleMarker([52.415145, 13.049559], { stroke: false, fillColor: "#69a74b", fillOpacity: 0.8}),
    request2 = L.circleMarker([52.413155, 13.053217], { stroke: false, fillColor: "#69a74b", fillOpacity: 0.8}),
    request3 = L.circleMarker([52.412023, 13.051576], { stroke: false, fillColor: "#69a74b", fillOpacity: 0.8}),
    request4 = L.circleMarker([52.413280, 13.048700], { stroke: false, fillColor: "#69a74b", fillOpacity: 0.8}),
    request5 = L.circleMarker([52.415570, 13.051286], { stroke: false, fillColor: "#69a74b", fillOpacity: 0.8});
var requests = L.layerGroup([request1, request2, request3, request4, request5]);
requests.addTo(map);


L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

/*map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);*/

map.setView([52.413685, 13.050546], 16);
L.marker([52.413685, 13.050546]).addTo(map).bindPopup("Du bist hier!").openPopup();

function onMapClick(e) {
    if (menu_toggled == true) {
        toggle_menu();
    }
    $( ".form" ).animate({ "top": 960 });
}

map.on('click', onMapClick);    