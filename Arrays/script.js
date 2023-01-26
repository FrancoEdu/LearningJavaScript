let array = [1,5,8,11,5]
let arrayOfString = ["Eduardo","Letícia","Julia"]
let arrayOfBoolean = [true,false,true]

//shift e unshift() -> shit exclui a primeira posição do array, unshift adiciona 
//uma ou mais posições ao array
// let carros = ["Onix","Palio","Astra"]
// console.log(carros.shift())
// console.log(carros.unshift("Gol"))
// console.log(carros)

//indexOf e lastIndexOf() -> indexOf encontra o indice de um determinado elemento
//lastIndexOf -> encontra o ultimo indice de um elemento
// console.log(array.indexOf(11))
// console.log(array.lastIndexOf(5))

//Slice()  -> retorna um array partindo de outro array, o inicio e fim são determinados
//pelos paramentros
// console.log(array.slice(1,11))

//foreach()  -> itera cada elemento do array
// array.forEach(element => {
//     console.log("O numero é " + element)
// });

//includes()  -> Verifica se o array tem um determinado elemento, metodo booleano
// console.log(arrayOfString.includes("Julia"))

//reverse -> Inverte o vetor do ultimo para o primeiro
// console.log(arrayOfString.reverse())

//trim() -> remove tudo que não é string
// let texto = "            teste     8 0"
// console.log(texto.trim())

// padStart() -> Insere caracteres antes da string
// let sky = "1234"
// console.log(sky.padStart(6,"0"))
// console.log(sky.padEnd(6,"0"))

//split() -> separa uma string em um vetor
// arrayOfString = 'Eduardo Henrique Franco da Silva'
// console.log(arrayOfString.split(""))
// console.log(arrayOfString.split(" "))

//join()
// arrayOfString = 'Eduardo Henrique Franco da Silva'
// let novaString = arrayOfString.split(" ")
// console.log(novaString.join(";"))

//repeat()-> repete uma string atraves de determinado numero em parametro
// console.log("Eduardo\n".repeat(4))

//rest operator -> uma forma de uma função receber indefinidos parâmetros, assim virá um array
// function somaNumeros(...args) {
//     let soma = 0
//     for(let i=0;i<=args.length;i++){
//          console.log(soma = soma + args[i]);
//     }
// }

// somaNumeros(1,2,3,4)

//Destructuring pode definir variaveis com propriedades do objeto com uma notação diferente, chamada destructuring
//desestruturar um propriedades de um objeto em variaveis
// const person = {
//     name: "Eduardo",
//     lastname:"Franco"
// };
// const {name: fname, lastname:lname} = person;
// console.log(lname.toUpperCase()+", "+fname)
//Mesma coisa com vetores

// const [nomeA,nomeB,nomeC] = arrayOfString
// console.log(nomeB)

//======================================================== JSON ==================================================
let person = {
    "name": "Eduardo",
    "age" : 21,
    "Profession" : "IT Support Technician ll",
    "hobbies" : ["Play video game", "Study a lot", "Read books about economy"]
}

let personToString = JSON.stringify(person)
console.log(personToString)
let personStringToJSON = JSON.parse(personToString)
console.log(personStringToJSON)