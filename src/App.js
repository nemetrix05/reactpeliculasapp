import React, { Component } from 'react';
import './App.css';
// Para aplicar estilos a la aplicacion llamamos el plugin bulma
import 'bulma/css/bulma.css';
// Importo los componentes externos de la UI
import { Title } from './components/intro/Title';
import { SearchForm } from './components/searchbox/search';

class App extends Component {

  // en el componente donde se muestran los resultados, creamos un state e iniciamos con una array vacia para que llame los datos

  state = {
    peliculas: []
  }

  // en este metodo recibe la respuesta del api y actualiza este estado para mapear la respuesta
  showMovies = (peliculas) => {
    this.setState({
      peliculas
    });
  }

  // en este metodo mapeamos la respuesta del JSON
  showAll(){
    const { peliculas } = this.state
    return peliculas.map(movie => {
        return(
          <div key={movie.imdbID}>
            <h2>{movie.Title}</h2>

            {movie.Poster === 'N/A' ? 'No tiene imagen' : <img src={movie.Poster} alt={movie.Title} />}
            
          </div>
        ); 
    })
  }

  render() {
    return (
      <div className="App container">
        <Title>
          Buscador de Peliculas
        </Title>
        <div className='searchbox'>
            <SearchForm showPeliculas={this.showMovies}/>
        </div>
        
        {this.state.peliculas.length === 0
        ? <p>No hay resultados</p>
        : this.showAll()
        }
        
      </div>
    );
  }
}

export default App;
