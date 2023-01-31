# Conceitos de Orientação à Objetos

## Métodos
* Proppriedades que servem como funções
* Ou seja, as ações dos objetos
* Invocamos os métodos da mesma maneira que funções
```js
let chachorro = {
    latir: function(){
        console.log("Au au");
    }
}
cachorro.latir();
```

* Normalmente os métodos interagem com objetos

```js
let pessoa = {
    nome: "",
    setNome: function(nome){
        this.nome = nome;
    },
    getNome: function(){
        return this.nome;
    }
}
```

## Prototypes
* Um objeto fallback de outro objeto
* Quando um objeto recebe uma aquisição de uma propriedade que não tem, ela é procurada no prototype deste objeto
* O prototype de um objeto criado do zero é o object, que tem os métodos nativos da linguagem
```js
let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);
```

## Classes 
* O proptotype do Javascript pode ser chamado de classe, pois nas outras linguagens uam class é um molde de um objeto, ou seja, podemos criar diversos objetos em cima de um prototype

```javascript
let cachorro = {
    raca: "Vira-lata",
};

let cachorroNovo = Object.create(cachorro);
cachorroNovo.raca = "Pastor Alemão";
console.log(cachorroNovo.raca);
```
* Aplicando isso à uma função

```js
function criaCachorro(tamanho, raca, idade){
    let cachorro = Object.create({});
    cachorro.tamanho = tamanho;
    cachorro.raca = raca;
    cachorro.idade = idade;
    cachorro.latir = function(){
        return "Au au";
    }
    return cachorro
}

let cachorro = criaCachorro("Pequeno", "Shitzu", 5);
console.log(cachorro + cachorro.latir())
```
## Construtor por new
* Em muitas linguagens temos a possibilidade de instanciar um objeto com new, no JS também
```js
function cachorro(raca, idade, porte){
    this.raca = raca;
    this.idade = idade;
    this.porte = porte;
    this.uivar = function(){
        return "Auuuuuuuuuuuuuuu"
    }
}
let husky = new cachorro("Husky", 12, "Médio");
console.log(husky.raca);
```
## Construtor com método
* Além da propriedades, podemos criar a classe base já com métodos, basta definir ao prototype o método desejado
```js
function cachorro(raca, idade, porte){
    this.raca = raca;
    this.idade = idade;
    this.porte = porte;
}
cachorro.prototype.uivar = function(){
    return "Auuuuuuuuuuuuuuu"
}

let pug = new cachorro("Pug", 3, "Pequeno");
pug.uivar();
```

## Construtor na classe (ES6)
* Com a versão do ES6, uma possibilidade de criar uma classe(objeto) com construtor foi adicionada, então não precisamos mais criar por meio de uma função
```js
class Cachorro{
    constructor(raca, idade, porte){
        this.raca = raca;
        this.idade = idade;
        this.porte = porte;
    }
}

let cachorro = new Cachorro("Labrador", 6, "Grande")
```