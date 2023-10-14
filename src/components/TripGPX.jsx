/* global L */

import pathgpx from '../assets/velo-baltica-eurovelo-10-13-r10.gpx'

function InitMap() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    new L.GPX(pathgpx, { async: true }).on('loaded', function(e) {
        map.fitBounds(e.target.getBounds());
    }).addTo(map);
}

document.addEventListener('DOMContentLoaded', InitMap);

export default InitMap()