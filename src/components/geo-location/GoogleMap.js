import React from 'react';
import { GoogleMap , withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 12, lng: 12 }}>

        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleMapComponent = () => {
    return (
        <div style={{ height: `500px`, width:'1000px' }}>
            <WrappedMap
                googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

export default GoogleMapComponent;