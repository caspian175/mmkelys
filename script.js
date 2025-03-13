document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        {
            nombre: "Collar #1",
            imagen: "imagen1.jpg",
            colores: ["rojo", "amarillo", "gris", "blanco", "negro"],
            precio: "$5.00"
        },
        {
            nombre: "Collar #2",
            imagen: "imagen2.jpg",
            colores: ["rosa", "verde", "azul"],
            precio: "$5.00"
        },
        {
            nombre: "Collar #3",
            imagen: "imagen3.jpg",
            colores: ["rojo", "naranja", "amarillo", "verde", "azul", "morado", "rosa", "blanco", "negro"],
            precio: "$5.00"
        }
    ];

    const catalogo = document.getElementById("catalogo");

    productos.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("producto");

        let coloresHTML = prod.colores.map(color => `<span class="${color}"></span>`).join("");

        div.innerHTML = `
            <h2>${prod.nombre}</h2>
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <p>COLORES DISPONIBLES:</p>
            <div class="colores">${coloresHTML}</div>
            <p class="precio">${prod.precio}</p>
        `;

        catalogo.appendChild(div);
    });
});
