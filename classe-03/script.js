const imagens = document.querySelectorAll(".imagens img");
const imagemModal = document.querySelector(".modal img");
const modal = document.querySelector(".modal");
const linkModal = document.querySelector(".modal a");
/* console.log(imagemModal); */
/* console.log(imagens); */

const abrirModal = src => {
    imagemModal.setAttribute("src", src);
    modal.style.display = "flex";
};

const selecionarImagem = event => abrirModal(event.target.src)

const imagemSelecionada = imagem => imagem.addEventListener("click", selecionarImagem);

imagens.forEach(imagemSelecionada);

const sairModal = () => modal.style.display = "none";

modal.addEventListener("click", sairModal);

const abrirImagemNoutraPagina = () => linkModal.setAttribute("href", imagemModal.src)

imagemModal.addEventListener("click", abrirImagemNoutraPagina);

/* console.log(imagemModal); */
