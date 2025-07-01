const emailInput = document.querySelector("#email");
const passwordlInput = document.querySelector("#password");
const entrarBtn = document.querySelector("#btn-entrar");
const form = document.querySelector("#form");

// adicionar evento a função (botão entrar)
entrarBtn.addEventListener("click", (e) => {

    // prevê, o comportamento padrão do botão, prevenir a validação
    e.preventDefault();

    if (emailInput.value == "") {
        alert("Preencha o campo vazio");
        return;
    }

    if (passwordlInput.value == "") {
        passwordlInput.style.backgroundColor = "red";
        alert("Prencha o campo vazio")

        setTimeout(() => {
            passwordlInput.style.backgroundColor = "white";

        }, 2000);

        return;
    }

    form.submit()
});