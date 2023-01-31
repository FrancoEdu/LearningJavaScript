# Conceitos de Orientação à Objetos

## Métodos
* Proppriedades que servem como funções
* Ou seja, as ações dos objetos
* Invocamos os métodos da mesma maneira que funções

let chachorro = {
    latir: function(){
        console.log("Au au");
    }
}
cachorro.latir();

* Normalmente os métodos interagem com objetos

let pessoa = {
    nome: "",
    setNome: function(nome){
        this.nome = nome;
    },
    getNome: function(){
        return this.nome;
    }
}

## Prototypes
* Um objeto fallback de outro objeto
* Quando um objeto recebe uma aquisição de uma propriedade que não tem, ela é procurada no prototype deste objeto
* O prototype de um objeto criado do zero é o object, que tem os métodos nativos da linguagem

let pessoa = {
    maos: 2
}

console.log(Object.getPrototype(pessoa));
console.log(Object.getPrototype(pessoa) == Object.prototype);