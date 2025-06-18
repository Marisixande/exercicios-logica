let idade = Number (prompt ("Digite sua idade para descobrir se pode ou nao votar!") )

if (idade < 16 ){
    alert("Voce nao pode votar!")
}
else if (idade < 18){
    alert("Seu voto e facultativo. O que significa que se voce nao quiser votar, voce nao precisa!")
}
else if(idade < 66){
    alert("Seu voto e obrigatorio. O que significa que voce e obrigado por lei a votar, nem que seja para votar nulo!"
    )
}
else{
    alert("Seu voto e facultativo. O que significa que se voce nao quiser votar, voce nao precisa!")
}