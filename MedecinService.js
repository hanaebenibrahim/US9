import axios from 'axios' 



class MedecinService {

    
    hola() {
        return axios.get(`http://localhost:8080/admin/affichertoutmedecin`);
    } 
    ola( id){
        
        return axios.get(`http://localhost:8080/admin/affichertoutmedecin/${id}`);

    }
    creer( medecin){
        return axios.post(`http://localhost:8080/admin/creermedecin`, medecin);}
    
}

export default new MedecinService()