import Polyglot from "node-polyglot";

const translations = {
    es: {
        home: "Inicio",
        destinations: "Destinos",
        experiences: "Experiencias",
        contact: "Contacto",
        dark_mode: "Modo Oscuro",
        light_mode: "Modo Claro",
        change_language: "Cambiar Idioma",
        welcome: "Bienvenido a nuestro sitio",
        description: "Explora nuestras funcionalidades.",
        eslogan: "Viaja...\nDescubre...\ny Vive",
        visita: "Visita Múltiples Destinos",
        Paris: "París",
        Egipto: "Egipto",
        Turquia: "Turquía",
        Roma: "Roma",
        Vive: "Vive la Experiencia",
        Formulario: "Formulario de Contacto",
        Nombre: "Nombre",
        Correo: "Correo",
        Asunto: "Asunto",
        Mensaje: "Mensaje",
        Enviar: "Enviar Información",
        Sedes: "Nuestras Sedes",
        Medellin: "Medellín",
        Cordoba: "Córdoba",
        CampoNombre: "Ingrese su Nombre",
        CampoCorreo: "Ingrese su Correo",
        CampoAsunto: "Ingrese su Asunto",
        CampoMensaje: "Ingrese su Mensaje"

    },
    en: {
        home: "Home",
        destinations: "Destinations",
        experiences: "Experiences",
        contact: "Contact",
        dark_mode: "Dark Mode",
        light_mode: "Light Mode",
        change_language: "Change Language",
        welcome: "Welcome to our site",
        description: "Explore our features.",
        eslogan: "Travel...\nDiscover...\n& Live",
        visita: "Visit Multiple Destinations",
        Paris: "Paris",
        Egipto: "Egypt",
        Turquia: "Turkey",
        Roma: "Rome",
        Vive: "Live the Experience",
        Formulario: "Contact Form",
        Nombre: "Name",
        Correo: "Email",
        Asunto: "Affair",
        Mensaje: "Mesagge",
        Enviar: "Send Information",
        Sedes: "Our Headquarters",
        Medellin: "Medellin",
        Cordoba: "Cordoba",
        CampoNombre: "Enter your Name",
        CampoCorreo: "Enter your Email",
        CampoAsunto: "Enter your Affair",
        CampoMensaje: "Enter your message"
    }
};

// Obtener el idioma guardado o usar español por defecto
let userLang = navigator.language.startsWith("es") ? "es" : "en"; // Idioma predeterminado
const polyglot = new Polyglot({ phrases: translations[userLang], locale: userLang });

// Se actualiza idioma y placeholders
export function setUserLang(newLang) {
    userLang = newLang;
    updateLanguage(newLang);

}

export function updateLanguage(Lang) {
    if (translations[Lang]) {
        polyglot.replace(translations[Lang]);
        localStorage.setItem("language", Lang);

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            el.textContent = polyglot.t(key);
            el.innerHTML = polyglot.t(key).replace(/\n/g, "<br>"); // 🔹 Reemplaza \n por <br>
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            el.setAttribute("placeholder", polyglot.t(key));
        });

    }

}

// Exportar idioma actual
export { polyglot, userLang };

export function getUserLang() {
    return userLang;
}
