let produto = Number (prompt("Digite o valor do produto ?"))
let real1 = Number (prompt("Digite a quantidade de moedas de 1 real"))
let centavo50 = Number (prompt("Digite a quantidade de moedas de 0,50 centavos"))
let centavo25 = Number (prompt("Digite a quantidade de moedas de 0,25 centavos "))
let centavo10 = Number (prompt("Digite a quantidade de moedas de 0,10 centavos"))
let centavo5 = Number (prompt("Digite a quantidade de moedas de 0,5 centavos "))
let porquinho = real1 * 1 + centavo50 * 0.5 + centavo25 * 0.25 + centavo10 * 0.10 + centavo5 * 0.20
    
if(porquinho >= produto){
    alert("você tem dinheiro suficiente para comprar, seu saldo é: " + porquinho );
}
else {
    alert("você NAO tem dinheiro suficiente para comprar, seu saldo é: " + porquinho );
}