class auto {
    constructor(marca, modelo, color){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    }
    encender(){
    document.write(`<p>El auto ${this.marca} ${this.modelo} ${this.color} fue encendido.</p>`)
    }
    apagar(){
    document.write(`<p>El auto ${this.marca} ${this.modelo} ${this.color} se apago.</p>`)
    }
}

const toyota = new auto ('Toyota', 'Corolla', 'Azul marino');

toyota.encender();
toyota.apagar();