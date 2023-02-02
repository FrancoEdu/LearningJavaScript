// EXERCISE 01 =====================================================================================================================
class Account{
    constructor(name,balance){
        this.name = name;
        this.balance = balance;
    }

    get Name(){
        this.name;
    }
    set Name(name){
        this.name = name;
    }
    get Balance(){
        this.balance
    }
    
    withdraw(value) {
        if(this.balance <= 0){
            console.log("Impossível fazer o saque, saldo insuficiente")
        }else if(this.balance - value < 0){
            console.log(`Você ficará negativo, saque realizado \n Saldo de : ${this.balance-value}`)
            this.balance = this.balance - value;
        }else{
            this.balance = this.balance - value
        }
    }

    deposit(value){
        this.balance = this.balance + value;
    }
}
console.log("Exercício 01 -> Simulação de movimentação bancária")
let account = new Account("Eduardo",3197)
account.withdraw(100)
console.log(account.balance)

// EXERCISE 02 =====================================================================================================================
class Ecommerce{
    constructor(itens,qtd,valorTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item){
        let contador = 0;
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd = this.itens[itemCarrinho].qtd + item.qtd
            }
        }

        if(contador == 0){
            this.itens.push(item)
        }

        this.qtd = this.qtd + item.qtd;
        this.valorTotal = item.qtd * item.preco
    }

    removeItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                let obj = this.items[itemCarrinho];
                let index = this.itens.findIndex(function(obj){return obj.id == item.id})
                this.qtd = this.qtd - this.itens[itemCarrinho].qtd;
                this.valorTotal = this.valorTotal - this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
                this.itens.splice(index,1)
            }
        }
    }

}
let carrinho = new Ecommerce([
    {
        id: 01,
        nome: 'Camisa',
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: 'Cueca',
        qtd: 4,
        preco: 20 
    },
    {
        id: 03,
        nome: 'Shorts',
        qtd: 1,
        preco: 40
    }

])

console.log(carrinho);
carrinho.addItem({id:04, nome:'Calça', qtd:4, preco:150})
console.log(carrinho)

// EXERCISE 04 ============================================================================================================================================================
class Carro{
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km){
        let litrosConsumidos = km/this.consumo
        
        if(litrosConsumidos >= this.gasolinaRestante){
            console.log("Você andou mais do que deveria :(")
            this.gasolinaRestante = 0;
        }else{
            this.gasolinaRestante = this.gasolinaRestante - litrosConsumidos;
        }
    }
     
    abastecer(litros){
        this.gasolinaRestante = this.gasolinaRestante + litros;
    }
}

let carro = new Carro("Ford", "Preta", 100, 6);
carro.dirigir(405)
carro.abastecer(10)
console.log(carro.gasolinaRestante)
carro.dirigir(255)
