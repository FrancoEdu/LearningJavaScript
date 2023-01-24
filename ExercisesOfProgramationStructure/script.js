let range = prompt("Defina um número limite:")

numberPrime(range);

function numberPrime(num){
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