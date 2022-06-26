import { obtenerUsuarios } from './http-provider.js';


const body  = document.body;
let tbody;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody id="cuerpoTabla">
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    tbody = document.querySelector("#cuerpoTabla");
}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( usuario, numero ) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar

    const html = `
        <td scope="col"> ${ numero } </td>
        <td scope="col"> ${ usuario.email } </td>
        <td scope="col"> ${ usuario.first_name } ${ usuario.last_name }</td>
        <td scope="col">
            <img class="img-thumbnail" src="${ usuario.avatar }">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbody.append(tr);

    // Añadir el table row (tr) dentro del TBody creado anteriormente

}


export const init = async() => {

    crearHtml();

    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación
    await obtenerUsuarios().then(
        (datos) => {
            let num = 0;
            for( let usr of datos )
            {
                num++;
                crearFilaUsuario(usr,num);
            }
        }
    );
}

