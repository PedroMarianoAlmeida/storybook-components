import React from 'react';

import FindItensByText from './FindItensByText';

const mySkills = [
        'React',
        'Next.js',
        'JavaScript',
        'HTML',
        'CSS',
        'Bootstrap',
        'Jquery',
        'Storybook',
        'Web API'
    ]

export default {
    title: 'Filter/Find Itens By Text',
    component: FindItensByText
}

const Template = (args) => <FindItensByText {...args}/>

export const Component = Template.bind({});
Component.args = {
    caseSensitive: false,
    placeholder: 'Filter my skills',
    allData: mySkills,
    inputClasses: 'form-control my-2 w-50 shadow-sm',
    grouperItensClasses: 'list-group text-center',
    individualItemClasses: 'list-group-item list-group-item-action w-25 rounded my-1',
    noDataClasses:'text-danger mx-3',
}