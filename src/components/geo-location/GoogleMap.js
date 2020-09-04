import React, { useState } from 'react';

//From where this come from: https://www.npmjs.com/package/react-google-maps
//Tutorial to implement: https://www.youtube.com/watch?v=Pf7g32CwX_s&t=812s
import { GoogleMap , withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

const toMarker = [
    { lat: 49.3023, lng: -123.107, title:'Vancouver', description:'Major city in western Canada' },
    {lat: 43.651070, lng: -79.347015, title:'Toronto', description:'Capital city of the Canadian province of Ontario'},
]

const Map = () => {
    const [ selectedMarker, setSelectedMarker ] = useState(null);

    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 49.3023, lng:  -123.107 }}>
            {toMarker.map(point => (
                <Marker 
                    key={point.title} 
                    position={{lat: point.lat, lng: point.lng}}
                    onClick={ () => setSelectedMarker(point) }  
                />
            ))}

            {selectedMarker && (
                <InfoWindow
                    position={{lat: selectedMarker.lat, lng: selectedMarker.lng}}
                    onCloseClick={() => {setSelectedMarker(null)}}
                >
                    <div>
                        teste
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleMapComponent = () => {
    return (
        <div style={{ height: `500px`, width:'1000px' }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

export default GoogleMapComponent;