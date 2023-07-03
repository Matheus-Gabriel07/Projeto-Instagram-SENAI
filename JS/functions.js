var seguindo = false;
var contador = 0;

if (localStorage.getItem("contador")) {
  contador = parseInt(localStorage.getItem("contador"));
  document.getElementById("contador").innerHTML = contador;
}

if (localStorage.getItem("seguindo")) {
  seguindo = localStorage.getItem("seguindo") === "true";
  var botao = document.getElementById("botaoSeguir");
  botao.innerHTML = seguindo ? "Seguindo" : "Seguir";
  if (seguindo) {
    botao.classList.add("seguindo");
  }
}

function alterarTexto() {
  var botao = document.getElementById("botaoSeguir");
  var contadorElemento = document.getElementById("contador");

  contador = parseInt(contadorElemento.innerHTML) || 0;

  if (seguindo) {
    botao.innerHTML = "Seguir";
    contador--;
    botao.classList.remove("seguindo");
  } else {
    botao.innerHTML = "Seguindo";
    contador++;
    botao.classList.add("seguindo");
  }

  contadorElemento.innerHTML = contador;
  seguindo = !seguindo;

  localStorage.setItem("contador", contador);
  localStorage.setItem("seguindo", seguindo);
}