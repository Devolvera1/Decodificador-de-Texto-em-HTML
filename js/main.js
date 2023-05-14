function disableScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // desabilitar a rolagem
  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  };
}


function limpar() {
  document.getElementById("input-text").value = "";
  document.getElementById("output-text").value = "";
}

function criptografar() {
  let entrada = document.getElementById("input-text").value;
  let saida = "";

  for (let i = 0; i < entrada.length; i++) {
    let letra = entrada.charAt(i);

    switch (letra) {
      case "a":
        saida += "ai";
        break;
      case "e":
        saida += "enter";
        break;
      case "i":
        saida += "imes";
        break;
      case "o":
        saida += "ober";
        break;
      case "u":
        saida += "ufat";
        break;
      case "5":
        saida += "993";
        break;
      case "7":
        saida += "865";
        break;
      case "9":
        saida += "653";
        break;
      default:
        saida += letra;
        break;
    }
  }

  document.getElementById("output-text").value = saida;
}

function descriptografar() {
  let entrada = document.getElementById("input-text").value;
  let saida = "";

  for (let i = 0; i < entrada.length; i++) {
    let letra = entrada.charAt(i);

    if (letra == "a" && entrada.charAt(i + 1) == "i") {
      saida += "a";
      i++;
    } else if (letra == "e" && entrada.substring(i, i + 5) == "enter") {
      saida += "e";
      i += 4;
    } else if (letra == "i" && entrada.substring(i, i + 4) == "imes") {
      saida += "i";
      i += 3;
    } else if (letra == "o" && entrada.substring(i, i + 4) == "ober") {
      saida += "o";
      i += 3;
    } else if (letra == "u" && entrada.substring(i, i + 4) == "ufat") {
      saida += "u";
      i += 3;
    } else if (letra == "9" && entrada.substring(i, i + 3) == "653") {
      saida += "9";
      i += 2;
    } else if (letra == "7" && entrada.substring(i, i + 3) == "865") {
      saida += "7";
      i += 2;
    } else if (letra == "5" && entrada.substring(i, i + 3) == "993") {
      saida += "5";
      i += 2;
    } else {
      saida += letra;
    }
  }

  document.getElementById("output-text").value = saida;
}

function copiarTexto() {
  let textoCopiado = document.getElementById("output-text");
  textoCopiado.select();
  document.exeCommand("copy");
  alert("Texto copiado: " + textoCopiado.value);
}
