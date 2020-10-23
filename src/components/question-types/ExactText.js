import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ExactText = ({question, answer, caseSensitive, numberOfTips, explanation, ...props}) => {
    const [ inputValue, setInputValue ] = useState('');
    const [ answerCorrect, setAnswerCorrect ] = useState(null);
    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnswerCorrect(inputValue === answer);
        console.log(answerCorrect);
    }
    
    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label className='d-block my-3'>{question}</label>

                <input 
                    className='mr-2'
                    placeholder="type your answer"
                    value={inputValue}
                    onChange={handleChange}
                /> 
                
                <button className='btn btn-primary'>Use Tip</button>

                <input className='d-block my-3 btn btn-primary' type='submit' disabled={!inputValue} />
            </form>

            <div className={`${answerCorrect === null ? 'd-none' : 'border w-25'}`}>           
                <div>This answer is {answerCorrect ? 'correct' : 'incorrect'}.</div>
                <div>{answerCorrect ? explanation : `The correct answer is ${answer}`}   </div>
            </div>
       </>
     );
}

ExactText.propTypes = {
    /**
   * The question proposal to student needs to answer
   */
    question: PropTypes.string,

   /**
   * The correct answer
   */
    answer: PropTypes.string,

    /**
   * An explanation of why this is the correct answer (it is exhibit only after the student chooses the right option)
   */
  explanation: PropTypes.string,

   /**
   * Determine if the answer is case sensitive
   */
    caseSensitive: PropTypes.bool,

   /**
    * Determine the number of tips that are available to the student. 
   * When the first tip is used is exhibit the number of letters on the answer, in the next tips a random single character of the answer is displayed on the screen
   * Every time than a tip is used, the number of tips is reduced by one
   */
    numberOfTips: PropTypes.number
}

ExactText.defaultProps = {
    caseSensitive: false,
    numberOfTips: 3,
}
 
export default ExactText;