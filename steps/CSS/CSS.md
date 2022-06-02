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


## Tipografias externas

Imaginate que queres poner una tipografia cualquiera ¿no? bueno, voy a mostrar un ejemplo con [google fonts](https://fonts.google.com/). Cuando vas a google fonts elegis una tipografia y copias el link de la tipografia:

![google-fonts](https://user-images.githubusercontent.com/84806140/170845328-7e49c268-d216-4ca0-8dd9-2ccb6f792dce.png "google fonts")

Una vez copiado lo pegas en el head:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Learning CSS!</title>
        <link rel="stylesheet" href="styles.css">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    </head>
    <body>
        <h1>Aprendiendo CSS</h1>
        <p>Estamos aprendiendo css para hacer nuestras paginas mas lindas</p>
    </body>
    </html>

Una vez pegado, ¿Como lo implementamos? Facil, google te dice como:

![google font css](https://user-images.githubusercontent.com/84806140/170845368-a436db51-d350-457c-8684-42459f0f5335.png "google font css")

¿Porqué tiene sans-serif separado por coma? Debido a que si no se encuentra la primera tipografia por lo que sea, vamos a buscar la segunda.

## Normalize

Los navegadores SIEMPRE traen un estilo por defecto. Por eso por ejemplo, cuando ponemos un h1 sin estilos, esta en negrita por defecto o tambien debido a eso es su tamaño. ¿Entonces que haces? usamos el normalize para reiniciar los estilos. ¿Como lo ponemos? googleamos [normalize.css](https://necolas.github.io/normalize.css/) y abrimos el primero que nos salga. Descargamos el archivo y lo colocamos en el directorio del proyecto.

Yo lo guardé como:

> normalize.css

y tiene una pinta como esta:

    /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
    
    /* Document
       ========================================================================== */
    
    /**
     * 1. Correct the line height in all browsers.
     * 2. Prevent adjustments of font size after orientation changes in iOS.
     */
    
    html {
      line-height: 1.15; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
    }
    
    /* Sections
       ========================================================================== */
    
    /**
     * Remove the margin in all browsers.
     */
    
    body {
      margin: 0;
    }

    ...

Para ponerlo en el proyecto simplemente lo insertamos en el head con una etiqueta link:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Learning CSS!</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="normalize.css">
    </head>
    <body>
        <h1>Aprendiendo CSS</h1>
        <p>Estamos aprendiendo css para hacer nuestras paginas mas lindas</p>
    </body>
    </html>

Yo para trabajar, generalmente le agrego al normalize las siguientes propiedades:

    *{
        margin: 0;
        padding: 0;
    }

Mas adelante entenderemos que significan estos conceptos. Fue, nos quedaria una pagina como esta:

![normalize](https://user-images.githubusercontent.com/84806140/170845853-bf913cda-ef91-4f87-a8f3-2109525fa997.png "nomalize")

## Cajas: display

¿Te acordas cuando te explique el tema de las cajas en bloque y en linea en la parte de HTML? Bueno, hay maneras de hacer que, por ejemplo, un h1 se comporte como un elemento en linea, haciendo que la caja se ajuste al contenido, algo como esto:

    <body>
        <h1>Aprendiendo CSS</h1>
    </body>

Este h1 tiene este valor por defecto:

    h1{
        display: block;
    }

Un display en bloque, sin embargo, ahora mismo queremos que se porte como un elemento en linea, se hace asi:

    h1{
        display: inline;
    }

Ahora, a la hora de modelar cajas hay diferentes cosas que se pueden hacer tanto con los elementos en bloque, como con los elementos en linea, por ejemplo, a un elemento en bloque, como un h1 por defecto podria modificarle el alto y ancho de la caja, algo como esto:

    h1{
        height: 300px;
        width: 300px;
    }

Sin embargo, con un elemento en linea no podria, es decir, esto no se puede:

    h1{
        display: inline;
        height: 300px;
        width: 300px;
    }

Entonces, ¿Como puedo solucionar este tema? Bueno, podes usar un display inline-block, el cual es un elemento en linea que conserva propiedades de un elemento en bloque, tal que asi:

    h1{
        display: inline-block;
        height: 300px;
        width: 300px;
    }

De esta manera, estaria funcionando. Mas adelante en esta introduccion seguiremos viendo distintos displays.

## Propiedades de cajas

### background-color

Ya habiamos mirado un poco lo que era background color. Background color es el color de fondo de determinada caja. Vamos a ver un ejemplo de como poner una caja color negro, por ejemplo:

    h1{
        background-color:#000;
    }

De esta manera, mis h1 tendran un fondo color negro.

### padding

Bueno, llego la hora de introducir el padding, una propiedad importantisima de las cajas, muy importante. ¿Qué es el padding? el padding es la distancia que hay entre los bordes de la caja y su contenido, por ejemplo:

![padding](https://user-images.githubusercontent.com/84806140/170847600-36924a8f-16df-4de8-9e9b-e8331d63c79e.png "padding")

Entonces... Tenemos cuatro paddings, el padding-top (padding de arriba), padding-bottom (padding de abajo), padding-right (padding derecho) y padding-left (padding izquierdo).

¿Como le damos padding a todos los lados sin volvernos locos? Padding es un shorthand propertie, por lo tanto, es una propiedad acortada, que podemos acortar, que podemos poner de varias maneras.

La forma mas intuitiva es la siguiente:

    h1{
        display: inline-block;
        background-color:#f00;
        padding-top: 50px;
        padding-right: 100px;
        padding-bottom: 150px;
        padding-left: 200px;
    }

Que daria algo como esto:

![padding](https://user-images.githubusercontent.com/84806140/170847743-d8fddc9f-7381-47fe-9b60-97bd64f049e1.png "padding")

Tambien podemos poner el padding de esta manera:

    h1{
        padding: 20px;
    }

De esta manera le estamos dando 20px de padding a todos los lados. 

| padding | all |
|--|--|
|property|Afecta arriba, abajo, izquierda y derecha|

Ahora, ¿Que pasa si quiero que el padding sea igual arriba y abajo e igual a la derecha e izquiera, es decir, igual en el eje x e igual en el eje y? Podemos poner el padding asi:

    h1{
        padding: 20px 30px;
    }

De esta manera, arriba y abajo le dimos 20px y a los costados 30px.

| padding | y | x |
|--|--|--|
|property|Afecta arriba y abajo|Afecta a la izquierda y la derecha|

Ahora mira, si le queres dar a todos lados de manera diferente como en el primer ejemplo, pero usando el shorthand, tenes que hacerlo con este orden, como si fuesen las agujas de un reloj:

    h1{
        padding: 10px 20px 30px 40px;
    }

De esta manera: 10px arriba; 20px derecha; 30px abajo y 40px izquierda:

| padding | top | right | bottom | left |
|--|--|--|--|--|
|property|Afecta arriba|Afecta a la derecha| Afecta abajo | Afecta a la izquierda |

### margin

Otra propiedad recontra importante. El margin es la distancia entre nuestra caja y otras cajas. Es como un margen justamente, desde la caja afectada, ilustremos:

![margin](https://user-images.githubusercontent.com/84806140/170848041-f01c09ee-9a35-4799-9363-76f7ce9838b5.png "margin")

El resto, el margin-top, margin-right, margin-bottom y margin-left son la misma historia que en el padding, al igual que padding, margin es un shorthand.

### border-radius

Border radius es una propiedad que sirve para redondear los bordes y para aplicarlo es tan simple como:

    h1{
        display: inline-block;
        background-color:#f00;
        padding: 30px;
        border-radius: 10px;
    }

Se puede manejar con porcentajes, pixeles, em, etcetera.

### border

Border es una propiedad acortada y sirve para manejar los bordes justamente de la caja. Tenemos border-width, border-color, border-style, sirven para, el ancho del borde, el color y el estilo de borde respectivamente. Se aplica de la siguiente manera:

    h1{
        display: inline-block;
        background-color:#f00;
        padding: 30px;
        border-widht: 3px;
        border-color: #000;
        border-style: solid;
    }

Ahora, ¿Como aplicamos el shorthand? bueno, asi:

    h1{
        display: inline-block;
        background-color:#f00;
        padding: 30px;
        border: 3px solid #000;
    }

| border | width | [style](https://www.w3schools.com/css/css_border.asp) | color
|--|--|--|--|
|property|Ancho del borde|Estilo del borde|Color del borde|

### box model

Todas estas propiedades: el padding, el margin, el border y bueno, el content son los cuales componen el box model, cada uno puede ser modificado con una propiedad: el padding, margin, border y line-height, respectivamente. Ademas, es una jerarquia en la que se van poniendo las cosas, se arranca del content, seguido de el padding, border y margin:

![box-model](https://user-images.githubusercontent.com/84806140/170848438-f2e32be9-35f6-4b72-82ee-1c61c5ce1945.png "box model")

### box shadow

box shadow me re gusta, nos permite darle sombra a nuestra cajita. Y se aplica de la siguiente manera mira:

    h1{
        display: inline-block;
        background-color:#f00;
        padding: 30px;
        box-shadow: 2px 4px 15px 0 #000
    }

Y vos me preguntaras... ¿Que carajo hiciste? Bueno, te explico:

| box-shadow | x | y | desenfoque | border | color |
|--|--|--|--|--|--|
|property|Desplazamiento de la sombra en el eje x|Desplazamiento de la sombra en el eje y|Desenfoque del sombreado|Cuanto borde va a tener|Color de la sombra|

## Outline

¿Qué es el outline? Bueno, es un shorthand. Bueno ya sé, pero en si, ¿Qué es outline? Outline es como un border, pero sin afectar a las demas cajas ni a la misma caja, es decir, no ocupa un espacio real. Dicho de la manera correcta, no ocupa un espacio en el DOM ¿Qué es el DOM? Es el document object model, son todos los elementos que estan dentro de nuestra pagina.

![dom](https://www.freecodecamp.org/news/content/images/2021/09/Document.jpg "dom")

Bueno vamos a aprenderlo con un ejemplo. Para empezar imaginate estos estilos y estructura:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Learning CSS!</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="normalize.css">
    </head>
    <body>
        <div class="caja1"></div>
        <div class="caja2"></div>
    </body>
    </html>

Y styles.css:

    .caja1, .caja2{
        width: 200px;
        height: 200px;
        margin: 0 auto;
    }
    .caja1{
        background-color: red;
        border: 10px solid blue;
    }
    .caja2{
        background-color: yellow;
    }

> Cuando agregamos un margin auto a los lados centramos las cajas. Debido a que pone la misma cantidad de margen a ambos lados teniendo en cuenta el tamaño del content.

![outline](https://user-images.githubusercontent.com/84806140/170849062-9f8f2a17-e2fd-432f-82ad-80e5c3f5269c.png "outline")

Asi se ve claramente como se agrega un borde que ocupa espacio y mueve las demas cajas.

    .caja1{
        background-color: red;
        outline: 10px solid blue;
    }

Si hacemos este minimo cambio, mira el resultado que logramos:

![outline](https://user-images.githubusercontent.com/84806140/170849104-7d558882-5d26-4f0c-87b0-1e0312e866c2.png "outline")

