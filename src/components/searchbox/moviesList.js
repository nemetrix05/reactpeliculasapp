import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './movie';

class ListMovies extends Component{
    static propTypes = {
        movies: PropTypes.array
    }

    render(){
        const { movies } = this.props

        return(
            <div className="columns is-multiline space-outer is-centered">
                {
                    movies.map(movie => {
                        return(
                            <div className="column is-3 is-narrow" key={movie.imdbID}>
                                <Movie 
                                id={movie.imdbID}
                                title={movie.Title}
                                poster={movie.Poster}
                                year={movie.Year}
                                imdbid={movie.imdbID}
                                />
                            </div>
                        ); 
                    })      
                }         
            </div>
        );
         
    }
}

export {
    ListMovies
}