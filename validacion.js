document.addEventListener("DOMContentLoaded", () => {

    const usuario = document.getElementById("usuario");

    usuario.addEventListener("input", function () {
        // Convertir a minúsculas
        this.value = this.value.toLowerCase();
        // Expresión regular solo letras
        const soloLetras = /^[a-záéíóúñ]+$/;
        if (this.value === "") {
            // Campo obligatorio vacío
            this.classList.remove("is-valid");
            this.classList.add("is-invalid");
        } else if (!soloLetras.test(this.value)) {
            // Tiene algo inválido
            this.classList.remove("is-valid");
            this.classList.add("is-invalid");
        } else {
            // Todo correcto
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }

    });

});

document.addEventListener("DOMContentLoaded", () => {

    const password = document.getElementById("password");

    password.addEventListener("input", function () {

        if (this.value.length === 0) {
            // Campo vacío
            this.classList.remove("is-valid");
            this.classList.add("is-invalid");

        } else if (this.value.length < 10) {
            // Menos de 10 caracteres
            this.classList.remove("is-valid");
            this.classList.add("is-invalid");

        } else {
            // Correcto
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }

    });

});

