const emailInput = document.querySelector("#email");
const passwordlInput = document.querySelector("#password");

const entrarBtn = document.querySelector("#btn-entrar");
const form = document.querySelector("#form");
// 
const erroPass = document.querySelector("#erro-password");
const erroEmail = document.querySelector("#erro-email");

// adicionar evento a função (botão entrar)
entrarBtn.addEventListener("click", (e) => {

    // prevê, o comportamento padrão do botão, prevenir a validação
    e.preventDefault();

    if (emailInput.value == "") {
        emailInput.style.borderColor = "red";
        emailInput.style.borderWidth = "2px";
        erroEmail.style.display = "block"; // mostra o texto
        

        setTimeout(() => {
            erroEmail.style.display = "none";
            emailInput.style.borderColor = "rgba(173, 177, 177, 0.4)";
            emailInput.style.borderWidth = "0.1px";
            

        }, 5000);
        
        return;
    }

    if (passwordlInput.value == "") {
        passwordlInput.style.borderColor = "red";
        passwordlInput.style.borderWidth = "2px";
        erroPass.style.display = "block"; 

    
        setTimeout(() => {
            erroPass.style.display = "none";
            passwordlInput.style.borderColor = "rgba(173, 177, 177, 0.4)";
            passwordlInput.style.borderWidth = "0.1px";

        }, 3000);

        return;
    }

    form.submit()
});
