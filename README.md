# carte-interactive-avec-OpenLayers

# 🗺️ Carte Interactive avec OpenLayers

Ce projet présente une carte interactive web utilisant **OpenLayers**, avec les fonctionnalités suivantes :

## ✅ Points traités

### 1. Intégration d’un fond de carte

- Utilisation de **OpenStreetMap** comme fond de carte via la bibliothèque OpenLayers.

### 2. Ajout d’un marqueur

- Un **marqueur** est placé à une position géographique donnée (latitude / longitude).
- Ce marqueur est interactif : un **popup** s’affiche lorsqu’on clique dessus, affichant des informations personnalisées.

### 3. Chargement d’un fichier GeoJSON

- Un fichier **GeoJSON** (`quartiers.geojson`) est chargé dynamiquement dans la carte.
- Il contient des **polygones** représentant des quartiers d’une ville.

### 4. Interaction avec les polygones

- Lors du **clic sur un polygone**, une **popup** s’affiche avec le **nom du quartier** (valeur stockée dans la propriété `nom` du GeoJSON).

---
