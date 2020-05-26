import React , {Component} from 'react';

import MedecinService from './MedecinService'


class AfficherMedecin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            medecin: {} ,
            message: null,
            id: this.props.match.params.id
        }
    }
    componentDidMount() {
        MedecinService.ola(this.state.id)
        .then(
            response => {
                console.log(this.state.id);
                this.setState({ medecin: response.data })
            }
        )
        
        
    }
  
    render() {
        
        return ( 
          
                <div className="container">
                    <h3>Medecin {this.state.medecin._id}</h3>
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>CIN medecin</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Specialite</th>
                                 </tr>
                            </thead>
                            <tbody>
                                {
                                  <tr key={this.state.medecin._id}>
                                     <td>{this.state.medecin.cin}</td>
                                     <td>{this.state.medecin.nom}</td>
                                     <td>{this.state.medecin.prenom}</td>
                                     <td>{this.state.medecin.specialite}</td>
                                    </tr>
                                    
                                }
                            
                            </tbody>
                        </table>
                    </div>
        </div>
        )
}
}
export default AfficherMedecin