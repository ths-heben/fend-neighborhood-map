
/* ======= Model ======= */

var model = {
    locations: [
        {
            "id": 1,
            "title": "Die Scherbe",
            "location": {
                "lat": 47.074460,
                "lng": 15.432650
            },
            "address": "Stockergasse 2, 8020 Graz",
            "desc": "Lorem",
            "instagramId": 3011402912
        },
        {
            "id": 2,
            "title": "El Gaucho",
            "location": {
                "lat": 47.069986,
                "lng": 15.438830
            },
            "address": "Landhausgasse 1, 8010 Graz",
            "desc": "Lorem",
            "instagramId": 6350034773
        },
        {
            "id": 3,
            "title": "Landhauskeller",
            "location": {
                "lat": 47.069288,
                "lng": 15.439059
            },
            "address": "Schmiedgasse 9, 8010 Graz",
            "desc": "Lorem",
            "instagramId": 2271249618
        },
        {
            "id": 4,
            "title": "Caylend",
            "location": {
                "lat": 47.072287,
                "lng": 15.433964
            },
            "address": "Stigergasse 2, 8020 Graz",
            "desc": "Lorem",
        },
        {
            "id": 5,
            "title": "Aiola im Schloss",
            "location": {
                "lat": 47.112596,
                "lng": 15.405967
            },
            "address": "Andritzer Reichsstraße 144, 8046 Graz",
            "desc": "Lorem",
        },
        {
            "id": 6,
            "title": "Steak Boutique",
            "location": {
                "lat": 47.070702,
                "lng": 15.442389
            },
            "address": "Bindergasse 1, 8010 Graz",
            "desc": "Lorem",
            "instagramId": 8573004286
        },
        {
            "id": 7,
            "title": "Cafe Mitte",
            "location": {
                "lat": 47.072959,
                "lng": 15.440681
            },
            "address": "Freiheitspl. 2, 8010 Graz",
            "desc": "Lorem",
            "instagramId": 813949109
        },

    ],
    googleStyles: [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ebe3cd"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#523735"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f1e6"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#c9b2a6"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#dcd2be"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ae9e90"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#93817c"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#a5b076"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#447530"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f1e6"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fdfcf8"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f8c967"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#e9bc62"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e98d58"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#db8555"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#806b63"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8f7d77"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ebe3cd"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#b9d3c2"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#92998d"
                }
            ]
        }
    ]

};




function AppViewModel() {
    var self = this;
    // This array represents all markers
    self.markers = ko.observableArray([]);
    self.restaurants = ko.observableArray(model.locations);

    self.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 47.072941, lng: 15.438212},
        zoom: 14,
        styles: model.googleStyles,
        mapTypeControl: false
    });

    // Create InfoWindow Object
    var infowindow = new google.maps.InfoWindow();

    // Create marker function
    self.createMarker = function(location) {
        let marker = new google.maps.Marker({
            map: self.map,
            position: location.location,
            title: location.title,
            address: location.address,
            id: location.id,
            animation: google.maps.Animation.DROP,
        });
        location.instagram  = model.locations.instagramId;
        location.marker = marker;

        marker.addListener('click', function(){
            self.stopBounce();
            self.toggleBounce(this);
            infowindow.setContent('');
            self.openInfoField(this, infowindow);
        });

        return marker;
    };

    self.openInfoField = function(marker, infoWindow) {
        lat = marker.getPosition().lat();
        lng = marker.getPosition().lng();

        console.log(lat+' lng: '+ lng);

        infoWindow.open(map, marker);

        // Foursquare API, get location venue ID of nearest POI of coodrinates
        $.ajax({
            url: 'https://api.foursquare.com/v2/venues/search',
            type: 'GET',
            dataType: 'JSON',
            data: {
                ll: lat + ',' + lng,
                client_id: 'GFNNFDPCQJBRHTOIRGXSEZYY5UC2GJOMNE5AAUO4OZJ4OXUD',
                client_secret: 'B0Z2JGAFCSWRZMOFELLB23A0NCM1XK3ZX2W10ACWZFMDUOYJ',
                v: '20150609',
                radius: 200,
                sort: 'recent',
                limit: 1
            }
        }).done(function (data) {
            // With venue ID get an image of the location
            venueID = data.response.venues[0].id;
            console.log(venueID)
            // With Venue ID another call for images
            $.ajax({
                url: 'https://api.foursquare.com/v2/venues/' + venueID + '/photos',
                type: 'GET',
                dataType: 'JSON',
                data: {
                    client_id: 'GFNNFDPCQJBRHTOIRGXSEZYY5UC2GJOMNE5AAUO4OZJ4OXUD',
                    client_secret: 'B0Z2JGAFCSWRZMOFELLB23A0NCM1XK3ZX2W10ACWZFMDUOYJ',
                    v: '20190101',
                    limit: 5,
                }
            }).done(function(data) {
                $.each(data.response, function(i, item) {

                    imgObject = item.items[0]
                    imgSource = imgObject.prefix + '300x200' + imgObject.suffix;
                    infoWindow.setContent('<img src="'+imgSource+'" width="200"><h3 class="text-center mt-1">' + marker.title + '</h3>');
                })
            })

        }).fail(function (jqXHR, textStatus) {
            console.log('Ajax request failed! ' + textStatus);
        });
    };

    self.toggleBounce = function(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    };

    self.stopBounce = function() {
        self.markers().forEach(function(marker) {
            marker.setAnimation(null);
        });
    };

    model.locations.forEach(function (location) {
        let marker = self.createMarker(location);
        self.markers().push(marker);
    });

    // click list view item opens marker with info
    self.listClick = function(location) {
        google.maps.event.trigger(location.marker, 'click');

    };

    self.query = ko.observable('');

    self.search = ko.computed(function() {
        let query = self.query();
        if(!query) {
            // show all markers
            self.markers().forEach(function(marker) {
                marker.setVisible(true);
            });

            // show all restaurants
            return self.restaurants();
        } else {
            // show only filtered restaurants
            return ko.utils.arrayFilter(self.markers(), function(marker) {
                // Set stings to lower for exact match
                let restaurantTitle = marker.title.toLowerCase();
                query = self.query().toLowerCase();

                let matchedRestaurant = restaurantTitle.indexOf(query) >= 0;

                if (matchedRestaurant)
                    marker.setVisible(true); // show the matched restaurant
                else
                    marker.setVisible(false); // hide the the NOT matched restaurant

                return matchedRestaurant;
            });
        }
    });

    // This function allows to initialize the map,
    // It was neccesary to use a computed function to work with observables
    self.loadMap = ko.computed( function () {
    }, self);

    self.loadMap();
}

// Is called by Googlel API Call in index-File
function initMap(){
    ko.applyBindings( new AppViewModel() );
}

$('#open-icon').click(function() {
    $(this).hide();
    $('#close-icon').show();
    $('.menu').toggle();
});

$('#close-icon').click(function() {
    $(this).hide();
    $('#open-icon').show();
    $('.menu').toggle();
});