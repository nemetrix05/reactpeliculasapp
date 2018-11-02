import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackToHome } from '../shared/buttonBackHome';

// Se define una constante con el valor de la key del api rest
const API_KEY = '16cfe6b5'

class DetailMovie extends Component{

    constructor(props){
        super(props)
        this.state = {
            movie: {}
        }
    }
    
    // Se recibe la prop en este componente y se recupera la informacion cuando este haya cargado con  el metodo de ciclo de vida componentDidMount

    FetchMovie = ({ id }) =>{
        // Se hace una nueva peticion fetch para buscar la pelicula por su id
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie =>{
                // para sacar los valores de la respuesta debemos indicarlos en una constante e indicarle que son de tipo JSON
                // Para validar la respuesta y que no tenga undefine, debemos pasarlo valores por defecto, asi evitamos errores de ejecucion

                // const {Search = [], totalResults = '0'}
                //const { Search, totalResults } = movie;
                console.log({movie});
                this.setState({movie})
            })        
        
    }

    componentDidMount(){
        console.log(this.props);
        const { id } = this.props.match.params
        // Aqui le enviamos a un metodo la prop con el id de la pelicula al metodo 
        this.FetchMovie( {id} )
    }

    componentDidUpdate(nextState){
        console.log(nextState);
    }
    
    render(){
        // Se saca una constante con los elementos que quiero recuperar del objeto de la pelicula
        const {
            Title,
            Year,
            imdbRating,
            Director,
            Poster
        } = this.state.movie

        return([

            <BackToHome  key='buttomback'/>,

            <div key='detail' className="columns is-multiline space-outer is-centered">
                <div className="card column is-6 is-narrow">
                    {Poster === 'N/A' ?
                        ''
                    :
                        <div className="card-image">
                            <figure className="image">
                            <img 
                                src={Poster} 
                                alt={Title}
                            />
                            </figure>
                        </div>                           
                    }
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{Title}</p>
                                <p className="subtitle is-6"><strong>Año:</strong> {Year}</p>
                                <p className="subtitle is-6"><strong>Director:</strong> {Director}</p>
                                <strong>IBM:</strong> <span className="tag is-warning"><strong>{imdbRating}</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ]
        );
    }
}

DetailMovie.propTypes = {
    // Cuando se usa react router, se inyecta en los parametros una serie de props que trae un objeto donde podremos validar la url de la app, id, etc
    match: PropTypes.shape({
        // aqui filtramos la id que viene por  la url en params
        params:     PropTypes.object,
        isExact:    PropTypes.bool,
        path:       PropTypes.string,
        url:        PropTypes.string
    })
}

export {
    DetailMovie
}