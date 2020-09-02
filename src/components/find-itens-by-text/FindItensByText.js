import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * This is a component where the user inserts an expression that he/she wants to find among many others, 
 * then the website starts to filter only the options that match with the user input text. <br />
 * 
 * You can see an example of implementation <a href='https://myfridgemeal.com' target='_blank'>here</a> 
 * and check the code of this component to use on your project <a href='https://github.com/PedroMarianoAlmeida/storybook-components/blob/master/src/components/find-itens-by-text/FindItensByText.js' target='_blank'>here</a>.
 */
const FindItensByText = (props) => {

    const [dataFiltered, setDataFilterd] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        if (props.caseSensitive) setDataFilterd(props.allData.filter(item => item.includes(inputValue)));
        else setDataFilterd(props.allData.filter(item => item.toLowerCase().includes(inputValue.toLowerCase())));
    }, [inputValue, props])

    const dataToDislpay = () => {
        if (!inputValue) return;
        if (dataFiltered.length === 0) return <div className={props.noDataClasses}>No data with this expression</div>
        return <ul className={props.olClasses}>
            {dataFiltered.map(item => <li className={props.liClasses} key={item}>{item}</li>)}
        </ul>
    }

    return (
        <>
            <input
                className={props.inputClasses}
                onChange={handleChange}
                value={inputValue}
                placeholder={props.placeholder}
                {...props}
            />

            {dataToDislpay()}
        </>
    );
}

FindItensByText.propTypes = {
    /**
   * Defines if the search will compare exactly text or should disregard the case sensitive differences
   */
    caseSensitive: PropTypes.bool,

    /**
    * Defines the placeholder text inside the input
    */
    placeholder: PropTypes.string,

    /**
    * Array with all data to filter
    */
    allData: PropTypes.array,

    /**
    * CSS classes to input element
    */
    inputClasses: PropTypes.string,

    /**
    * CSS classes to ul element
    */
    ulClasses: PropTypes.string,

    /**
    * CSS classes to li element
    */
    liClasses: PropTypes.string,

    /**
    * CSS classes to div when there is no data with the input element text
    */
    noDataClasses: PropTypes.string,
}

FindItensByText.defaultProps = {
    caseSensitive: false,
    placeholder: '',
    allData: [],
    inputClasses: '',
    ulClasses: '',
    liClasses: '',
    noDataClasses: '',
}

export default FindItensByText;

