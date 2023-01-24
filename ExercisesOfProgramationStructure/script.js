//Função para calcular quais números saõ primos até um determiando limite
function numberPrime(num){
    let range = prompt("Defina um número limite:")
    console.log("Estes são os primos até o limite definido por você: ")

    for(let dividend = num; dividend >= 1; dividend--){
        let numOfDividers = 0;
        for(let dividers = 1; dividers <= num; dividers++){
            if(dividend%dividers==0){
                numOfDividers++
            }
        }
        if(numOfDividers<=2){
            console.log(`${dividend}`)
        }
    }
}

//Função de saudação utilizando arrow function
let idade = (idade) => console.log(`Você tem ${idade} anos`)
