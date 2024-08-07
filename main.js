import './css/style_index.css';

import Handlebars from "handlebars";

const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));


window.addEventListener('DOMContentLoaded', async function(){
    console.log('Hola mundo')

    try {
        const respuesta = await fetch('templates/card.hbs')
    
        const plantilla = await respuesta.text();
    
        console.log(plantilla)


        const respuestaBack = await fetch('https://66b3b9c17fba54a5b7edfcbc.mockapi.io/productos/')

    if ( !respuestaBack.ok) {
        throw new Error('Algo paso con los productos', respuestaBack.status) }

    const dataProductos = await respuestaBack.json();
    console.log(dataProductos)

    const data = { Productos: dataProductos}
    console.log(data)
    
    } catch (error) {
        console.log(error)
    }
})
