/*Calculadora */
function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1
}

var coll = document.getElementsByClassName("collapsible")

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

const accordion = window.document.getElementsByClassName('contentBx');

for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    });
}
/*Barra de pesquisa */
const lista = [
  {
    title: "adição",
    url: "adicao.html"
  },
  {
    title: "aritmetica",
    url: "aritmetica.html"
  },
  {
    title: "bhaskara",
    url: "bhaskara.html"
  },
  {
    title: "divisão",
    url: "divisao.html"
  },
  {
    title: "multiplicação",
    url: "multiplicacao.html"
  },
  {
    title: "pitágoras",
    url: "pitagoras.html"
  },
  {
    title: "regra de 3",
    url: "regra-de-3.html"
  },
  {
    title: "subtração",
    url: "subtracao.html"
  },
  {
    title: "tabuada",
    url: "tabuada.html"
  }
];

const title = document.getElementById("title");
const list = document.getElementById("lista");

title.addEventListener("keyup", function(event) {

    const matchs = lista.filter(value => {
      return value.title.indexOf(this.value) !== -1;
    });
    list.innerHTML = "";
    for (let lista of matchs) {
      list.innerHTML += "<li class = 'lista-pesquisa'><a href='"+lista.url+"'>"+lista.title+"</a></li>";
    }
  });