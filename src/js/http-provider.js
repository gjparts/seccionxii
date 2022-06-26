const jokeURL = 'https://api.chucknorris.io/jokes/random';
const usuariosURL = 'https://reqres.in/api/users?page=2';

//Cloudinary preset
const cloudinaryPreset = "grn3zthk";
const cloudinaryURL = " https://api.cloudinary.com/v1_1/dsfzukf8o/image/upload";

export const obtenerChiste = async () => {
    try{
        //enviar la peticion y esperar a que responda
        const resp = await fetch(jokeURL);

        if( !resp.ok )
            throw 'No se pudo procesar la petición';
        
        //si llega hasta aqui entonces hubo respuesta positiva
        //por lo tanto convertimos la respuesta a json
        //y la procesamos (recordar que el json devuelto es otra promise)
        const chiste = await resp.json();

        return chiste;
    }catch(ex){
        console.log(ex);
    }
}

export const obtenerUsuarios = async () => {
    const resp = await fetch(usuariosURL);
    const usuarios = ( await resp.json() ).data;

    return usuarios;
}

export const subirImagen = async (archivo) => {
    //crear el formData (formulario en html)
    const formData = new FormData();
    formData.append("upload_preset",cloudinaryPreset);
    formData.append("file",archivo);
    
    try{
        const resp = await fetch(cloudinaryURL, {
            method: "POST",
            body: formData
        });

        if( resp.ok )
        {
            const cloudResp = await resp.json();
            //console.log(cloudResp);
            return cloudResp.secure_url;
        }
        else
        {
            throw await resp.json();
        }
    }catch(err){
        throw err;
    }
}