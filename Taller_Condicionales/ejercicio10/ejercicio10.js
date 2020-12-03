
var cantidad;
var codigo;
var descuento;
var valProducto;
var valorCompra;

function calcular() {
    cantidad=Number(document.getElementById('cantidad').value)
    codigo=Number(document.getElementById('codigo').value)
    valProducto=Number(document.getElementById('valProducto').value)
    valorCompra = cantidad*valProducto;
    descuento = producto(valorCompra,cantidad)
    total=valorCompra-descuento;
    alert('El total de la compra es'+total)
}

function producto(valorCompra,cantidad) {
    if(cantidad > 50){
        descuento = valorCompra*0.1
    }
    else {
        descuento=0
    }
    return descuento
}