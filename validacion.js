document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario");
    const usuario = document.getElementById("usuario");
    const correo = document.getElementById("correo");
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const contador = document.getElementById("contador");
    const btnEnviar = document.getElementById("btnEnviar");
    const mensajeGeneral = document.getElementById("mensajeGeneral");

    let intentosFallidos = 0;

    const regexUsuario = /^[a-zA-Z0-9._-]{3,}$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPasswordFuerte = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{10,}$/;

    // VALIDAR USUARIO
    usuario.addEventListener("input", function () {

        if (regexUsuario.test(this.value)) {
            this.classList.add("is-valid");
            this.classList.remove("is-invalid");
        } else {
            this.classList.add("is-invalid");
            this.classList.remove("is-valid");
        }

    });

    // VALIDAR CORREO
    correo.addEventListener("input", function () {

        if (regexCorreo.test(this.value)) {
            this.classList.add("is-valid");
            this.classList.remove("is-invalid");
        } else {
            this.classList.add("is-invalid");
            this.classList.remove("is-valid");
        }

    });

    // MOSTRAR / OCULTAR CONTRASEÑA
    togglePassword.addEventListener("click", () => {

        password.type = password.type === "password" ? "text" : "password";

    });

    // CONTADOR + FORTALEZA
    password.addEventListener("input", function () {

        contador.textContent = this.value.length + " caracteres";

        if (regexPasswordFuerte.test(this.value)) {
            this.classList.add("is-valid");
            this.classList.remove("is-invalid");
        } else {
            this.classList.add("is-invalid");
            this.classList.remove("is-valid");
        }

    });

    // FUNCIÓN PARA MOSTRAR MENSAJE EN VISTA
    function mostrarMensaje(texto, tipo) {
        mensajeGeneral.innerHTML = `
            <div class="alert alert-${tipo} mt-3">
                ${texto}
            </div>
        `;
    }

    // BLOQUEAR FORMULARIO
    function bloquearFormulario() {

        btnEnviar.disabled = true;

        mostrarMensaje("Formulario bloqueado por 30 segundos.", "danger");

        setTimeout(() => {
            btnEnviar.disabled = false;
            intentosFallidos = 0;
            mensajeGeneral.innerHTML = "";
        }, 30000);
    }

    // ENVÍO DEL FORMULARIO
    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const usuarioValido = regexUsuario.test(usuario.value);
        const correoValido = regexCorreo.test(correo.value);
        const passwordValida = regexPasswordFuerte.test(password.value);

        if (usuarioValido && correoValido && passwordValida) {

            mostrarMensaje("Formulario enviado correctamente ✅", "success");

            formulario.reset();

            usuario.classList.remove("is-valid");
            correo.classList.remove("is-valid");
            password.classList.remove("is-valid");

            contador.textContent = "0 caracteres";

            intentosFallidos = 0;

        } else {

            intentosFallidos++;

            mostrarMensaje("Hay errores en el formulario.", "warning");

            if (intentosFallidos >= 3) {
                bloquearFormulario();
            }

        }

    });

});
