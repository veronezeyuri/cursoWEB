const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// MOSTRAR SIDEBAR
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
//FECHAR SIDEBAR
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//Mudar tema
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

//Preencher pedidos na tabela
let table = document.querySelector("table tbody");
Orders.forEach((order) => {
  let linha = document.createElement("tr");
  console.log(order);
  let conteudo =
    "<td>" +
    order.productName +
    "</td>" +
    "<td>" +
    order.productNumber +
    "</td>" +
    ("<td class=" +
      (order.shipping == "Negado"
        ? "danger"
        : order.shipping == "Pendente"
        ? "warning"
        : "primary") +
      ">" +
      order.shipping +
      "</td>") +
    '<td class="primary">' +
    "Detalhes" +
    "</td>";

  linha.innerHTML = conteudo;
  table.appendChild(linha);
});
