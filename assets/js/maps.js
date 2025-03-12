function initMap() {
    // Coordinates for the center of the map
    const centerCoordinates = { lat: 51.50987332271679, lng: -0.11814761798361115 };

    // Map options
    const mapOptions = {
      zoom: 2,
      center: centerCoordinates,
    };

    // Initialize the map
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Locations for markers
    const marker1 = { lat: 51.55813505004278, lng: -0.11891921387090688 };
    const marker2 = { lat: 51.61409967400289, lng: -0.06457731131594995 };

    // Add markers to the map
    new google.maps.Marker({
      position: marker1,
      map: map,
      title: "Holloway",
    });

    new google.maps.Marker({
      position: marker2,
      map: map,
      title: "Edmonton",
    });
  }