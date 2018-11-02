import React, { Component } from 'react';
import './App.css';
// Para aplicar estilos a la aplicacion llamamos el plugin bulma
import 'bulma/css/bulma.css';
// Importo los componentes externos de la UI
import { HomePage } from './components/pages/home';
// Importamos la paginas externas como componentes
import { DetailMovie } from './components/pages/detailMovie';
// importamos los componentes necesarios para hacer un enrutado SPA en React
import { Switch, Route} from 'react-router-dom';
import { NotFount } from './components/pages/404';


class App extends Component {

  render() {
    /*
    // En el metodo render del componente padre, creamos el enrutamiento nativo de Javascript. 
    // url obtiene la url actual
    // hasid pregunta si en la url existe el parametro id
    const url = new URL(document.location)

    // Se hace una ternaria sobre el id que recibe por parametro
    const page = url.searchParams.has('id')
    ?
    <DetailMovie id={url.searchParams.get('id')} />
    :
    <HomePage />

    */

    // cambiamos la distribucion de render para usar el react router.
    // dentro de ese componente Switch debemos especificar las rutas del app
    // en el componente Route se define la ruta y el componente a cargar 


    // La ultima ruta recibida se toma como 404
    return (
      <div className="App container">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/detail/:id' component={DetailMovie} />
          <Route component={NotFount} />
        </Switch>
      </div>
    );


  }
}

export default App;
