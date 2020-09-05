import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//From where this come from: https://www.npmjs.com/package/react-google-maps
//Tutorial to implement: https://www.youtube.com/watch?v=Pf7g32CwX_s&t=812s
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

//Source to styles: https://snazzymaps.com/
//When a pass this object to another file, the PropTypes.oneOf( Object.keys(mapStyles) ) stop working
const mapStyles = {
    default: '',

    lostInDesert: [
        {
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#f49f53"
                }
            ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "color": "#f9ddc5"
                },
                {
                    "lightness": -7
                }
            ]
        },
        {
            "featureType": "road",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 43
                }
            ]
        },
        {
            "featureType": "poi.business",
            "stylers": [
                {
                    "color": "#645c20"
                },
                {
                    "lightness": 38
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "color": "#1994bf"
                },
                {
                    "saturation": -69
                },
                {
                    "gamma": 0.99
                },
                {
                    "lightness": 43
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f19f53"
                },
                {
                    "weight": 1.3
                },
                {
                    "visibility": "on"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi.business"
        },
        {
            "featureType": "poi.park",
            "stylers": [
                {
                    "color": "#645c20"
                },
                {
                    "lightness": 39
                }
            ]
        },
        {
            "featureType": "poi.school",
            "stylers": [
                {
                    "color": "#a95521"
                },
                {
                    "lightness": 35
                }
            ]
        },
        {},
        {
            "featureType": "poi.medical",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 38
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "elementType": "labels"
        },
        {
            "featureType": "poi.sports_complex",
            "stylers": [
                {
                    "color": "#9e5916"
                },
                {
                    "lightness": 32
                }
            ]
        },
        {},
        {
            "featureType": "poi.government",
            "stylers": [
                {
                    "color": "#9e5916"
                },
                {
                    "lightness": 46
                }
            ]
        },
        {
            "featureType": "transit.station",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 22
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "lightness": 38
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#f19f53"
                },
                {
                    "lightness": -10
                }
            ]
        },
        {},
        {},
        {}
    ],

    modest: [
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#202c3e"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "gamma": 0.01
                },
                {
                    "lightness": 20
                },
                {
                    "weight": "1.39"
                },
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "0.96"
                },
                {
                    "saturation": "9"
                },
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 30
                },
                {
                    "saturation": "9"
                },
                {
                    "color": "#29446b"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": 20
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 20
                },
                {
                    "saturation": -20
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 10
                },
                {
                    "saturation": -30
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#193a55"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": 25
                },
                {
                    "lightness": 25
                },
                {
                    "weight": "0.01"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": -20
                }
            ]
        }
    ],

    grayScale: [
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#e0dfe0"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a8a9a8"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#5b5b5a"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]
}

//Source to icons: https://fontawesome.com/
const iconPaths = {
    default: '/fontawsome/map-marker-alt-solid.svg',
    person: '/fontawsome/walking-solid.svg',
    maple: '/fontawsome/canadian-maple-leaf-brands.svg',
    dog: '/fontawsome/dog-solid.svg',
    bus: '/fontawsome/bus-solid.svg',
    factory: '/fontawsome/industry-solid.svg',
}

const Map = (props) => {
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [currentMapStyle, setCurrentMapStyle] = useState(props.mapStyle);

    useEffect(() => {
        setCurrentMapStyle(props.mapStyle);
    }, [props.mapStyle])

    return (
        <GoogleMap
            defaultZoom={ props.defaultZoom }
            defaultCenter={{lat: props.defaultLat, lng: props.defaultLng}}
            defaultOptions={{ styles: mapStyles[currentMapStyle] }}
            key={`${currentMapStyle}-${props.defaultZoom}-${props.defaultLat}-${props.defaultLng}`} //This property forces the re-render when some inicial configuration of maps ocours
        >
            {props.markers1.map(point => (
                <Marker
                    key={point.title}
                    position={{ lat: point.lat, lng: point.lng }}
                    onClick={() => setSelectedMarker(point)}
                    icon={{
                        url: iconPaths[props.iconMarker1],
                        scaledSize: new window.google.maps.Size(props.sizeIconMarker1, props.sizeIconMarker1)
                    }}
                />
            ))}

            {props.markers2.map(point => (
                <Marker
                    key={point.title}
                    position={{ lat: point.lat, lng: point.lng }}
                    onClick={() => setSelectedMarker(point)}
                    icon={{
                        url: iconPaths[props.iconMarker2],
                        scaledSize: new window.google.maps.Size(props.sizeIconMarker2, props.sizeIconMarker2)
                    }}
                />
            ))}

            {selectedMarker && (
                <InfoWindow
                    position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                    onCloseClick={() => { setSelectedMarker(null) }}
                >
                    <div>
                        <h6>{selectedMarker.title}</h6>
                        <p>{selectedMarker.description}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const GoogleMapComponent = (props) => {

    return (
        <div style={{ height: `500px`, width: '1000px' }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                
                defaultZoom={props.defaultZoom}
                defaultLat={props.defaultLat}
                defaultLng={props.defaultLng}
                mapStyle={props.mapStyle}

                markers1={props.markers1}
                iconMarker1={props.iconMarker1}
                sizeIconMarker1={props.sizeIconMarker1}

                markers2={props.markers2}
                iconMarker2={props.iconMarker2}
                sizeIconMarker2={props.sizeIconMarker2}
            />
        </div>

    );
}

GoogleMapComponent.propTypes = {
    defaultZoom: PropTypes.number,
    defaultLat: PropTypes.number,
    defaultLng: PropTypes.number,
    mapStyle: PropTypes.oneOf(Object.keys(mapStyles)),
    iconMarker1: PropTypes.oneOf(Object.keys(iconPaths)),
    sizeIconMarker1: PropTypes.number,
    iconMarker2: PropTypes.oneOf(Object.keys(iconPaths)),
    sizeIconMarker2: PropTypes.number,
}

export default GoogleMapComponent;