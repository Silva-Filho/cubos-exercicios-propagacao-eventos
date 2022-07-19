const imagens = document.querySelectorAll(".imagens img");
const imagemModal = document.querySelector(".modal img");
const modal = document.querySelector(".modal");
const linkModal = document.querySelector(".modal a");

const abrirModal = src => {
    imagemModal.setAttribute("src", src);
    modal.style.display = "flex";
    linkModal.setAttribute("href", src);
};

const selecionarImagem = event => abrirModal(event.target.src)

const imagemSelecionada = imagem => imagem.addEventListener("click", selecionarImagem);

imagens.forEach(imagemSelecionada);

const sairModal = () => modal.style.display = "none";

modal.addEventListener("click", sairModal);

const abrirImagemNoutraPagina = (event) => event.stopPropagation();

imagemModal.addEventListener("click", abrirImagemNoutraPagina);
