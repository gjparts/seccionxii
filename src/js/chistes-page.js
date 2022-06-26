import { obtenerChiste } from "./http-provider.js";

//refencias al dom
const body = document.body;
let btnOtroChiste, olChiste;

//funcion inicializadora para crear esta pagina (publica)
export const init = () => {
    crearChistesHtml();
    eventos();
}

//no se le pone export porque no se podra llamar desde afuera
const crearChistesHtml = () => {
    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button id="btnChiste" class="btn btn-primary">Otro chiste</button>

    <ol id="olChiste" class="mt-2 list-group">
    </ol>
    `;

    const divChistes = document.createElement("div");
    divChistes.innerHTML = html;

    body.append(divChistes);
}

//eventos de esta pagina
const eventos = () => {
    btnOtroChiste = document.querySelector("#btnChiste");
    olChiste = document.querySelector("#olChiste");

    btnOtroChiste.addEventListener("click", async () => {
        //el await detiene la ejecucion hasta que se reciba el chiste
        btnOtroChiste.disabled = true;
        dibujarChiste( await obtenerChiste() );
        btnOtroChiste.disabled = false;
    });
}

//esperamos un id y eun value
const dibujarChiste = (chiste) => {
    const olItem = document.createElement("li");
    olItem.innerHTML = `<b>${chiste.id}</b>: ${ chiste.value }`;
    olChiste.classList.add( "list-group-item" );
    olChiste.append(olItem);
}