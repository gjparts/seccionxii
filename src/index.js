//import { obtenerUsuarios } from './js/http-provider.js';
//import { init } from './js/chistes-page.js';
//import { init } from './js/usuarios-page.js';
import {init} from './js/archivos-page';

init();
/*import * as CRUD from './js/crud-provider.js';

CRUD.getUsuario(1).then(
    console.log
);

CRUD.crearUsuario( { name: 'Gerardo Portillo', job: 'Carpintero' } ).then(
    console.log
);

CRUD.actualizarUsuario(1,{ name: 'Curco Bain', job: 'Guitarrista' }).then(
    console.log
);

CRUD.eliminarUsuario(1).then(
    console.log
);*/


//obtenerUsuarios().then(d => console.log(d));
//init();

//ejecutar el fetch (con un promise hell)
    // fetch(jokeURL)
    // .then(
    // (response) => {
    //     //response.json() aun sigue siendo una promesa, por lo
    //     //tanto al cunmplirse debemos devolver la data
    //     response.json().then(
    //         (data) => {
    //             console.log(data.id);
    //             console.log(data.value);
    //         }
    //     );
    // }
    // );

    //ejecutar el fetch sin PROMISE HELL
    // const resp = await fetch(jokeURL).then(r => r.json()).then(
    //     (data) => {
    //         console.log(data.id);
    //         console.log(data.value);
    //     }
    // );

// obtenerChiste().then(
//     (data) => {
//         console.log(data);
//     }
// );

