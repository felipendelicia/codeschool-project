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