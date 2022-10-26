//MenuToggle
let MenuToggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

MenuToggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});

//add hovered class in selected list item
let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));
{
}

document.querySelector(".theme-toggler").addEventListener("click", () => {
  document.querySelector(".sun-logo").classList.toggle("animated-sun");
  document.querySelector(".moon-logo").classList.toggle("animated-moon");
  document.querySelector("body").classList.toggle("dark-theme-variables");
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
    "<td>" +
    order.price +
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

//Preencher updates
let tabelaUpdates = document.querySelector("div.recentCustomers > table");
Update.forEach((pedidos) => {
  let linha = document.createElement("tr");
  console.log(pedidos);
  let conteudo =
    "<td width='60'>" +
    "<div class='imgBox'>" +
    "<img src='images/" +
    pedidos.clientProfile +
    "'" +
    "/>" +
    "</div>" +
    "</td>" +
    "<td class='message'>" +
    "<p>" +
    "<b>" +
    pedidos.clientName +
    "</b> Recebeu o pedido " +
    pedidos.orderNumber +
    "</p>" +
    "<small class='text-muted'>Há 2 minutos atrás</small>" +
    "</td>";

  linha.innerHTML = conteudo;
  tabelaUpdates.appendChild(linha);
});
