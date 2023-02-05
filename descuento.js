const inputPrecio=document.querySelector('#inPrecio');
const inputDescuento=document.querySelector('#inDescuento');
const pDescuentTotal=document.querySelector('#pPrecioFinal')

const btnCalcularDescuento=document.querySelector('#btnCalcularDescuento');
btnCalcularDescuento.addEventListener('click',calculoDescuento)

function calculoDescuento(){
    precioInicial=inputPrecio.value;
    descuento=inputDescuento.value;

    if (!precioInicial || !descuento){
        pDescuentTotal.innerHTML="Insertar valores"
    } 
    if (descuento >100) {
        pDescuentTotal.innerHTML="No aplica descuento más de 100%"
    } else{

    const precioFinal= ((precioInicial)*(100-descuento.value))/100;
    pDescuentTotal.innerHTML=precioFinal
    }
}