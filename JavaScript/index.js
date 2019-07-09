//Forma de printar no console.
console.log('Printando no console.')

var nome = "Lucas" //String
var idade = 18     //Number
var peso = 50.1    //Number
var homem = true   //Boolean

/*
    O tipo da variável pode ser trocado, mas não é considerado uma boa prática.
Ex.:    homem = "false"
    caso essa linha saia do comentário, a variável 'homem' se tornará uma do tipo string.
*/

console.log('Ex var:', nome, typeof(nome))
console.log('Ex var:', idade, typeof(idade))
console.log('Ex var:', peso, typeof(peso))
console.log('Ex var:', homem, typeof(homem))

var nomes = [
    //Exemplo de array e suas respectivas posições.
    'Lucas', //[0] 
    'Luan',  //[1]
    'Paulo'  //[2]
]
//Monstra no console o nome referente a posição indicada.
console.log('Ex array:',nomes[0]) 

var pessoa = {
    //Exemplo de objeto 
    nome: 'Alves',
    idade: 18,
    //Também pode receber arrays.
    amigos : [
        'Doug', 
        'Lael',  
        'João'  
    ]
}
/*  Mostra no console o nome a idade e os amigos 
    informados no objeto.
    No caso de amigos, que é um array, a declaração pode
    ser feita de duas formas: 
    - pessoa.amigos     //Mostra todos do array
    - pessoa.amigos[0]  //Mostra apenas o selecionado.
*/
console.log('Ex objeto:',pessoa.nome, pessoa.idade, pessoa.amigos) 

/*
    Exemplo básico do uso de operadores aritméticos.
    Sendo eles:
    [+, -, *, /, +=, -=, *=, /=, ++, --]
*/ 
var exemploPeso = 50
var exemploAltura = 1.69

var exemploImc = exemploPeso/(exemploAltura * exemploAltura)
console.log('IMC: ', exemploImc)

/* 
    Exemplo de operadores lógicos.
*/
var comprarRefrigerante = false
var comprarSucoNatural = false
var comprarCerveja = false

var convidado = {
    //Inputs para operações lógicas.
    nome: 'Pedro',
    idade: 17,
    bebeCerveja: true,
    bebeRefrigerante: false
}

if (convidado.bebeRefrigerante) {
    comprarRefrigerante = true
} else if (convidado.idade >= 18 && convidado.bebeCerveja) {
    comprarCerveja = true
} else {
    comprarSucoNatural = true
}
//Caso beba refrigerante.
console.log('Comprar refrigerante:', comprarRefrigerante)
//Caso não beba refrigerante, seja maior de 18 e beba cerveja.
console.log('Comprar cerveja:', comprarCerveja)
//Caso não beba refrigerante e seja menor de 18.
console.log('Comprar suco:', comprarSucoNatural)

//Declaração de uma lista de convidados para uso do for.
console.log("Laço for:")
var convidados = [
{
    nome: 'Lucas',
    idade: 18,
    bebeCerveja: false,
    bebeRefrigerante: false
},
{
    nome: 'Pedro',
    idade: 18,
    bebeCerveja: true,
    bebeRefrigerante: false
},
{
    nome: 'Paulo',
    idade: 21,
    bebeCerveja: false,
    bebeRefrigerante: true
}
]
/*  Resetando o valor para fazer o teste com um array
    e usar um laço de repetição para fazer verificações.
*/
comprarRefrigerante = false
comprarSucoNatural = false
comprarCerveja = false

for (var i = 0; i < convidados.length; i++) {
    console.log(convidados[i].nome,'bebe ?', convidados[i].bebeCerveja)
    if (convidados[i].idade >= 18 && convidados[i].bebeCerveja) {
        comprarCerveja = true
        /*  Se ao menos um for maior que 18 e beber cerveja
            o for irar parar.
        */
        console.log('Comprar cerveja?', comprarCerveja)
        /*
            Para o laço assim que a expressão lógica (if)
            seja dada como verdadeira.    
        */
        break
    }
    console.log('Comprar cerveja?', comprarCerveja)
}

//Declaração de uma lista de convidados para uso do while.
console.log("Laço while:")
var convidados = [
    {
        nome: 'Lucas',
        idade: 18,
        bebeCerveja: false,
        bebeRefrigerante: false
    },
    {
        nome: 'Pedro',
        idade: 18,
        bebeCerveja: true,
        bebeRefrigerante: false
    },
    {
        nome: 'Paulo',
        idade: 21,
        bebeCerveja: false,
        bebeRefrigerante: true
    }
]
/*  Resetando o valor para fazer o teste com um array
    e usar um laço de repetição para fazer verificações.
*/
comprarRefrigerante = false
comprarSucoNatural = false
comprarCerveja = false

//Declaração da variável para inicializar o while.
var i = 0    
while ( i < convidados.length) {
    console.log(convidados[i].nome,'bebe ?', convidados[i].bebeCerveja)
    if (convidados[i].idade >= 18 && convidados[i].bebeCerveja) {
         comprarCerveja = true
        /*  Se ao menos um for maior que 18 e beber cerveja
            o for irar parar.
        */
        console.log('Comprar cerveja?', comprarCerveja)
        /*
            Caso essa linha (break) esteja implementada o laço irá
            parar assim que a expressão lógica seja dada
            como verdadeira.
        break
        */
   }
    console.log('Comprar cerveja?', comprarCerveja)
    i++
}

//Exemplo de função
function imc (altura, peso) {
    return (peso/(altura * altura))
}

var pessoas = [
    {
      nome: 'Pedro',
      altura: 1.83,
      peso: 80
    },
    {
      nome: 'Maria',
      altura: 1.90,
      peso: 90
    },
    {
      nome: 'João',
      altura: 2.00,
      peso: 100
    }
  ]

for (var pessoa of pessoas) {
    //pessoa seria o item da lista pessoas.
    var resultado = imc(pessoa.altura, pessoa.peso)
   
    console.log(pessoa.nome, resultado)
}