const modal = document.querySelector(".modal");
const imagemInterrogacao = document.querySelector(".interrogacao");

const escondido = () => {
    modal?.classList.toggle("escondido");
};

/* imagemInterrogacao.addEventListener("click", escondido); */
imagemInterrogacao?.addEventListener("mouseenter", escondido);
imagemInterrogacao?.addEventListener("mouseleave", escondido);
