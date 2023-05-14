(function(){
    'use strict';

    AOS.init();

    var map = L.map('map').setView([38.544087, -121.743363],17);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);  

    var centralpark = L.marker([38.5453, -121.7445]).addTo(map);

    centralpark.bindPopup("<b>Central Park</b><br>Community park and home of the Farmer's Market<br><a href='https://goo.gl/maps/g8gvunNGbCxnTUy39?coh=178571&entry=tt' target='blank'>Directions</a>").openPopup();

    var bikemuseum = L.marker([38.5443, -121.7443]).addTo(map);

    bikemuseum.bindPopup("<b>US Bike Hall of Fame</b><br>Exhibiting bikes throughout American history<br><a href='https://goo.gl/maps/38p3FEGCstsA7wxy9?coh=178571&entry=tt' target='blank'>Directions</a>").openPopup();

    var arb = L.marker([38.5402, -121.7417]).addTo(map);

    arb.bindPopup("<b>Arboretum</b><br>Gardens, ducks, lakes, and horses<br><a href='https://goo.gl/maps/yL7SZVEJRD7k1P3h9?coh=178571&entry=tt' target='blank'>Directions</a> ").openPopup();

    var gstreet = L.marker([38.5450, -121.7389]).addTo(map);

    gstreet.bindPopup("<b>Woodstocks Pizza</b><br>Local pizza place and Davis essential<br><a href='https://goo.gl/maps/RLWVcUNu1BU5UhTZ9?coh=178571&entry=tt' target='blank'>Directions</a>").openPopup();

    var seal = L.marker([38.5432, -121.7406]).addTo(map);

    seal.bindPopup("<b>Davis Centennial Seal</b><br>Depicting Davis History and Community<br><a href='https://goo.gl/maps/7m99YmiwgXcV4zDV6?coh=178571&entry=tt' target='blank'>Directions</a>").openPopup();

    var egghead = L.marker([38.5419, -121.7478]).addTo(map);

    egghead.bindPopup("<b>Stargazer Egghead</b><br>One of several egghead sculptures at UC Davis<br><a href='https://goo.gl/maps/NxAWsmF3cT3i7pj46?coh=178571&entry=tt' target='blank'>Directions</a>" ).openPopup();
}());