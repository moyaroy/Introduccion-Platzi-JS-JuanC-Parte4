const inputPrecio=document.querySelector('#inPrecio');
const inputDescuento=document.querySelector('#inDescuento');
const pDescuentTotal=document.querySelector('#pPrecioFinal')

const btnCalcularDescuento=document.querySelector('#btnCalcularDescuento');
btnCalcularDescuento.addEventListener('click',calculoDescuento)

let cuponesDescuento=[
    {nombre:"ABC",Descuento:20},
    {nombre:"DEF",Descuento:60},
    {nombre:"GHI",Descuento:80},
    {nombre:"JKL",Descuento:10}
]


function calculoDescuento(){
    precioInicial=inputPrecio.value;
    descuentoParaAplicar=cuponesDescuento.find(cuponesDescuento=>cuponesDescuento.nombre==inputDescuento.value)


    if (!precioInicial || !descuentoParaAplicar){
        pDescuentTotal.innerHTML="Insertar valores"
    } 
    if(!descuentoParaAplicar){
        pDescuentTotal.innerHTML="Cupón no encontrado."
        return
    }
    else{
    const precioFinal= ((precioInicial)*(100-descuentoParaAplicar.Descuento))/100;
    pDescuentTotal.innerHTML=precioFinal
    console.log(precioFinal);
    }
    
} 