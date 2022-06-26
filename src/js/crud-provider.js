const urlCRUD = 'https://reqres.in/api/users';

export const getUsuario = async ( id ) => {
    //es una peticion GET
    const resp = await fetch(`${ urlCRUD }/${ id }`);
    const data = await resp.json();

    return data.data;
}

export const crearUsuario = async ( usuario ) => {
    //es una peticion POST
    const resp = await fetch(`${ urlCRUD }`,
    {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type' : 'application/json'
        }
    } );
    const data = await resp.json();

    return data;
}

export const actualizarUsuario = async (id, usuario) => {
    //es una peticion PUT
    const resp = await fetch(`${ urlCRUD }/${ id }`,
    {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type' : 'application/json'
        }
    } );
    const data = await resp.json();

    return data;
}

export const eliminarUsuario = async (id) => {
    //es una peticion DELETE
    const resp = await fetch(`${ urlCRUD }/${ id }`,
    {
        method: 'DELETE',
    } );
    
    return resp.ok ? 'Borrado' : 'No se pudo eliminar';
}