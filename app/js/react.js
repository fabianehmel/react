// VARIABLEN

    var menu_toggled = false;
    var bottom_menu_toggled = false;

    var news_toggled = false;
    var helfermelden_toggled = false;
    var angebotsuchen_toggled = false;
    var angeboteinstellen_toggled = false;
    var hilferuf_toggled = false;
    var profil_toggled = false;

    var green = "#69a74b";
    var orange = "#e69038";
    var grey = "#888";

    var current_position = [52.413685, 13.050546];




// INIT

    toggle_menu();




// MENU-BUTTON

    $( "#menu-button" ).click(function() {
        toggle_menu();
        //$( ".form" ).animate({ "top": 960 }); 

        if (angebotsuchen_toggled == true) {
            $( "#form-ichsuchehilfe-suchen").animate({ "top": 880 }); 
        }

        if (hilferuf_toggled == true) {
            $( "#form-ichsuchehilfe-erstellen").animate({ "top": 880 }); 
        }

        if (angeboteinstellen_toggled == true) {
            $( "#form-ichbietehilfe-einstellen").animate({ "top": 880 }); 
        }
/*
        if (angebotsuchen_toggled == true) {
            $( "#form-ichsuchehilfe-erstellen").animate({ "top": 880 }); 
        }

        if (angebotsuchen_toggled == true) {
            $( "#form-ichsuchehilfe-erstellen").animate({ "top": 880 }); 
        }
*/
    });




// FORM HEADS

    $( "#form-ichsuchehilfe-erstellen > .form-head").click(function() {
        var current_value = parseFloat($(this).parent().css('top'));
        if (current_value == 320) {
            $(this).parent().animate({ "top": 880 });
            $( "#map" ).animate({ "height": 960 });
            setTimeout(function(){ map.invalidateSize()}, 400);
        } else { $(this).parent().animate({ "top": 320 }); }
    }); 

    $( "#form-ichsuchehilfe-suchen > .form-head").click(function() {
        var current_value = parseFloat($(this).parent().css('top'));
        if (current_value == 400) {
            $(this).parent().animate({ "top": 880 });
            $( "#map" ).animate({ "height": 960 });
            setTimeout(function(){ map.invalidateSize()}, 400);
        } else { $(this).parent().animate({ "top": 400 }); }
    }); 

    $( "#form-ichbietehilfe-einstellen > .form-head").click(function() {
        var current_value = parseFloat($(this).parent().css('top'));
        if (current_value == 320) {
            $(this).parent().animate({ "top": 880 });
            $( "#map" ).animate({ "height": 960 });
            setTimeout(function(){ map.invalidateSize()}, 400);
        } else {
            $(this).parent().animate({ "top": 320 });
            //$( "#map" ).animate({ "height": 320 });
            //setTimeout(function(){ map.invalidateSize()}, 400);
        }
    }); 




