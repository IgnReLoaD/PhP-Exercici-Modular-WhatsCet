// import { Usuari } from "./usuari";

class Usuari{
    nombre   = '';
    email    = '';
    password = '';
    contacts = [contactName=>'',contactEmail=>''];
    
    constructor(nombre, email, password, contacts){
        this.nombre=nombre;
        this.email=email;
        this.password=password;
        this.contacts=contacts;
    }
    
    getNomUsuari(){
        return this.nombre;
    }
    getEmailUsuari(){
        return this.email;
    }
    addContact(info){
        this.contact.push(info);
    }
}

const MY_USER = new Usuari (nom='Ignasi',mail='ortiz.ignasi@gmail.com',pwd='1234',contacts=['Xavi','Gaby'])
const PATRONS = {
    correus: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contrasenyes: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,    
    telefons: /^\d+$/,
    matricules: /^(\d{4}[a-zA-Z]{3})$/
  };

// DEFINIR FUNCIO INVALIDAR: afegeix la classe 'is-invalid' al camp erroni, que fa:
//                         1. mostra label en vermell i símbol admiració vermell
//                         2. mostra un text en vermell a sota indicant l'error
function Invalidar(camp) {
    camp.classList.remove("is-valid");
    camp.classList.add("is-invalid");
}
    
// DEFINIR FUNCIO VALIDAR: afegeix la classe 'is-valid' al camp correcte, que fa:
//                         1. mostra label en verd i un símbol de correcte
//                         2. elimina qualsevol text d'error, es pot posar text de correcte
function Validar(camp) {
    camp.classList.add("is-valid");
    camp.classList.remove("is-invalid");
}

function valUsuariEmail(email) {
    let normativa = PATRONS.correus;
    if (normativa.test(email.value)) {
        return true;
    }else{
        return false;
    }    
}

function valUsuariPwd(info) {
    let normativa = PATRONS.contrasenyes;
    if (normativa.test(info.value)) {
        return true;
    }else{
        return false;
    }    
}

function msgErr() {
    console.log("Dades incorrectes");
    // document.getElementById("mostrarDatos").innerHTML = "Dades incorrectes.";
};

// ------- MAIN funció principal --------------------------------------------------------
function comprobaUsuari() {

    // recollim els INPUTS on es posa la info del Usuari
    let inpUsr = document.getElementById("inpUsr");
    let inpPwd = document.getElementById("inpPwd");
    let inpPw2 = document.getElementById("inpPwd2");

    // recollim els DIVS on es posa el text d'error de validació
    let errUsr = document.getElementById("errUsr");
    let errPwd = document.getElementById("errPwd");
    let errPw2 = document.getElementById("errPwd2");

    // ens assegurem que la classe de Bootstrap 'is-invalid' està desactivada
    // ja que si no és la primera execució, igual s'ha quedat alguna activa.
    // let errForms = document.getElementById("frmLogin") as HTMLDivElement;
    // let errForms = document.getElementsByClassName("frmLogin");
    // errForms.classList.remove("is-invalid");
    // errForms.remove("is-invalid");

    // evaluem els camps un per un
    // 1.- User - email ---------------------
    if (inpUsr.value == "") {
        // inpUsr.classList.add("is-invalid");
        Invalidar(inpUsr);
        errUsr.textContent = "Informació requerida.";
        msgErr();
    } else if (!valUsuariEmail(inpUsr)) {
        // inpUsr.classList.add("is-invalid");
        Invalidar(inpUsr);
        errUsr.textContent = "Sisplau entri un mail vàlid.";
        msgErr();
    } else {
        Validar(inpUsr);
    }
    // 2.- Password -------------------------
    if (inpPwd.value == "") {
        // inpPwd.classList.add("is-invalid");
        Invalidar(inpPwd);
        errPwd.textContent = "Info requerida";
        msgErr();
    } else if (!valUsuariPwd(inpPwd)) {
        // inpUsr.classList.add("is-invalid");
        Invalidar(inpPwd);
        errPwd.textContent = "Requisits: 8 caracters, may, mín, 1 número, 1 símbol.";
        msgErr();
    }
    // N.- Tot Validat OK --> podem processar l'usuari, i afegir-lo a la llista de Users
    else {
        Validar(inpUsr);
        Validar(inpPwd);
        alert("Usuari validat satisfactòriament.");

        if (inpUsr.value == MY_USER.getEmailUsuari()) {
            alert("Usuari " + MY_USER.getNomUsuari() + " validat i correcte, pots utilitzar WhatsCet :) ");
        }
    }
    return true;
}

