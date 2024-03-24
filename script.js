// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize HERE Map
    var platform = new H.service.Platform({
        'apikey': 'YOUR_API_KEY'
    });

    var defaultLayers = platform.createDefaultLayers();
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
            zoom: 12,
            center: { lat: 52.5, lng: 13.4 }
        }
    );

    var ui = H.ui.UI.createDefault(map, defaultLayers);
    var mapEvents = new H.mapevents.MapEvents(map);
    var behavior = new H.mapevents.Behavior(mapEvents);

    // Define landmarks for the tour
    var landmarks = [
        { name: 'Brandenburg Gate', lat: 52.5163, lng: 13.3777, description: 'Iconic landmark of Berlin.' },
        { name: 'Reichstag Building', lat: 52.5186, lng: 13.3767, description: 'Historic building housing the German parliament.' },
        { name: 'Berlin Wall Memorial', lat: 52.5294, lng: 13.3849, description: 'Memorial site commemorating the Berlin Wall.' }
    ];

    // Add markers for landmarks
    landmarks.forEach(function (landmark) {
        var marker = new H.map.Marker({ lat: landmark.lat, lng: landmark.lng });
        map.addObject(marker);

        marker.addEventListener('tap', function () {
            document.getElementById('tourDescription').textContent = landmark.description;
            map.setCenter({ lat: landmark.lat, lng: landmark.lng });
            map.setZoom(15);
        });
    });
});
