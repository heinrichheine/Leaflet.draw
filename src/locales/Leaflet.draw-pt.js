/*
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
// Translations from https://github.com/Leaflet/Leaflet.draw/issues/313

L.drawVersion = '0.2.4-dev';

L.drawLocal = {
    draw: {
        toolbar: {
            actions: {
                title: 'Cancelar desenho',
                text: 'Cancelar'
            },
            undo: {
                title: 'Apagar último ponto desenhado',
                text: 'Apagar último ponto'
            },
            buttons: {
                polyline: 'Desenhar uma linha',
                polygon: 'Desenhar um polígono',
                rectangle: 'Desenhar um retângulo',
                circle: 'Desenhar um círculo',
                marker: 'Desenhar um marcador'
            }
        },
        handlers: {
            circle: {
                tooltip: {
                    start: 'Clique e arraste para desenhar um círculo.'
                }
            },
            marker: {
                tooltip: {
                    start: 'Clique no mapa para posicionar um marcador.'
                }
            },
            polygon: {
                tooltip: {
                    start: 'Clique para começar a desenhar um polígono.',
                    cont: 'Clique para continuar desenhando.',
                    end: 'Clique no primeiro ponto para terminar.'
                }
            },
            polyline: {
                error: '<strong>Erro:</strong> arestas não podem se cruzar!',
                tooltip: {
                    start: 'Clique para desenhar linha.',
                    cont: 'Clique para continuar desenhando.',
                    end: 'Clique duas vezes para terminar.'
                }
            },
            rectangle: {
                tooltip: {
                    start: 'Clique e arraste para desenhar um retângulo.'
                }
            },
            simpleshape: {
                tooltip: {
                    end: 'Solte o botão do mouse para terminar.'
                }
            }
        }
    },
    edit: {
        toolbar: {
            actions: {
                save: {
                    title: 'Salvar mudanças.',
                    text: 'Salvar'
                },
                cancel: {
                    title: 'Cancelar edição, descartar mudanças.',
                    text: 'Cancelar'
                }
            },
            buttons: {
                edit: 'Editar camada.',
                editDisabled: 'Sem camadas para editar.',
                remove: 'Apagar desenho.',
                removeDisabled: 'Sem camadas para apagar.'
            }
        },
        handlers: {
            edit: {
                tooltip: {
                    text: 'Arraste os quadrados, ou marcador para editar.',
                    subtext: 'Clique cancelar para desfazer.'
                }
            },
            remove: {
                tooltip: {
                    text: 'Clique em um desenho para remover.'
                }
            }
        }
    }
};
