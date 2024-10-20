import { useEffect } from "react";
import { useState } from "react";
import Countri from "../Countri/Countri";
import './Countries.css'



const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags,] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])


    const handleVisitedCountry = countri => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, countri];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Countries {countries.length}</h3>
            <div>
                <h5>Visited countries{visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(countri => <li key={countri.cca3}>{countri.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map(flag => <img src={falg}></img> )
                }
            </div>
            <div className="country-container" >
                {
                    countries.map(countri => <Countri key={countri.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        countri={countri}></Countri>)
                }
            </div>
        </div>
    );
};

export default Countries;