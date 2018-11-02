// En este componente separamos el render de la pelicula, asi usamos la practica component content

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Donde se use un enlace se debe importar la libreria router para usarla en enlaces
import { Link } from 'react-router-dom';


class Movie extends Component{
    // Validamos las props que recibimos desde el map de las peliculas
    static propTypes = {
        id:     PropTypes.string,
        title:  PropTypes.string.isRequired,
        poster: PropTypes.string,
        year:   PropTypes.string,
        imdbid: PropTypes.string.isRequired
    }

    render(){

        const {
            id,
            title,
            poster,
            year,
            imdbid
        } = this.props

        return(
            <div className="card">
                {poster === 'N/A' ?
                    ''
                :
                    <div className="card-image">
                        <figure className="image">
                        <img 
                            src={poster} 
                            alt={title}
                        />
                        </figure>
                    </div>                           
                }
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6"><strong>Año:</strong> {year}</p>
                            <strong>IBM:</strong> <span className="tag is-warning">{imdbid}</span>
                            <Link to={`/detail/${id}`} className="button is-small vmore">Ver detalle</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {
    Movie
}