/*
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
// Translations from https://github.com/makinacorpus/django-leaflet/blob/295c408a4ad544d045816998e04bdff4c1a000b9/leaflet/locale/de/LC_MESSAGES/django.po

L.drawVersion = '0.2.4-dev';

L.drawLocal = {
	draw: {
		toolbar: {
			actions: {
				title: 'Zeichnung Abbrechen',
				text: 'Abbrechen'
			},
			undo: {
				title: 'Letzten gezeichneten Punkt löschen',
				text: 'Lösche letzten Punkt'
			},
			buttons: {
				polyline: 'Polylinie zeichnen',
				polygon: 'Polygon zeichnen',
				rectangle: 'Rechteck zeichnen',
				circle: 'Kreis zeichnen',
				marker: 'Marker zeichnen'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: 'Klicken und ziehen Sie um einen Kreis zu zeichnen.'
				}
			},
			marker: {
				tooltip: {
					start: 'Karte anklicken um einen Marker zu platzieren.'
				}
			},
			polygon: {
				tooltip: {
					start: 'Klicken, eine Form zu zeichnen.',
					cont: 'Klicken, um Form weiter zu zeichnen.',
					end: 'Klicken sie auf den ersten Punkt um die Form abzuschließen.'
				}
			},
			polyline: {
				error: '<strong>Fehler:</strong> Ränder können sich nicht überkreuzen!',
				tooltip: {
					start: 'Klicken Sie um mit dem Zeichnen einer Linie zu beginnen.',
					cont: 'Klicken Sie auf die Zeichnung um die Linie fortzusetzen.',
					end: 'Klicken Sie auf den letzten Punkt um die Linie zu beenden.'
				}
			},
			rectangle: {
				tooltip: {
					start: 'Klicken und ziehen, um Rechteck zu zeichnen.'
				}
			},
			simpleshape: {
				tooltip: {
					end: 'Lassen sie die Maustaste los, um die Zeichnung abzuschließen.'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'Änderungen speichern.',
					text: 'Speichern'
				},
				cancel: {
					title: 'Bearbeitung abbrechen, es werden alle Änderungen verworfen.',
					text: 'Abbrechen'
				}
			},
			buttons: {
				edit: 'Ebenen bearbeiten',
				editDisabled: 'Keine Ebenen zum Bearbeiten.',
				remove: 'Ebenen löschen.',
				removeDisabled: 'Keine Ebenen zum Löschen.'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'Ziehen sie eine Leiste oder einen Marker zum bearbeiten einer Funktion.',
					subtext: 'Klicken Sie auf Abbrechen, um die Änderungen rückgängig zu machen.'
				}
			},
			remove: {
				tooltip: {
					text: 'Klicken Sie auf eine Funktion um diese zu Entfernen'
				}
			}
		}
	}
};
