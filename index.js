const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});


  const botao = document.getElementById("btnVerAgora"); // Referência ao botão
  const secaoDestino = document.getElementById("selecao"); // Referência à seção de destino
  
  botao.addEventListener("click", () => {
    secaoDestino.scrollIntoView({ behavior: "smooth" }); // Rolagem suave para a seção
  });
