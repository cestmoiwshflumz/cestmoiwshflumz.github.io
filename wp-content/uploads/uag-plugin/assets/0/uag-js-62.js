document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-a7654af6', {"layout":"number","heading":"Ann\u00e9es d'exp\u00e9riences","numberPrefix":"","numberSuffix":"+","startNumber":0,"endNumber":15,"totalNumber":350,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-38e547d2', {"layout":"number","heading":"Clients Satisfaits","numberPrefix":"","numberSuffix":"+","startNumber":0,"endNumber":100,"totalNumber":350,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-eb510c9f', {"layout":"number","heading":"Satisfaction client","numberPrefix":"","numberSuffix":"%","startNumber":0,"endNumber":98,"totalNumber":100,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-d32efc81' );
});
				window.addEventListener( 'DOMContentLoaded', () => {
					const blockScope = document.querySelector( '.uagb-block-e0c65d79' );
					if ( ! blockScope ) {
						return;
					}

					const anchorElement = blockScope.querySelector('a');
					if (!anchorElement) {
						return;
					} 

					 
					blockScope.addEventListener('keydown', (event) => {
						if ( 13 === event.keyCode || 32 === event.keyCode ) {
							event.preventDefault();
							 
							anchorElement.click();	
						}
					} );
				} );
			 });