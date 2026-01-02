class GestorIdioma {

    DetectarIdioma() {
        const lenguajeUsuario = navigator.language || navigator.userLanguage;

        if (lenguajeUsuario.startsWith("es")) {
            console.log("Idioma español detectado");
            return "es";
        } else {
            console.log("Idioma no español, auto: inglés");
            return "en";
        }
    }
}
