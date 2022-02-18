const nombreProductoA = 'Campo';
const stockProductoA = 100;
const precioProductoA = 1000;
 
const nombreProductoB = 'Popular';
const stockProductoB = 80;
const precioProductoB = 1500;
 
const nombreProductoC = 'Platea';
const stockProductoC = 60;
const precioProductoC = 2000;
 
let cantidadComprada
let precioTotalVenta = 0;
 
 
alert(`Hola estos son los sectores que te podemos ofrecer:
           ${nombreProductoA}
           ${nombreProductoB}
           ${nombreProductoC}
(Maximo 6 tickets por persona)
`)
 
function stockInsuficiente(stock) {
   alert("No tenemos suficiente stock del producto, puede comprar hasta " + stock + ' unidades')
}
function stockSuficiente(stock, precio, nombre) {
   stock -= cantidadComprada;
   precioTotalVenta += cantidadComprada * precio;
   console.log("quedan " + stock + " " + nombre + " en stock");
}
function compra(stock, precio, nombre) {
   cantidadComprada = parseInt(prompt(`Ingrese cantidad que quiere comprar del sector ${nombre}`));
   if (cantidadComprada <= stock) {
       stockSuficiente(stock, precio, nombre)
   }
   else {
       stockInsuficiente(stock)
   }
}
 
function cuotas() {
   let cuotas = parseInt(prompt("Ingrese cantidad de cuotas"));
   let precioCuota = precioTotalVenta / cuotas;
   alert("El precio de la cuota es de $" + precioCuota.toFixed(2));
}
 
let cantidadProductosComprados = parseInt(prompt('Ingrese la cantidad de productos distintos que desea comprar'))
 
for (let i = 0; i < cantidadProductosComprados; i++) {
 
   let nombreCompra = prompt("Ingrese el nombre del producto a comprar:");
 
   if (nombreCompra.toLowerCase() === nombreProductoA.toLowerCase()) {
       compra(stockProductoA, precioProductoA, nombreProductoA)
   }
   else if (nombreCompra.toLowerCase() === nombreProductoB.toLowerCase()) {
       compra(stockProductoB, precioProductoB, nombreProductoB)
   }
   else if (nombreCompra.toLowerCase() === nombreProductoC.toLowerCase()) {
       compra(stockProductoC, precioProductoC, nombreProductoC)
 
   }
   else {
       alert('No tenemos ese producto')
   }
}
 
let respuestaCuotas = prompt("¿Desea pagar en cuotas? Si/No");
 
if (respuestaCuotas.toLowerCase() === "si") {
   cuotas()
}
else if (respuestaCuotas.toLowerCase() === "no") {
   alert("El precio total de la compra es de $" + precioTotalVenta)
} else {
   alert("Ingrese una respuesta valida")
}



