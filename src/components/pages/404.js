import React from 'react';
import { BackToHome } from '../shared/buttonBackHome';

// Asi se crea un componente estatico

const NotFount = (props) => (
    <div
        style={{
            'textAlign': 'center'
        }}
    >
        <h3>{props.title}</h3>
        <p>LA PAGINA QUE BUSCAS NO EXISTE</p>
        <BackToHome />
    </div>
)

export {
    NotFount
}