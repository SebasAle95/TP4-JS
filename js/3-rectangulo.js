class rectangulo {
constructor (recA, recB) {
    this.recA = recA;
    this.recB = recB;
}
setalto(nuevoalto){
    this.alto = nuevoalto
}
setancho(nuevoancho){
    this.ancho = nuevoancho
}
getalto(){
    return this.alto;
}
getancho(){
    return this.ancho;
}
calcularperimetro(){
    return 2 * (this.alto + this.ancho);
}
calcularArea(){
    return this.alto * this.ancho;
}
}
let rectangulo1 = new rectangulo(20, 30);
document.write(rectangulo1.getalto()); 
document.write(rectangulo1.getancho());
document.write(rectangulo1.calcularperimetro()); 
document.write(rectangulo1.calcularArea()); 


