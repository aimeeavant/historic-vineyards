
		/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
		FUNCTION:   getColor()
		PURPOSE:  
					// function accepts a single normalized data attribute value
					// and an array of breaks as two parameters and 
					// uses a series of conditional statements to determine which
					// which color value to return to return to the function caller
		CALLED IN:  
		CALLS TO:  
		*/
		function getColor(d, breaks) {
			if (d <= breaks[0][1]) {
				return '#FFFFEB';
			} else if (d <= breaks[1][1]) {
				return '#FEE0BE';
			} else if (d <= breaks[2][1]) {
				return '#FFC396';
			} else if (d <= breaks[3][1]) {
				return '#FEA273'
			} else if (d <= breaks[4][1]) {
				return '#FF8053'
			}
		}