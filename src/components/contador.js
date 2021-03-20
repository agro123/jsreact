import React, {useState} from 'react' ;
import propTypes from 'prop-types';
//Cristian Medina
const Contador = ({name, inicial}) => {
    const num =   inicial? inicial : 0;
    const n = name? name : "Nadie";

    const [count, setCount] = useState( num );

    return (
        <div className="contador">
          <h1>CONTADOR</h1>
          <p className="littleText">by {n}</p>
          <p>{count}</p>

          <div>
            <button onClick={(()=> setCount(count + 1 ))}>Sumar</button>
            <button onClick={(()=> setCount(count - 1 ))}>Restar</button>
            <button onClick={(()=> setCount(num))}>Restaurar</button>
          </div>
          
        </div> 
    )
}

Contador.propTypes = {
   name: propTypes.string.isRequired,
   inicial : propTypes.number
}

export default Contador;