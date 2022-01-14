const imagem = document.querySelector(".botao-senha img");
const inputSenha = document.querySelector("#senha");

const mudarApresentacaoSenha = (event) => {
    event.preventDefault();
    // talvez usar ternário?
    const olhoFechado = "assets/olho-fechado.svg";
    const olhoAberto = "assets/olho-aberto.svg";

    const imagemSrc = imagem.getAttribute("src");

    if (imagemSrc !== olhoFechado) {
        imagem.setAttribute("src", olhoFechado);
        inputSenha.setAttribute("type", "password");
    } else {
        imagem.setAttribute("src", olhoAberto);
        inputSenha.setAttribute("type", "text");
    }
};

imagem.addEventListener("click", mudarApresentacaoSenha); 
