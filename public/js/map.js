const map = L.map("map");

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Convert location name into latitude and longitude
fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(listingLocation)}`
)
    .then(response => response.json())
    .then(data => {

        if (data.length === 0) {
            console.log("Location not found");
            return;
        }

        const latitude = parseFloat(data[0].lat);
        const longitude = parseFloat(data[0].lon);

        // Move map to listing location
        map.setView([latitude, longitude], 13);

        // Add marker
        L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup(`<b>${listingLocation}</b>`)
            .openPopup();
    })
    .catch(error => {
        console.log("Error finding location:", error);
    });