function minhaFuncao(param){
    //bloco de código
}

minhaFuncao("param")

//expressão de função

// diferenca principal: HOISTING
// funcoes e var sao "listadas" no topo do arquivo

function apresentar(){
    return "olá"
}

console.log(apresentar())

console.log(soma(1,1))
const soma = function(num1, num2) {
    return num1 + num2}