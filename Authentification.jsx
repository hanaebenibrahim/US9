import React, {Component} from 'react'



class Authentification extends Component{
    constructor(props){
        super(props)
        this.state={
            username : 'hanae',
            password : '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.loginClicked=this.loginClicked.bind(this)
    }

    handleUsernameChange(event){
        this.setState(
            {
                username: event.target.value
            }
        )
    }
    handlePasswordChange(event){
        this.setState(
            {
                password: event.target.value
            }
        )
    }
    loginClicked(){
        
        if(this.state.username==='hanae' && this.state.password==='000'){
            console.log('Successful')
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        }
        else {
            console.log('Failed')
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }
    render() {
        return (
            <div>
                
                <div className="container-fluid cadre" style={{borderRadius: "10px",padding:"30px",marginTop: "40px",width: "435px",heigh:"410",position: "absolute", left:"70px",top: "130px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}  />
                    </div>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <label id="u18_input_label" htmlfor="u18_input" style={{position: "absolute", left: "0px"}}>
                        <div id="u18_text" className="text " style={{position:"relative",left:"30px"}}>
                            <input id="u18_input" type="checkbox" value="checkbox" />Se souvenir de moi
                        </div>
                    </label>
                    <div id="u19_text" className="text ">
                        <p><span style={{color:"#3C90D1", position:"relative",left:"110px"}}>Mot de passe oublié?</span></p>
                    </div>
                    <button onClick={this.loginClicked} className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc"}}>Se connecter</button>
                    <ErreurAuthentif hasLoginFailed={this.state.hasLoginFailed}/>
                    <SuccesAuthentif showSuccessMessage={this.state.showSuccessMessage}/>  
                </div>
          </div>
         )
    }

}
function ErreurAuthentif(props){
    if (props.hasLoginFailed){
        return <div>Le nom d'utilisateur ou le mot de passe sont érronés</div>
    }
    return null
}
function SuccesAuthentif(props){
    if (props.showSuccessMessage){
        return <div>Vous êtes connecté</div>
    }
    return null
}

export default Authentification