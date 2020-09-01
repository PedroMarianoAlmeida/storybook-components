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
    }, [ inputValue ])
    
    const dataToDislpay = () => {
        if (!inputValue) return ;
        if (dataFiltered.length === 0) return <div>No data with this expression</div>
        return  <ol>
                    {dataFiltered.map(item => <li key={item}>{item}</li>)}
                </ol>
    }

    return (
        <>
            <input 
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

