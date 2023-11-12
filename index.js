let nome = "Kratos"
let vitorias = 110
let derrotas = 5
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
let contador = 0
let saldoVitorias = saldoRankeadas(vitorias, derrotas)

while(contador < 1){
    contador++
    if(saldoVitorias <= 10){
    console.log("O herói tem saldo de "  +  saldoVitorias + " está no nível de " + nivel[0])
    }else if(saldoVitorias > 10 && saldoVitorias <= 20){
   console.log("O herói tem saldo de "  +  saldoVitorias + " está no nível de " + nivel[1]) 
    }else if(saldoVitorias > 20 && saldoVitorias <= 50){
    console.log("O herói tem saldo de "  +  saldoVitorias + " está no nível de " + nivel[2])
    }else if(saldoVitorias > 50 && saldoVitorias <= 80){
    console.log("O herói tem saldo de "  +  saldoVitorias + " está no nível de " + nivel[3])
    }else if(saldoVitorias > 80 && saldoVitorias <= 90){
    console.log("O herói tem saldo de "  +  saldoVitorias + " está no nível de " + nivel[4])
    }else if(saldoVitorias > 90 && saldoVitorias <= 100){
    console.log("O herói tem saldo de "  +  saldoVitorias + " está no nível de " + nivel[5])
    }else if(saldoVitorias > 100){
    console.log("O herói tem saldo de "  +  saldoVitorias + " está no nível de " + nivel[6])
    }
    
}
function saldoRankeadas(vitorias, derrotas){
    return vitorias - derrotas
}


