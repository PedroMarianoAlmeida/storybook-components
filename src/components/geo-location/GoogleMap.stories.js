import React from 'react';
import GoogleMapComponent from './GoogleMap';

const placesIWent = [
    {lat: 43.6426, lng: -79.3871, title:'CN Tower', description:'The tallest structure in Toronto, and a very special restaurant too', srcImage:'https://pedroprogrammer.com/images/photo-host/CN_Tower.PNG', altImage:'My family standing front CN Tower'},
    {lat: 43.060001, lng: -79.106667, title:'Niagara Falls', description:'A fun and wet tour with my family', srcImage:'https://pedroprogrammer.com/images/photo-host/niagara_falls.PNG', altImage:'My family in Niagara Falls'},
    {lat: 43.642664096 , lng: -79.369665188, title:'St Lawrence Market', description:'The best food market in the world', srcImage:'https://pedroprogrammer.com/images/photo-host/St_Lawrence_Market.PNG', altImage:'My family standing front St Lawrence Market'},
]

const placesIwantToGo = [
    {lat: 49.246292, lng: -123.116226, title:'Vancouver', description:'I want to go to a Pacific beach', srcImage:'https://s3.lufthansacc.com/wp-content/uploads/2018/02/vancouver.png', altImage:'Vancouver Image'},
    {lat: 45.508888, lng: -73.561668, title:'Montreal', description:'I want to listen for myself the street music scenario', srcImage:'https://blogdointercambio.stb.com.br/wp-content/uploads/2019/11/intercambio-em-Montreal-1000x600.jpg', altImage:'Montreal City Image'},
    {lat: 60.721188 , lng: -135.056839, title:'Whitehorse', description:'I want to see the Northern Lights', srcImage:'https://blog.venturas.com.br/wp-content/uploads/2018/08/226583-aurora-boreal-no-canada-como-acompanhar-esse-fenomeno.jpg', altImage:'Northern Lights in White Horse city'},
]

export default {
    title: 'GoogleMap/Map',
    component:  GoogleMapComponent
}

const Template = (args) => <GoogleMapComponent {...args}/>
export const Component = Template.bind({});
Component.args = {
    mapStyle: 'grayScale',
    defaultZoom: 3.5,
    defaultLat: 52,
    defaultLng: -112,

    markers1: placesIWent,
    iconMarker1: 'person',
    sizeIconMarker1: 25,

    markers2: placesIwantToGo,
    iconMarker2: 'maple',
    sizeIconMarker2: 25,
}