function loadMessages(){
    document.getElementById("messages").innerHTML = "GRAELLA DE MISSATGES DE VARIES PERSONES.";
    
    const AVATAR = '<img src="./assets/avatar.png" width="80px" heigh="80px">';

    console.log('AVATAR vale: ', AVATAR);
    document.getElementById("messages").innerHTML = AVATAR;


    // const MESSAGES = fetchMessages("api_url: usuari/messages","method: GET","cnn: connection");
    const MESSAGES = [
        {
            "contactName" : "Gaby",
            "contactMail" : "gaby@gmail.com",
            "contactHour" : "12:25",
            "id_conversa" : "35"
        },
        {
            "contactName" : "Sergi",
            "contactMail" : "sergi@gmail.com",
            "contactHour" : "12:10",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Pau",
            "contactMail" : "pau@gmail.com",
            "contactHour" : "12:05",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Judith",
            "contactMail" : "judith@gmail.com",
            "contactHour" : "11:40",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Ignasi",
            "contactMail" : "ignasi@gmail.com",
            "contactHour" : "11:38",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Dario",
            "contactMail" : "dario@gmail.com",
            "contactHour" : "11:20",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Pere",
            "contactMail" : "pere@gmail.com",
            "contactHour" : "11:10",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Jordi",
            "contactMail" : "jordi@gmail.com",
            "contactHour" : "11:08",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Marta",
            "contactMail" : "marta@gmail.com",
            "contactHour" : "10:40",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Joan",
            "contactMail" : "joan@gmail.com",
            "contactHour" : "10:30",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Lluisa",
            "contactMail" : "lluisa@gmail.com",
            "contactHour" : "10:08",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Joaquim",
            "contactMail" : "joaqum@gmail.com",
            "contactHour" : "09:30",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Guillem",
            "contactMail" : "guillem@gmail.com",
            "contactHour" : "09:28",
            "id_conversa" : "39"
        },
        {
            "contactName" : "Joana",
            "contactMail" : "joana@gmail.com",
            "contactHour" : "09:15",
            "id_conversa" : "39"
        }
    ]

    console.log("MESSAGES: ", MESSAGES);

    let TABLE = ""
    TABLE = `<table>
            <tr class="backgroud-color:lightblue">
                <th class="width:20px">Foto</td>
                <th class="width:80px">Nom</td>
                <th class="width:80px">Mail</td>
                <th class="width:80px">Hora</td>
            </tr> `
    console.log("TABLE: ", TABLE);

    // alert("funció de carregar missatges");

    MESSAGES.map( (item)=>{
        let row =   `<tr>
                        <td class="width:20px heigth:20px">` + AVATAR + `</td>
                        <td class="width:80px">` + item.contactName + `</td>
                        <td class="width:80px">` + item.contactMail + `</td>                        
                        <td class="width:80px">` + item.contactHour + `</td>  
                    </tr> `
        TABLE = TABLE + row;
        }
    )

    // <td>MESSAGES.contactName ` [i.nom]  ` </td>
                        // <td>MESSAGES.contactName ` [i.hora]  ` </td>
                        // <td>MESSAGES.contactName ` [i.notif]  ` </td>
                        // <td>MESSAGES.contactName ` [i.id_conversa] ` </td>                        

    TABLE = TABLE + `</table>`
    
    console.log("TABLE: ", TABLE);
    document.getElementById("messages").innerHTML = TABLE;

    return true;
}

function checkLogin(){
    return true;
}

window.onload = ()=> {
    // alert("onload");
    let isLogin = checkLogin(); // DARIO

    !isLogin ? 
        document.getElementById("messages").innerHTML = "<br><br><br>Hola! qui ets? <br> Pots fer login al menú superior dret."
    :
        // document.getElementById("messages").innerHTML = "GRAELLA DE MISSATGES DE VARIES PERSONES."
        loadMessages();

    return true;
}
