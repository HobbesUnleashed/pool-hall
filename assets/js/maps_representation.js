function loadMapAPI() {
    const script = document.createElement('script');
    script.src="https://maps.googleapis.com/maps/api/js?key=THIS_IS_WHERE_MY_KEY_WOULD_BE&callback=initMap";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  
    console.log("map loaded");
  }
  
  function initMap() {
      // Coordinates for the center of the map
      const centerCoordinates = { lat: 51.58167486172391, lng: -0.07596680102862474 };
       
      // Map options
      const mapOptions = {
        zoom: 11,
        center: centerCoordinates,
      };
  
      // Initialize the map
      const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
      // Locations for markers
      const locations = [
        { lat: 51.55813505004278, lng: -0.11891921387090688, name: 'Holloway Pool Hall' },
        { lat: 51.61409967400289, lng: -0.06457731131594995, name: 'Edmonton Pool Hall' }
      ];
  
      // Geocoder service for reverse geocoding
      const geocoder = new google.maps.Geocoder();
  
      // Add markers to the map with interactivity
      locations.forEach((location, index) => {
        const marker = new google.maps.Marker({
          position: location,
          map: map,
          title: location.name,
        });
  
        // Add click listener for address and directions
        marker.addListener('click', () => {
          // Reverse geocoding to get the address
          geocoder.geocode({ location: location }, (results, status) => {
            if (status === "OK" && results[0]) {
              alert(`Address: ${results[0].formatted_address}`);
            } else {
              alert("No address found for this location");
            }
          });
  
          // Open Google Maps with directions to this marker
          const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
          window.open(directionsUrl, '_blank');
        });
      });
  
      console.log("Map initialised");
    }
  
    loadMapAPI();