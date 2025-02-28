// auth.js

export function setupAuth() {
    const form = document.getElementById("formulario_login");

    // Verificamos si estamos en la página de login
    if (document.getElementById("loginUsername")) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            const users = JSON.parse(localStorage.getItem("users") || "{}");

            if (users[username] && users[username] === password) {
                alert("Inicio de sesión exitoso");
                localStorage.setItem("loggedInUser", username);
                window.location.href = "index.html"; // Redirigir tras login
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        });

        // Si estamos en la página de registro
    } else if (document.getElementById("registerUsername")) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("registerUsername").value;
            const password = document.getElementById("registerPassword").value;

            const users = JSON.parse(localStorage.getItem("users") || "{}");

            if (users[username]) {
                alert("El usuario ya existe");
            } else {
                users[username] = password;
                localStorage.setItem("users", JSON.stringify(users));
                alert("Registro exitoso. Ahora puedes iniciar sesión.");
                window.location.href = "login.html";
            }
        });
    }
}

// Función para actualizar la interfaz en función del estado de la sesión
export function updateSessionUI() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const loginBtnLi = document.querySelector(".inicio_sesion");

    if (loginBtnLi) {
        if (loggedInUser) {
            loginBtnLi.innerHTML = `<a href="#" id="logoutBtn" data-i18n="CerrarSesion">Cerrar sesión</a>`;
            document.getElementById("logoutBtn").addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("loggedInUser");
                // Puedes redirigir o recargar la página para reflejar el cambio
                location.reload();
            });
        } else {
            loginBtnLi.innerHTML = `<a href="login.html">Iniciar sesión</a>`;
        }
    }
}
