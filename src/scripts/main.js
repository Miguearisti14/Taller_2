import { initializeSlider } from "./slider.js";
import { setupNavbar } from "./navbar.js";
import { setupForm } from "./form.js";
import { initializeDarkMode } from './darkmode.js'; // Importar el nuevo módulo


document.addEventListener("DOMContentLoaded", () => {
    initializeSlider();
    setupNavbar();
    setupForm();
    initializeDarkMode(); // Inicializa el botón de Dark Mode
});