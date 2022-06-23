
console.log("Contando do 1 ao 20: ")
function oneThroughTwenty() {
    let umaAoVinte = []
    for (let i = 1; i <= 20; i++) {
        umaAoVinte.push(i)
    }
    return umaAoVinte
}
console.log(oneThroughTwenty())


console.log("Contando números pares do 1 ao 20 em fileira:")
function evensToTwenty() {
    for (let i = 1; i <= 20; i++) {
        if ((i % 2) == 0) {
            console.log(i)
        }
    }
}
evensToTwenty()


console.log("Contando números ímpares do 1 ao 20 em fileira: ")
function oddsToTwenty() {
    for (let i = 1; i <= 20; i++) {
        if ((i % 2) == 1) {
            console.log(i)
        }
    }
}

oddsToTwenty()


console.log("Contando números múltiplos de 5 do 1 ao 100 em fileira: ")
function multiplesOfFive() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 5) == 0) {
            console.log(i)
        }
    }
}

multiplesOfFive()


console.log("Contando quadrados perfeitos do 1 ao  100: ")
function squareNumbers() {
    let retorno = []
    for (let i = 1; i <= 100; i++) {
        let quadradoPerfeito = i * i
        if (quadradoPerfeito <= 100) {
            retorno.push(quadradoPerfeito)
        }
    }

    return retorno
}
console.log(squareNumbers())

console.log("Contando do 20 ao 1 ao contrário: ")
function countingBackwards() {
    let doVinteAoUm = []
    for (let i = 20; i >= 1; i--) {
        doVinteAoUm.push(i)
    }
    return doVinteAoUm
}
console.log(countingBackwards())


console.log("Contando os números pares do 1 ao 20 ao contrário: ")
function evenNumbersBackwards() {
    let vinteAoUm = []
    for (let i = 20; i >= 1; i--) {
        if (i % 2 == 0) {
            vinteAoUm.push(i)
        }
    }
    return vinteAoUm
}
console.log(evenNumbersBackwards())


console.log("Contando os números ímapres do 1 ao 20 ao contrário: ")
function oddNumbersBackwards() {
    let vinteAteOUm = []
    for (let i = 20; i >= 1; i--) {
        if (i % 2 == 1) {
            vinteAteOUm.push(i)
        }
    }
    return vinteAteOUm
}
console.log(oddNumbersBackwards())

console.log("Contando os números múltiplos do 5 do 1 ao 100 ao contrário: ")
function multiplesOfFiveBackwards() {
    let cincoCemContrario = []
    for (let i = 100; i >= 1; i--) {
        if ((i % 5) == 0) {
            cincoCemContrario.push(i)
        }
    }
    return cincoCemContrario
}
console.log(multiplesOfFiveBackwards())


console.log("Contando quadrados perfeitos dentro do 1 ao 100 ao contrário: ")
function squareNumbersBackwards() {
    let squadPerfeitoContrario = []
    for (let i = 100; i >= 1; i--) {
        let n = i * i
        if (n <= 100) {
            squadPerfeitoContrario.push(n)
        }
    }

    return squadPerfeitoContrario
}

console.log(squareNumbersBackwards())