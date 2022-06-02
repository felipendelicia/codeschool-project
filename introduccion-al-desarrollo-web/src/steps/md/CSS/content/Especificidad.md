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