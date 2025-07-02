let produto = Number (prompt("por favor digite o valor do produto ?"))
let real1 = Number (prompt("por favor digite a quantidade de moedas de 1 real"))
let centavo50 = Number (prompt("por favor digite a quantidade de moedas de 0,50 centavos"))
let centavo25 = Number (prompt("por favor digite a quantidade de moedas de 0,25 centavos "))
let centavo10 = Number (prompt("por favor digite a quantidade de moedas de 0,10 centavos"))
let centavo5 = Number (prompt("por favor digite a quantidade de moedas de 0,5 centavos "))
let zaya = real1 * 1 + centavo50 * 0.5 + centavo25 * 0.25 + centavo10 * 0.10 + centavo5 * 0.20
    
if(zaya >= produto){
    alert("você tem a quantidade de dinheiro suficiente para comprar, seu saldo é: " + zaya );
}