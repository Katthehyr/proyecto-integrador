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

        const respuestaBack = await fetch('http://localhost:8080/Productos/')

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
