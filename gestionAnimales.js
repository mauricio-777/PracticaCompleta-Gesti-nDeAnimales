class Animal {
    constructor(nombre,edad) {
        this.nombre = nombre
        this.edad = edad
    }
    hacerSonido() {
    }
}

class Perro extends Animal {
    constructor(nombre,edad){
        super (nombre,edad)
    }
    hacerSonido() {
        console.log("Guau")
    }
}

class Gato extends Animal {
    constructor(nombre,edad){
        super (nombre,edad)
    }
    hacerSonido() {
        console.log("Miau")
    }
}

class Pajaro extends Animal {
    constructor(nombre,edad){
        super (nombre,edad)
    }
    hacerSonido() {
        console.log("Pio")
    }
}

function crearAnimal(tipo,nombre,edad) {
    switch (tipo) {
        case "perro":
            return new Perro(nombre,edad)
        case "gato":
            return new Gato(nombre,edad)
        case "pajaro":
            return new Pajaro(nombre,edad)
    default:
        return "animal no soportado"
    }
}


let a = crearAnimal("gato","pepe",12)
a.hacerSonido()