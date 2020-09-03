import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * This is a component where the user inserts an expression that he/she wants to find among many others, 
 * then the website starts to filter only the options that match with the user input text. <br />
 * 
 * You can see an example of implementation <a href='https://myfridgemeal.com' target='_blank'>here</a> 
 * and check the code of this component to use on your project <a href='https://github.com/PedroMarianoAlmeida/storybook-components/blob/master/src/components/find-itens-by-text/FindItensByText.js' target='_blank'>here</a>.
 */
const FindItensByText = ({caseSensitive, allData, noDataClasses, grouperItensClasses, individualItemClasses, inputClasses, placeholder, onClickFunction, ...props}) => {

    const [dataFiltered, setDataFilterd] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        if (caseSensitive) setDataFilterd(allData.filter(item => item.includes(inputValue)));
        else setDataFilterd(allData.filter(item => item.toLowerCase().includes(inputValue.toLowerCase())));
    }, [inputValue, caseSensitive, allData])

    const handleClick = (e) => onClickFunction(e);

    const dataToDislpay = () => {
        if (!inputValue) return;
        if (dataFiltered.length === 0) return <div className={noDataClasses}>No data with this expression</div>
        return <div className={grouperItensClasses}>
            {dataFiltered.map(item => <div key={item}>
                <button
                    className={individualItemClasses}
                    value={item}
                    onClick={handleClick}
                >
                    {item}
                </button>
            </div>
            )}
        </div>
    }

    return (
        <>
            <input
                className={inputClasses}
                onChange={handleChange}
                value={inputValue}
                placeholder={placeholder}
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
    * Function to execute when an individual element is clicked
    */
    onClickFunction: PropTypes.func,

    /**
    * CSS classes to input element
    */
    inputClasses: PropTypes.string,

    /**
    * CSS classes to Grouper element
    */
    grouperItensClasses: PropTypes.string,

    /**
    * CSS classes to Individual element
    */
    individualItemClasses: PropTypes.string,

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
    grouperItensClasses: '',
    individualItemClasses: '',
    noDataClasses: '',
    onClickFunction: (e) => console.log(e.target.value, 'clicked')
}

export default FindItensByText;

