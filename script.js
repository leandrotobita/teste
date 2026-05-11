function validarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!regexEmail.test(email)) {
    alert("Digite um e-mail válido!");
    return;
  }

  alert("Mensagem enviada com sucesso!");
  document.getElementById("formContato").reset();
}

function alternarTema() {
  document.body.classList.toggle("dark-theme");
}

