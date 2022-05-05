
class Usuari{
    nombre   = 'Ignasi';
    email    = 'ortiz.ignasi@gmail.com';
    password = '1234';
    contacts = [contactName=>'',contactEmail=>''];
    
    constructor(nombre, email, password, contacts){
        this.nombre=nombre;
        this.email=email;
        this.password=password;
        this.contacts=contacts;
    }
    
    get nomUsuari(){
        return this.nombre;
    }

    addContact(info){
        this.contact.push(info);
    }
}

// EXPORTAR la Classe, sino no podrà ser importat des d'un altre JS
export { Usuari };
