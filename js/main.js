/*
var nome = "Igor Avila";
alert("Bem vindo " + nome);
*/


function botaoValidaIdade() {
    var idade = prompt("Qual sua idade") //abre popup perguntando idade
    if (validaIdade(idade)) {
        document.getElementById("textResult").innerHTML = "<b>Maior de idade</b>"
    } else {
        document.getElementById("textResult").innerHTML = "<i>Menor de idade</i>"
    }
}

function openGoogle() {
    window.open("https://google.com")
        //window.location.href = "https://google.com" //para ser na mesma pagina
}

function mouseOn(element) {
    element.innerHTML = "Mouse em cima"

}

function mouseOut(element) {
    element.innerHTML = "Passe o mouse aqui"
}

function funcaoChange(element) {
    console.log(element.value)
}

//tipos de variaveis são dinamicas 10 é int, "10" é string
//operações são simples
//var nome = "Igor Avila"

//lista 
//var lista_fruta = ["maçã", "laranja", "melancia"]
//lista_fruta.pop("laranja") isso não faz sentido o pop sempre remove ultimo elemento
//console.log(lista_fruta)
//lista.push("pera")
//lista.pop remove ultimo elemento
//lista.lenght
//lista.reverse
//lista.toString()
//lista.join("|") pra transformar em string com o termo desejado separando os elementos

//dicionario e lista
//var frutas = [{ nome: "maçã", cor: "vermelho" }, { nome: "laranja", cor: "laranja" }]

//data - tem getDay, getMonth, etc
//var d = new Date()

//prompt de pergunta
//var idade = prompt("Qual sua idade") //abre popup perguntando idade

//condicional
// if (idade >= 18) {
//     alert("maior de idade")
// } else {
//     alert("menor de idade")
// }
// if (validaIdade(idade)) {
//     alert("maior de idade")
// } else {
//     alert("menor de idade")
// }


//repetição
// var count = 0
// while (count < 5) {
//     console.log(count)
//     count++
// }
// for (var count = 0; count < 5; count++) {
//     console.log(count)
// }


//alerta na página 
//alert("Bem vindo " + nome)

//Print no console
//console.log(nome + " é demais!")
//console.log(nome.replace("Avila", "Souza") + " é como ta no Linkedin")


//functions
// function soma(n1, n2) {
//     return n1 + n2
// }

function validaIdade(idade) {
    var maioridade = 18
    return idade >= maioridade
}