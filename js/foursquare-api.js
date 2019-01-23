'use strict';

// populate info window function
.openInfoField function(marker, infoWindow) {
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
            client_id: 'XVBF0UQIGO2VDNEANNX4Y3R1S5HF2X5KXCFYDJBYYS5GDDOL',
            client_secret: 'GJWHO2KKTH3W2KBMSVJZMPUB5BIE1BYG1QKROKNPPMHV44GK',
            v: '20150609',
            radius: 200,
            sort: 'recent',
            limit: 1
        }
    }).done(function (data) {
        // With venue ID get an image of the location
        venueID = data.response.venues[0].id;
        console.log('Venue ID: ' + venueID);
        // With Venue ID another call for images
        $.ajax({
            url: 'https://api.foursquare.com/v2/venues/' + venueID + '/photos',
            type: 'GET',
            dataType: 'JSON',
            data: {
                client_id: 'XVBF0UQIGO2VDNEANNX4Y3R1S5HF2X5KXCFYDJBYYS5GDDOL',
                client_secret: 'GJWHO2KKTH3W2KBMSVJZMPUB5BIE1BYG1QKROKNPPMHV44GK',
                v: '20190101',
                limit: 5,
            }
        }).done(function(data) {
            $.each(data.response, function(i, item) {

                imgObject = item.items[0]
                imgSource = imgObject.prefix + '300x200' + imgObject.suffix;
                console.log('Image URL: ' + imgSource);
                infoWindow.setContent('<img src="'+imgSource+'" width="200"><h3 class="text-center mt-1">' + marker.title + '</h3>');
            })
        })

    }).fail(function (jqXHR, textStatus) {
        console.log('Ajax request failed! ' + textStatus);
    });


};


