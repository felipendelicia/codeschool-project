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

Lo que estamos definiendo aca es una etiqueta que se abre y no se cierra, estamos diciendo que usamos la ultima versión de HTML.

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

## Introducción al HTML semantico

HTML es un lenguaje de marcado de hipertexto, como ya dijimos, pero no es un lenguaje de programación, sin embargo, a fin de cuentas, es un lenguaje. Por lo tanto, al igual que un lenguaje natural cualquiera hay formas correctas e incorrectas de comunicarnos, en HTML pasa lo mismo, hay formas correctas e incorrectas de escribir etiquetas. ¿Por ejemplo? Poner más de un h1 ¿Porqué? porque el h1 posiciona tu web en google (SEO). Por lo tanto, cuando hablamos de SEO estamos hablando nada mas ni nada menos de poner todos esos elementos o "cajitas" de manera correcta de tal manera que google o cualquier buscador nos posicione correctamente en el SEO.

## 1. Tipos de etiquetas

### Titulos

Tenemos distintos tipos de titulos...

    <h1>Hola mundo!</h1>
    <h2>Hola mundo!</h2>
    <h3>Hola mundo!</h3>
    <h4>Hola mundo!</h4>
    <h5>Hola mundo!</h5>
    <h6>Hola mundo!</h6>

Todos son titulos y pueden utilizarse dependiendo cual sea su contexto. Por ejemplo, un h4 puede ir como titulo de secciones y demas, un h2 como subtitulo, etcetera.

### Parrafos

Ademas de los titulos, existe otra etiqueta que es la etiqueta p, que sirve para hacer parrafos:

`<p> Esto es un parrafo </p>`

Cuando abras el documento y penses "ah pero es un texto, sigue siendo un texto más", si exactamente, es otro texto, pero este es el texto adecuado para trabajar y hacer parrafos

### Otras etiquetas de texto

La etiqueta b sirve para poner la letra contenida en negrita

`<b> soy negrita </b>`

La etiqueta i sirve para poner la letra contenida en italica

`<i> soy italica </i>`

La etiqueta strike sirve para tachar la letra contenida

`<strike> estoy tachada </strike>`

Y hay un MONTON más!

## Display por defecto de algunas etiquetas

Si venis escribiendo y probando el codigo que venimos escribiendo, te vas a dar cuenta que hay algunas etiquetas que salen "una al lado de la otra" por decirlo de alguna manera: 

![diplay](https://user-images.githubusercontent.com/84806140/169615912-8e5fa8a5-b9b7-4289-86b7-1a4829b6a4ec.png "Display")

En este caso la etiqueta b y la i. ¿Porqué ocurre esto? Esto pasa debido a que las etiquetas como h1,h2, h3 y los parrafos ocupan todo el ancho de la caja que los contiene (en este caso el body) independiente de su contenido. Estos elementos se denominan en bloque:

![displayBlock](https://user-images.githubusercontent.com/84806140/169616185-e9d0827c-363b-43b1-a332-5da29341c6f3.png "Display Block")

En el caso de las demas etiquetas, se adaptan al contenido, es decir, el tamaño de la caja esta regido unicamente por su contenido, estos se denominan en linea:

![displayInline](https://user-images.githubusercontent.com/84806140/169616280-53ce163f-fa4c-4f53-a597-617bbdfc325c.png "Display Inline")

## 2. Tipos de etiquetas

### Enlaces

Esta es una etiqueta de texto que es importante. Esta etiqueta lo que hace es redirigirnos hacia otro lugar. ¿Vieron cuando a veces en una pagina dice "hace click aca" y cuando haces click ahi te manda a otra pagina? Y vos tipo: "Aaaah es magia", NO, no es magia, es la etiqueta a que nos redirige a otra pagina.

`<a href=""> Esto es un enlace que no te lleva a ningun lado </a>`

Esta etiqueta te redirige a la ruta descripta en el atributo "href". Por ejemplo:

`<a href="https://github.com/felipendelicia"> Esta etiqueta te lleva a mi github </a>`

O bien, podrias tener otro archivo HTML al cual quieras ingresar a traves del primero. Si se encuentra en la misma carpeta se puede acceder facilmente:

`<a href="./nombreDelOtroArchivo"> Esta etiqueta te lleva a un segundo archivo </a>`

### Listas

En primer lugar, cabe aclarar que hay dos tipos de listas: Las listas ordenadas y desordenadas. 
Las listas desordenadas se abren con una etiqueta ul de esta manera:

`<ul>  </ul>`

Ahora bien ¿cómo agregamos elementos a la lista? la forma de agregar elementos a una lista independientemente de que sea ordenada o no, es mediante etiquetas li:

    <ul>
        <li>Este es el primer elemento</li>
        <li>Este es el segundo elemento</li>
    </ul>

Podemos agregar tantos elementos como queramos...

Las listas ordenadas, se diferencian unicamente en que se abren con una etiqueta ol, por lo tanto, usando el ejemplo anterior, seria de la siguiente manera:

    <ol>
        <li>Este es el primer elemento</li>
        <li>Este es el segundo elemento</li>
    </ol>

### Multimedia

Vamos con algo más divertido. Multimedia basicamente es imagenes, videos y demas. Empecemos con las imagenes. Las imagenes tienen una forma muy facil de colocarse mediante una etiqueta img. Esta etiqueta es del tipo que se cierra en su lugar, de la siguiente manera:

`<img src=""/>`

Como podras haber visto, esta etiqueta ademas de lo que te dije antes, tiene un atributo src, la cual sirve para indicar la ruta a la imagen en el proyecto (o bien fuera del proyecto, siendo una url):

`<img src="https://avatars.githubusercontent.com/u/84806140?v=4"/>`

Esta etiqueta, por ejemplo, trae mi foto de perfil de github.

Arranquemos con los videos. Para los videos tambien existe una etiqueta, la etiqueta video:

`<video src=""></video>`

A diferencia de las imagenes, como podran haber visto se utiliza una etiqueta que se abre y se cierra. Dentro de src al igual que en las imagenes se coloca la ruta del video. Por ejemplo:

    <video src="videoprueba.mp4">
    </video>

![Video tag](https://user-images.githubusercontent.com/84806140/169910467-03db0f3d-8536-42d3-af62-98eb9ff4ec29.png "video tag")

Como podran ver, el video se muestra, pero , sin embargo, no se reproduce ni hay forma de que lo puedas reproducir.
Para esto (para poder controlar el video) tenemos que agregar un atributo, el atributo controls, este atributo no tiene un valor, su valor esta configurado por el navegador.

    <video src="videoprueba.mp4" controls>
    </video>

![Video tag](https://user-images.githubusercontent.com/84806140/169910912-87f75d31-01b8-4028-b32d-c0a4eedf5792.png "video tag")

### Divisores

La etiqueta más importante los DIVS. Los divs sirven como su nombre lo dice para separar contenido, para separar partes de la pagina, componentes, en fin, una infinidad de cosas, su sintaxis es:

`<div></div>`

Un ejemplo de como pueden servirte los divs de alguna manera puede ser:

    <div>
        <div>
            <h2>Producto n°1</h2>
            <p>precio: 300$</p>
        </div>
        <div>
            <h2>Producto n°2</h2>
            <p>precio: 2030$</p>
        </div>
    </div>

De esta manera separé cada producto en este "catalogo" de productos, por ejemplo.