// MENU ITEMS

    $( "#ichsuchehilfe-suchen" ).click(function() {

        if (angebotsuchen_toggled == false) {
            
            deselectMenuItem();
            $(this).css({ "background": grey });
            angebotsuchen_toggled = true;

            toggle_menu();
            $( "#form-ichsuchehilfe-suchen" ).animate({ "top": 400 });
            bottom_menu_toggled = true;
            $( "#menu-button" ).css({ "borderLeft": "8px solid "+green });
            map.addLayer(offers);
            map.removeLayer(requests);
                       
        } else { deselectMenuItem(); }
    });

    $( "#ichsuchehilfe-erstellen" ).click(function() {

        if (hilferuf_toggled == false) {
            
            deselectMenuItem();
            $(this).css({ "background": grey });
            hilferuf_toggled = true;

            toggle_menu();
            $( "#form-ichsuchehilfe-erstellen" ).animate({ "top": 320 });
            bottom_menu_toggled = true;

        } else { deselectMenuItem(); }
    });

    $( "#ichbietehilfe-melden" ).click(function() {
        
        if (helfermelden_toggled == false) {
            
            deselectMenuItem();
            $(this).css({ "background": grey });
            helfermelden_toggled = true;

            toggle_menu();

            $( "#menu-button" ).css({ "borderLeft": "8px solid "+orange });
            map.addLayer(requests);
            map.removeLayer(offers);

        } else { deselectMenuItem(); }
    });

    $( "#ichbietehilfe-einstellen" ).click(function() {

        if (angeboteinstellen_toggled == false) {

            deselectMenuItem();
            $(this).css({ "background": grey });
            angeboteinstellen_toggled = true;

            toggle_menu();
            
            $( "#form-ichbietehilfe-einstellen" ).animate({ "top": 320 });
            bottom_menu_toggled = true;

            $( "#map" ).animate({ "height": 320 });
            setTimeout(function(){ map.invalidateSize()}, 400);
            
            map.setView(current_position, 17); 

            startposition.openPopup();           
        
        } else { deselectMenuItem(); }
    });

    $( "#form-ichbietehilfe-einstellen-foot" ).click(function() {
        newOffer = L.marker(current_position, {icon: offerHighIcon});
        newOffer.addTo(map);
        newOffer.bindPopup("Dein Angebot").openPopup();
        deselectMenuItem();
        $( ".form" ).animate({ "top": 960 });
    });

    $( "#news" ).click(function() {

        $("#news").attr("src","screens/wording/news.png");

        if (news_toggled == false) {

            deselectMenuItem();
            $(this).css({ "background": grey });
            news_toggled = true;
            
            $( "#news-list" ).animate({ "top": "0px" });
            toggle_menu();

        } else { deselectMenuItem(); }

    });


    $( "#profil" ).click(function() {

        if (profil_toggled == false) {

            deselectMenuItem();
            $(this).css({ "background": grey });
            profil_toggled = true;

        } else { deselectMenuItem(); }

    });




    $( "#ui" ).click(function() {
        if (menu_toggled == true) {
            toggle_menu();
        }        
    });

    $( "#arrow_right1" ).click(function() {
        $( "#news-detail" ).animate({ "left": "74px" });
        $( ".news-body" ).animate({ "left": "-566px" });
        $( ".arrow_right" ).animate({ "opacity": "0" });
        $( ".arrow_left" ).animate({ "opacity": "1" });
        $( ".arrow_left" ).css({ "visibility": "visible" });
        $( ".arrow_left" ).css({ "display": "block" });
    });

    $( ".arrow_left" ).click(function() {
        $( "#news-detail" ).animate({ "left": "640px" });
        $( ".news-body" ).animate({ "left": "0px" });
        $( ".arrow_right" ).animate({ "opacity": "1" });
        $( ".arrow_left" ).animate({ "opacity": "0" });
        $( ".arrow_left" ).css({ "visibility": "hidden" });
        $( ".arrow_left" ).css({ "display": "hidden" });
    });


    $( "#detail-museum" ).click(function() {
        $( "#detail-museum" ).css({"display": "none"});
        $( "#detail-museum" ).animate({"opacity": "0"});
        $( "#menu-button" ).css({"display": "block"});        
    });

    $( "#detail-tierheim" ).click(function() {
        $( "#detail-tierheim" ).css({"display": "none"});
        $( "#detail-tierheim" ).animate({"opacity": "0"});
        $( "#menu-button" ).css({"display": "block"});        
    });


// HELPER FUNCTIONS

    function toggle_menu() {
        if (menu_toggled == false) {
            $( "#map" ).css({ "height": 960 });
            setTimeout(function(){ map.invalidateSize()}, 400);  
            $( "#menu" ).animate({ "left": "0px" }); 
            $( "#menu-button" ).animate({ "left": '460px' });
            menu_toggled = true;         
        } else {
            $( "#menu" ).animate({ "left": "-460px" }); 
            $( "#menu-button" ).animate({ "left": '0px' });
            menu_toggled = false;     
        }
    }

    function deselectMenuItem() {
        $( "#menu-button" ).css({ "borderLeft": "none" });

        map.removeLayer(requests);
        map.removeLayer(offers);
        map.addLayer(requests);
        map.addLayer(offers);

        $( "#menu" ).find( "img" ).css({ "background": "none" });

        $( "#map" ).css({ "height": 960 });
        setTimeout(function(){ map.invalidateSize()}, 400);

        $( "#news-list" ).css({ "top": "960px" });
        $( ".form" ).animate({ "top": 960 });
    
            
        helfermelden_toggled = false;
        angebotsuchen_toggled = false;
        angeboteinstellen_toggled = false;
        hilferuf_toggled = false;
        news_toggled = false;
        profil_toggled = false;
    }




