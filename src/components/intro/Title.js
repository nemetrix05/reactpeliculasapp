// Esta es otra forma de crear un componente de forma pura, se debe guardar el archivo como nombre de componente PRIMERA EN MAYUSCULA
import React from 'react';

// De esta forma se exporta el componente y solo al llamar el archivo se ejecuta en el render, en el parametro que le pasamos podemos usar (props) o ({nombreprop}) la diferencia es que nos evitamos pasarle props y solo instanciamos las props que necesitamos.


// Para exportar el componente de forma nombrada debemos usarlo como una constante y en el import usarlo com {nombrecomponente}

export const Title = ({children}) => (
    <h1 className="subtitle">
        {children}
    </h1>
)