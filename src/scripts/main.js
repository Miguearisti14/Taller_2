import { initializeSlider } from "./slider.js";
import { setupNavbar } from "./navbar.js";
import { setupForm } from "./form.js";
import { updateLanguage, getUserLang, setUserLang } from "./i18n.js";
import { initializeDarkMode } from './darkmode.js';
import { setupAuth, updateSessionUI } from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('.slider')) {
        initializeSlider();
    }

    if (document.querySelector('.nav-toggle')) {
        setupNavbar();
    }

    // Configuración de formularios de autenticación
    if (document.querySelector('#formulario_login')) {
        setupAuth();
    }

    // Actualiza la interfaz de sesión en el header
    updateSessionUI();

    initializeDarkMode();

    // Aplicar idioma inicial
    updateLanguage(getUserLang());

    document.querySelector("#toggleLanguage").addEventListener("click", () => {
        const newLang = getUserLang() === "es" ? "en" : "es";
        setUserLang(newLang);
        updateLanguage(newLang);
    });

    // Actualizar placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        el.setAttribute("placeholder", polyglot.t(key));
    });
});
