let produto = Number (prompt ("Digite valor do produto:"))
lucro1 = (produto * 0.45)
lucro2 = (produto * 0.30)

    if(produto < 20){
       alert ("Voce deve vender seu produto por " + (produto + lucro1) + " reais")
    }

    else{
       alert ("Voce deve vender seu produto por " + (produto + lucro2) + " reais")
    }

