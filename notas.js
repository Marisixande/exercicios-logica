let nota1 = Number (prompt ("Insira sua primeira nota:"))
let nota2 = Number (prompt ("Insira sua segunda nota:"))
media = ((nota1+nota2)/2)

if (media >= 0.0 && media < 4.0) {
    alert("Sua nota foi E!")
}
 else if (media>=4.0 && media < 6.0){
    alert("Sua nota foi D!")
}
else if (media>=6.0 && media < 7.5){
    alert("Sua nota foi C!")
}
else if(media>=7.5 && media < 9.0){
    alert("Sua nota foi B!")
}
else{
    alert("Sua nota foi A!")
}
