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


