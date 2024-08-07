import './css/style_index.css';

window.addEventListener('DOMContentLoaded', function(){})

const start = async () => {
    console.log('Hola mundo')
}

try {

    const respuesta = await fetch('templates/card.hbs')
    
    const plantilla = await respuesta.text()

    console.log(plantilla)

    const template = Handlebars.compile(plantilla)

    const respuestaBack = await fetch('http://localhost:8080/productos')

    if ( !respuestaBack.ok) {
        throw new Error('Algo paso con los productos', respuestaBack.status) }

    const dataProductos = await respuestaBack.json()
    console.log(dataProductos)

    const data = { productos: dataProductos}
    console.log(data)

    const html = template(data)

    console.log(html)

    }
        