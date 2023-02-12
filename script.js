let menuBurgas = [
  {
    id: 0,
    nombre: "La 1",
    precio: 1000,
    img: "imagenes/b1.jpg"
  },
  {
    id: 1,
    nombre: "La 2",
    precio: 1200,
    img: "imagenes/b1.jpg"
  },
  {
    id: 2,
    nombre: "La 3",
    precio: 1400,
    img: "imagenes/b1.jpg"
  },
  {
    id: 3,
    nombre: "La 4",
    precio: 1000,
    img: "imagenes/b1.jpg"
  },
  {
    id: 4,
    nombre: "La 5",
    precio: 1000,
    img: "imagenes/b1.jpg"
  },
  {
    id: 5,
    nombre: "La 6",
    precio: 1200,
    img: "imagenes/b1.jpg"
  },
  {
    id: 6,
    nombre: "La 7",
    precio: 1400,
    img: "imagenes/b1.jpg"
  }
]

function miPagina(menu) {
  let body = document.getElementById("body")
  let pillsTab = document.getElementById("pills-tab")
  let pillsProfileTab = document.getElementById("pills-profile-tab")
  let pillsProfileTab2 = document.getElementById("pills-profile-tab2")
  let alertAdd = document.getElementById("alertAdd")
  let alertRemove = document.getElementById("alertRemove")
  let carrito
}

function show() {
  for (let index = 0; index < menuBurgas.length; index++) {
    combos.innerHTML +=
      `<div class="col row justify-content-start d-flex mb-4">
          <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
            <div class="card-title pt-2 text-center text-primary"> ${menuBurgas[index].nombre} </div>
            <img src="Imagenes/b1.jpg" class="card-img-top" alt="la primera del menú">
            <div class="card-body">
              <p class="card-text text-white-50 description"> </p>
              <div class="text-primary">Precio: <span class="precio">${menuBurgas[index].precio}</span></div>
              <div class="d-grid gap-2">
              <button  class="boton" id="${menuBurgas[index].id}">Añadir a Carrito</button>
            </div>
            </div>
          </div>
        </div>`
  }
}
show()

let carrito = []
let botones = document.getElementsByClassName("boton")
for (const boton of botones) {
  boton.addEventListener("click", agregarAlCarrito)
}

function agregarAlCarrito(e) {

  let ordenPedido = menuBurgas.find(pedido => pedido.id == e.target.id)
  let posicionBuscada = carrito.findIndex(pedido => pedido.id == ordenPedido.id)
  if (posicionBuscada != -1) {
    carrito[posicionBuscada].unidades++
    carrito[posicionBuscada].precioTotal = carrito[posicionBuscada].unidades * carrito[posicionBuscada].precio
  } else {
    carrito.push({ id: ordenPedido.id, nombre: ordenPedido.nombre, precio: ordenPedido.precio, unidades: 1, precioTotal: ordenPedido.precio })
  }
  console.log(carrito)
}
