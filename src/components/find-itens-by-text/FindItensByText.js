import React, { useState, useEffect } from 'react';

const FindItensByText = (props) => {
    
    const [ dataFiltered, setDataFilterd ] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect( () => {
        if (props.caseSensitive) setDataFilterd(props.allData.filter( item => item.includes(inputValue) ));
        else setDataFilterd(props.allData.filter( item => item.toLowerCase().includes(inputValue.toLowerCase()) ));
    }, [ inputValue, ])
    
    const dataToDislpay = () => {
        if (!inputValue) return ;
        if (dataFiltered.length === 0) return <div className={props.noDataClasses}>No data with this expression</div>
        return  <ul className={props.olClasses}>
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
 
export default FindItensByText;