// MAP

    var map = L.map('map');

    var offerHighIcon = L.icon({
        iconUrl: 'screens/marker/offer_high.png',
        iconSize:     [30, 40], // size of the icon
        iconAnchor:   [15, 40], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor
    });

   var offerLowIcon = L.icon({
        iconUrl: 'screens/marker/offer_low.png',
        iconSize:     [30, 40], // size of the icon
        iconAnchor:   [15, 40], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor
    });

    var requestHighIcon = L.icon({
        iconUrl: 'screens/marker/request_high.png',
        iconSize:     [30, 40], // size of the icon
        iconAnchor:   [15, 40], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor
    });

    var requestLowIcon = L.icon({
        iconUrl: 'screens/marker/request_low.png',
        iconSize:     [30, 40], // size of the icon
        iconAnchor:   [15, 40], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor
    });

    var museumPopupContent = document.createElement('div');
    museumPopupContent.className = "react-popup-content";
    museumPopupContent.innerHTML = "<img src='screens/popup/museum.png'>";
    museumPopupContent.onclick = function() {
        $( "#detail-museum" ).css({"display": "block"});
        $( "#detail-museum" ).animate({"opacity": "1"});
        $( "#menu-button" ).css({"display": "none"});
    };

    var museumPopup = L.popup( {className: 'react-popup'} )
        .setContent(museumPopupContent);

    var tierheimPopupContent = document.createElement('div');
    tierheimPopupContent.className = "react-popup-content";
    tierheimPopupContent.innerHTML = "<img src='screens/popup/tierheim.png'>";
    tierheimPopupContent.onclick = function() {
        $( "#detail-tierheim" ).css({"display": "block"});
        $( "#detail-tierheim" ).animate({"opacity": "1"});
        $( "#menu-button" ).css({"display": "none"});    };

    var tierheimPopup = L.popup( {className: 'react-popup tierheim-popup'} )
        .setContent(tierheimPopupContent);

    var offer1 = L.marker([52.413744, 13.045997], {icon: offerLowIcon}),
        offer2 = L.marker([52.411205, 13.051286], {icon: offerHighIcon}),
        offer3 = L.marker([52.410682, 13.048271], {icon: offerLowIcon}),
        offer4 = L.marker([52.412403, 13.049494], {icon: offerHighIcon}),
        offer5 = L.marker([52.415734, 13.053174], {icon: offerLowIcon});

/*    var offer1 = L.circleMarker([52.413744, 13.045997], { stroke: false, fillColor: "#e69038", fillOpacity: 0.8}),
        offer2 = L.circleMarker([52.411205, 13.051286], { stroke: false, fillColor: "#e69038", fillOpacity: 0.8}),
        offer3 = L.circleMarker([52.410682, 13.048271], { stroke: false, fillColor: "#e69038", fillOpacity: 0.8}),
        offer4 = L.circleMarker([52.412403, 13.049494], { stroke: false, fillColor: "#e69038", fillOpacity: 0.8}),
        offer5 = L.circleMarker([52.415734, 13.053174], { stroke: false, fillColor: "#e69038", fillOpacity: 0.8}); */
    var offers = L.layerGroup([offer1, offer2, offer3, offer4, offer5]);
    offers.addTo(map);

    var request1 = L.marker([52.415145, 13.049559], {icon: requestLowIcon}),
        request2 = L.marker([52.413155, 13.053217], {icon: requestHighIcon}).bindPopup(museumPopup),
        request3 = L.marker([52.412023, 13.051576], {icon: requestLowIcon}),
        request4 = L.marker([52.413280, 13.048700], {icon: requestHighIcon}).bindPopup(tierheimPopup),
        request5 = L.marker([52.415570, 13.051286], {icon: requestHighIcon});
//    var requests = L.layerGroup([request1, request2, request3, request4, request5]);
    var requests = L.layerGroup([request2, request4]);
    requests.addTo(map);


    L.tileLayer('https://{s}.tiles.mapbox.com/v3/examples.map-i86l3621/{z}/{x}/{y}.png', {
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

    map.setView(current_position, 17);
    var startposition = L.marker(current_position).addTo(map).bindPopup("Du bist hier!").openPopup();

    function onMapClick(e) {
        if (menu_toggled == true) {
            toggle_menu();
        }
        //$( ".form" ).animate({ "top": 960 });
    }

    map.on('click', onMapClick);    