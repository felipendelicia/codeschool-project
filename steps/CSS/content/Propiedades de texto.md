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
