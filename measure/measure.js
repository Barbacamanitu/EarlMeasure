 $(function() {
	var measureControl = new L.control.measure({
              position: 'topright',
              primaryLengthunit: 'feet',
              secondaryLengthunit: 'miles',
              primaryAreaunit: 'acres',
              activeColor: '#ABE67E',
              completedColor: '#C8F2BE'
            });
			
			
            measureControl.addTo(map);
	});