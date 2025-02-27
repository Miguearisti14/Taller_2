import { initializeSlider } from "./slider.js";
import { setupNavbar } from "./navbar.js";
import { setupForm } from "./form.js";
import { updateLanguage, getUserLang, setUserLang } from "./i18n.js";
import { initializeDarkMode } from './darkmode.js';

document.addEventListener("DOMContentLoaded", () => {
    initializeSlider();
    setupNavbar();
    setupForm();
    initializeDarkMode();

    // Aplicar idioma inicial
    updateLanguage(getUserLang());

    // Evento para cambiar idioma
    document.querySelector("#toggleLanguage").addEventListener("click", () => {
        const newLang = getUserLang() === "es" ? "en" : "es";
        setUserLang(newLang); // ✅ Actualiza el idioma correctamente
        updateLanguage(newLang);
    });

    // Actualizar placeholders de inputs
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        el.setAttribute("placeholder", polyglot.t(key));
    });
});
