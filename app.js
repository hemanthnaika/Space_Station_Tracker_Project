    //!setView is,3
    //! latitude , longitude and initial zoom level
    var map = L.map('map').setView([0, 0], 0);
    //!Add the layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(map);

    //!Change the icon
    var myIcon = L.icon({
        iconUrl: './assets/iss.png',
        iconSize: [38, 32],

    });
    var pathIcon = L.icon({
        iconUrl: 'https://www.svgrepo.com/show/344736/dot.svg',
        iconSize: [20, 20],

    });
    //!latitude , longitude 
    // L.marker([0, 0]).addTo(map)
    // L.marker([28, 77]).addTo(map)
    let marker = L.marker([0, 0], { icon: myIcon }).addTo(map)

    const fetchSpaceStationDetails = async() => {
        const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
        const data = await res.json()
        const { latitude, longitude } = data
        // console.log(latitude, longitude)
        marker.setLatLng([latitude, longitude])
            //!Add the path icon
        L.marker([latitude, longitude], { icon: pathIcon }).addTo(map)

    }
    fetchSpaceStationDetails()
        // console.log(L)
        //!setInterval is part of browser function and time
    setInterval(fetchSpaceStationDetails, 1000)