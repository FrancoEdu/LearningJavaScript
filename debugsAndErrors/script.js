function formatCPF(CPF){
    let cpf = CPF.split('')

    for(let index = 0; index < cpf.length; index++){
        if(cpf[index] == '.' || cpf[index] == '-'){
            for (let x = index; x < cpf.length; x++) {
                cpf[x] = cpf[x+1]
            }
        }
    }

    let newCPF = cpf.filter(x => x !== undefined)

    return newCPF
}

function validCPF(CPF){
    let cpf = formatCPF(CPF)

    let multiplicador = 10;
    let resultador = 0;

    for(let index = 0; index < cpf.length-2; index++){
        resultador = resultador + (cpf[index] * multiplicador)
        multiplicador--
    }

    let firstStep = false;
    if((resultador*10) % 11 == cpf[cpf.length-2]){
        firstStep = true;
    }

    multiplicador = 11;
    resultador = 0;

    for(let index = 0; index < cpf.length-1; index++){
        resultador = resultador + (cpf[index] * multiplicador)
        multiplicador--
    }

    let secondStep = false;
    if((resultador*10) % 11 == cpf[cpf.length-1]){
        secondStep = true;
    }

    console.log(firstStep + " , " + secondStep)
 }

validCPF("529.982.247-25")