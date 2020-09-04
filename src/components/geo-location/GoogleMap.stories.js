import React from 'react';
import GoogleMapComponent from './GoogleMap';

export default {
    title: 'GoogleMap/Map',
    component:  GoogleMapComponent
}

const Template = (args) => <GoogleMapComponent {...args}/>
export const Component = Template.bind({});
Component.args = {
    styleMap: 'default'
}