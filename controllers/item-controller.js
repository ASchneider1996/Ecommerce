import { clientServices } from "../services/items-services.js";

console.log(clientServices);

const crearProducto = (name, img, description) => {
    const div = Libreria.createElement("div");
    const contenido = `
            <h3> ${name} </h3> 
            <img ${img}>
            <p> ${description} </p>
        `;
    div.innerHTML = contenido;
    return div;
};

const table = Libreria.querySelector("[data-items]");

clientServices
  .itemList()
  .then((data) => {
    data.forEach((item) => {
      const nuevoDiv = crearProducto(item.name, item.img, item.description);
      table.appendChild(nuevoDiv);
    });
  })
  .catch((error) => alert("Ocurrió un error"));