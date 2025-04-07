// Coordonnées initiales du marqueur (longitude, latitude)
let markerCoordinates = [-7.62, 33.57]; // Exemple : Casablanca

// Convertir les coordonnées en projection EPSG:3857
let markerPosition = ol.proj.fromLonLat(markerCoordinates);

// Création de la carte OpenLayers
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // Fond de carte OpenStreetMap
        })
    ],
    view: new ol.View({
        center: markerPosition, // Centrer la carte sur la position initiale du marqueur
        zoom: 14 // Niveau de zoom sur la position du marqueur
    })
});

// Création du marqueur
const marker = new ol.Feature({
    geometry: new ol.geom.Point(markerPosition)
});

// Style du marqueur (icône de localisation rouge)
marker.setStyle(new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: 'https://th.bing.com/th/id/OIP.k4PywqbiR4xR0BUnKB1UEAHaHa?rs=1&pid=ImgDetMain', // Icône de localisation rouge
        scale: 0.1
    })
}));

// Ajouter le marqueur à une couche vectorielle
const vectorSource = new ol.source.Vector({
    features: [marker]
});

const vectorLayer = new ol.layer.Vector({
    source: vectorSource
});

map.addLayer(vectorLayer);

// Ajout du popup
const popup = document.getElementById('popup');

// Affichage du popup lors du clic sur la carte
map.on('click', function (event) {
    const coordinate = event.coordinate; // Récupérer les coordonnées du clic sur la carte
    marker.setGeometry(new ol.geom.Point(coordinate)); // Déplacer le marqueur à la nouvelle position
    markerCoordinates = ol.proj.toLonLat(coordinate); // Mettre à jour les coordonnées du marqueur

    // Afficher le popup avec les informations de la nouvelle position
    const pixel = map.getPixelFromCoordinate(coordinate);
    popup.style.display = 'block';
    popup.style.left = (pixel[0] + 10) + 'px'; // Positionner le popup à droite du clic
    popup.style.top = (pixel[1] - 10) + 'px'; // Positionner le popup au-dessus du clic
    popup.innerHTML = `<strong>📍 Marqueur déplacé</strong><br>Longitude: ${markerCoordinates[0]}<br>Latitude: ${markerCoordinates[1]}`;
});

// Fermer le popup en cliquant ailleurs
map.on('pointermove', function (event) {
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    }
});

