import React , {Component} from 'react';
import { Formik, Form, Field , ErrorMessage } from 'formik';
import MedecinService from './MedecinService';
//import MedecinService from './MedecinService'

class CreerMedecin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : 0,
            cin : '',
            nom : '' ,
            prenom : '',
            specialite : '',
            gsm : '',
            email : '',
            adresse : '',
            login : '',
            mdp : ''
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.validate=this.validate.bind(this)
    }

    onSubmit(values){
        let medecin1 = {
            id : values.id,
            cin : values.cin,
            nom : values.nom ,
            prenom : values.prenom,
            specialite : values.specialite,
            gsm : values.gsm,
            email : values.email,
            adresse : values.adresse,
            login : values.login,
            mdp : values.mdp
        }
        MedecinService.creer(medecin1)
        
        console.log(values);
    }

    validate(values){
        let errors = {}
        if (!values.nom){
            errors.nom = 'Entrer le nom'
        }
        else if (values.nom.length<3){
            errors.nom = 'Le nom doit comporter au moins 3 lettres !!'
        }
        if (!values.prenom){
            errors.prenom = 'Entrer le prenom'
        }
        else if (values.prenom.length<3){
            errors.prenom = 'Le prenom doit comporter au moins 3 lettres !!'
        }
        if (!values.gsm){
            errors.gsm = 'Entrer le GSM'
        }
        else if (values.gsm.length!==10){
            errors.gsm = 'Le GSM doit comporter 10 chiffres !!'
        }
        return errors;
    }

    render() {
        let {id,cin,nom,prenom,specialite,gsm,email,adresse,login,mdp} = this.state
        //let cin = this.state.cin
       // let nom = this.state.nom
        //let prenom = this.state.prenom
        //let specialite = this.state.specialite
        //let gsm = this.state.gsm
        //let email = this.state.email
        //let adresse = this.state.adresse
        //let login = this.state.login
       // let mdp = this.state.mdp
        return(
        <div>
            <h3>Création d'une nouvelle fiche médecin : </h3>
            <div className="container">
                <Formik
                  initialValues={{id,cin,nom,prenom,specialite,gsm,email,adresse,login,mdp}}
                  onSubmit={this.onSubmit}
                  validateOnChange={false}
                  validateOnBlur={false}
                  validate={this.validate}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="nom" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="prenom" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="gsm" component="div" className="alert alert-warning"/>
                                <fieldset className="form-group">
                                    <label>Identifiant :</label>
                                    <Field className="form-control" type="text" name="id"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>CIN : </label>
                                    <Field className="form-control" type="text" name="cin"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Nom : </label>
                                    <Field className="form-control" type="text" name="nom"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Prénom : </label>
                                    <Field className="form-control" type="text" name="prenom"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Spécialité : </label>
                                    <Field className="form-control" type="text" name="specialite"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>GSM : </label>
                                    <Field className="form-control" type="text" name="gsm"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Email : </label>
                                    <Field className="form-control" type="text" name="email"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Adresse : </label>
                                    <Field className="form-control" type="text" name="adresse"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Login : </label>
                                    <Field className="form-control" type="text" name="login"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Mot de Passe : </label>
                                    <Field className="form-control" type="text" name="mdp"/>
                                </fieldset>
                                <button type="submit" className="btn btn-info">Enregistrer</button>
                            </Form>

                        )
                    }
                </Formik>
        
           </div>
        </div> 
        )
        
    }
}
export default CreerMedecin