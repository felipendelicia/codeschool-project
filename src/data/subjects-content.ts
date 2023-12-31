const themes = [
  {
    name: "editor_de_texto",
    subtopics: [
      {
        id: 0,
        title: "✍️ Instalacion del editor de texto",
        content: `
          <p>
            Todos los editores de texto tienen utilidades básicas similares. Ofrecen un
            lugar para trabajar con el texto y muchos tienen una opción de resaltado de
            sintaxis. También proporcionan teclas de acceso rápido y funciones de texto
            intuitivas. En definitiva, hacen que escribir código sea más fácil
          </p>
          <h2>
            Entra en la
            <a href="https://code.visualstudio.com/Download" target="_blank"
              >pagina de descarga</a
            >
            de visual studio code
          </h2>
          <p>
            Una vez en la página de descarga de Visual Studio Code, elige la versión
            adecuada para tu sistema operativo. Una vez que tengas el instalador, ábrelo y
            sigue todos los pasos.
          </p>
          <img
            src="https://user-images.githubusercontent.com/84806140/169602174-8d254c26-721a-48ee-9f10-c2f44209baab.png"
            alt="VS code download page"
          />
          <blockquote>
            <a href="https://youtu.be/ITxcbrfEcIY" target="_blank"
              >Set up Visual Studio Code</a
            >: video oficial instalacion y nociones basicas del editor 🤙
          </blockquote>
          `,
      },
    ],
  },
  {
    name: "html",
    subtopics: [
      {
        id: 0,
        title: "🧱👷 Introducción al HTML",
        content: `
          <h2>¿Qué carajo es HTML?</h2>
          <p>
            HTML, o "HyperText Markup Language" en inglés, es un lenguaje de marcado de
            hipertexto.
          </p>
          <h2>¿Para qué sirve HTML?</h2>
          <p>
            HTML (HyperText Markup Language) es el lenguaje que se utiliza para
            estructurar el contenido de una página web. Con HTML, podemos agarrar
            elementos como títulos, párrafos, imágenes y enlaces, y colocarlos en
            distintos lugares de la página. Estos elementos se conocen como "cajas" o
            "etiquetas", y se escriben utilizando sintaxis especial de HTML.
          </p>
          <p>
            Una vez que tenemos el contenido de nuestra página estructurado con HTML,
            podemos utilizar CSS (Cascading Style Sheets) para darle estilo y diseño. Con
            CSS, podemos agarrar las "cajas" que hemos creado con HTML y modificar su
            apariencia, como el color, el ancho, la posición y mucho más. CSS nos permite
            controlar el diseño de nuestra página de manera muy detallada, y es una
            herramienta esencial para cualquier desarrollador web.
          </p>
          <p>
            En resumen, HTML es el lenguaje que se utiliza para estructurar el contenido
            de una página web, mientras que CSS se utiliza para darle estilo y diseño.
            Juntos, HTML y CSS nos permiten crear páginas web completas, con contenido y
            diseño atractivo y coherente.
          </p>
          <blockquote>'Solamente ponemos las cajitas'</blockquote>
          <h2>¿Cómo es la sintaxis de HTML?</h2>
          <p>
            En HTML, las "cajas" o elementos que colocamos en nuestra página se escriben
            utilizando etiquetas o "tags". Las etiquetas son instrucciones escritas en el
            archivo HTML que indican al navegador web qué elementos deben crear y dónde
            deben colocarlos. Cada etiqueta comienza con una palabra clave escrita entre
            dos símbolos de menor que y mayor que, y puede tener una etiqueta de cierre
            que indica el final del elemento. Por ejemplo, para crear un párrafo:
          </p>
          <code>&lt;p&gt; Contenido &lt;/p&gt;</code>
          <p>
            Algunas etiquetas, como la etiqueta de imagen, no tienen una etiqueta de
            cierre, ya que su contenido se encuentra en un atributo de la etiqueta en
            lugar de entre las etiquetas de apertura y cierre.
          </p>
          <code>&lt;img /&gt;</code>
          <p>
            Algunas de nuestras etiquetas pueden poseer atributos o propiedades con su
            propio valor:
          </p>
          <code
            >&lt;etiqueta <b>atributo="valor"</b>&gt; Contenido &lt;/etiqueta&gt;
          </code>
          <p>o</p>
          <code>&lt;etiqueta <b>atributo="valor"</b> /&gt;</code>
          <p>
            En resumen, las etiquetas o "tags" son el medio a través del cual colocamos
            elementos en una página web utilizando HTML. Cada etiqueta tiene una sintaxis
            específica y puede tener atributos adicionales que modifican su comportamiento
            o apariencia. Conocer la sintaxis y uso correcto de las etiquetas es esencial
            para poder crear páginas web correctamente estructuradas con HTML.
          </p>
          `,
      },
      {
        id: 1,
        title: "🏠 Estructura basica en HTML",
        content: `
          <p>
            En Visual Studio Code (VSC), hay una serie de "atajos" o atajos de teclado que
            se pueden utilizar para facilitar la tarea de escribir código. Por ejemplo,
            existe una forma de escribir una plantilla de página HTML con un simple atajo:
            basta con escribir la palabra "html:5" y presionar la tecla "tabulador". Esto
            creará automáticamente la estructura básica de una página HTML, con etiquetas
            de apertura y cierre de HTML, head y body, y un título en el head.
          </p>
          <code>html:5</code>
          <p>
            Estos atajos son muy útiles para ahorrar tiempo y evitar tener que escribir
            código manualmente. VSC tiene muchos otros atajos que pueden ser útiles para
            diferentes tareas, y se pueden personalizar según las necesidades del usuario.
            Conocer y utilizar estos atajos puede hacer que escribir código sea más rápido
            y eficiente.
          </p>
          <img
            src="https://user-images.githubusercontent.com/84806140/169606310-5cedce55-be39-4927-9147-389ff64bf10e.png"
            alt="HTML shorthand"
          />
          <p>Lo que nos va a dar un resultado como este:</p>
          <pre>
            <code>&lt;!DOCTYPE html&gt;</code>
            <code>&lt;html lang="en"&gt;</code>
            <code>    &lt;head&gt;</code>
            <code>      &lt;meta charset="UTF-8"&gt;</code>
            <code>        &lt;title&gt; Document &lt;/title&gt;</code>
            <code>    &lt;/head&gt;</code>
            <code>    &lt;body&gt;</code>
            <code>    &lt;/body&gt;</code>
            <code>&lt;/html&gt;</code>
          </pre>
          <p>Vamos por partes</p>
          <code>&lt;!DOCTYPE html&gt;</code>
          <p>
            es una declaración que se coloca al principio de un documento HTML. Su función
            es indicar al navegador web que se está utilizando HTML5, la última versión de
            HTML.
          </p>
          <p>
            Esta declaración es importante porque el navegador web utiliza esta
            información para saber cómo debe interpretar el resto del contenido del
            documento. Si olvidas incluir esta declaración, es posible que el navegador no
            se muestre correctamente el contenido de la página web.
          </p>
          <code> &lt;html&gt;&lt;/html&gt;</code>
          <p>
            Las etiquetas html marcan el comienzo y el final del documento HTML. Todo el
            contenido de un documento HTML debe estar contenido entre estas etiquetas. La
            etiqueta de apertura indica al navegador web que el documento es un documento
            HTML y la etiqueta de cierre indica al navegador dónde termina el documento.
          </p>
          <code>&lt;head&gt; &lt;/head&gt;</code>
          <p>
            Las etiquetas head en HTML son usadas para proporcionar información adicional
            sobre un documento HTML. Esta información puede incluir el título del
            documento, los archivos de estilo que se utilizarán para dar formato al
            documento, y archivos de script que contienen código JavaScript que se
            ejecutará en el documento. Por ejemplo el titulo:
          </p>
          <code>&lt;title&gt;Document&lt;/title&gt;</code>
          <p>
            Las etiquetas head también pueden incluir metadatos, que son información sobre
            el documento que no se muestra al usuario, pero que puede ser útil para los
            buscadores y otros motores de búsqueda. Estos metadatos pueden incluir una
            descripción del contenido del documento, palabras clave que se relacionan con
            el documento, y otros detalles. Por ejemplo este indica los caracteres que
            usara nuestra web:
          </p>
          <code>&lt;meta charset="UTF-8" /&gt;</code>
          <p>
            Las etiquetas body en HTML son usadas para especificar el contenido principal
            de un documento HTML. El contenido del body se muestra en la ventana del
            navegador y puede incluir texto, imágenes, enlaces, formularios, tablas y
            cualquier otro elemento HTML que desee mostrar al usuario.
          </p>
          <code> &lt;body&gt;&lt;/body&gt; </code>
          `,
      },
      {
        id: 2,
        title: "👅 Introducción al HTML semantico",
        content: `
        <p>
          El HTML semántico se refiere a la práctica de utilizar etiquetas HTML de
          manera apropiada y coherente para describir el contenido y propósito de una
          página web. Esto significa utilizar etiquetas que sean relevantes para el
          contenido que se está mostrando, en lugar de simplemente utilizar etiquetas
          para dar formato a la página.
        </p>
        <p>
          Por ejemplo, en lugar de utilizar una etiqueta div para envolver un título y
          darle formato, se utilizaría la etiqueta h1 para indicar que se trata de un
          título principal. De esta manera, los motores de búsqueda y otros programas
          pueden entender mejor el contenido de la página y presentarlo de manera más
          coherente.
        </p>
        <p>
          El uso de HTML semántico también puede mejorar la accesibilidad de una página
          web para personas con discapacidad, ya que proporciona una estructura clara y
          coherente que puede ser leída y comprendida por programas de lectura de
          pantalla y otros dispositivos de accesibilidad.
        </p>
        <p>
          En resumen, el HTML semántico es una práctica importante en el desarrollo web
          ya que ayuda a mejorar la experiencia del usuario, la accesibilidad y la
          comprensión del contenido por parte de los motores de búsqueda y otros
          programas.
        </p>
        `,
      },
      {
        id: 3,
        title: "🏷️1️⃣ Tipos de etiquetas",
        content: `
        <h2>Titulos</h2>
        <p>Tenemos distintos tipos de titulos...</p>
        <pre>
          <code>&lt;h1&gt;Hola mundo!&lt;/h1&gt;</code>
          <code>&lt;h2&gt;Hola mundo!&lt;/h2&gt;</code>
          <code>&lt;h3&gt;Hola mundo!&lt;/h3&gt;</code>
          <code>&lt;h4&gt;Hola mundo!&lt;/h4&gt;</code>
          <code>&lt;h5&gt;Hola mundo!&lt;/h5&gt;</code>
          <code>&lt;h6&gt;Hola mundo!&lt;/h6&gt;</code>
        </pre>
        <p>
          Existen diferentes tipos de títulos en HTML para permitir una mayor
          jerarquización y organización del contenido de una página web. Esto es útil
          tanto para los usuarios, ya que pueden identificar fácilmente la importancia
          de diferentes secciones de la página, como para los motores de búsqueda, que
          pueden utilizar esta información para comprender mejor el contenido de la
          página y mostrar resultados de búsqueda más relevantes.
        </p>
        <p>
          Los diferentes tipos de títulos en HTML van desde h1, que se utiliza para el
          título principal de una página, hasta h6, que se utiliza para subtítulos de
          menor importancia.
        </p>
        <h2>Parrafos</h2>
        <p>
          Ademas de los titulos, existe otra etiqueta, que es la etiqueta p, que sirve
          para hacer parrafos:
        </p>
        <code>&lt;p&gt;Esto es un parrafo&lt;/p&gt;</code>
        <p>
          Cuando abras el documento y penses 'ah pero es un texto, sigue siendo un texto
          más', si exactamente, es otro texto, pero este es el texto adecuado para hacer parrafos.
        </p>
        <h2>Otras etiquetas de texto</h2>
        <p>La etiqueta b sirve para poner la letra contenida en negrita</p>
        <code>&lt;b&gt;Soy negrita&lt;/b&gt;</code>
        <p>La etiqueta i sirve para poner la letra contenida en italica</p>
        <code>&lt;i&gt;Esto es un parrafo&lt;/i&gt;</code>
        <p>La etiqueta strike sirve para tachar la letra contenida</p>
        <code>&lt;strike&gt;Esto es un parrafo&lt;/strike&gt;</code>
        <p>Y hay un MONTON más!</p>
        `,
      },
      {
        id: 4,
        title: "🖥️ Display por defecto de los elementos",
        content: `
        <p>
          Si has estado escribiendo y probando el código que hemos ido creando, te darás
          cuenta de que hay algunas etiquetas que aparecen "unas al lado de otras" de
          alguna manera:
        </p>
        <img
          src="https://user-images.githubusercontent.com/84806140/169615912-8e5fa8a5-b9b7-4289-86b7-1a4829b6a4ec.png"
          alt="diplay"
        />
        <p>
          En este caso, las etiquetas b y i aparecen una al lado de la otra. ¿Por qué
          ocurre esto? Esto se debe a que las etiquetas como h1, h2, h3 y los párrafos
          ocupan todo el ancho de la caja que los contiene (en este caso el body),
          independientemente de su contenido. Estos elementos se denominan elementos en
          bloque.
        </p>
        <img
          src="https://user-images.githubusercontent.com/84806140/169616185-e9d0827c-363b-43b1-a332-5da29341c6f3.png"
          alt="displayBlock"
        />
        <blockquote>Las herramientas de desarrollo del navegador se abren presionando la tecla F12</blockquote>
        <p>
          En el caso de las demás etiquetas, se ajustan al contenido, es decir, el
          tamaño de la caja está determinado únicamente por su contenido. Estos
          elementos se denominan elementos en línea.
        </p>
        <img
          src="https://user-images.githubusercontent.com/84806140/169616280-53ce163f-fa4c-4f53-a597-617bbdfc325c.png"
          alt="displayInline"
        />
        `,
      },
      {
        id: 5,
        title: "🏷️2️⃣ Tipos de etiquetas",
        content: `
        <h2>Enlaces</h2>
        <p>
          Esta es una etiqueta de texto que es importante. Esta etiqueta lo que hace es
          redirigirnos hacia otro lugar. ¿Has visto cuando a veces en una página dice
          'haz clic aquí' y cuando haces clic ahí te manda a otra página? Y piensas:
          '¡Ah! ¡Es magia!', NO, no es magia, es la etiqueta a la que nos redirige a
          otra página.
        </p>
        <code>
          &lt;a href=""&gt; Esto es un enlace que no te lleva a ningun lado &lt;/a&gt;
        </code>
        <p>
          Esta etiqueta te redirige a la ruta descripta en el atributo 'href'. Por
          ejemplo:
        </p>
        <code>
          &lt;a <b>href="https://github.com/felipendelicia"</b>&gt; Esta etiqueta te
          lleva a mi github &lt;/a&gt;
        </code>
        <p>
          O bien, podrias tener otro archivo HTML al cual quieras ingresar a traves del
          primero. Si se encuentra en la misma carpeta se puede acceder facilmente:
        </p>
        <code>
          &lt;a <b>href="./nombreDelOtroArchivo"</b>&gt; Esta etiqueta te lleva a un
          segundo archivo &lt;/a&gt;
        </code>
        <h2>Listas</h2>
        <p>
          En HTML, existen dos tipos principales de listas: listas ordenadas y listas no
          ordenadas.
        </p>
        
        <p>
          Las listas no ordenadas (también conocidas como listas de viñetas) se utilizan
          para mostrar una serie de elementos sin un orden específico. Cada elemento de
          la lista se marca con una viñeta (como un punto o un cuadrado) para indicar su
          posición en la lista. Por ejemplo:
        </p>
        <code>&lt;ul&gt;&lt;/ul&gt;</code>
        <p>
          Ahora bien ¿cómo agregamos elementos a la lista? la forma de agregar elementos
          a una lista independientemente de que sea ordenada o no, es mediante etiquetas
          li:
        </p>
        <pre>
                <code>&lt;ul&gt;</code>
                <code>        &lt;li&gt;Este es el primer elemento li&lt;/li&gt;</code>
                <code>        &lt;li&gt;Este es el segundo elemento li&lt;/li&gt;</code>
                <code>&lt;/ul&gt;</code>
              </pre>
        <p>Podemos agregar tantos elementos como queramos.</p>
        <p>
          Las listas ordenadas (también conocidas como listas de números) se utilizan
          para mostrar una serie de elementos en un orden específico. Cada elemento de
          la lista se marca con un número o una letra para indicar su posición en la
          lista. Por ejemplo:
        </p>
        <pre>
                <code>&lt;ol&gt;</code>
                <code>        &lt;li&gt;Este es el primer elemento li&lt;/li&gt;</code>
                <code>        &lt;li&gt;Este es el segundo elemento li&lt;/li&gt;</code>
                <code>&lt;/ol&gt;</code>
              </pre>
        <h2>Multimedia</h2>
        <p>
          Vamos a hacer algo más divertido. Multimedia, básicamente, incluye imágenes,
          videos y otras cosas. Empecemos con las imágenes. Las imágenes se pueden
          colocar de manera sencilla utilizando la etiqueta img. Esta etiqueta es de
          tipo que se cierra en sí misma, de la siguiente manera:
        </p>
        <code>&lt;img <b>src=""</b> /&gt;</code>
        <p>
          Como habrás podido ver, esta etiqueta, además de lo que te he mencionado
          anteriormente, tiene un atributo src, el cual se utiliza para indicar la ruta
          de la imagen en el proyecto (o bien fuera del proyecto, si se trata de una
          URL):
        </p>
        <code>
          &lt;img src="https://avatars.githubusercontent.com/u/84806140?v=4"/&gt;
        </code>
        <p>Esta etiqueta, por ejemplo, trae mi foto de perfil de github.</p>
        <p>
          Arranquemos con los videos. Para los videos tambien existe una etiqueta, la
          etiqueta video:
        </p>
        <code>&lt;video src=""&gt;&lt;/video&gt;</code>
        <p>
          A diferencia de las imágenes, en el caso de los videos se utiliza una etiqueta
          que se abre y se cierra. Dentro del atributo src, al igual que en el caso de
          las imágenes, se coloca la ruta del video. Por ejemplo:
        </p>
        <code>&lt;video <b>src="videoprueba.mp4"</b>&gt;&lt;/video&gt;</code>
        <img
          src="https://user-images.githubusercontent.com/84806140/169910467-03db0f3d-8536-42d3-af62-98eb9ff4ec29.png"
          alt="Video tag"
        />
        <p>
          Como podrás ver, el video se muestra, pero no se reproduce ni hay manera de
          reproducirlo. Para poder controlar el video, tenemos que agregar un atributo
          llamado controls. Este atributo no tiene valor, su valor está configurado por
          el navegador.
        </p>
        <code> &lt;video src="videoprueba.mp4" <b>controls</b>&gt;&lt;/video&gt; </code>
        <img
          src="https://user-images.githubusercontent.com/84806140/169910912-87f75d31-01b8-4028-b32d-c0a4eedf5792.png"
          alt="Video tag"
        />
        <h2>Divisores</h2>
        <p>
          Una de las etiquetas más importantes es el div. Los div sirven, como su nombre
          indica, para separar contenido, para dividir partes de la página, componentes,
          entre otras muchas cosas. Su sintaxis es:
        </p>
        <code>&lt;div&gt;&lt;/div&gt;</code>
        <p>Un ejemplo de como pueden servirte los divs de alguna manera puede ser:</p>
        <pre>
                <code>&lt;div&gt;</code>
                <code>        &lt;div&gt;</code>
                <code>                &lt;h2&gt; Producto N1 &lt;/h2&gt;</code>
                <code>                &lt;p&gt; precio: 300$ &lt;/p&gt;</code>
                <code>        &lt;/div&gt;</code>
                <code>        &lt;div&gt;</code>
                <code>                &lt;h2&gt; Producto N2 &lt;/h2&gt;</code>
                <code>                &lt;p&gt; precio: 2030$ &lt;/p&gt;</code>
                <code>        &lt;/div&gt;</code>
                <code>&lt;/div&gt;</code>
        
              </pre>
        <p>
          De esta manera separé cada producto en este 'catalogo' de productos, por
          ejemplo.
        </p>
        <h2>Formularios</h2>
        <p>
          Para crear un formulario que permita al usuario ingresar información, se debe
          utilizar una etiqueta form y dentro de ella colocar las etiquetas input
          correspondientes.
        </p>
        <code>&lt;form&gt;&lt;/form&gt;</code>
        <p>Esto es un formulario sin entrada alguna.</p>
        <p>Sin embargo, si quiero una entrada debo hacer lo siguiente:</p>
        <code>&lt;form&gt; &lt;input <b>type=""</b>/&gt; &lt;/form&gt;</code>
        <p>
          En este caso, estamos solicitando al usuario que ingrese texto. ¿Cómo lo sé?
          Porque cuando el atributo type no tiene un valor específico, como en el
          ejemplo, se asume que es de tipo texto. Este ejemplo sería equivalente a:
        </p>
        <code>&lt;form&gt; &lt;input <b>type="text"</b>/&gt; &lt;/form&gt;</code>
        <p>
          Hay varios tipos de entradas que se le pueden requerir al usuario, por
          ejemplo: (Supongamos siempre un contexto dentro de una etiqueta form)
        </p>
        <code>&lt;form&gt; &lt;input <b>type="password"</b>/&gt; &lt;/form&gt;</code>
        <p>
          De esta manera estaremos requiriendo al usuario que ingrese una contraseña.
        </p>
        <p>Tambien podemos requerirle un numero al usuario de la siguiente manera:</p>
        <code>&lt;form&gt; &lt;input <b>type="number"</b>/&gt; &lt;/form&gt;</code>
        <p>
          Y de esta manera hay montones de entradas de datos, tales como: 'email',
          'color', 'range', 'date', 'time', 'button', etcetera.
        </p>
        <p>
          Ahora que hemos visto varios tipos de elementos input, quiero que sepan que
          existen varios atributos que se pueden utilizar con ellos. Por ejemplo, el
          atributo name:
        </p>
        <code
          >&lt;form&gt; &lt;input type="number" <b>name="nombre"</b>/&gt;
          &lt;/form&gt;</code
        >
        <p>
          Supongamos un escenario en el que el atributo name se utiliza como un
          identificador frente a un lenguaje de backend (del servidor) para poder
          identificar a qué elemento input nos estamos refiriendo.
        </p>
        <p>Otro atributo es el 'required':</p>
        <code
          >&lt;form&gt; &lt;input type="number" <b>required</b>/&gt; &lt;/form&gt;</code
        >
        <p>
          Si este atributo se aparece en nuestro camino significa que es un campo
          obligatorio que debe ser llenado para darle al boton de submit.
        </p>
        <p>
          Otra cosa que podemos hacer es darle a un input un valor por defecto al cargar
          la pagina con el atributo 'value', por ejemplo:
        </p>
        <code
          >&lt;form&gt; &lt;input type="number" <b>value="Felipe"</b>/&gt;
          &lt;/form&gt;</code
        >
        <h2>Metadatos</h2>
        <p>
          Los metadatos son datos que describen a otros datos. En general, un conjunto
          de metadatos se refiere a un conjunto de datos que describen el contenido
          informativo de un objeto denominado recurso (en este caso, nuestro sitio web).
        </p>
        <p>
          ¿Cómo podemos trabajar con metadatos en HTML? Utilizando la etiqueta meta, que
          se coloca dentro del elemento head.
        </p>
        <code>&lt;meta/&gt;</code>
        <p>
          Por ejemplo, una de las metas más básicas es la que establece el juego de
          caracteres según las normas ISO. Creo que ya mencioné esto anteriormente, pero
          aquí lo vuelvo a mencionar:
        </p>
        <code>&lt;meta charset="UTF-8"/&gt;</code>
        <p>En general, los elementos meta tienen la siguiente estructura:</p>
        <code>&lt;meta name="nombre" content="contenido"/&gt;</code>
        <p>
          Por ejemplo, este meta es utilizado para colocar keywords o palabras clave de
          la pagina:
        </p>
        <code
          >&lt;meta name="keywords" content="se colocan aca todas las palabras clave
          relevantes a la pagina web"/&gt;</code
        >
        <p>Supongamos que tenemos una panaderia:</p>
        <code
          >&lt;meta name="keywords" content="pan, panaderia, facturas, masas"/&gt;</code
        >
        <p>Tenemos tambien el meta description, que describen la pagina:</p>
        <code
          >&lt;meta name="description" content="La mejor panaderia de Argentina, Buenos
          Aires."/&gt;</code
        >
        <p>
          Tambien hay un meta author, que lo que se hace basicamente es identificar
          quien es el autor de la pagina:
        </p>
        <code>&lt;meta name="author" content="Felipe N. Delicia"/&gt;</code>
        <p>
          Ahora supongamos que nuestra empresa esta registrada y tiene derechos de
          copyright:
        </p>
        <code
          >&lt;meta name="copyright" content="Nombre de la empresa registrada, dueña de
          los derechos de la misma"/&gt;</code
        >
        <p>
          También tenemos la etiqueta meta con el nombre robots, que le indica al
          buscador si el sitio web debe o no ser indexado, es decir, si debe o no
          aparecer en las búsquedas. Para permitir que el sitio sea indexado, se puede
          usar:
        </p>
        <code>&lt;meta name="robots" content="index"/&gt;</code>
        <p>Para no indexarla:</p>
        <code>&lt;meta name="robots" content="noindex"/&gt;</code>
        <h2>Etiquetas pertenecientes a la semantica de HTML</h2>
        <p>
          Estas etiquetas se utilizan para generar las estructuras principales de una
          página web y se utilizan para realizar esta tarea de manera semánticamente
          correcta. Existen etiquetas para encabezados, navegaciones, barras laterales,
          pie de página, etc.
        </p>
        <p>Los encabezados en HTML se describen con le etiqueta header:</p>
        <code>&lt;header&gt;&lt;/header&gt;</code>
        <p>
          Las barras de navegación se pueden crear utilizando la etiqueta nav. Ahora
          bien, si el encabezado en sí mismo es nuestra barra de navegación, podríamos
          hacerlo de la siguiente manera:
        </p>
        <code>
          &lt;header&gt;&lt;nav&gt;&lt;/nav&gt;&lt;/header&gt;
        </code>
        <p>Y si le ponemos un poco mas de onda:</p>
        <pre>
                <code>&lt;header&gt;</code>
                <code>        &lt;nav&gt;</code>
                <code>                &lt;ul&gt;</code>
                <code>                        &lt;li&gt;</code>
                <code>                                &lt;a href="./inicio.html"&gt;Inicio&lt;/a&gt;</code>
                <code>                        &lt;/li&gt;</code>
                <code>                        &lt;li&gt;</code>
                <code>                                &lt;a href="./acerca.html"&gt;Acerca dex&lt;/a&gt;</code>
                <code>                        &lt;/li&gt;</code>
                <code>                        &lt;li&gt;</code>
                <code>                                &lt;a href="./contacto.html"&gt;Contacto&lt;/a&gt;</code>
                <code>                        &lt;/li&gt;</code>
                <code>                &lt;/ul&gt;</code>
                <code>        &lt;/nav&gt;</code>
                <code>&lt;/header&gt;</code>
              </pre>
        <p>
          Despues, por ejemplo, se puede hacer un pie de pagina con la etiqueta footer:
        </p>
        <code>&lt;footer&gt;&lt;/footer&gt;</code>
        <p>
          Aca generalmente se coloca contacto, para recibir feedback tambien, acerca de
          nosotros, etcetera:
        </p>
        <pre>
                <code>&lt;footer&gt;</code>
                <code>        &lt;p&gt;Seguinos en nuetras redes!&lt;/p&gt;</code>
                <code>        &lt;a href="https://www.instagram.com/1felipo/"&gt;Instagram&lt;/a&gt;</code>
                <code>        &lt;a href="https://github.com/felipendelicia"&gt;Github&lt;/a&gt;</code>
                <code>        &lt;a href="https://twitter.com/felipendelicia"&gt;Twitter&lt;/a&gt;</code>
                <code>&lt;/footer&gt;</code>
              </pre>
        <p>Y de esta manera tendremos una pagina semanticamente más correcta.</p>
        
        `,
      },
      {
        id: 6,
        title: "❌ Errores comunes en HTML",
        content: `
        <h2>Confundir CSS con HTML</h2>
        <p>
          HTML (HyperText Markup Language) es un lenguaje de marcado que se utiliza para
          estructurar y dar formato a documentos de hipertexto, como páginas web. Es
          importante no confundir HTML con CSS (Cascading Style Sheets), que es otro
          lenguaje utilizado para definir el estilo y la presentación de un documento
          HTML.
        </p>
        <p>
          Un error común es tratar de dar estilos a una página en el archivo HTML en
          lugar de utilizar CSS para separar la presentación de la estructura del
          contenido. Esto puede dificultar la mantenibilidad y escalabilidad del sitio,
          ya que todos los estilos estarán mezclados con la estructura del contenido. En
          cambio, si utilizamos CSS para definir los estilos, podemos cambiar la
          apariencia del sitio cambiando un solo archivo, en lugar de tener que hacer
          cambios en cada página individualmente. Además, al utilizar CSS podemos
          utilizar técnicas de modularización para organizar y reutilizar nuestros
          estilos de manera más eficiente.
        </p>
        <p>
          Es importante tener en cuenta que HTML y CSS son solo dos de los muchos
          lenguajes utilizados en el desarrollo web, y que cada uno tiene su propio
          propósito y uso específico. HTML se utiliza para estructurar y dar formato al
          contenido de una página web, mientras que CSS se utiliza para definir la
          apariencia y presentación de ese contenido. Es importante comprender cómo
          funcionan estos lenguajes y cómo trabajar de manera conjunta para crear sitios
          web atractivos y bien estructurados.
        </p>
        <h2>Usar etiquetas obsoletas</h2>
        <p>
          Es importante tener en cuenta que las etiquetas y elementos de HTML son
          actualizados y mejorados con el tiempo para adaptarse a las necesidades y
          estándares actuales del desarrollo web. A medida que se van creando nuevas
          versiones de HTML, algunas etiquetas y elementos pueden ser declarados
          obsoletos y dejar de ser utilizados.
        </p>
        <p>
          Utilizar etiquetas obsoletas en el desarrollo de un sitio web puede tener
          varias consecuencias negativas. En primer lugar, puede dificultar la
          mantenibilidad y escalabilidad del sitio, ya que es posible que estas
          etiquetas ya no sean compatibles con las versiones más recientes de los
          navegadores o que ya no soporten ciertas funcionalidades. Además, el uso de
          etiquetas obsoletas puede afectar el rendimiento del sitio y hacer que sea más
          difícil de entender y mantener para otros desarrolladores.
        </p>
        <p>
          Por último, es importante tener en cuenta que los motores de búsqueda, como
          Google, pueden penalizar a los sitios web que utilizan etiquetas obsoletas o
          deprecated. Esto puede afectar negativamente el SEO del sitio y hacer que sea
          menos visible en los resultados de búsqueda. Por lo tanto, es importante
          asegurarse de utilizar solo etiquetas y elementos recomendados y actualizados
          en el desarrollo de un sitio web.
        </p>
        <blockquote>
          SEO (Search Engine Optimization) es el proceso de optimizar un sitio web para
          mejorar su visibilidad y posicionamiento en los resultados de búsqueda de los
          motores de búsqueda. El objetivo del SEO es asegurar que un sitio aparezca en
          los primeros resultados de búsqueda para palabras clave relevantes, lo que
          puede atraer tráfico orgánico (no pagado) al sitio.
        </blockquote>
        `,
      },
    ],
  },
  {
    name: "css",
    subtopics: [
      {
        id: 0,
        title: "🎨🍭 Introducción a CSS",
        content: `
        <h2>¿Qué es CSS?</h2>
        <p>
          CSS con siglas en inglés de Cascading Style Sheets, en español &quot;Hojas de
          estilo en cascada.
        </p>
        <h2>¿Para qué sirve CSS?</h2>
        <p>
          Ahora CSS nos sirve para darle vida a eso que ya habiamos empezado en HTML,
          vamos a agarrar esas etiquetas y vamos a darles su propio estilo. Vamos a
          agarrar un por ejemplo un parrafo y le vamos a dar un color, un color de
          fondo, un borde, etcetera.
        </p>
        <h2>¿Cómo arrancar a trabajar con CSS?</h2>
        <p>
          Primero tenemos que tener un archivo HTML al cual estilizar, al crear este
          archivo, deberemos crear un segundo archivo con extension CSS para empezar a
          crear nuestra hoja de estilos y relacionarla con el archivo html. Ahora bien,
          ¿Como se hace eso?
        </p>
        <p>Supongamos que en mi carpeta &quot;workspace&quot; tengo estos archivos:</p>
        <pre>
          <code>index.html</code>
          <code>styles.css</code>
        </pre>
        <p>
          Lo que debo hacer en el archivo html para arrancar a relacionar estos dos
          archivos es agregar una etiqueta link en el head del mismo, de la siguiente
          manera:
        </p>
        <code>
          &lt;link rel=&quot;stylesheet&quot; href=&quot;./styles.css&quot;&gt;
        </code>
        <p>
          En href como sabemos va la ruta al archivo de estilos desde el archivo HTML.
        </p>
        <h2>Estructura de los estilos en CSS</h2>
        <p>Basicamente en css los estilos se resuelven de la siguiente manera:</p>
        <pre>
          <code>selector {</code>
          <code>        propiedad: valor;</code>    
          <code>}</code>
        </pre>
        <p>
          El selector es el o los elementos que estoy seleccionando. Cuando tenemos
          seleccionado lo que queremos cambiar ¿Que le vamos a cambiar? El color por
          ejemplo:
        </p>
        <pre>
          <code>selector {</code>
          <code>        color: red;</code>
          <code>}</code>
        </pre>
        
        `,
      },
      {
        id: 1,
        title: "👉🙋 Selectores",
        content: `
        <h2>Selectores en CSS 🙋👈</h2>
        <p>Veamos cuales son nuestras maneras de seleccionar elementos en CSS</p>
        <h2>Universal</h2>
        <p>Para comenzar, está el selector universal. ¿Qué es el selector universal? Este selector selecciona todos los
          elementos en una página y se representa con un asterisco (*).</p>
        <pre>
        <code>* { </code>
        <code>        propiedad: valor;</code>
        <code>}</code>
        </pre>
        <p>Por ejemplo, si quisiera que el color de texto de todo el documento sea rojo, usaria esta sintaxis:</p>
        <pre>
        <code>* { </code>
        <code>        color: red;</code>
        <code>}</code>
        </pre>
        <p>Más adelante verán que en realidad no se debe especificar el color en términos generales, sino hacer uso de códigos
          de color hexadecimales. En el caso del rojo, éste puede ser:</p>
        <pre>
        <code>* { </code>
        <code>        color: #f00;</code>
        <code>}</code>
        </pre>
        <p>¿Cuál es la diferencia entre usar una forma implícita de especificar un color y los códigos hexadecimales? Los
          códigos hexadecimales proporcionan una definición precisa del color deseado, mientras que si se especifica un color
          como "red" se utilizará la interpretación predeterminada de ese color en el navegador, lo que puede dar como resultado
          una variación en el tono del color en diferentes navegadores. Por ejemplo, el rojo puede ser más claro en un navegador
          que en otro.</p>
        <p>Supongamos que tenemos el siguiente documento <b>index.html</b></p>
        <pre>
        <code>&lt;body&gt;</code>
        <code>        &lt;h1&gt; Aprendiendo CSS &lt;/h1&gt;</code>
        <code>        &lt;p&gt; Estamos aprendiendo css para hacer nuestras paginas mas lindas &lt;/p&gt;</code>
        <code>&lt;/body&gt;</code>
        </pre>
        <p>Y la hoja de estilos enlazada con este documento tiene el siguiente estilo:</p>
        <pre>
        <code>* { </code>
        <code>        color: #f00;</code>
        <code>}</code>
        </pre>
        <p>Tendriamos el siguiente resultado:</p>
        <img src="https://user-images.githubusercontent.com/84806140/170365771-8702a490-e494-44bb-9d1b-931be7e80cf6.png">
        <p>Es decir, todos los elementos del documento pasan a ser rojos.</p>
        <h2>Por tipo</h2>
        <p>La selección por tipo es sencilla. Consiste en elegir solo los elementos de un tipo específico, como por ejemplo los
          elementos 'p'.</p>
        <pre>
        <code>p { </code>
        <code>        color: #f00;</code>
        <code>}</code>
        </pre>
        <p>Tendriamos un resultado asi:</p>
        <img src="https://user-images.githubusercontent.com/84806140/170386969-7e8827ab-93fd-44ab-b766-4049e12a9a6c.png">
        <p>Lo mismo pasa si cambio la etiqueta p por una etiqueta h1 como selector:</p>
        <pre>
        <code>h1 { </code>
        <code>        color: #f00;</code>
        <code>}</code>
        </pre>
        <p>El titulo se volveria rojo.</p>
        <h2>Por clases</h2>
        <p>Para seleccionar un elemento por clase en HTML, es necesario asignarle una clase personalizada al elemento que se
          desea estilizar. Esto es fácil de hacer y puede ser realizado de manera sencilla.</p>
        <pre>
        <code>&lt;body&gt;</code>
        <code>        &lt;h1 class="titulo texto"&gt; Aprendiendo CSS &lt;/h1&gt;</code>
        <code>        &lt;p class="parrafo texto"&gt; Estamos aprendiendo css para hacer nuestras paginas mas lindas &lt;/p&gt;</code>
        <code>&lt;/body&gt;</code>
        </pre>
        <p>En mi código HTML, he asignado la clase 'título' al elemento 'h1' y la clase 'párrafo' al elemento 'p'. Ambos
          elementos pertenecen a la clase 'texto'. Para hacer referencia a estas clases en el archivo CSS, debo utilizar un
          punto (.) antes del nombre de la clase, como se muestra a continuación:</p>
        <pre>
        <code>.titulo { </code>
        <code>        color: red;</code>
        <code>}</code>
        <code>.parrafo { </code>
        <code>        color: blue;</code>
        <code>}</code>
        <code>.texto { </code>
        <code>        font-family: sans-serif;</code>
        <code>}</code>
        </pre>
        <p>En consecuencia, en mi hoja de estilos CSS, establezco que los elementos con la clase 'texto' tengan una fuente
          'sans-serif', los elementos con la clase 'título' tengan un color rojo y los elementos con la clase 'párrafo' tengan
          un color azul.</p>
        <img src="https://user-images.githubusercontent.com/84806140/170387912-b9d30fb0-75b0-40fd-ad6b-08684b6742a5.png">
        <h2>Por ID</h2>
        <p>La diferencia principal entre un ID y una clase es en su selección y uso. Para seleccionar un ID en CSS, se utiliza
          el carácter "#", también conocido como el numeral o almohadilla. Es importante tener en cuenta que los ID deben ser
          únicos en un documento HTML, ya que su función es identificar de manera exclusiva a un elemento específico. A
          diferencia de las clases, que pueden ser asignadas a varios elementos diferentes. En resumen, un ID es como un DNI que
          identifica de manera única a un elemento, mientras que una clase es una etiqueta que puede ser compartida por varios
          elementos.</p>
        <pre>
        <code>&lt;body&gt;</code>
        <code>        &lt;h1 id="titulo-piola"&gt; Aprendiendo CSS &lt;/h1&gt;</code>
        <code>        &lt;p&gt; Estamos aprendiendo css para hacer nuestras paginas mas lindas &lt;/p&gt; </code>
        <code>&lt;/body&gt;</code>
        </pre>
        <p>Para identificar un elemento específico en HTML, se le asigna el atributo ID con su valor correspondiente. En la hoja
          de estilos CSS, se utiliza el carácter "#" seguido del valor del ID para seleccionar y aplicar estilos específicos a
          ese elemento.</p>
        <pre>
        <code>#titulo-piola { </code>
        <code>        color: #F47C7C;</code>
        <code>}</code>
        </pre>
        <p>Nos da un resultado como este:</p>
        <img src="https://user-images.githubusercontent.com/84806140/170402127-6e753403-74f6-4893-8d94-485dcfb9431c.png">
        <h2>Por atributo</h2>
        <p>La selección de elementos por atributo-valor consiste en elegir elementos en función de un atributo específico y su
          valor correspondiente. Veamos un ejemplo para ilustrarlo mejor:
        </p>
        <pre>
        <code>&lt;body&gt;</code>
        <code>        &lt;h1 lala='lele'&gt; Aprendiendo CSS &lt;/h1&gt;</code>
        <code>        &lt;p&gt; Estamos aprendiendo css para hacer nuestras paginas mas lindas &lt;/p&gt;</code>
        <code>&lt;/body&gt;</code>
        </pre>
        <p>Con el siguiente código HTML, donde se incluyen atributos específicos, como "lala" con su valor "lele", podemos
          seleccionar ese elemento utilizando el siguiente código CSS:</p>
        <pre>
        <code>[lala="lele"] { </code>
        <code>        color: #F47C7C;</code>
        <code>}</code>
        </pre>
        <p>Y de esta manera obtenemos nuestro h1:</p>
        <img src="https://user-images.githubusercontent.com/84806140/170402127-6e753403-74f6-4893-8d94-485dcfb9431c.png">
        <blockquote>Vale aclarar que no debe ser un atributo especifico, puede ser cualquier cosa.</blockquote>
        <h2>Por Descendiente</h2>
        <p>En este caso, se selecciona uno o varios elementos mediante la descendencia entre elementos. Supongamos por ejemplo
          este codigo:</p>
        <pre>
        <code>&lt;body&gt;</code>
        <code>        &lt;div&gt;</code>
        <code>                &lt;p&gt; Hola mundo! &lt;/p&gt;</code>
        <code>        &lt;/div&gt;</code>
        <code>        &lt;p&gt; Adios mundo cruel &lt;/p&gt;</code>
        <code>&lt;/body&gt;</code>
        </pre>
        <p>Ahora bien, imaginemos que queremos darle un estilo a las etiquetas p, facil, con un estilo por elemento:</p>
        <pre>
        <code>p { </code>
        <code>        color: #f00;</code>
        <code>}</code>
        </pre>
        <p>Si deseamos aplicar estilos solo a los elementos 'p' que se encuentran dentro de un 'div' (es decir, que son
          descendientes de un 'div'), debemos modificar nuestro codigo CSS de la siguiente manera:</p>
        <pre>
        <code>div p { </code>
        <code>        color: #f00;</code>
        <code>}</code>
        </pre>
        <p>De esta manera tendriamos el resultado esperado:</p>
        <img src="https://user-images.githubusercontent.com/84806140/170505343-37b6c86a-05b0-4220-9491-095659849661.png">
        <p>De la misma manera puede hacerse pero utilizando clases, algo tal que asi:</p>
        <pre>
        <code>&lt;body&gt;</code>
        <code>        &lt;div class='container'&gt;</code>
        <code>                &lt;p&gt; Hola mundo! &lt;/p&gt;</code>
        <code>        &lt;/div&gt;</code>
        <code>        &lt;p&gt; Adios mundo cruel &lt;/p&gt;</code>
        <code>&lt;/body&gt;</code>
        </pre>
        <p>Y en la hoja de estilos:</p>
        <pre>
        <code>.container p { </code>
        <code>        color: #f00;</code>
        <code>}</code>
        </pre>
        <p>Y ocurriria exactamente lo mismo.</p>
        <h2>Por pseudo-clases</h2>
        <p>Este selector lo exploraremos más a fondo a lo largo de esta introducción, sin embargo, quiero explicar con la
          pseudo-clase más conocida para que al menos entiendas el concepto. Una pseudo-clase es cuando se genera una selección
          en un evento. Por ejemplo, consideremos el siguiente código:</p>
        <pre>
        <code>&lt;body&gt;</code>
        <code>        &lt;h1&gt; Aprendiendo CSS &lt;/h1&gt;</code>
        <code>        &lt;p&gt; Estamos aprendiendo css para hacer nuestras paginas mas lindas &lt;/p&gt;</code>
        <code>&lt;/body&gt;</code>
        </pre>
        <p>y supongamos la siguiente hoja de estilos:</p>
        <pre>
        <code>p { </code>
        <code>        color: #f00;</code>
        <code>}</code>
        </pre>
        <p>El resultado no seria ningun misterio:</p>
        <img src="https://user-images.githubusercontent.com/84806140/170386969-7e8827ab-93fd-44ab-b766-4049e12a9a6c.png">
        <p>Pero, si queremos por ejemplo, que cuando pasemos el mouse por encima del parrafo se vuelva azul, deberiamos
          hacerlo mediante pseudo-clases, en este caso, 'hover', se aplican de esta manera:</p>
        <pre>
        <code>p { </code>
        <code>        color: #f00;</code>
        <code>}</code>
        <code>p:hover { </code>
        <code>        color: blue;</code>
        <code>}</code>
        </pre>
        <img src="https://user-images.githubusercontent.com/84806140/170512247-71074006-4be7-4338-8ebd-0f285655b1b2.png">
        <p>( No se si se aprecia en la imagen, sin embargo, creeme estoy pasandole el mouse :) )</p>
        <blockquote>Hay más formas de seleccion, sin embargo, por ahora, en esta introduccion nos quedamos con las mas basicas.
          <a href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors">Ver todos los selectores.</a></blockquote>
        `,
      },
      {
        id: 2,
        title: "📍📎 Especificidad",
        content: "",
      },
      {
        id: 3,
        title: "📏 Unidades de medida",
        content: "",
      },
      {
        id: 4,
        title: "✏️ Propiedades de texto",
        content: "",
      },
      {
        id: 5,
        title: "🅰️ Usar tipografias externas",
        content: "",
      },
      {
        id: 6,
        title: "🪖🎖️ Normalize",
        content: "",
      },
      {
        id: 7,
        title: "🖥️ Introduccion al display",
        content: "",
      },
      {
        id: 8,
        title: "📦📝 Propiedades de cajas",
        content: "",
      },
      {
        id: 9,
        title: "〽🔲 Outline",
        content: "",
      },
      {
        id: 10,
        title: "🧘‍♀️🙆🏻‍♂️ Position",
        content: "",
      },
      {
        id: 11,
        title: "🦒🐍 Overflow",
        content: "",
      },
      {
        id: 12,
        title: "📱🔍 Pseudoelementos",
        content: "",
      },
      {
        id: 13,
        title: "🔘🆕 Pseudoclases",
        content: "",
      },
      {
        id: 14,
        title: "🏋️‍♂️🖼️ Object fit",
        content: "",
      },
      {
        id: 15,
        title: "📲 Responsive design",
        content: "",
      },
      {
        id: 16,
        title: "📈🥊 Flexbox",
        content: "",
      },
      {
        id: 17,
        title: "📅 Grid",
        content: "",
      },
      {
        id: 18,
        title: "🌓🌔 Transition",
        content: "",
      },
      {
        id: 19,
        title: "🎮 Animation",
        content: "",
      },
      {
        id: 20,
        title: "💧🍷 Transform",
        content: "",
      },
      {
        id: 21,
        title: "🔴 Background",
        content: "",
      },
    ],
  },
  {
    name: "fundamentos_de_programacion",
    subtopics: [
      {
        id: 0,
        title: "🧑‍🏫 Principios básicos de programación",
        content: "",
      },
      {
        id: 1,
        title: "💾 Datos e información",
        content: "",
      },
      {
        id: 2,
        title: "💿📀 Tipos de datos",
        content: "",
      },
      {
        id: 3,
        title: "🧺🕳 Variables y constantes",
        content: "",
      },
      {
        id: 4,
        title: "🔣 Operadores",
        content: "",
      },
      {
        id: 5,
        title: "❓🚧 Control de flujo condicional",
        content: "",
      },
      {
        id: 6,
        title: "🎬 Control de flujo iterativo",
        content: "",
      },
      {
        id: 7,
        title: "👨‍🔧 Funciones",
        content: "",
      },
      {
        id: 8,
        title: "📝💼 ¿Que es un algoritmo?",
        content: "",
      },
    ],
  },
  {
    name: "javascript",
    subtopics: [
      {
        id: 0,
        title: "👾📓 Introduccion a javascript",
        content: "",
      },
      {
        id: 1,
        title: "🤕🤒 No hay contenido",
        content: "",
      },
    ],
  },
  {
    name: "bases_de_datos",
    subtopics: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: "",
      },
    ],
  },
  {
    name: "nodejs",
    subtopics: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: "",
      },
    ],
  },
  {
    name: "express",
    subtopics: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: "",
      },
    ],
  },
  {
    name: "react",
    subtopics: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: "",
      },
    ],
  },
  {
    name: "typescript",
    subtopics: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: "",
      },
    ],
  },
];

export default themes;
