const cards = document.getElementById("cards");
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content;
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();

let carrito = {};

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
cards.addEventListener("click", (e) => {
  addCarrito(e);
});

items.addEventListener("click", (e) => {
  btnAccion(e);
});

const fetchData = async () => {
  try {
    const res = await fetch("data.json");
    const data = await res.json();
    //console.log(data)
    pintarCards(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarCards = (data) => {
  //console.log(data);
  data.forEach((producto) => {
    templateCard.querySelector("h5").textContent = producto.nombre;
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard.querySelector("img").setAttribute("src", producto.imagen);
    templateCard.querySelector(".btn-dark").dataset.id = producto.id;
    templateCard.querySelector("h6").textContent = producto.categoria;
    
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};
const addCarrito = (e) => {
  //console.log(e.target)
  //console.log(e.target.classList.contains('btn-dark'))
  if (e.target.classList.contains("btn-dark")) {
    setCarrito(e.target.parentElement);
  }
  e.stopPropagation();
};

const setCarrito = (objeto) => {
  //console.log(objeto)
  const producto = {
    id: objeto.querySelector(".btn-dark").dataset.id,
    nombre: objeto.querySelector("h5").textContent,
    precio: objeto.querySelector("p").textContent,
    cantidad: 1,
  };
  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }

  carrito[producto.id] = { ...producto };
  pintarCarrito();
};
const pintarCarrito = () => {
  console.log(carrito);
  items.innerHTML = " ";
  Object.values(carrito).forEach((producto) => {
    templateCarrito.querySelector("th").textContent = producto.id;
    templateCarrito.querySelectorAll("td")[0].textContent = producto.nombre;
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
    templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
    templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
    templateCarrito.querySelector("span").textContent =
      producto.cantidad * producto.precio;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);

  pintarFooter();
};

const all = document.querySelector('all');
const guitarras = document.querySelector('cuerdas');
const amplificadores = document.querySelector('amplis');
const pedales = document.querySelector('pedals');

//all.addEventListener('click', )
//guitarras.addEventListener('click', renderGuitarra )
/*amplificadores.addEventListener('click', )
pedales.addEventListener('click', )*/

/*function renderProductos(){
  filtroCarrito.forEach((item) => {
    const miItem = fetchData.filter((itemBaseDatos) => {
      return itemBaseDatos.id === parseInt(item);
    });
  };*/

  function renderGuitarra(){
const listaCategoria = Data.filter(x => x.categoria === 'guitarra')
const pintarCards = (data) => {
  //console.log(data);
  data.forEach((producto) => {
    templateCard.querySelector("h5").textContent = producto.nombre;
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard.querySelector("img").setAttribute("src", producto.imagen);
    templateCard.querySelector(".btn-dark").dataset.id = producto.id;
    templateCard.querySelector("h6").textContent = producto.categoria;
    
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

  }



const pintarFooter = () => {
  footer.innerHTML = " ";
  if (Object.keys(carrito).length === 0) {
    footer.innerHTML =
      '<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>';
    return;
  }
  const nCantidad = Object.values(carrito).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  );
  const nPrecio = Object.values(carrito).reduce(
    (acc, { cantidad, precio }) => acc + cantidad * precio,
    0
  );

  templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
  templateFooter.querySelector("span").textContent = nPrecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);
  footer.appendChild(fragment);

 
  const btnVaciar = document.getElementById("vaciar-carrito");
  function vaciarCarrito() {
    Swal.fire({
      title: "estas seguro?",
      text: "Estas por vaciar el carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar todo!",
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = [];
        btnVaciar.disabled = true;
        btnCompra.disabled = true;
        carrito = {};
        pintarCarrito();
  
        Swal.fire(
          "Borrado!",
          "Los articulos del carrito han sido borrados.",
          "success"
        );
      }
    });
  }
  btnVaciar.addEventListener("click", vaciarCarrito );

const btnCompra = document.getElementById('boton-comprar')
function gracias() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    text: "Gracias por su compra",
    showConfirmButton: false,
    timer: 5500,
  });
  carrito = {};
  pintarCarrito();
}
btnCompra.addEventListener("click", gracias);
  
};
const btnAccion = (e) => {
  console.log(e.target);
  if (e.target.classList.contains("btn-info")) {
    //carrito[e.target.dataset.id]
    const producto = carrito[e.target.dataset.id];
    producto.cantidad++;
    //producto.cantidad = carrito[e.target.dataset.id].cantidad + 1;
    carrito[e.target.dataset.id] = { ...producto };

    pintarCarrito();
  }
  if (e.target.classList.contains("btn-danger")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad--;
    if (producto.cantidad === 0) {
      delete carrito[e.target.dataset.id];
    } else {
      carrito[e.target.dataset.id] = { ...producto };
    }
    pintarCarrito();
  }
  e.stopPropagation();
};


