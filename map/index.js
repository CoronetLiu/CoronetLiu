

window.onload = function() {
    var geo = new geoEach();
    var area = document.getElementById('address').value;
    area = area.split('\n');
    var sh;
    var i = 0;
    sh = window.setInterval(function() {
        if (i < area.length) {
            geo.toLatLng(area[i]);
        } else {
            window.clearInterval(sh);
        }
        i++;
    }, 500);
}

function geoEach() {
    geoEach.map = new google.maps.Map(document.getElementById("map_canvas"), {
        center : new google.maps.LatLng(35.86166, 104.19539699999996),
        zoom : 4,
        mapTypeId : google.maps.MapTypeId.HYBRID
    });
    geoEach.marker = new google.maps.Marker({
        map : geoEach.map,
        position : new google.maps.LatLng(35.86166, 104.19539699999996)
    });
    geoEach.geocoder = new google.maps.Geocoder();
}
geoEach.address = null;
geoEach.prototype = {
    toLatLng : function(address) {
        // 鎺ユ敹
        geoEach.address = address;
        geoEach.geocoder.geocode({
            'address' : geoEach.address
        }, function(results, status) {
            // create div
            var newElement = window.document.createElement('p');
            if (status == google.maps.GeocoderStatus.OK) {
                var location = results[0].geometry.location;
                geoEach.map.setCenter(location);
                geoEach.marker.setPosition(location);

                var latLng = location.toString().substr(1,
                        location.toString().indexOf(')') - 1);
                // insert innerHTML
                newElement.innerHTML = geoEach.address + "-" + latLng;
            } else {
                // insert error innerHTML
                newElement.innerHTML = geoEach.address + "error" + status;
            }
        });
    }

}