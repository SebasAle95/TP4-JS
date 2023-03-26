let cuenta = {
    titular: 'alex',
    saldo: 0,
    ingresar: function(cantidad){
        this.saldo += cantidad;
        document.write("<p>se han ingresado" + cantidad + "pesos en la cuenta</p>");
        
    },
    extraer: function(cantidad){
        if (cantidad > this.saldo){
            document.write("no hay suficiente saldo <br>");
        }else{
        this.saldo -= cantidad;
        document.write("se han extraido" +cantidad +"de la cuenta <br>");
    }
    },
    informar: function(){
        document.write(`<p>la cuenta perteneces a` + this.titular + `y tiene un saldo de ` + this.saldo + `pesos</p>`);
    }
}
cuenta.informar();
cuenta.ingresar(1000);
cuenta.extraer(800);
cuenta.informar();
