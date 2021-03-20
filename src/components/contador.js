import React, {useState} from 'react' ;
import propTypes from 'prop-types';

const Contador = ({name, inicial}) => {
    const num =   inicial? inicial : 0;
    const n = name? name : "Nadie";
    
    const [count, setCount] = useState( num );

    return (
        <>
          <h1>Contador by {n}:</h1>
          <p>{count}</p>
          <button onClick={(()=> setCount(count + 1 ))}>Sumar</button>
          <button onClick={(()=> setCount(count - 1 ))}>Restar</button>
          <button onClick={(()=> setCount(num))}>Restaurar</button>
        </> 
    )
}

Contador.propTypes = {
   name: propTypes.string.isRequired,
   inicial : propTypes.number
}

export default Contador;