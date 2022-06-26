import { subirImagen } from './http-provider'

const body = document.body;
let inputFile, imgFoto;

export const crearInputfileHtml = () => {
    const html = `
    <h1 class='mt-5'>Subir archivos</h1>
    <hr>

    <label>Seleccione una fotografia: </label>
    <input id="archivo" type='file' accept="image/png, image/jpeg">
    <br>
    <img class="img-thumbnail" id="foto" src="">
    `;

    body.innerHTML = html;
    inputFile = document.querySelector("#archivo");
    imgFoto = document.querySelector("#foto");
}

const eventos = () => {
    inputFile.addEventListener('change', 
        (event) =>{
            //console.log(event.target.files[0]);
            const file = event.target.files[0];
            subirImagen(file).then(
                (resp) => {
                    //console.log(resp);
                    imgFoto.src = resp;
                }
            );
        }
    );
}

export const init = () => {
    crearInputfileHtml();
    eventos();
}