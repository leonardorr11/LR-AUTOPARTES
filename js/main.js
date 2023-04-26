let productos=[];



fetch("./js/productos.json")
        .then(response => response.json())
        .then(data => {
            productos = data;
        cargarProductos(productos);
    })
    
    


const cerrar=document.querySelector("#cerrar");
const abrir=document.querySelector("#abrir");
const nav=document.querySelector("#nav");
    const contenedorProductos=document.querySelector(".contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const URL=("./js/productos.json");


    abrir.addEventListener("click",()=>{
        nav.classList.add("visible");
    }); 
    
    cerrar.addEventListener("click",()=>{
        nav.classList.remove("visible");
    })



    function cargarProductos(productosElegidos) {
       

        contenedorProductos.innerHTML = "";
    
        productosElegidos.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("caja-producto");
            div.innerHTML = `
            
            <div>
                <h1 class="titulo-producto">${producto.titulo}</h1>
                <img class="imagen-producto" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalle">
                    <p class="id-producto">Codigo: ${producto.id}</p>
                    <p class="producto-precio">PRECIO:$${producto.precio}</p>
                </div>
                <button class="boton-comprar">COMPRAR</button>
            </div>
            `;
    
            contenedorProductos.append(div);
        })
    
       
    }

    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
    
            botonesCategorias.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");
    
            if (e.currentTarget.id != "todos") {
                const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
                tituloPrincipal.innerText = productoCategoria.categoria.nombre;
                const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
                cargarProductos(productosBoton);
            } else {
                tituloPrincipal.innerText = "Todos los productos";
                cargarProductos(productos);
            }
    
        })
    });