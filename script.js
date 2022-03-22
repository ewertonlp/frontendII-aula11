let formulario = document.querySelector("form");
let recebeDados = document.querySelector(".resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let sobreNome = document.querySelector("#sobrenome").value;

  let nomeCompleto = name.concat(" ", sobreNome);

  recebeDados.innerHTML = `
  <h3>Resultados</h3>

  <div class="dados">
    <p>concat():</p>
    <label for="">Nome Completo:${nomeCompleto}</label>
  </div>

  <div class="dados">
    <p>trim():</p>
    <label for="">Nome:${name.trim()}</label><br />
    <label for="">Sobrenome:${sobreNome.trim()}</label>
  </div>

  <div class="dados">
  <p>toUpperCase():</p>
  <label for="">Nome Completo:${nomeCompleto.toUpperCase()}</label>
</div>

  <div class="dados">
    <p>toLowerCase():</p>
    <label for="">Nome Completo:${nomeCompleto.toLowerCase()}</label>
  </div>

  <div class="dados">
    <p>replaceAll():</p>
    <label for="">${nomeCompleto
      .replaceAll("a", "@")
      .replaceAll("e", "3")}</label>
  </div>
  `;
});
