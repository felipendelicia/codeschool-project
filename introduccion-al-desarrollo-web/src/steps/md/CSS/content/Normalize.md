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
