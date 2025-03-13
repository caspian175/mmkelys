document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        { nombre: "Producto 1", precio: "10.00", imagen: "https://via.placeholder.com/200", descripcion: "Descripción del producto 1" },
        { nombre: "Producto 2", precio: "15.00", imagen: "https://via.placeholder.com/200", descripcion: "Descripción del producto 2" },
        { nombre: "Producto 3", precio: "20.00", imagen: "https://via.placeholder.com/200", descripcion: "Descripción del producto 3" }
    ];

    const contenedor = document.getElementById("productos");

    productos.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>${prod.descripcion}</p>
            <p class="precio">$${prod.precio}</p>
        `;
        contenedor.appendChild(div);
    });
});
