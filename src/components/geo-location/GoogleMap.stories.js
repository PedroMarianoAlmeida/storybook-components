import React from 'react';
import GoogleMapComponent from './GoogleMap';

const toMarker = [
    { lat: 49.3023, lng: -123.107, title:'Vancouver', description:'Major city in western Canada' },
    { lat: 51, lng: -120, title:'Vancouver2', description:'Major city in western Canada' },
    {lat: 43.651070, lng: -79.347015, title:'Toronto', description:'Capital city of the Canadian province of Ontario'},
]

export default {
    title: 'GoogleMap/Map',
    component:  GoogleMapComponent
}

const Template = (args) => <GoogleMapComponent {...args}/>
export const Component = Template.bind({});
Component.args = {
    mapStyle: 'grayScale',
    markers: toMarker,
}