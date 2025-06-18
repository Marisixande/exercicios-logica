let altura = Number (prompt ("Digite sua altura:"))
let sexo = Number (prompt ("Digite seu sexo(Sendo 1 para feminino e 2 para masculino):"))

let pesofem = ((62.1 * altura) - 44.7)
let pesomasc = (72.7 * altura) 

switch (sexo) {
    case 1 :
        if(pesofem != 44.7){
            alert("Voce nao esta no peso ideal")
        } else {
            alert("Voce esta no peso ideal!")
        }
        break;
     case 2 :
        if(pesomasc = 58){
                alert("Voce esta no peso ideal!")
            }
        else if(pesomasc != 58) {
                alert("Voce nao esta no peso ideal!")
        }
        break;
     default:
        alert("Voce nao existe")

}