const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const senhaConfirma = document.querySelector("#senha-confirma");
const formulario = document.querySelector("#form");
const control = document.querySelectorAll(".control");

formulario.addEventListener("submit", verficarInputs);

function verficarInputs(e) {
  e.preventDefault();
  const nomeValue = nome.value;
  const emailValue = email.value;
  const senhaValue = senha.value;
  const senhaConfirmaValue = senhaConfirma.value;

  const indiceNome = 0;
  const indiceEmail = 1;
  const indiceSenha = 2;
  const indiceSenhaConfirma = 3;

  if (nomeValue == "") {
    mostrarError(indiceNome, "O nome do usuário é obrigatorio.");
  } else {
    mostrarSucesso(indiceNome);
  }

  if (emailValue == "") {
    mostrarError(indiceEmail, "O email é obrigatório");
  }else if (!validarEmail(emailValue)) {
    mostrarError(indiceEmail, "Por favor, Insira um email valido");
  } else {
    mostrarSucesso(indiceEmail);
  }


  if (senhaValue == "") {
    mostrarError(indiceSenha, "A senha é obrigatória");
  } else {
    if (senhaValue.length < 3) {
      mostrarError(indiceSenha, "Sua senha deve ter no mínimo 3 caracteres");
    } else {
      mostrarSucesso(indiceSenha);
    }
  }

  if (senhaConfirmaValue == "") {
    mostrarError(indiceSenhaConfirma, "A senha é obrigatória");
  } else {
    if (senhaValue !== senhaConfirmaValue) {
      mostrarError(
        indiceSenhaConfirma,
        "As senhas não são correspondentes. Por favor, tente novamente"
      );
    } else if (senhaConfirmaValue.length < 8) {
      mostrarError(
        indiceSenhaConfirma,
        "Sua senha deve ter no mínimo 8 caracteres"
      );
    } else {
      mostrarSucesso(indiceSenhaConfirma);
    }
  }
}

function mostrarError(indice, mensagem) {
  const small = control.item(indice).querySelector("small");
  control.item(indice).className = "control erro";
  small.innerText = mensagem;
}
function mostrarSucesso(indice) {
  control.item(indice).className = "control sucesso";
}
function validarEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
