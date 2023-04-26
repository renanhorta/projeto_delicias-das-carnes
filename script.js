function enviar() {
  let modal = document.querySelector("#modal")
  let nome = document.querySelector("#nome").value.trim();
  let email = document.querySelector("#email").value.trim();
  let telefone = document.querySelector("#telefone").value.trim();
  let telefoneLimpo = telefone.replace(/[()\-\s]/g, '');
  let mensagem = document.querySelector("#mensagem").value.trim();
  let radios = document.querySelectorAll(".radio");
  let radiosContagem = 0;


  reset();



  if (nome == "" || nome.split(" ").length < 2) {
    modal.innerHTML += "<span>" + "Por favor, insira um nome correto. Com nome e sobrenome" + "</span>" + "<br>";
    modal.classList.remove("modalHidden");
  }

  let posicaoArroba = email.indexOf("@");
  let posicaoPonto = email.indexOf(".");

  if (email == "" || posicaoArroba == -1 || posicaoPonto == -1 || !posicaoPonto > posicaoArroba + 1) {
    modal.innerHTML += "<span>" + "Por favor, insira um e-mail válido." + "</span>" + "<br>"
    modal.classList.remove("modalHidden");
  }

  if (telefoneLimpo.length <= 10 || telefoneLimpo.length > 11) {
    modal.innerHTML += "<span>" + "Por favor, insira um telefone válido. Com 11 números." + "</span>" + "<br>"
    modal.classList.remove("modalHidden");
  }

  radios.forEach((e) => {
    if (e.classList.contains("radioSelected") == true) {
      radiosContagem++;
    }
  })


  if (radiosContagem == 0) {
    modal.innerHTML += "<span>" + "Por favor, selecione uma preferencia de carne" + "</span>" + "<br>";
    modal.classList.remove("modalHidden");
  }

  if (texto.innerHTML == "Carne Favorita") {
    modal.innerHTML += "<span>" + "Por favor, selecione uma carne favorita." + "</span>" + "<br>";
    modal.classList.remove("modalHidden");
  }

  if (mensagem.length < 5) {
    modal.innerHTML += "<span>" + "Por favor, digite uma mensagem com pelo menos 5 caracteres." + "</span>" + "<br>";
    modal.classList.remove("modalHidden");
  }

  if (checkInt.classList.contains('invisivel') && checkPai.classList.contains('invisivel')) {
    modal.innerHTML += "<span>" + "Por favor, selecione ao menos uma opção de contato." + "</span>" + "<br>";
    modal.classList.remove("modalHidden");
  }

  if (modal.innerText == "") {

    modal.innerHTML += "<span>" + "Formulário enviado com Sucesso." + "</span>" + "<br>";
    modal.classList.remove("modalHidden");

    setTimeout(() => {
      modal.classList.add("modalHidden");
    }, 3000)
  }
}

function reset() {
  let modal = document.querySelector("#modal");
  modal.classList.add("modalHidden");
  modal.innerHTML = "";
  window.scrollTo(0, 0)
}


// RADIO BTN
let radioDivs = document.querySelectorAll(".radio");

radioDivs.forEach(function(elemento) {

  elemento.onclick = (function() {
    radioDivs.forEach(function(itemClicado) {
      itemClicado.classList.remove("radioSelected");
      itemClicado.nextElementSibling.classList.remove("spanSelected");
    })

    this.classList.add("radioSelected");
    this.nextElementSibling.classList.add("spanSelected");
  })

});

//SELECT
const inputSelect = document.querySelector("#inputSelect");
const dropDown = document.querySelector("#dropDown");
const filhos = document.querySelectorAll("#dropDown .item");
const texto = document.querySelector("#texto");


inputSelect.addEventListener("click", function() {

  const imgSeta = document.querySelector("#imgSeta");

  dropDown.classList.toggle("hidden");
  imgSeta.classList.toggle("rotated");
  texto.innerHTML = "Carne Favorita";

  filhos.forEach(function(elemento) {
    elemento.addEventListener("click", function() {
      texto.innerHTML = elemento.textContent;
      imgSeta.classList.toggle("rotated");
      dropDown.classList.add("hidden");
    })
  })
});

// CHECKBOX

const boxTodos = document.getElementById('boxTodos');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const marcada1 = document.getElementById('marcada1');
const marcada2 = document.getElementById('marcada2');
const checkInt = document.getElementById('checkInt');
const checkPai = document.getElementById('checkPai');

function marcar(el) {
  if (el == boxTodos) {
    if (box1.classList.contains('marcado') || box2.classList.contains('marcado') && boxTodos.classList.contains('marcado')) {
      boxTodos.classList.remove('marcado');
      box1.classList.remove('marcado');
      box2.classList.remove('marcado');
    } else {
      boxTodos.classList.add('marcado');
      box1.classList.add('marcado');
      box2.classList.add('marcado');
    }
  } else {
    boxTodos.classList.add('marcado');
    el.classList.toggle('marcado');
  }
  checar();
};

function checar() {
  if (box1.classList.contains('marcado') && box2.classList.contains('marcado')) {
    marcada1.classList.remove('invisivel');
    marcada2.classList.remove('invisivel');
    boxTodos.classList.add('marcado');
    checkInt.classList.add('invisivel');
    checkPai.classList.remove('invisivel');
  } else if (!box1.classList.contains('marcado') && !box2.classList.contains('marcado')) {
    marcada1.classList.add('invisivel');
    marcada2.classList.add('invisivel');
    boxTodos.classList.remove('marcado');
    checkInt.classList.add('invisivel');
    checkPai.classList.add('invisivel');
  } else if (!box1.classList.contains('marcado') && box2.classList.contains('marcado')) {
    marcada1.classList.add('invisivel');
    marcada2.classList.remove('invisivel');
    boxTodos.classList.add('marcado');
    checkInt.classList.remove('invisivel');
    checkPai.classList.add('invisivel');
  } else if (box1.classList.contains('marcado') && !box2.classList.contains('marcado')) {
    marcada1.classList.remove('invisivel');
    marcada2.classList.add('invisivel');
    boxTodos.classList.add('marcado');
    checkInt.classList.remove('invisivel');
    checkPai.classList.add('invisivel');
  }
}
