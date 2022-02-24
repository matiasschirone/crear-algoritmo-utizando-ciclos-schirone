

function Producto (nombre, stock, precio){
   this.nombre = nombre;
   this.stock = stock;
   this.precio = precio;
}

const productoA = new Producto('Campo', 100, 1000);
const productoB = new Producto('Popular', 80, 1500);
const productoC = new Producto('Platea', 60, 2000);

const listadoSectores = [productoA, productoB, productoC];

for(const producto of listadoSectores){
   console.log(producto.nombre + " " + producto.precio + " " + producto.stock)
}
 
let cantidadComprada;
let precioTotalVenta = 0;
 
 
alert(`Hola estos son los sectores que te podemos ofrecer:
           ${productoA.nombre}
           ${productoB.nombre}
           ${productoC.nombre}
(Maximo 6 tickets por persona)
`)
 
function stockInsuficiente(stock) {
   alert("No tenemos suficiente stock del producto, puede comprar hasta " + stock + ' unidades');
}
function stockSuficiente(stock, precio, nombre) {
   stock -= cantidadComprada;
   precioTotalVenta += cantidadComprada * precio;
   console.log("quedan " + stock + " " + nombre + " en stock");
}
function compra(stock, precio, nombre) {
   cantidadComprada = parseInt(prompt(`Ingrese cantidad que quiere comprar del sector ${nombre}`));
   if (cantidadComprada <= stock) {
       stockSuficiente(stock, precio, nombre);
   }
   else {
       stockInsuficiente(stock);
   }
}
 
function cuotas() {
   let cuotas = parseInt(prompt("Ingrese cantidad de cuotas"));
   let precioCuota = precioTotalVenta / cuotas;
   alert("El precio de la cuota es de $" + precioCuota.toFixed(2));
}
 
let cantidadProductosComprados = parseInt(prompt('Ingrese la cantidad de productos distintos que desea comprar'));
 
for (let i = 0; i < cantidadProductosComprados; i++) {
 
   let nombreCompra = prompt("Ingrese el nombre del producto a comprar:");
 
   if (nombreCompra.toLowerCase() === listadoSectores[0].nombre.toLowerCase()) {
       compra(productoA.stock, productoA.precio, productoA.nombre);
   }
   else if (nombreCompra.toLowerCase() === listadoSectores[1].nombre.toLowerCase()) {
       compra(productoB.stock, productoB.precio, productoB.nombre);
   }
   else if (nombreCompra.toLowerCase() === listadoSectores[2].nombre.toLowerCase()) {
       compra(productoC.stock, productoC.precio, productoC.nombre);
 
   }
   else {
       alert('No tenemos ese producto');
   }
}
 
let respuestaCuotas = prompt("¿Desea pagar en cuotas? Si/No");
 
if (respuestaCuotas.toLowerCase() === "si") {
   cuotas();
}
else if (respuestaCuotas.toLowerCase() === "no") {
   alert("El precio total de la compra es de $" + precioTotalVenta);
} 
else {
   alert("Ingrese una respuesta valida");
}

alert("¡Gracias por su compra!")




