import React, {Component} from 'react'
//import ListeMedecin from './ListeMedecin'
//import AfficherMedecin from'./AfficherMedecin'
import Medecin from './Medecin'
//import Authentification from './Authentification.jsx';
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/*function ErrorComponent() {
    return <div>Erreur, le lien entré n'est pas disponible!</div>
}*/

class App extends Component {
  render() {
    return (
        <div className="App">
          <Medecin/>
          </div>

        /*<Router>
        <>
            <Switch>
                <Route path="/" exact component={Medecin} />
                <Route path="/medecins/:id" component={AfficherMedecin} /> 
                <Route path="" component={ErrorComponent}/>
                
                
            </Switch>
        </>
    </Router>*/
    )
}
}

export default App;
