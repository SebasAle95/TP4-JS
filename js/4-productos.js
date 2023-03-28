class producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimedatos(){
        document.write(`<p>codigo: ${this.codigo}</p>`);
        document.write(`<p>nombre: ${this.nombre}</p>`);
        document.write(`<p>precio: ${this.precio}</p>`);
    }
}

const productos = [
    new producto ("cod1", "Shampoo", 100),
    new producto ("cod2", "Jabon", 200),
    new producto ("cod3", "Acondionador", 300),
];

productos.forEach((producto) => {
producto.imprimedatos();
});
