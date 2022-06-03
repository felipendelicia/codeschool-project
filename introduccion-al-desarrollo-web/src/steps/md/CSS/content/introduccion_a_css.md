## ¿Qué es CSS?

CSS con siglas en inglés de Cascading Style Sheets, en español "Hojas de estilo en cascada".

## ¿Para qué sirve CSS?

Ahora CSS nos sirve para darle vida a eso que ya habiamos empezado en HTML, vamos a agarrar esas etiquetas y vamos a darles su propio estilo. Vamos a agarrar un por ejemplo un parrafo y le vamos a dar un color, un color de fondo, un borde, etcetera.

## ¿Cómo arrancar a trabajar con CSS?

Primero tenemos que tener un archivo HTML al cual estilizar, al crear este archivo, deberemos crear un segundo archivo con extension CSS para empezar a crear nuestra hoja de estilos y relacionarla con el archivo html. Ahora bien, ¿Como se hace eso?

Supongamos que en mi carpeta "workspace" tengo estos archivos:

> index.html

> styles.css

Lo que debo hacer en el archivo html para arrancar a relacionar estos dos archivos es agregar una etiqueta link en el head del mismo, de la siguiente manera:

`<link rel="stylesheet" href="./styles.css">`

En href como sabemos va la ruta al archivo de estilos desde el archivo HTML.

## Estructura de los estilos en CSS

Basicamente en css los estilos se resuelven de la siguiente manera:

    selector {
        propiedad: valor;    
    }

El selector es el o los elementos que estoy seleccionando. Cuando tenemos seleccionado lo que queremos cambiar ¿Que le vamos a cambiar? El color de un texto, por ejemplo:

    selector {
        color: red;    
    }