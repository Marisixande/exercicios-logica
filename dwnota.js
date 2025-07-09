let nota1 = parseFloat(prompt("Digite a primeira nota: "));
do{
nota1 = parseFloat(prompt("Nota inválida! A nota deve ser maior ou igual a zero. Digite a primeira nota novamente: "));

} while (nota1 < 0)
 

 let nota2 = parseFloat(prompt("Digite a segunda nota: "));
 do{
 nota2 = parseFloat(prompt("Nota inválida! A nota deve ser maior ou igual a zero. Digite a segunda nota novamente: "));
}while (nota2 < 0) 
 
 let media = (nota1 + nota2) / 2;

 if (media >= 7) {
 alert("Aluno aprovado!");
 } else {
 alert("Aluno reprovado.");
 }