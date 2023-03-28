class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      document.write("Este animal emite un sonido.");
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonido() {
      document.write("guau");
    }
  }
  
  class Gato extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonido() {
      document.write("miau");
    }
  }
  
  let miPerro = new Perro("bartolito", 6);
  let miGato = new Gato("patrick", 4);
  
  miPerro.emitirSonido(); // debería imprimir "Guau!"
  miGato.emitirSonido();