import React from 'react';
// Donde se use un enlace se debe importar la libreria router para usarla en enlaces
import { Link } from 'react-router-dom';

const BackToHome = () => (

    <div key='button columns is centered'>
        <Link to={`/`}>Volver a la busqueda</Link>
    </div>    

)

export {
    BackToHome
}