"use strict"

document.addEventListener("DOMContentLoaded", carregarLivros)

async function carregarLivros() {
  const tabelaBody = document.getElementById("tabelaBody");

  try {
    const resposta = await fetch("COLOCAR A API AQUI", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar livros: ${resposta.status}`)
    }

    const livros = await resposta.json();

    tabelaBody.innerHTML = ""
    
    livros.forEach((livro) => {
      const linha = document.createElement("tr")

      linha.innerHTML = `
        <td>${livro.id}</td>
        <td>${livro.nome || livro.titulo}</td>
        <td id="botoes">
          <img src="../SRC/IMG/HOME/editar.png" alt="Editar" class="editar" data-id="${livro.id}">
          <img src="../SRC/IMG/HOME/excluir.png" alt="Excluir" class="excluir" data-id="${livro.id}">
        </td>
      `;

      tabelaBody.appendChild(linha)
    });

    adicionarEventos()
  } catch (erro) {
    console.error("Erro ao carregar livros:", erro)
  }
}

function adicionarEventos() {
  const botoesEditar = document.querySelectorAll(".editar");
  const botoesExcluir = document.querySelectorAll(".excluir");

  botoesEditar.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id
      console.log("Editar livro:", id)
    });
  });

  botoesExcluir.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id
      console.log("Excluir livro:", id)
    });
  });
}
