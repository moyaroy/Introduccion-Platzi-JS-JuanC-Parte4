let numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]


function calcularPromedioMetodo1(array){
    let total=0
    for(n of array){
        total=total+n
    }
    return total/array.length
}




function calcularPromedioMetodo2(array){

    function sumarTodosElementos(valorAcumulado, nuevoValor){
        return valorAcumulado+nuevoValor
    }
    const sumaLista=array.reduce(sumarTodosElementos)

    const promedio=sumaLista/array.length
    return promedio
}


function calcularPromedioMetodo3(array){
    const sumaLista=array.reduce((accumulator,element)=>{
        return accumulator+element
    },0)
    const promedio=sumaLista/array.length
    return promedio
}
console.log(calcularPromedioMetodo3(numeros))
