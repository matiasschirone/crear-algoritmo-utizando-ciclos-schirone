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

let cantidadProductosComprados = parseInt(prompt('ingrese la cantidad de productos distintos que desea comprar'))

for(let i = 0; i < cantidadProductosComprados; i++){
   

    let nombreCompra = prompt("ingrese el nombre del producto a comprar:");

    if (nombreCompra == nombreProductoA){
        cantidadComprada = parseInt(prompt("ingrese cantidad que quiere comprar"));
        if (cantidadComprada <= stockProductoA){
            stockProductoA = stockProductoA - cantidadComprada;
            precioTotalVenta += cantidadComprada * precioProductoA;
            console.log("quedan " + stockProductoA + " Campo");
           
        }
        else{
             alert("No tenemos suficiente stock del producto, puede comprar hasta " + stockProductoA + ' unidades')
        }
    }
    else if (nombreCompra == nombreProductoB){
        if (cantidadComprada <= stockProductoB){
             cantidadComprada = parseInt(prompt("ingrese cantidad que quiere comprar"));
             stockProductoB = stockProductoB - cantidadComprada;
             precioTotalVenta += cantidadComprada * precioProductoB;
             console.log("quedan " + stockProductoA + " Popular");
             
        }
        else{
        alert("No tenemos suficiente stock del producto, puede comprar hasta " + stockProductoB + ' unidades')
        }
    }
    else if (nombreCompra == nombreProductoC){
        if (cantidadComprada <= stockProductoC){
             cantidadComprada = parseInt(prompt("ingrese cantidad que quiere comprar"));
             stockProductoC = stockProductoB - cantidadComprada;
             precioTotalVenta += cantidadComprada * precioProductoC;
             console.log("quedan " + stockProductoA + " Platea");
            
        }
        else{
        alert("No tenemos suficiente stock del producto, puede comprar hasta " + stockProductoB + ' unidades')
        }
    }
    else{
         alert('No tenemos ese producto')
    }
}

alert("El precio total de su compra es de: $" + precioTotalVenta);





