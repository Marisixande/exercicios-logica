let nota1 = Number (prompt("Digite a primeira nota:"))
let nota2 = Number (prompt("Digite a segunda nota:"))

if (nota1 + nota2 / 2 >= 7){
    alert("Você passou!")
}

else if (nota1 + nota2 /2 <7){
    alert("Sinto em lhe dizer que você não passou, faça a recuperação dia xx/xx/xx;(")
}

else{
    alert("Erro! Digite novamente:")
}