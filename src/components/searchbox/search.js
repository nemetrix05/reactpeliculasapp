// Recordar que los llamados a clases CSS se hacen con className, no es HTML

import React, { Component } from 'react';

// Se define una constante con el valor de la key del api rest
const API_KEY = '16cfe6b5'

class SearchForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            valorinput: ''
        }
        /*modo bindeado
        this.onChangeInput = this.onChangeInput.bind(this);*/
    }

    // con este metodo guarda el valor del input en en state, en una arro function
    onChangeInput = (e) => {
        this.setState({
            valorinput: e.target.value
        })
    }

    // este metodo recoge los datos del formulario
    onSubmitForm = (e) => {
        // Evita que se envie el formulario
        e.preventDefault()
        const { valorinput } = this.state;

        // Usamos el metodo fetch para conectar con el apirest, concatenamos los valores de key y state.
        // la sintaxis para pasar valores es: comillas `` y vairables ${nombre}

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${valorinput}`)
            .then(res => res.json())
            .then(result =>{
                // para sacar los valores de la respuesta debemos indicarlos en una constante e indicarle que son de tipo JSON
                // Para validar la respuesta y que no tenga undefine, debemos pasarlo valores por defecto, asi evitamos errores de ejecucion

                // const {Search = [], totalResults = '0'}
                const { Search, totalResults } = result;
                console.log({Search, totalResults});
                this.props.showPeliculas(Search)
            })
    }

    render(){
        return(
            <form onSubmit={this.onSubmitForm}>
                <div className="field has-addons
                ">
                    <p className="control">
                        <input 
                            onChange={this.onChangeInput}
                            className="input" 
                            type="text" 
                            placeholder="Escribe la pelicula"
                        />
                    </p>
                    <p className="control">
                        <button
                            className="button is-info"
                        >
                        Buscar
                        </button>
                    </p>
                </div>       
            </form>     
        );
    }
}

export {
    SearchForm
}