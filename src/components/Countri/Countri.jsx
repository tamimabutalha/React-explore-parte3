import { useState } from 'react';
import './countri.css'
const Countri = ({ countri, handleVisitedCountry, andleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = countri;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    const passwithParams = () => handleVisitedCountry(countri);


    return (
        <div className={`countri ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <br />
            <button onClick={() => handleVisitedCountry(countri)}>Mark visited</button>
            <br />
            <button onClick={() => andleVisitedFlags(countri.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>Visited</button>
            {visited && 'i have visited this country'}
        </div>
    );
};

export default Countri;