"use strict";

const buttonLogin = document.getElementById("loginButton");

async function loginSubmit(event) {
  event.preventDefault();

  const userInput = document.getElementById("usernameInput").value;
  const passwordInput = document.getElementById("passwordInput").value;

  const dados = {
    login: userInput,
    senha: passwordInput
  };

  try {
    const response = await fetch("COLOCAR_A_URL_AQUI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    window.location.href = "/PAGES/home.html";
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

buttonLogin.addEventListener("click", loginSubmit);
