import React from 'react';
import ExactText from './ExactText';

export default {
    title: 'Question Types/Exact Text',
    component:  ExactText
}

const Template = (args) => <ExactText {...args}/>
export const Component = Template.bind({});
Component.args = {
    question: "How is the number 1498 in the roman algorithm?",
    answer: "MCDXCVIII",
    caseSensitive: true,
    numberOfTips: 2,
}