    //!setView is,3
    //! latitude , longitude and initial zoom level
    var map = L.map('map').setView([0, 0], 1);
    //!Add the layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(map);

    //!Change the icon
    var myIcon = L.icon({
        iconUrl: './assets/iss.png',
        iconSize: [50, 50],

    });
    var pathIcon = L.icon({
        iconUrl: 'https://www.svgrepo.com/show/344736/dot.svg',
        iconSize: [45, 45],

    });
    //!latitude , longitude 
    // L.marker([0, 0]).addTo(map)
    // L.marker([28, 77]).addTo(map)
    let marker = L.marker([0, 0], { icon: myIcon }).addTo(map)

    const fetchSpaceStationDetails = async() => {
        const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
        const data = await res.json()
        console.log(data)
        document.createElement('object').innerHTML = data
        const { latitude, longitude } = data
        const long = data.longitude
        const lati = data.latitude
        const velo = data.velocity
        const altiu = data.altitude

        // console.log(latitude, longitude)
        marker.setLatLng([latitude, longitude])
            //!Add the path icon
        L.marker([latitude, longitude], { icon: pathIcon }).addTo(map)
        document.getElementById('long').innerHTML = long.toFixed(4)
        document.getElementById('lat').innerHTML = lati.toFixed(4)
        document.getElementById('vel').innerHTML = velo.toFixed(0) + "km/Hr"
        document.getElementById('alt').innerHTML = altiu.toFixed(4)
    }
    fetchSpaceStationDetails()
        // console.log(L)
        //!setInterval is part of browser function and time
    setInterval(fetchSpaceStationDetails, 1000)