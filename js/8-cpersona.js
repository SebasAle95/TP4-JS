class Persona {
    constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
    }

    saludar() {
    document.write(`<p>Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}</p>`);
    }

    despedirse() {
    document.write(`<p>chau, un placer</p>`);
    }
}


  const persona1 = new Persona("adrian", 30, "medico");
  const persona2 = new Persona("mauro", 25, "instructor de gym");
  

persona1.saludar(); 
persona1.despedirse(); 

persona2.saludar(); 
persona2.despedirse(); 