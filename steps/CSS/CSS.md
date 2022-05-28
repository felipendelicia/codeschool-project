> [Volver al inicio](../../README.md)

# **CSS 🎨**

## Indice

[¿Qué es CSS?](#¿qué-es-css)

[¿Para qué sirve CSS?](#¿para-qué-sirve-css)

[¿Como arrancar con CSS?](#¿cómo-arrancar-a-trabajar-con-css)

[Estructura de los estilos](#estructura-de-los-estilos-en-css)

[Selectores](#selectores-en-css)

[Especificidad](#especificidad)

[Unidades](#unidades-de-medida)

[Propiedades de texto](#propiedades-de-texto)

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

Es decir, todos los elementos de la web pasan a ser rojos.

### Por tipo

¿Cómo es el tema de seleccionar por tipo? es simple, seleccionas unicamente el tipo de elemento que vos definas, por ejemplo, los elementos p. De la siguiente manera:

    p {
        color: #f00;
    }

Suponiendo que mantenemos el codigo anterior y solo cambiamos los estilos, tendriamos un resultado asi:

![porTipo](https://user-images.githubusercontent.com/84806140/170386969-7e8827ab-93fd-44ab-b766-4049e12a9a6c.png "Por tipo")

Lo mismo pasa si en vez de poner p pongo h1 como selector:

    h1 {
        color: #f00;
    }

El titulo (h1) se volveria rojo.

### Por clases

Si queremos seleccionar un elemento por clase, es tan simple como agarrar el elemento que quieras estilizar de HTML y darle una clase personalizada:

    <body>
        <h1 class="titulo texto">Aprendiendo CSS</h1>
        <p class="parrafo texto">Estamos aprendiendo css para hacer nuestras paginas mas lindas</p>
    </body>

Por tanto, yo aca defini que mi elemento h1 va a pertenecer a la clase de titulo y mi elemento p a mi clase parrafo. Ambos pertenecen a la clase texto. Ahora bien, yendo a styles.css ¿Cómo hago alusion a alguna clase? con un punto. De la siguiente manera:

    .titulo {
        color: red;
    }

    .parrafo{
        color: blue;
    }

    .texto{
        font-family: sans-serif
    }

Por tanto, defino que los elementos con la clase texto tengan una fuente sans-serif, los titulos un color rojo y los parrafos un color azul.

![porClase](https://user-images.githubusercontent.com/84806140/170387912-b9d30fb0-75b0-40fd-ad6b-08684b6742a5.png "Por clase")

### Por ID

Ahora, ¿Cuál es la diferencia entre un ID y una clase? Bueno, para empezar, a la hora de seleccionar un ID se utiliza el hashtag, el numeral, la almohadilla o como le digan en tu pais. En segundo termino, si queremos trabajar correctamente, tenemos que trabajar de tal manera que los ID sean unicos, porque un ID es eso, un identificador (identifier) de un elemento UNICO, es como tu DNI. Ahora que esto quedo claro, ¿Cómo se usa?

    <body>
        <h1 id="titulo-piola">Aprendiendo CSS</h1>
        <p>Estamos aprendiendo css para hacer nuestras paginas mas lindas</p>
    </body>

Volvemos a identificar a un elemento con el ID, dandole dicho atributo con su respectivo valor, y despues, en la hoja de estilos otro tanto:

    #titulo-piola{
        color: #F47C7C;
    }

Nos da un resultado como este:

![porID](https://user-images.githubusercontent.com/84806140/170402127-6e753403-74f6-4893-8d94-485dcfb9431c.png "por ID")

### Por atributo

Como su nombre lo indica, vamos a seleccionar elementos en funcion de su atributo-valor. Vamos a hacer un ejemplo:

    <body>
        <h1 lala="lele">Aprendiendo CSS</h1>
        <p>Estamos aprendiendo css para hacer nuestras paginas mas lindas</p>
    </body>

Teniendo este codigo, con tales atributos, en este caso "lala" que equivale a "lele", vamos a identificar ese elemento mediante este codigo css:

    [lala="lele"]{
        color: #F47C7C;
    }

Y de esta manera nuestro querido h1..:

![porAtributo](https://user-images.githubusercontent.com/84806140/170402127-6e753403-74f6-4893-8d94-485dcfb9431c.png "por Atributo")

Vale aclarar que no debe ser un atributo especifico, puede ser cualquier cosa.

### Por Descendiente

En este caso, se selecciona uno o varios elementos mediante la descendencia entre elementos. Supongamos por ejemplo este codigo:

    <body>
        <div>
            <p> Hola mundo! </p>
        </div>
        <p> Adios mundo cruel </p>
    </body>
    
Ahora bien, imaginemos que queremos darle un estilo a las etiquetas p, facil, con un estilo por elemento:

    p{
        color: #f00;
    }
    
Pero suponete que unicamente queremos darle estilo a los elemento p que estan dentro de un div (que son descendientes de un div). Para tal cosa deberiamos modificar el codigo un tanto asi:

    div p{
        color: #f00;
    }

De esta manera tendriamos el resultado esperado:

![por descendiente](https://user-images.githubusercontent.com/84806140/170505343-37b6c86a-05b0-4220-9491-095659849661.png "por descendiente")

De la misma manera puede hacerse pero utilizando clases, algo tal que asi:

    <body>
        <div class="container">
            <p> Hola mundo! </p>
        </div>
        <p> Adios mundo cruel </p>
    </body>

Y en la hoja de estilos:

    .container p{
        color: #f00;
    }
    
Y ocurriria exactamente lo mismo.

### Por pseudo-clases

Este selector lo vamos a ver mas a lo largo de esta introduccion, sin embargo, voy a explicar con la psudo-clase mas conocida para que por lo menos te quede el concepto capo. Una psudo-clase es que en un evento se genere una seleccion. Por ejemplo: supongamos el siguiente codigo:

    <body>
        <h1>Aprendiendo CSS</h1>
        <p>Estamos aprendiendo css para hacer nuestras paginas mas lindas</p>
    </body>
    
y supongamos la siguiente hoja de estilos:

    p {
        color: #f00;
    }

El resultado no seria ningun misterio:

![porTipo](https://user-images.githubusercontent.com/84806140/170386969-7e8827ab-93fd-44ab-b766-4049e12a9a6c.png "Por tipo")

Peeero, si queremos por ejemplo, que cuando pasemos el mouse por encima del parrafo se vuelva azul, deberiamos hacerlo mediante pseudo-clases, en este caso, hover, se aplican de esta manera:

    p {
        color: #f00;
    }
    p:hover {
        color: blue;
    }

Y ahora si, ya tendriamos ese estilo deseado, al pasar el mouse por encima, seria azul:

![for pseudo-clase](https://user-images.githubusercontent.com/84806140/170512247-71074006-4be7-4338-8ebd-0f285655b1b2.png "Por pseudo-clase")

( No se si se aprecia en la imagen, sin embargo, creeme estoy pasandole el mouse :) )

Hay más formas de seleccion, sin embargo, por ahora, en esta introduccion nos quedamos con las mas basicas. [Ver todos los selectores.](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)

## Especificidad

Bueno ahora, ya vistos los selectores vamos a ver especificidad 😈. La especificidad se da generalmente cuando das estilos a diferentes cosas en una pagina web y surgen conflictos en los estilos, esto es algo muy comun cuando estas desarrollando una pagina. Suponete que tenes un parrafo con la clase "lala" y en algun punto de tu hoja de estilos das estilos tanto a la clase como a los parrafos ¿Que estilo deberia conservar? Bueno, esto lo resuelve la especificidad.

Para solucionar este problema, te voy a mostrar las formas de seleccion de la menos especifica a la más especifica:

> Por elemento

La seleccion por elementos, por ejemplo:

    p{
        color:red;
    }

es la menos especifica de todas.

> Por clases, por pseudo-clases y por atributo

Seguido de la seleccion por elemento, es más especifico hablar de clases, de pseudo clases y de atributo, te doy ejemplos respectivamente:

    .clase-de-ejemplo{
        color:red;
    }
    
    h1:hover{
        color:red;
    }
    
    [atributo="valor"]{
        color:red;
    }
    
> Por ID

Más especificamente hablando o codeando, tenemos a la seleccion por ID que te recuerdo, es unica:

    #id-de-ejemplo{
        color:red;
    }
    
> Estilos en linea

No me he metido a hablar de los estilos en linea, esto es debido a que hoy en dia se tiende a modularizar los estilos a una hoja de estilos aparte, los estilos en linea son eso, estilizar un elemento de HTML en la misma linea en la que se crea:

    <p style="color:red;"> Hola mundo! </p>
    
> !important

El important es algo que se utiliza en contadas ocasiones. El important es el mayor grado de especificidad que hay, es decir, si hay important, de seguro que se aplica la propiedad. Vamos a verlo:

    h1{
        color:red !important
    }
    
De esta manera, no hay manera de que los h1 no se hagan rojos.

## Unidades de medida

Antes de ponernos a ver propiedades de texto, vamos a ver unidades de medida, seguro ya estas hasta el cuello de solo conocer la propiedad color, pero bueno, primero, antes de conocer propiedades que nos van a venir re bien y van a ser divertidas, tenemos que saber como medir, ¿Solo vamos a usar pixeles? obvio que no, por eso vamos a ver esto, presta atencion.

Para el transcurso de este "capitulo" vamos a usar el siguiente codigo:

    <body>
        <h1>Aprendiendo CSS</h1>
    </body>

### Unidades fijas

Dentro de lo que vienen siendo las unidades, tenemos dos ramas, las unidades fijas y las relativas. En este caso, las unidades fijas son aquellas que no dependen de nada y no varian, son por ejemplo: los centimetros, puntos, pulgadas, pixeles, milimetros, etcetera. Ahora vamos a probar, podemos con estas unidades cambiar el tamaño de la fuente del titulo que mostre mas arriba, ¿Como? asi:

    h1{
      font-size: 50px;
    }

En este caso, cambie el tamaño de fuente a 50 pixeles, pero podria haber usado "cm" por ejemplo.

Ahora bien, ¿Cúal es el problema de las medidas fijas? El problema es que si bien pueden servir para determinadas cosas, supongamos que tenemos cierta aplicación con medidas fijas, ¿se adaptará a dispositivos moviles? NO! Este es el problema de las medidas fijas, cosa que no pasa con medidas relativas.

### Unidades Relativas

Las principales medidas relativas son em, rem, vw, vh, %. Suponete que yo al titulo le doy un font size de 5em, ¿que carajo es un em?¿a cuanto equivale? te comento, por defecto, un em son 16 pixeles, por lo tanto, lo que haces cuando le das 5em es darle 16px * 5 = 80px en este caso. ¿Como hago yo para cambiar el valor por defecto del em? Bueno, el valor del em se hereda, por tanto, usando el codigo anterior:

    body{
      font-size:20px;
    }
    
De esta manera, un em valdrá ahora por defecto 20 pixeles.

REM tiene la diferencia de que tiene como referencial al root y tambien se usa bastante, parecido a em.

Ahora vamos con unas de las que mas me gustan, en este caso el viewport width (vw) y el viewport height (vh). Estas medidas wtf son buenisimas, 100vw son igual a todo el ancho de la pantalla y 100vh son igual a todo el alto de la pantalla, asi de simple. Por ejemplo: Les menti, vamos a cambiar el codigo, imaginen esto:

    <body>
        <div> holis </div>
    </body>

Es simplemente una caja dentro del body. Pero ahora vamos a darle un color de fondo (background-color) y un ancho (width) para que veamos el poder del viewport:

    div {
      background-color:#000;
      width:50vw;
    }

![vw](https://user-images.githubusercontent.com/84806140/170531241-bee46791-0ec3-4c63-bbf3-f07cd103d463.png "vw")

Como pueden ver tiene un ancho de la mitad de la pantalla (contiene margin y padding, eso luego nos vamos a encargar de definirlo). De la misma manera puede trabajarse con el vh.

Y finalmente, cuando hablamos de porcentaje, hacemos alucion al contenedor de nuestro elemento, es decir, por ejemplo, si te digo que le des un width (ancho) de 50% a un elemento, este va a adoptar un ancho del 50% de su contenedor. Asi de simple.

## Propiedades de texto

Aleluya! al fin vamos a ver propiedades copadas para estilizar nuestras webs. Atentis.

### font-size

Esta ya tuvimos unos acercamientos a su definicion y demas, se trata de que tan grande sea la letra, el tamaño de letra, esta se define con las unidades que vimos recien. Seria una cosa como la siguiente:

    h1 {
        font-size: 2em;
    }

Este codigo haria que mis h1 tengan un tamaño de 2em, por defecto, 32px.

### font-family

font-family es la tipografia, simplemente. Por ejemplo, miren este ejemplo de cambio de tipografia:

    h1 {
        font-size: 2em;
        font-family: sans-serif;
    }

De esta manera los h1 tendrian una tipografia "sans-serif".

### line-height

Para explicar lo que es el line-height voy a requerir abrir paint:

![line-height](https://user-images.githubusercontent.com/84806140/170844980-44724fd2-a9fc-4d2c-8007-db7ccaa9f2bd.png "line height")

Supongamos que la caja negra es el contenedor. Ahora suponete que a un texto le damos un line height 1 ¿Qué sucede? bueno, va a ser el "alto" de la caja verde que contiene la letra, si se fijan, empieza de la mitad y se divide la mitad para arriba y la otra para abajo. Si le dieramos un line-height 2, se dividiria diferente a la imagen, en vez de distribuirse 0.5, se distribuiria en 1 entero.

    h1 {
        font-size: 2em;
        font-family: sans-serif;
        line-height: 1;
    }

### font-weight

El font weight es mas que nada el grosor de la letra, generalmente varia de 100 a 1000 aproximadamente (depende de las tipografias), tambien se le pueden dar valores como "normal", "lighter", "bold":

    h1 {
        font-size: 2em;
        font-family: sans-serif;
        line-height: 1;
        font-weight: bold;
    }


### color

Ni me gastaria en explicarlo de tanto que lo vimos, pero simplemente cambia el color de la letra, un ejemplito mas:

    h1 {
        font-size: 2em;
        font-family: sans-serif;
        line-height: 1;
        font-weight: bold;
        color: #f00;
    }
