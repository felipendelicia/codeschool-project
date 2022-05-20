# **HTML**

## ¿Qué **carajo** es HTML?

HTML, con siglas en inglés es HyperText Markup Language (Lenguaje de marcado de hipertexto).

## ¿Para qué sirve HTML?

HTML es el lenguaje con el agarramos "cajitas" o elementos y las ponemos en distintos lugares de la pagina. Despues, con CSS agarramos y les damos un estilo, un color, un ancho, un posición. Es decir, la función de este lenguaje es meramente estrutural.

> "Solamente ponemos las cajitas"

## ¿Cómo es la sintaxis de HTML?

En HTML, las "cajitas" que colocamos se colocan mediante etiquetas o tags que escribimos en nuestro archivo HTML. Las etiquetas pueden abrirse y cerrarse con una etiqueta de cierre:

`<etiqueta> Contenido </etiqueta>`

O bien abrirse y cerrarse en la misma etiqueta:

`<etiqueta />`

Algunas de nuestras etiquetas pueden poseer atributos o propiedades con su propio valor:

`<etiqueta atributo="valor"> Contenido </etiqueta>`

o

`<etiqueta atributo="valor"/>`

## Estructura básica HTML

En VSC hay una serie de "atajos" que se pueden utilizar para facilitar la tarea d escribir codigo, por ejemplo, existe una forma de escribir una plantilla de una pagina en HTML con un simple atajo :

`html:5`

![HTML shorthand](https://user-images.githubusercontent.com/84806140/169606310-5cedce55-be39-4927-9147-389ff64bf10e.png "HTML shorthand")

Lo que nos va a dar un resultado como este:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
    
    </body>
    </html>

Vamos por partes

`<!DOCTYPE html>`

Lo que estamos definiendo aca es una etiqueta que se abre y no se cierra, estamos diciendo que usamos la ultima versión de HTML

`<html> </html>`

Dentro de las etiquetas html lo que vamos a encontrar es toda la pagina, tanto lo que vemos, como lo que no vemos de la pagina. Ahora bien, ¿Qué podemos y qué no podemos ver?

`<head> </head>`

Dentro de la etiqueta head esta aquello que no vamos a ver de la pagina, como por ejemplo el titulo:

`<title>Document</title>`

Tambien podemos definir el tipo de caracteres que usa nuestra pagina segun las normas ISO:

`<meta charset="UTF-8">`

En conclusión, el el head ponemos todo lo que viene siendo configuraciones, los enlaces al estilo, a los scripts.

`<body> </body>`

Dentro de las etiquetas body va todo lo que es visible para nosotros, la pagina en si, lo que vienen siendo las etiquetas que ponen botones, titulos, parrafos, tablas, etcetera.