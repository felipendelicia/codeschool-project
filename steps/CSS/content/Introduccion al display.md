## Introducción al display

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