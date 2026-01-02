class GestorPersonaje{
CargarDatosJSON(lista) {
    return fetch("json/data.json")
        .then(response => response.json())
        .then(datos => {
            datos.forEach(p => {
                let personaje = new Personaje(
                    p.nombre,
                    p.casa,
                    p.genero,
                    p.magico,
                    p.especie,
                    p.nacimiento,
                    p.alineamiento,
                    p.sangre,
                    p.estado,
                    p.rutaImagenIcon,
                    p.rutaImagenCromo
                );
                lista.push(personaje);
            });

            console.log("PERSONAJES CARGADOS: ", lista);
            return lista; // <-- IMPORTANTE
        });
}

        
}