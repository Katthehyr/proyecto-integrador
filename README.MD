# Proyecto Integrador

# Primera fase

1 Creacion del index.html, la tematica es libre por lo que se decidio hacerlo centrandose en productos realizados en crochet, se busca crear un sitio atractivo utilizando los siguientes criterios para su realizacion.

# Consideraciones generales

En esta primera etapa se requiere desarrollar un proyecto web a partir de la base construida durante las clases. Se permite el uso de herramientas como Google Fonts, Font Awesome y la incorporación de elementos como imágenes, videos o archivos tipografías. Todos los archivos entregados tienen que estar pasado (revisados) por el validar de la W3C y no se permite el uso de librerías como Bootstrap, Tailwind o JQuery. Es necesario un diseño responsive en todas las páginas, cuidando las proporciones y toda la estética en sus diferentes resoluciones. El proyecto debe funcionar. Usar GIT para el desarrollo (Por lo menos tiene que haber 30 commits)

# Otras consideraciones

Tener en cuenta de utilizar SASS y el patrón 7-1 con nomenclatura BEM y nombres de clases en inglés. Se requiere utilizar como mínimo, los archivos SASS ya definidos, aunque pueden añadir otros. Todos los estilos deben estar escritos en SASS. Se entrega el proyecto hecho con un responsive (Desktop First) llevar el proyecto a (Mobile First). Con una media query para celular (576px)

¿Qué puedo y no puedo hacer durante el desarrollo del proyecto?

La temática es libre del proyecto.
index.html
No se va poder modificar el html. Las etiquetas html, sus clases y sus ids, no se pueden modificar. Si se va a poder agregar un footer o cualquier elemento fuera de las etiquetas, ids, clases base desarrolladas en clase. Solo se puede modificar el diseño a partir de SCSS (CSS). 
Si mi temática es por ejemplo de un sitio de comida saludable, puedo obviamente modificar el contenido de las etiquetas h2 y p. Y los atributos src, alt para cambiar las imágenes. 
contacto.html (Casi terminado)

Debe tener un formulario de contacto. Como mínimo “nombre”, “e-mail”, “comentarios”. El resto va por su cuenta, es libre el diseño. Puede sumarse un mapa de Google por ejemplo. Investigar como lograrlo.

nosotros.html (Casi terminado)

Contenidos libre.

alta.html

En alta no hay que hacer nada por ahora.

# TRABAJO REALIZADO

Se realizo el index centrado en una tienda de figuras de anime, en la cual se establecieron 12 productos, utilizando un div class card, con el fin de que cada producto tenga un contenedor con la informacion del producto, se centro en cuatro animes diferentes y que se encuentran en el boom del momento.

Adicionalmente durante la realizacion se crearon los enlaces para las diferentes paginas y que se pueda acceder a cada uno de ellos mediante el menu, con la informacion correspondiente, surgen dificultades en el momento de enlazar diferentes styles a las paginas, debido a que el comandoo utilizado no funcionaba de la manera deseada, y las ediciones del index las tomaban las demas paginas y de esta manera se enlazaban combinando la informacion.

Despues de muchos intentos y actualizar la consola, se logro enlazar los archivos style a las diferentes paginas; por otro lado se realizo una busqueda de imagenes relacionadas con la pagina, se buscaron 4 series diferentes, para atraer la atencion, fueron añadidas en la pagina principal para que sea mas visible.

Se realizo la creacion del menu en cada una de las paginas, surgieron complicaciones a medida que se iban actualizando los atributos hasta lograr el resultado final.

Surgieron complicaciones en la creacion del archivo vite.config.js debido a que no se esta enlazando la informacion de manera adecuada, se realizo el proceso con el sass pero aun se deben realizar ajustes para que funciones de manera adecuada, utilice el responsive dentro del archivo style.scss.

Se implemento el repositorio de git, para guardar la informacion realizada, se utiliza tanto de manera local como la rama remota.

Pasos para accerder al repositorio remoto

1 git init: se escribe en la consola para iniciar git
2 git status: para conocer el estado de los archivos.
3 git log: para revisar los commits
4 git log --oneline: para ver mas informacion de los commits
5 git add: para añadir los archivos al repositorio
6 git commit -m: para crear el commit
7 git push: para subir la informacion al repositorio remoto


Este proyecto integrador, se realiza con el fin de ir mejorando la practica en los procesos de desarrollo durante la realizacion del bootcamp fullstack, con el fin de mejorar las habilidades y demostrar lo aprendido en la primera entrega.

Igualmente se aspira a mejorarar el diseño con el fin de crear un diseño mas completo y practico.

Este proyecto fue desarrollado por Monica Katherine Hernandez Reyes

Cuenta de Github https://github.com/Katthehyr

Nombre de la empresa Art.KyA.World

## Etapa dos del proyecto integrador

Fecha: 07/08/2024 19hs (Nota 10) 
Fecha: 14/08/2024 19hs (Nota 8)

Implementar lo visto en clase de la etapa 2 en el proyecto integrador de cada uno. Trabajando con HandleBars. Peticiones asíncronas. 

Suma extra. Si quieren implementar para practicar en alta.html el alta/baja/modificación (CRUD). 

Para trabajar lo visto en HTML, CSS y JavaScript. NO REACT.

# TRABAJO REALIZADO

Inicialmente se desarrollo el codigo para tener una barra de busqueda en la pagina realizada, fue complicado estructurarla junto con los estilos ya establecidos.

Adicionalmente empece a desarrollar el archvo db.json, con el fin de insertar los productos de la pagina, tuve complicaciones en el momento de vincular el nuevo servidor para que funcionara dentro de la data.

Empece a verificar varias veces con el fin de validar la redaccion y la estructura del codigo con el fin de identificar posibles errores.

Luego de lograr que funcionara el db.json, continue con la implementacion de HandleBars, inicialmente no se presentaron dificultades a excepcion de errores en el navegador que me impedia identificar la informacion de las peticiones, al final tuve que crear una peticion sencilla que me permitiera identificar el funcionamiento HandleBars.

Despues de muchos intentos, se consiguio el resultado esperado encontrando las peticiones dentro del navegador, no obstante no estaba funcionando de la manera adecuada, por lo cual se analizo durante un largo tiempo el codigo, con el fin de identificar el error, aunque se logro completar, siguio apareciendo la informacion del index, aunque la array quedo realizada de la manera solicitada.

## URL local server: http://localhost:8080/Productos/

## URL MockAPI: https://66b3b9c17fba54a5b7edfcbc.mockapi.io/productos/

Se realizo el repositorio de json en MockAPI, siguiendo las indicaciones respectivas para su realizacion.




