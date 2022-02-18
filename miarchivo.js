let nombreProductoA = 'Campo';
let stockProductoA = 100;
let precioProductoA = 1000;

let nombreProductoB = 'Popular';
let stockProductoB = 100;
let precioProductoB = 1500;

let nombreProductoC = 'Platea';
let stockProductoC = 100;
let precioProductoC = 2000;
alert("Hola estos son los sectores que te podemos ofrecer: \n" + nombreProductoA + "\n" + nombreProductoB + "\n" + nombreProductoC + "\n" + "(Maximo 6 tickets por persona)")

let cantidadComprada
let precioTotalVenta = 0;

function stockInsuficiente(stock){
    alert("No tenemos suficiente stock del producto, puede comprar hasta " + stock + ' unidades')
}
function stocksuficiente(stock, precio, nombre){
    stock -= cantidadComprada;
    precioTotalVenta += cantidadComprada * precio;
    console.log("quedan " + stock + " nombre");
}
function compra(stock, precio, nombre){
    cantidadComprada = parseInt(prompt("ingrese cantidad que quiere comprar"));
    if (cantidadComprada <= stock, precio, nombre){
        stocksuficiente(stock, precio, nombre)  
    }
    else{
        stockInsuficiente(stock)
    }
}
let cantidadProductosComprados = parseInt(prompt('ingrese la cantidad de productos distintos que desea comprar'))

for(let i = 0; i < cantidadProductosComprados; i++){
   
    let nombreCompra = prompt("ingrese el nombre del producto a comprar:");

    if (nombreCompra == nombreProductoA){
        compra(stockProductoA, precioProductoA, nombreProductoA)
    }
    else if (nombreCompra == nombreProductoB){
        compra(stockProductoB, precioProductoB, nombreProductoB)
    }
    else if (nombreCompra == nombreProductoC){
        compra(stockProductoC, precioProductoC, nombreProductoC)
        
    }
    else{
        alert('No tenemos ese producto')
    }
}
alert("El precio total de su compra es de: $" + precioTotalVenta);






