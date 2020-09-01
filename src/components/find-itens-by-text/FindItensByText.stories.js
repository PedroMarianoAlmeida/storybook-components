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

export const ExactText = Template.bind({});
ExactText.args = {
    caseSensitive: false,
    placeholder: 'Filter my skills',
    allData: mySkills,
}