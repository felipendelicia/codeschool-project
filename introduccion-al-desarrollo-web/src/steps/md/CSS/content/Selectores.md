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