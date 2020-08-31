import React, { useState, useEffect } from 'react';

const FindItensByText = (props) => {
    const allData = [
        "Agnico Eagle Mines Limited",
        "Agrium Inc.",
        "Alimentation Couche-Tard",
        "Allied Properties REIT",
        "Atco Limited",
        "Bank of Montreal",
        "Bank of Nova Scotia",
        "BCE Inc.",
        "Bell Aliant",
        "Boardwalk REIT",
        "Bombardier Inc.",
        "Brookfield Asset Management",
        "Brookfield Office Properties",
        "Calloway REIT",
        "Canadian Imperial Bank of Commerce",
        "Canadian National Railway",
        "Canadian Natural Resources",
        "Canadian Oil Sands",
        "Canadian Pacific Railway",
        "Canadian Tire Corporation",
        "Canadian Utilities",
        "CAP REIT",
        "Cenovus Energy",
        "CI Financial",
        "Cominar REIT",
        "CU Inc.",
        "E-L Financial Corporation",
        "Empire Company Limited",
        "Enbridge Inc.",
        "Fairfax Financial Holdings",
        "First Capital Realty Inc.",
        "First Quantum Minerals",
        "Fortis Inc.",
        "Genworth MI Canada",
        "George Weston Limited",
        "Goldcorp Inc.",
        "Great-West Lifeco",
        "H&R REIT",
        "HSBC Bank Canada",
        "Husky Energy",
        "IA Financial Group",
        "IAMGOLD Corporation",
        "IGM Financial",
        "Imperial Oil",
        "Intact Financial",
        "Jean Coutu Group",
        "Loblaw Companies",
        "Magna International",
        "Manulife Financial",
        "Metro Inc.",
        "Morguard Corporation",
        "National Bank of Canada",
        "Pacific Rubiales Energy",
        "Potash Corporation of Saskatchewan",
        "Power Corporation of Canada",
        "Power Financial",
        "RioCan REIT",
        "Rogers Communications",
        "Royal Bank of Canada",
        "Saputo Inc.",
        "Shaw Communications",
        "Shoppers Drug Mart",
        "Silver Wheaton",
        "Sun Life Financial",
        "Suncor Energy",
        "Teck Resources",
        "TELUS Corporation",
        "The Woodbridge Company",
        "Tim Hortons",
        "Toronto-Dominion Bank",
        "TransCanada Corporation",
        "TransCanada Pipelines",
        "Westcoast Energy Inc.",
        "Yamana Gold Inc.",
        ]
    
    const [ dataFiltered, setDataFilterd ] = useState(allData);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect( () => {
        setDataFilterd(allData.filter( item => item.includes(inputValue) ))
    }, [ inputValue ])
    
    return (
        <>
        <input 
            onChange={handleChange}
            value={inputValue}
            placeholder={props.placeholder}
            {...props}
            />
        <ol>
            {dataFiltered.map(item => <li>{item}</li>)}
        </ol>
        
        </>
      );
}
 
export default FindItensByText;