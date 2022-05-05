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

