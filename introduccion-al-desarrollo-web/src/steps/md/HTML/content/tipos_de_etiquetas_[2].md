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

### Formularios

Para crear un formulario, para que el usuario pueda ingresar (input) información, hay que crear un formulario con una etiqueta form y dentro de la misma van a estar las entradas de datos "input":

`<form></form>`

Esto es un formulario sin entrada alguna.

Sin embargo, si quiero una entrada debo hacer lo siguiente:

    <form>
        <input type=""/>
    <form>

En este caso estamos requiriendole texto al usuario, esta es una entrada de texto, ¿Cómo lo sé? porque por defecto en navegadores cuando el "type" no tiene valor como en el ejemplo, por defecto es texto. Este ejemplo seria equivalente a:

    <form>
        <input type="text"/>
    <form>

Hay varios tipos de entradas que se le pueden requerir al usuario, por ejemplo: (Supongamos siempre un contexto dentro de una etiqueta form)

    <input type="password"/>

De esta manera estaremos requiriendo al usuario que ingrese una contraseña.

Tambien podemos requerirle un numero al usuario de la siguiente manera:

    <input type="number"/>

Y de esta manera hay montones de entradas de datos, tales como: "email", "color", "range", "date", "time", "button", etcetera.

Ahora bien, ya que vimos varios tipos de inputs, quiero que sepan que hay varios tipos de atributos para estos che! Por ejemplo, el atributo "name":

    <form>
        <input type="text" name="nombre"/>
    <form>

Supongamos un escenario como este, el atributo name es utilizado como "identificador" frente a un lenguaje de backend (del servidor) para poder identificar de que input nos estamos refiriendo.

Otro atributo es el "required":

    <form>
        <input type="text" required=""/>
    <form>

Si este atributo se aparece en nuestro camino significa que es un campo obligatorio que debe ser llenado para darle al boton de submit.

Otra cosa que podemos hacer es darle a un input un valor por defecto al cargar la pagina con el atributo "value", por ejemplo:

    <form>
        <input type="text" name="nombre" value="Felipe"/>
    <form>

### Metadatos

Los metadatos, literalmente, son datos que describen otros datos. En general, un grupo de metadatos se refiere a un grupo de datos que describen el contenido informativo de un objeto al que se denomina recurso (En este caso nuestra web).

¿Y como trabajamos en HTML con metadatos? con la etiqueta meta (y se pone en el head).

`<meta>`

Por ejemplo, la meta mas basica es la que setea los caracteres segun las normas iso, me parece que ya la habia mencionado, pero aca va de nuevo:

`<meta charset="utf-8">`

Despues, generalmente los meta tienen la siguiente estructura:

`<meta name="nombre" content="contenido">`

Por ejemplo, este meta es utilizado para colocar keywords o palabras clave de la pagina:

`<meta name="keywords" content="se colocan aca todas las palabras clave relevantes a la pagina web">`

Supongamos que tenemos una panaderia:

`<meta name="keywords" content="pan, panaderia, facturas, masas">`

Tenemos tambien el meta description, que describen la pagina:

`<meta name="description" content="La mejor panaderia de Argentina, Buenos Aires.">`

Tambien hay un meta author, que lo que se hace basicamente es identificar quien es el autor de la pagina:

`<meta name="author" content="Felipe N. Delicia">`

Ahora supongamos que nuestra empresa esta registrada y tiene derechos de copyright:

`<meta name="copyright" content="Nombre de la empresa registrada, dueña de los derechos de la misma">`

Despues tenemos tambien una etiqueta meta, meta robots, que basicamente le decimos al buscador si la web debe o no debe ser indexada, significa si la web debe o no aparecer en busquedas. Para indexarla:

`<meta name="robots" content="index">`

Para no indexarla:

`<meta name="robots" content="noindex">`

### Etiquetas pertenecientes a la semantica de HTML

Estas etiquetas son las que se utilizan para generar las estructuras principales de una pagina web y son utilizadas para realizar esa tarea con una semantica correcta, existen etiquetas para encabezados, navegaciones, barras laterales, pies de pagina, etcetera.

Los encabezados en HTML se describen con le etiqueta header:

    <header>
    </header>

Las barras de navegación con la etiqueta nav. Ahora bien, supongamos que el encabezado en si es mi barra de navegacion, pues se haria de la siguiente manera:

    <header>
        <nav>
        </nav>
    </header>

Y si le ponemos un poco mas de onda:

    <header>
        <nav>
            <ul>
                <li>
                    <a href="./inicio.html">Inicio</a>
                </li>
                <li>
                    <a href="./aboutUs.html">Acerca de nosotros</a>
                </li>
                <li>
                    <a href="./contact.html">Contacto</a>
                </li>
            </ul>
        </nav>
    </header>

Despues, por ejemplo, se puede hacer un pie de pagina con la etiqueta footer:

    <footer>
    </footer>

Aca generalmente se coloca contacto, para recibir feedback tambien, acerca de nosotros, etcetera:

    <footer>
        <h3>Todos los derechos reservados</h3>
        <p> Seguinos en nuetras <b>redes</b> </p>
        <a href="https://www.instagram.com/1felipo/">Instagram</a>
        <a href="https://github.com/felipendelicia">Github</a>
        <a href="https://twitter.com/felipendelicia">Twitter</a>
    </footer>

Y de esta manera tendremos una pagina semanticamente más correcta.