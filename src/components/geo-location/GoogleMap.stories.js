import React from 'react';
import GoogleMapComponent from './GoogleMap';

const toMarker1 = [
    { lat: 45, lng: -120, title:'Vancouver1', description:'Major city in western Canada' },
    {lat: 46, lng: -120, title:'Toronto2', description:'Capital city of the Canadian province of Ontario'},
    {lat: 47, lng: -120, title:'Toronto3', description:'Capital city of the Canadian province of Ontario'},
]

const toMarker2 = [
    { lat: 48, lng: -120, title:'Vancouver4', description:'Major city in western Canada' },
    {lat: 49, lng: -120, title:'Toronto5', description:'Capital city of the Canadian province of Ontario'},
    {lat: 50, lng: -120, title:'Toronto6', description:'Capital city of the Canadian province of Ontario'},
]

export default {
    title: 'GoogleMap/Map',
    component:  GoogleMapComponent
}

const Template = (args) => <GoogleMapComponent {...args}/>
export const Component = Template.bind({});
Component.args = {
    mapStyle: 'grayScale',
    defaultZoom: 5,
    defaultLat: 48,
    defaultLng: -120,

    markers1: toMarker1,
    iconMarker1: 'default',
    sizeIconMarker1: 25,

    markers2: toMarker2,
    iconMarker2: 'person',
    sizeIconMarker2: 25,
}