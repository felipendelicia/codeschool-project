# **CSS**

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

## Selectores en CSS

Bueno bien, ahora que tenemos esto en cuenta vamos a ver las distintas formas que tenemos de seleccionar.

### Universal

Para empezar tenemos el selector universal ¿Cuál es el selector universal? El que selecciona todos los elementos, se usa con un asterisco "*".

    * {
        propiedad: valor;
    }

Ahora vamos a ponerle la propiedad mas sensillita:

    * {
        color: red;
    }

Ya van a ver mas adelante que en realidad no hay que poner implicitamente red, sino que hay que hacer uso de codigos de color hexadecimales, que, para el rojo puede ser este:

    * {
        color: #f00;
    }

¿Cuál es la diferencia entre usar la forma implicita y los codigos hexadecimales? El hexadecimal es la definicion exacta del color que queremos mostrar, sin embargo, si le decis red, va a utilizar lo que es red por predeterminado para el navegador, asi, por ejemplo, vas a tener un rojo mas claro en un navegador que en otro.

Supongamos que tenemos una pagina en HTML como esta:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Learning CSS!</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Aprendiendo CSS</h1>
        <p>Estamos aprendiendo css para hacer nuestras paginas mas lindas</p>
    </body>
    </html>

Y la hoja de estilos "styles.css" tiene el siguiente estilo:

    * {
        color: #f00
    }

Tendriamos el siguiente resultado:

![universalSelector](https://user-images.githubusercontent.com/84806140/170365771-8702a490-e494-44bb-9d1b-931be7e80cf6.png "Universal Selector")