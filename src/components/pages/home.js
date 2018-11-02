// Aqui cargaremos el componente solo del home
import React, { Component } from 'react';
import { Title } from '../intro/Title';
import { SearchForm } from '../searchbox/search';
import { ListMovies } from '../searchbox/moviesList';

class HomePage extends Component{

  // en el componente donde se muestran los resultados, creamos un state e iniciamos con una array vacia para que llame los datos

  // Para resolver el problema en la busqueda se inicia un state para condicionar el mensaje que le va salir al usuario

  state = {
    useSearch: false,
    peliculas: []
  }

  // en este metodo recibe la respuesta del api y actualiza este estado para mapear la respuesta
  showMovies = (peliculas) => {
    this.setState({
      peliculas,
      useSearch: true
    });
  }

  // En este metodo mostrara el render del listado de las peliculas
  renderResults () {
    return !this.state.peliculas
      ? 
        <article className="message is-danger custom-danger">
          <div className="message-body">
          No se encontraron resultados, <strong>intenta otra busqueda</strong>
          </div>
        </article>
      : 
        <ListMovies 
          movies={this.state.peliculas}
        />
  }    

    render(){
        return(
            [
                <div key='home'>
                    <Title>
                    Buscador de Peliculas
                    </Title>
                    <div className='searchbox'>
                        <SearchForm showPeliculas={this.showMovies}/>
                    </div>
                    {this.state.useSearch
                        ? this.renderResults()
                        : <p>Usa el formulario para buscar una pelicula</p>
                    }                    
                </div>
            ]
        );
    }
}

export {
    HomePage
}