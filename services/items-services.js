const itemList = () =>
  fetch("http://localhost:3000/item").then((respuesta) => respuesta.json());

export const clientServices = {
  itemList,
};