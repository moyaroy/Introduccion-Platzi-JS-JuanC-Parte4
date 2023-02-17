let numeros=[2,4,6,2,2,2,2,7,5]


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

function esPar(array){
    return !(array.length%2)   // 0 corresponde a  "false" y 1 corresponde a  "true"
}

function ordenarListaBidimensional(listaDesordenada){
    //funcion que ordena por el segundo elemento [2]
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[1]-nuevoValor[1]
    }
    const lista=listaDesordenada.sort(ordenarListaSort)
    return lista
}

function calcularMediana(array){

    //ordena lista de forma ascendente
    array.sort((a, b) => a - b);

    //analiza si el numero de elementos es par o impar
    const listaEsPar=esPar(array)

    //dependiendo del numero de elementos calculará la mediana
    if(listaEsPar){
        //lista es par, mediana = promedio de elementos intermedios
        const indexMedianaPar=array.length/2
        return (array[indexMedianaPar]+array[indexMedianaPar-1])/2
    } else {
        //lista impar, mediana = término medio
        const indexMedianaImpar=Math.floor(array.length/2)
        return array[indexMedianaImpar]
    }
}


function calcularModaMetodo1(array){
    let objConteoGeneral=[]
    let listaConteoGeneral=[]
    
    function conteoPorElemento(numero,array){
        let listaConteo=[{numero:"",cantidad:0}]
        let cantidadContada=0
        for(elem of array){
            if(elem==numero){
                cantidadContada++
            }
            listaConteo.numero=numero
            listaConteo.cantidad=cantidadContada
        }
        listaConteoGeneral.push(cantidadContada)
    }

    for(elemento of array){
        elementoContado=conteoPorElemento(elemento,array)        
        objConteoGeneral.push(elementoContado)
    }
    return Math.max.apply(Math, listaConteoGeneral)  

}

function calcularModaMetodo2(array){
    listaConteo=[]
    
    //recorre la lista de argumento
    for(let i = 0; i < array.length; i++){

        //extrae el elemento
        const elemento = array[i]

        //si existe el elemento aumenta en 1. USA VALIDADOR if(listaConteo[elemento])
        if(listaConteo[elemento]){
            listaConteo[elemento]+=1
        } else {   // si no existe el elemento lo deja en 1
            listaConteo[elemento]=1
        }

    }
    const listaArray=Object.entries(listaConteo)
    const listaORdenada=ordenarListaBidimensional(listaArray)
    const listaMaxNumber=listaORdenada[listaORdenada.length-1]
    return listaMaxNumber[0]
}

console.log(calcularModaMetodo2(numeros))



// [
//   {
//     id: "123",
//     name: 'Juanito Alcachofa',
//   },
//   {
//     id: "456",
//     name: 'Juanita Alcaparra',
//   },
// ]
