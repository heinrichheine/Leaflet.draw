/*
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
// Translations from https://github.com/Turistforeningen/area-drawing/blob/f2eef901bcbfb6b2975cd599baccc1850c2085fa/libs/leaflet-draw/leaflet.draw-no.js

L.drawVersion = '0.2.4-dev';

L.drawLocal = {
	draw: {
		toolbar: {
			actions: {
				title: 'Cancel drawing',
				text: 'Cancel'
			},
			undo: {
				title: 'Delete last point drawn',
				text: 'Delete last point'
			},
			buttons: {
				polyline: 'Draw a polyline',
				polygon: 'Tegn inn område',
				rectangle: 'Draw a rectangle',
				circle: 'Draw a circle',
				marker: 'Draw a marker'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: 'Click and drag to draw circle.'
				}
			},
			marker: {
				tooltip: {
					start: 'Click map to place marker.'
				}
			},
			polygon: {
			    error: '<strong>Feil:</strong> områdekanter kan ikke krysses!',
				tooltip: {
					start: 'Trykk for å starte inntegning.',
					cont: 'Trykk for å fortsette inntegning.',
					end: 'Trykk på det første punktet for å avslutte inntegning.'
				}
			},
			polyline: {
				error: '<strong>Error:</strong> shape edges cannot cross!',
				tooltip: {
					start: 'Click to start drawing line.',
					cont: 'Click to continue drawing line.',
					end: 'Click last point to finish line.'
				}
			},
			rectangle: {
				tooltip: {
					start: 'Click and drag to draw rectangle.'
				}
			},
			simpleshape: {
				tooltip: {
					end: 'Release mouse to finish drawing.'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'Lagre omrdåer.',
					text: 'Lagre'
				},
				cancel: {
					title: 'Avbryt endring, lagrer ikke endringer.',
					text: 'Abryt'
				}
			},
			buttons: {
				edit: 'Endre områder.',
				editDisabled: 'No layers to edit.',
				remove: 'Delete layers.',
				removeDisabled: 'No layers to delete.'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'Drag handles, or marker to edit feature.',
					subtext: 'Click cancel to undo changes.'
			},
			remove: {
				tooltip: {
					text: 'Click on a feature to remove'
				}
			}
		}
	}
};

