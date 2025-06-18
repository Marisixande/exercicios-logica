let dias = Number (prompt("Quantos dias: "))
let valordia

if(dias <= 5){
    valordia = 100
}
if(dias >= 6 && dias <= 10){
    valordia = 90
}
if(dias >= 11){
    valordia= 80
}
totalBruto = dias * valorDia

desconto10 = totalBruto * 0.1

desconto15 = totalBruto * 0.15

valorDaConta = totalBruto - desconto10 - desconto15 + 150

alert("Total Bruto: R$" + totalBruto +
    "\nDesconto 1: R$" + desconto10 +
    "\nDesconto 2: R$" + desconto15 +
    "\nMulta R$150.00" +
    "\nValor da conta: R$" + valorDaConta)