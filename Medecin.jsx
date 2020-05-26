import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ListeMedecin from './ListeMedecin'
import AfficherMedecin from './AfficherMedecin'
import CreerMedecin from './CreerMedecin'
import "bootstrap/dist/css/bootstrap.css";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'


class Medecin extends Component {
    render() {
        return(
            <div className="Medecin">
                <Router>
                    <Route path="/" exact component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/admin" component={Welcome} />
                    <Route path="/admin/listemedecins" component={Form} />
                    <Route path="/medecins/:id" component={AfficherMedecin} /> 
                    <Route path="/creer" component={CreerMedecin} />
                </Router>
            </div>
            /*
            <div>
                <div className="container-fluid cadre" style={{borderRadius: "10px",width: "450px",height:"170px",position: "absolute", left:"40px",top: "70px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"15px"}}>Recherche par nom</label>
                        <input className="form-control" type="text" name="nom" style={{width:"150px",position:"absolute",left:"160px",top:"12px",fontSize:"14px"}}/>
                        <button className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"348px",top:"12px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"65px"}}>Recherche par numéro</label>
                        <input className="form-control" type="text" name="nom" style={{width:"150px",position:"absolute",left:"160px",top:"62px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={this.listecourte} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"348px",top:"62px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"115px"}}>Recherche par CIN</label>
                        <input className="form-control" type="text" name="nom" style={{width:"150px",position:"absolute",left:"160px",top:"115px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={this.listecourte} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"348px",top:"112px",fontSize:"12px"}}>Recherche</button>
                    </div>
                </div>
                <ListeMedecin/>
            </div>*/
        )
    }
}

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar">
              <a className="navbar-brand" href="admin"><span className="texte">MEDICARE</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
              <a className="navbar-brand" href="/listepatients"><span className="texte">Liste des Patients </span>&emsp;&emsp;&emsp;&emsp;</a>
              <a className="navbar-brand" href="/rendezvous"><span className="texte">Liste des Rendez-Vous</span>&emsp;&emsp;&emsp;&emsp;</a>
              <a className="navbar-brand" href="admin/listemedecins"><span className="texte">Liste des Medecins</span>&emsp;&emsp;&emsp;&emsp;</a>
              <a className="navbar-brand" href="/login"><span className="texte">Se déconnecter</span></a>
              </nav>
            </header>
        );
    }
}

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Medecins: [],
            message: null
        }
        this.addClicked = this.addClicked.bind(this)
    }

    
    addClicked() {
        this.props.history.push(`/creer`)
    }

    render() {
    return (
            <div>
                <div className="container-fluid cadre" style={{borderRadius: "10px",width: "450px",height:"170px",position: "absolute", left:"40px",top: "70px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"15px"}}>Recherche par Nom</label>
                        <input className="form-control" type="text" name="nom" style={{width:"150px",position:"absolute",left:"160px",top:"12px",fontSize:"14px"}}/>
                        <button className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"348px",top:"12px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"65px"}}>Recherche par Spécialité</label>
                        <input className="form-control" type="text" name="specialite" style={{width:"150px",position:"absolute",left:"160px",top:"62px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={this.listecourte} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"348px",top:"62px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"115px"}}>Recherche par CIN</label>
                        <input className="form-control" type="text" name="cin" style={{width:"150px",position:"absolute",left:"160px",top:"115px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={this.listecourte} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"348px",top:"112px",fontSize:"12px"}}>Recherche</button>
                    </div>
                </div>
                <ListeMedecin/>
                <div className="row">
                    <a href="/creer"><button className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc", position:"absolute",left:"125px",top:"650px"}} onClick={this.addClicked}>Créer une nouvelle fiche Médecin</button></a> 
                </div>
                <div className="onglets" style={{borderRadius: "10px",width: "700px",height:"480px",position: "absolute", left:"540px",top: "110px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <Tabs defaultActiveKey="infosperso" id="uncontrolled-tab-example">

                        <Tab eventKey="infosperso" title="Fiche Personnelle du Médecin :">
                            <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                                <table className="table" >
                                    <thead>
                                        <tr>
                                            <th>CIN</th>
                                            <th>Nom</th>
                                            <th>Prénom</th>
                                            <th>Spécialité</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                        </Tab>
                    </Tabs>
                </div>
            </div>
        
    );
    }
}

class Welcome extends Component {

    constructor(props){
        super(props)
        this.state={
            listecomplete: true
        }
        //this.listecourte=this.listecourte.bind(this)
    }
    disconnexion(){
        this.props.history.push(`/login`)
    }
    /*
    constructor(props){
        super(props)
        this.retrieveMedecins = this.retrieveMedecins.bind(this)
        this.state = {
            medecins : [

            ]
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    }*/

    /*componentDidMount() {
        let login = AuthentificationService.getLoginUser()
         FichePersonnelle.affichermedecin(login).then(response => {
             console.log(response)
         })
    }*/

    render(){
        return( 
            <div>
                <Header/>
            </div>
            
        );
    }
    retrieveMedecins() {
        //console.log('retrieve clicked');
        Medecin.excuteMedecin().then(response => this.handleSuccessfulResponse(response))
       // .catch()
    }
    handleSuccessfulResponse(response) {
        this.setState ({medecins : response.data.array})
       
    }
}

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            login : '',
            mdp : '',
            loginFailed : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        console.log(this.state);
        this.setState({ 
            [event.target.name]
            : event.target.value
        })
    }

    loginClicked(){
       if (this.state.login === 'admin1' && this.state.mdp === '000') {
           //AuthentificationService().registerSuccessfulLogin();
          this.props.history.push(`/admin`);
       }
       else {
            this.setState({loginFailed:true});
       }
    }

    render(){
        return(
            <div>
                <ShowError loginFailed={this.state.loginFailed}/>
                Login : <input type="text" name="login" value={this.state.login} onChange={this.handleChange} />
                Mot de passe : <input type="password" name="mdp" value={this.state.mdp} onChange={this.handleChange} />
                <button className="btn btn-info" onClick={this.loginClicked}> Se connecter </button>
            </div>
        );
    }
}

function ShowError (props){
    if (props.loginFailed) {
        return <div className="alert alert-warning"> Login ou Mot de Passe Incorrect !!!</div>;
    }
    return null;
}

export default Medecin