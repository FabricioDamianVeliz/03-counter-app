import React from 'react';
import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';

const PrimeraApp = ({saludo, subtitulo}) => {

    //const saludo = 'Hola Mundo';

    return (
        <>
            <h1>{saludo}</h1>

            <p>{subtitulo}</p>
        </>
    );

    /*const saludo = {
        nombre:'fabricio',
        edad:24
    }

    return (
        <>  
            <pre>{JSON.stringify(saludo,null,3)}</pre>

            <p>Mi primera aplicacion</p>
        </>
    );*/

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo:'Soy un subtitulo'
}



export default PrimeraApp;