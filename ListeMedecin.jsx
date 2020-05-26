import React , {Component} from 'react';
import MedecinService from './MedecinService'

class ListeMedecin extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            Medecins: [],
            message: null
        }
       // this.addClicked = this.addClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
        this.affichermedecin = this.affichermedecin.bind(this)
    }
    componentDidMount() {
        this.refreshCourses();
    }
    refreshCourses() {
        MedecinService.hola()
            .then(
                response => {
                    
                    this.setState({ Medecins:  response.data })
                }
            )
    }
    affichermedecin(lool){
        console.log('voila'  +lool )
        this.props.history.push(`/medecins/${lool}`)
    }

    
    render() {
        return ( 
          
                <div className="container">
                    <h3>Tous les Medecins</h3>
                    <div className="container"style={{borderRadius: "10px",position: "absolute",width:"450px", left:"40px",top: "300px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                        <table className="table" >
                            <thead>
                                <tr>
                                    <th>CIN</th>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Specialite</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Medecins.map(
                                        medecin =>
                                        <tr key={medecin._id}>
                                            <td>{medecin.cin}</td>
                                            <td>{medecin.nom}</td>
                                            <td>{medecin.prenom}</td>
                                            <td>{medecin.specialite}</td>
                                        </tr>
                                    )
                                }
                            
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            )
    }

}
export default ListeMedecin