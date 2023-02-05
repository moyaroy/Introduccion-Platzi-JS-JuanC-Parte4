//Perimetro de cuadrado
console.group('CUADRADO')

const ladoCuadrado = 5;
const perimetroCuadrado=ladoCuadrado*4

const areaCuadrado=ladoCuadrado*ladoCuadrado

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
})
console.groupEnd('CUADRADO')

console.group('TRIANGULO')
const ladoTriangulo1=6
const ladoTriangulo2=6
const baseTriangulo=4
const alturaTriangulo=5.5

const perimetroTriagulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo
const areaTriangulo=(baseTriangulo*alturaTriangulo)/2

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    baseTriangulo,
    alturaTriangulo,
    perimetroTriagulo,
    areaTriangulo,
})

console.groupEnd('TRIANGULO')

function calculoTriagulo(lado1,lado2,base,altura){
    return{
        perimetro: lado1+lado2+base+base,
        area: (base*altura)/2
    }
}

function calculoCuadrado(lado){
    return{
        perimetro: lado*4,
        area: lado*lado    }
}

console.group('CIRCLES')

const radioCirculo=3
const diametroCirculo=radioCirculo*2
const PI=Math.PI
const circnferencia=2*radioCirculo*PI
const AreaCirculo=PI*(radioCirculo**2)

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circnferencia,
    AreaCirculo
})

function calcularCirculo(radioCirculo){
    return{
        circunferencia: radioCirculo*2*PI,
        areaCirculo: Math.pow(radioCirculo,2)*PI
    }
}
console.groupEnd('CIRCLES')

