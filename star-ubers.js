let distancia = Number (prompt ("Insira a distancia em quilometros da proxima corrida:"))
tempo = (distancia / 300000)

if (tempo < 60 && tempo > 0){
alert ("O tempo da viagem é " + tempo + " segundos"  )
}

else if (tempo >= 60 && tempo < 3600 ) {
    alert ("O tempo da viagem é " + (tempo * 60) + " minutos"  )
}

else if  (tempo >= 3600 && tempo < 86400){
    alert ("O tempo da viagem é " + (tempo * 3600) + " horas"  )
}

 else if  (tempo >= 86400 && tempo < 2592000){
alert ("O tempo da viagem é " + (tempo * 86400) + " dias"  )
}

else if  (tempo >= 2592000 && tempo < 946080000){
alert ("O tempo da viagem é " + (tempo * 2592000) + " meses"   )
} 

else  {
 alert ("O tempo da viagem é " + (tempo * 946080000) + " anos"  )
}
