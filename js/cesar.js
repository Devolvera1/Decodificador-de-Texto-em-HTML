
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

document.querySelector('.criptografia-options').addEventListener('change', function() {
  if (this.value === 'substituicao') {
    criptografar();
  }
});

window.onload = function() {
  const selectElement = document.getElementById('criptografia-select');
  const keyInputElement = document.getElementById('Chave');

  selectElement.addEventListener('change', () => {
    if (selectElement.value === 'substituicao') {}
    else if (selectElement.value === 'deslocamento') {}
  });

  function criptografar() {
    let entrada = document.getElementById("input-text").value;
    let deslocamento = parseInt(document.getElementById("input-key").value);
    let saida = "";

    for (let i = 0; i < entrada.length; i++) {
      let letra = entrada.charAt(i);
      if (letra.match(/[a-z]/i)) {
        let codigo = entrada.charCodeAt(i);
        if (codigo >= 65 && codigo <= 90) {
          letra = String.fromCharCode(((codigo - 65 + deslocamento) % 26) + 65);
        }
        else if (codigo >= 97 && codigo <= 122) {
          letra = String.fromCharCode(((codigo - 97 + deslocamento) % 26) + 97);
        }
      }
      saida += letra;
    }

    document.getElementById("output-text").value = saida;
  }

  function descriptografar() {
    let entrada = document.getElementById("input-text").value;
    let deslocamento = parseInt(document.getElementById("input-key").value);
    let saida = "";

    for (let i = 0; i < entrada.length; i++) {
      let letra = entrada.charAt(i);
      if (letra.match(/[a-z]/i)) {
        let codigo = entrada.charCodeAt(i);
        if (codigo >= 65 && codigo <= 90) {
          letra = String.fromCharCode(((codigo - 65 - deslocamento + 26) % 26) + 65);
        }
        else if (codigo >= 97 && codigo <= 122) {
          letra = String.fromCharCode(((codigo - 97 - deslocamento + 26) % 26) + 97);
        }
      }
      saida += letra;
    }

    document.getElementById("output-text").value = saida;
  }
};
