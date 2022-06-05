const themes = [
  {
    name: "introduccion",
    contents: [
      {
        id: 0,
        title: "👨‍💻🥇 Introduccion",
        content: `
                <h2 id="introducci-n-al-desarrollo-web-">Introducción al desarrollo web 👨‍💻🥇</h2>
                <p>Me puse como objetivo crear una serie de pasos a seguir para
                poder introducir a alguien al desarrollo web mediante una serie de contenidos que permitan al usuario ser capaz de desempeñarse de forma autodidacta.</p>
                <p>Para lograr esta tarea deberemos aprender e introducirnos en una serie de distintos lenguajes que van a servirnos para este fin, el desarrollo web. En primer lugar, vamos a ver de que manera se estructuran paginas web, como hacer cada parte de una pagina web. HTML es un lenguaje de marcado de hipertexto que va a ayudarnos con esa tarea. Una vez el esqueleto de la pagina este colocado podemos ocuparnos de darle un poco de estetica, colores, bordes, etcetera. Esto lo vamos a lograr con las hojas de estilo en CSS. Finalmente nos adentraremos en la programacion para darle funcionalidad a nuestro ya estilizado sitio.</p>
                <p>A pesar de esta extensa introduccion, mi recomendacion personal es investigar tambien uno mismo los contenidos, detenerse a intentar las cosas, buscar mas recursos y nutrirse de varios sitios. Cuando leemos o vemos un contenido como este creemos que entendemos, y efectivamente, tal vez entendemos lo que vemos/oimos, sin embargo, cuando hacemos, aprendemos.</p>
                `,
      },
    ],
  },
  {
    name: "editor_de_texto",
    contents: [
      {
        id: 0,
        title: "✍️ Instalacion del editor de texto",
        content: `
                <h2>Editor de texto ✍️</h2>
                <p>Las utilidades básicas de todos los editores de texto son las mismas. Todos ofrecen un lugar para interactuar con el texto y la mayoría disponen de una opción de codificación de colores basada en la sintaxis. También proporcionan teclas de acceso rápido y funciones de texto intuitivas. A fin de cuentas, hacen que escribir codigo sea mas facil!</p>
                <h3>Entrá en la <a href="https://code.visualstudio.com/Download" target="_blank">página de descarga</a> de VS Code</h3>
                <p>Una vez dentro de la pagina de descarga de vs code, elegir versión en función de tu sistema operativo. Una vez tengas el instalador, abrilo y dale todo siguiente.</p>
                <p><img src="https://user-images.githubusercontent.com/84806140/169602174-8d254c26-721a-48ee-9f10-c2f44209baab.png" alt="VS Code Download page" title="VS Code Download page"></p>
                <blockquote>
                <p><a href="https://youtu.be/ITxcbrfEcIY" target="_blank">Set up Visual Studio Code</a> : Video oficial instalación y nociones basicas del editor 🤙.</p>
                </blockquote>
                `,
      },
    ],
  },
  {
    name: "html",
    contents: [
      {
        id: 0,
        title: "🧱👷 Introducción al HTML",
        content: `
                <h2>Introducción al HTML 🧱👷</h2>
                <h3>¿Qué carajo es HTML?</h3>
                <p>HTML, con siglas en inglés es HyperText Markup Language (Lenguaje de marcado de hipertexto).</p>
                <h3>¿Para qué sirve HTML?</h3>
                <p>HTML es el lenguaje con el agarramos &quot;cajitas&quot; o elementos y las ponemos en distintos lugares de la pagina. Despues, con CSS agarramos y les damos un estilo, un color, un ancho, un posición. Es decir, la función de este lenguaje es meramente estrutural.</p>
                <blockquote>
                <p>&quot;Solamente ponemos las cajitas&quot;</p>
                </blockquote>
                <h3>¿Cómo es la sintaxis de HTML?</h3>
                <p>En HTML, las &quot;cajitas&quot; que colocamos se colocan mediante etiquetas o tags que escribimos en nuestro archivo HTML. Las etiquetas pueden abrirse y cerrarse con una etiqueta de cierre:</p>
                <p><code>&lt;etiqueta&gt; Contenido &lt;/etiqueta&gt;</code></p>
                <p>O bien abrirse y cerrarse en la misma etiqueta:</p>
                <p><code>&lt;etiqueta /&gt;</code></p>
                <p>Algunas de nuestras etiquetas pueden poseer atributos o propiedades con su propio valor:</p>
                <p><code>&lt;etiqueta atributo=&quot;valor&quot;&gt; Contenido &lt;/etiqueta&gt;</code></p>
                <p>o</p>
                <p><code>&lt;etiqueta atributo=&quot;valor&quot;/&gt;</code></p>

                `,
      },
      {
        id: 1,
        title: "🏠 Estructura basica en HTML",
        content: `
                <h2 id="estructura-b-sica-html">Estructura básica HTML 🏠</h2>
                <p>En VSC hay una serie de &quot;atajos&quot; que se pueden utilizar para facilitar la tarea d escribir codigo, por ejemplo, existe una forma de escribir una plantilla de una pagina en HTML con un simple atajo :</p>
                <p><code>html:5</code></p>
                <p><img src="https://user-images.githubusercontent.com/84806140/169606310-5cedce55-be39-4927-9147-389ff64bf10e.png" alt="HTML shorthand" title="HTML shorthand"></p>
                <p>Lo que nos va a dar un resultado como este:</p>
                <pre><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Document<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
                </code></pre><p>Vamos por partes</p>
                <p><code>&lt;!DOCTYPE html&gt;</code></p>
                <p>Lo que estamos definiendo aca es una etiqueta que se abre y no se cierra, estamos diciendo que usamos la ultima versión de HTML.</p>
                <p><code>&lt;html&gt; &lt;/html&gt;</code></p>
                <p>Dentro de las etiquetas html lo que vamos a encontrar es toda la pagina, tanto lo que vemos, como lo que no vemos de la pagina. Ahora bien, ¿Qué podemos y qué no podemos ver?</p>
                <p><code>&lt;head&gt; &lt;/head&gt;</code></p>
                <p>Dentro de la etiqueta head esta aquello que no vamos a ver de la pagina, como por ejemplo el titulo:</p>
                <p><code>&lt;title&gt;Document&lt;/title&gt;</code></p>
                <p>Tambien podemos definir el tipo de caracteres que usa nuestra pagina segun las normas ISO:</p>
                <p><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code></p>
                <p>En conclusión, el el head ponemos todo lo que viene siendo configuraciones, los enlaces al estilo, a los scripts.</p>
                <p><code>&lt;body&gt; &lt;/body&gt;</code></p>
                <p>Dentro de las etiquetas body va todo lo que es visible para nosotros, la pagina en si, lo que vienen siendo las etiquetas que ponen botones, titulos, parrafos, tablas, etcetera.</p>
                `,
      },
      {
        id: 2,
        title: "👅 Introducción al HTML semantico",
        content: `
                <h2 id="introducci-n-al-html-semantico">Introducción al HTML semantico 👅</h2>
                <p>HTML es un lenguaje de marcado de hipertexto, como ya dijimos, pero no es un lenguaje de programación, sin embargo, a fin de cuentas, es un lenguaje. Por lo tanto, al igual que un lenguaje natural cualquiera hay formas correctas e incorrectas de comunicarnos, en HTML pasa lo mismo, hay formas correctas e incorrectas de escribir etiquetas. ¿Por ejemplo? Poner más de un h1 ¿Porqué? porque el h1 posiciona tu web en google (SEO). Por lo tanto, cuando hablamos de SEO estamos hablando nada mas ni nada menos de poner todos esos elementos o &quot;cajitas&quot; de manera correcta de tal manera que google o cualquier buscador nos posicione correctamente en el SEO.</p>
                `,
      },
      {
        id: 3,
        title: "🏷️1️⃣ Tipos de etiquetas",
        content: `
                <h2 id="1-tipos-de-etiquetas">1. Tipos de etiquetas 🏷️1️⃣</h2>
                <h3 id="titulos">Titulos</h3>
                <p>Tenemos distintos tipos de titulos...</p>
                <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hola mundo!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Hola mundo!<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Hola mundo!<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>Hola mundo!<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Hola mundo!<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">h6</span>&gt;</span>Hola mundo!<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>
                </code></pre><p>Todos son titulos y pueden utilizarse dependiendo cual sea su contexto. Por ejemplo, un h4 puede ir como titulo de secciones y demas, un h2 como subtitulo, etcetera.</p>
                <h3 id="parrafos">Parrafos</h3>
                <p>Ademas de los titulos, existe otra etiqueta que es la etiqueta p, que sirve para hacer parrafos:</p>
                <p><code>&lt;p&gt; Esto es un parrafo &lt;/p&gt;</code></p>
                <p>Cuando abras el documento y penses &quot;ah pero es un texto, sigue siendo un texto más&quot;, si exactamente, es otro texto, pero este es el texto adecuado para trabajar y hacer parrafos</p>
                <h3 id="otras-etiquetas-de-texto">Otras etiquetas de texto</h3>
                <p>La etiqueta b sirve para poner la letra contenida en negrita</p>
                <p><code>&lt;b&gt; soy negrita &lt;/b&gt;</code></p>
                <p>La etiqueta i sirve para poner la letra contenida en italica</p>
                <p><code>&lt;i&gt; soy italica &lt;/i&gt;</code></p>
                <p>La etiqueta strike sirve para tachar la letra contenida</p>
                <p><code>&lt;strike&gt; estoy tachada &lt;/strike&gt;</code></p>
                <p>Y hay un MONTON más!</p>
                `,
      },
      {
        id: 4,
        title: "🖥️ Display por defecto de los elementos",
        content: `
                <h2 id="display-por-defecto-de-algunas-etiquetas">Display por defecto de algunas etiquetas 🖥️</h2>
                <p>Si venis escribiendo y probando el codigo que venimos escribiendo, te vas a dar cuenta que hay algunas etiquetas que salen &quot;una al lado de la otra&quot; por decirlo de alguna manera: </p>
                <p><img src="https://user-images.githubusercontent.com/84806140/169615912-8e5fa8a5-b9b7-4289-86b7-1a4829b6a4ec.png" alt="diplay" title="Display"></p>
                <p>En este caso la etiqueta b y la i. ¿Porqué ocurre esto? Esto pasa debido a que las etiquetas como h1,h2, h3 y los parrafos ocupan todo el ancho de la caja que los contiene (en este caso el body) independiente de su contenido. Estos elementos se denominan en bloque:</p>
                <p><img src="https://user-images.githubusercontent.com/84806140/169616185-e9d0827c-363b-43b1-a332-5da29341c6f3.png" alt="displayBlock" title="Display Block"></p>
                <p>En el caso de las demas etiquetas, se adaptan al contenido, es decir, el tamaño de la caja esta regido unicamente por su contenido, estos se denominan en linea:</p>
                <p><img src="https://user-images.githubusercontent.com/84806140/169616280-53ce163f-fa4c-4f53-a597-617bbdfc325c.png" alt="displayInline" title="Display Inline"></p>
                `,
      },
      {
        id: 5,
        title: "🏷️2️⃣ Tipos de etiquetas",
        content: `
                <h2 id="2-tipos-de-etiquetas">2. Tipos de etiquetas 🏷️2️⃣</h2>
                <h3 id="enlaces">Enlaces</h3>
                <p>Esta es una etiqueta de texto que es importante. Esta etiqueta lo que hace es redirigirnos hacia otro lugar. ¿Vieron cuando a veces en una pagina dice &quot;hace click aca&quot; y cuando haces click ahi te manda a otra pagina? Y vos tipo: &quot;Aaaah es magia&quot;, NO, no es magia, es la etiqueta a que nos redirige a otra pagina.</p>
                <p><code>&lt;a href=&quot;&quot;&gt; Esto es un enlace que no te lleva a ningun lado &lt;/a&gt;</code></p>
                <p>Esta etiqueta te redirige a la ruta descripta en el atributo &quot;href&quot;. Por ejemplo:</p>
                <p><code>&lt;a href=&quot;https://github.com/felipendelicia&quot;&gt; Esta etiqueta te lleva a mi github &lt;/a&gt;</code></p>
                <p>O bien, podrias tener otro archivo HTML al cual quieras ingresar a traves del primero. Si se encuentra en la misma carpeta se puede acceder facilmente:</p>
                <p><code>&lt;a href=&quot;./nombreDelOtroArchivo&quot;&gt; Esta etiqueta te lleva a un segundo archivo &lt;/a&gt;</code></p>
                <h3 id="listas">Listas</h3>
                <p>En primer lugar, cabe aclarar que hay dos tipos de listas: Las listas ordenadas y desordenadas. 
                Las listas desordenadas se abren con una etiqueta ul de esta manera:</p>
                <p><code>&lt;ul&gt;  &lt;/ul&gt;</code></p>
                <p>Ahora bien ¿cómo agregamos elementos a la lista? la forma de agregar elementos a una lista independientemente de que sea ordenada o no, es mediante etiquetas li:</p>
                <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Este es el primer elemento<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Este es el segundo elemento<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
                </code></pre><p>Podemos agregar tantos elementos como queramos...</p>
                <p>Las listas ordenadas, se diferencian unicamente en que se abren con una etiqueta ol, por lo tanto, usando el ejemplo anterior, seria de la siguiente manera:</p>
                <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">ol</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Este es el primer elemento<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Este es el segundo elemento<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>
                </code></pre><h3 id="multimedia">Multimedia</h3>
                <p>Vamos con algo más divertido. Multimedia basicamente es imagenes, videos y demas. Empecemos con las imagenes. Las imagenes tienen una forma muy facil de colocarse mediante una etiqueta img. Esta etiqueta es del tipo que se cierra en su lugar, de la siguiente manera:</p>
                <p><code>&lt;img src=&quot;&quot;/&gt;</code></p>
                <p>Como podras haber visto, esta etiqueta ademas de lo que te dije antes, tiene un atributo src, la cual sirve para indicar la ruta a la imagen en el proyecto (o bien fuera del proyecto, siendo una url):</p>
                <p><code>&lt;img src=&quot;https://avatars.githubusercontent.com/u/84806140?v=4&quot;/&gt;</code></p>
                <p>Esta etiqueta, por ejemplo, trae mi foto de perfil de github.</p>
                <p>Arranquemos con los videos. Para los videos tambien existe una etiqueta, la etiqueta video:</p>
                <p><code>&lt;video src=&quot;&quot;&gt;&lt;/video&gt;</code></p>
                <p>A diferencia de las imagenes, como podran haber visto se utiliza una etiqueta que se abre y se cierra. Dentro de src al igual que en las imagenes se coloca la ruta del video. Por ejemplo:</p>
                <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">video</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"videoprueba.mp4"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">video</span>&gt;</span>
                </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/169910467-03db0f3d-8536-42d3-af62-98eb9ff4ec29.png" alt="Video tag" title="video tag"></p>
                <p>Como podran ver, el video se muestra, pero , sin embargo, no se reproduce ni hay forma de que lo puedas reproducir.
                Para esto (para poder controlar el video) tenemos que agregar un atributo, el atributo controls, este atributo no tiene un valor, su valor esta configurado por el navegador.</p>
                <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">video</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"videoprueba.mp4"</span> <span class="hljs-attr">controls</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">video</span>&gt;</span>
                </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/169910912-87f75d31-01b8-4028-b32d-c0a4eedf5792.png" alt="Video tag" title="video tag"></p>
                <h3 id="divisores">Divisores</h3>
                <p>La etiqueta más importante los DIVS. Los divs sirven como su nombre lo dice para separar contenido, para separar partes de la pagina, componentes, en fin, una infinidad de cosas, su sintaxis es:</p>
                <p><code>&lt;div&gt;&lt;/div&gt;</code></p>
                <p>Un ejemplo de como pueden servirte los divs de alguna manera puede ser:</p>
                <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Producto n°1<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>precio: 300$<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Producto n°2<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>precio: 2030$<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                </code></pre><p>De esta manera separé cada producto en este &quot;catalogo&quot; de productos, por ejemplo.</p>
                <h3 id="formularios">Formularios</h3>
                <p>Para crear un formulario, para que el usuario pueda ingresar (input) información, hay que crear un formulario con una etiqueta form y dentro de la misma van a estar las entradas de datos &quot;input&quot;:</p>
                <p><code>&lt;form&gt;&lt;/form&gt;</code></p>
                <p>Esto es un formulario sin entrada alguna.</p>
                <p>Sin embargo, si quiero una entrada debo hacer lo siguiente:</p>
                <pre><code>&lt;<span class="hljs-keyword">form</span>&gt;
                &lt;<span class="hljs-keyword">input</span> <span class="hljs-keyword">type</span>=<span class="hljs-string">""</span>/&gt;
                &lt;<span class="hljs-keyword">form</span>&gt;
                </code></pre><p>En este caso estamos requiriendole texto al usuario, esta es una entrada de texto, ¿Cómo lo sé? porque por defecto en navegadores cuando el &quot;type&quot; no tiene valor como en el ejemplo, por defecto es texto. Este ejemplo seria equivalente a:</p>
                <pre><code>&lt;<span class="hljs-keyword">form</span>&gt;
                &lt;<span class="hljs-keyword">input</span> <span class="hljs-keyword">type</span>=<span class="hljs-string">"text"</span>/&gt;
                &lt;<span class="hljs-keyword">form</span>&gt;
                </code></pre><p>Hay varios tipos de entradas que se le pueden requerir al usuario, por ejemplo: (Supongamos siempre un contexto dentro de una etiqueta form)</p>
                <pre><code>&lt;input <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"password"</span>/&gt;
                </code></pre><p>De esta manera estaremos requiriendo al usuario que ingrese una contraseña.</p>
                <p>Tambien podemos requerirle un numero al usuario de la siguiente manera:</p>
                <pre><code>&lt;input <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"number"</span>/&gt;
                </code></pre><p>Y de esta manera hay montones de entradas de datos, tales como: &quot;email&quot;, &quot;color&quot;, &quot;range&quot;, &quot;date&quot;, &quot;time&quot;, &quot;button&quot;, etcetera.</p>
                <p>Ahora bien, ya que vimos varios tipos de inputs, quiero que sepan que hay varios tipos de atributos para estos che! Por ejemplo, el atributo &quot;name&quot;:</p>
                <pre><code>&lt;<span class="hljs-keyword">form</span>&gt;
                &lt;<span class="hljs-keyword">input</span> <span class="hljs-keyword">type</span>=<span class="hljs-string">"text"</span> name=<span class="hljs-string">"nombre"</span>/&gt;
                &lt;<span class="hljs-keyword">form</span>&gt;
                </code></pre><p>Supongamos un escenario como este, el atributo name es utilizado como &quot;identificador&quot; frente a un lenguaje de backend (del servidor) para poder identificar de que input nos estamos refiriendo.</p>
                <p>Otro atributo es el &quot;required&quot;:</p>
                <pre><code>&lt;<span class="hljs-keyword">form</span>&gt;
                &lt;<span class="hljs-keyword">input</span> <span class="hljs-keyword">type</span>=<span class="hljs-string">"text"</span> required=<span class="hljs-string">""</span>/&gt;
                &lt;<span class="hljs-keyword">form</span>&gt;
                </code></pre><p>Si este atributo se aparece en nuestro camino significa que es un campo obligatorio que debe ser llenado para darle al boton de submit.</p>
                <p>Otra cosa que podemos hacer es darle a un input un valor por defecto al cargar la pagina con el atributo &quot;value&quot;, por ejemplo:</p>
                <pre><code>&lt;<span class="hljs-keyword">form</span>&gt;
                &lt;<span class="hljs-keyword">input</span> <span class="hljs-keyword">type</span>=<span class="hljs-string">"text"</span> name=<span class="hljs-string">"nombre"</span> value=<span class="hljs-string">"Felipe"</span>/&gt;
                &lt;<span class="hljs-keyword">form</span>&gt;
                </code></pre><h3 id="metadatos">Metadatos</h3>
                <p>Los metadatos, literalmente, son datos que describen otros datos. En general, un grupo de metadatos se refiere a un grupo de datos que describen el contenido informativo de un objeto al que se denomina recurso (En este caso nuestra web).</p>
                <p>¿Y como trabajamos en HTML con metadatos? con la etiqueta meta (y se pone en el head).</p>
                <p><code>&lt;meta&gt;</code></p>
                <p>Por ejemplo, la meta mas basica es la que setea los caracteres segun las normas iso, me parece que ya la habia mencionado, pero aca va de nuevo:</p>
                <p><code>&lt;meta charset=&quot;utf-8&quot;&gt;</code></p>
                <p>Despues, generalmente los meta tienen la siguiente estructura:</p>
                <p><code>&lt;meta name=&quot;nombre&quot; content=&quot;contenido&quot;&gt;</code></p>
                <p>Por ejemplo, este meta es utilizado para colocar keywords o palabras clave de la pagina:</p>
                <p><code>&lt;meta name=&quot;keywords&quot; content=&quot;se colocan aca todas las palabras clave relevantes a la pagina web&quot;&gt;</code></p>
                <p>Supongamos que tenemos una panaderia:</p>
                <p><code>&lt;meta name=&quot;keywords&quot; content=&quot;pan, panaderia, facturas, masas&quot;&gt;</code></p>
                <p>Tenemos tambien el meta description, que describen la pagina:</p>
                <p><code>&lt;meta name=&quot;description&quot; content=&quot;La mejor panaderia de Argentina, Buenos Aires.&quot;&gt;</code></p>
                <p>Tambien hay un meta author, que lo que se hace basicamente es identificar quien es el autor de la pagina:</p>
                <p><code>&lt;meta name=&quot;author&quot; content=&quot;Felipe N. Delicia&quot;&gt;</code></p>
                <p>Ahora supongamos que nuestra empresa esta registrada y tiene derechos de copyright:</p>
                <p><code>&lt;meta name=&quot;copyright&quot; content=&quot;Nombre de la empresa registrada, dueña de los derechos de la misma&quot;&gt;</code></p>
                <p>Despues tenemos tambien una etiqueta meta, meta robots, que basicamente le decimos al buscador si la web debe o no debe ser indexada, significa si la web debe o no aparecer en busquedas. Para indexarla:</p>
                <p><code>&lt;meta name=&quot;robots&quot; content=&quot;index&quot;&gt;</code></p>
                <p>Para no indexarla:</p>
                <p><code>&lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;</code></p>
                <h3 id="etiquetas-pertenecientes-a-la-semantica-de-html">Etiquetas pertenecientes a la semantica de HTML</h3>
                <p>Estas etiquetas son las que se utilizan para generar las estructuras principales de una pagina web y son utilizadas para realizar esa tarea con una semantica correcta, existen etiquetas para encabezados, navegaciones, barras laterales, pies de pagina, etcetera.</p>
                <p>Los encabezados en HTML se describen con le etiqueta header:</p>
                <pre><code><span class="hljs-section">&lt;header&gt;</span>
                <span class="hljs-section">&lt;/header&gt;</span>
                </code></pre><p>Las barras de navegación con la etiqueta nav. Ahora bien, supongamos que el encabezado en si es mi barra de navegacion, pues se haria de la siguiente manera:</p>
                <pre><code><span class="hljs-section">&lt;header&gt;</span>
                <span class="hljs-section">&lt;nav&gt;</span>
                <span class="hljs-section">&lt;/nav&gt;</span>
                <span class="hljs-section">&lt;/header&gt;</span>
                </code></pre><p>Y si le ponemos un poco mas de onda:</p>
                <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">header</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">nav</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"./inicio.html"</span>&gt;</span>Inicio<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"./aboutUs.html"</span>&gt;</span>Acerca de nosotros<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"./contact.html"</span>&gt;</span>Contacto<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span>
                </code></pre><p>Despues, por ejemplo, se puede hacer un pie de pagina con la etiqueta footer:</p>
                <pre><code><span class="hljs-section">&lt;footer&gt;</span>
                <span class="hljs-section">&lt;/footer&gt;</span>
                </code></pre><p>Aca generalmente se coloca contacto, para recibir feedback tambien, acerca de nosotros, etcetera:</p>
                <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">footer</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Todos los derechos reservados<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Seguinos en nuetras <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>redes<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://www.instagram.com/1felipo/"</span>&gt;</span>Instagram<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://github.com/felipendelicia"</span>&gt;</span>Github<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://twitter.com/felipendelicia"</span>&gt;</span>Twitter<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">footer</span>&gt;</span>
                </code></pre><p>Y de esta manera tendremos una pagina semanticamente más correcta.</p>
                `,
      },
      {
        id: 6,
        title: "❌ Errores comunes en HTML",
        content: `
                <h2 id="errores-comunes-en-html">Errores comunes en HTML ❌</h2>
                <h3 id="confundir-css-con-html">Confundir CSS con HTML</h3>
                <p>Empecemos con que HTML es un lenguaje de marcado de hipertexto, es decir, es un lenguaje con el cual se estructuran sitios, el primer error es que muchos confunden html con css, pero no me refiero a que se confudan en cuanto a sintaxis, sino al error de tratar de darle estilos a una pagina en el archivo de html, cuando uno debe tender a la modularizacion de sus estilos</p>
                <h3 id="usar-etiquetas-obsoletas">Usar etiquetas obsoletas</h3>
                <p>Hay etiquetas que ya no se usan y un error es que se sigan utilizando, por ejemplo, hgroup, y aunque sirvan o tenga algun sentido su uso, google castiga a las webs que tengan etiquetas antiguas.</p>
                `,
      },
    ],
  },
  {
    name: "css",
    contents: [
      {
        id: 0,
        title: "🎨🍭 Introducción a CSS",
        content: `
                <h2 id="introduccion-a-css">Introduccion a CSS 🎨🍭</h2>
                <h3 id="-qu-es-css-">¿Qué es CSS?</h3>
                <p>CSS con siglas en inglés de Cascading Style Sheets, en español &quot;Hojas de estilo en cascada&quot;.</p>
                <h3 id="-para-qu-sirve-css-">¿Para qué sirve CSS?</h3>
                <p>Ahora CSS nos sirve para darle vida a eso que ya habiamos empezado en HTML, vamos a agarrar esas etiquetas y vamos a darles su propio estilo. Vamos a agarrar un por ejemplo un parrafo y le vamos a dar un color, un color de fondo, un borde, etcetera.</p>
                <h3 id="-c-mo-arrancar-a-trabajar-con-css-">¿Cómo arrancar a trabajar con CSS?</h3>
                <p>Primero tenemos que tener un archivo HTML al cual estilizar, al crear este archivo, deberemos crear un segundo archivo con extension CSS para empezar a crear nuestra hoja de estilos y relacionarla con el archivo html. Ahora bien, ¿Como se hace eso?</p>
                <p>Supongamos que en mi carpeta &quot;workspace&quot; tengo estos archivos:</p>
                <blockquote>
                <p>index.html</p>
                <p>styles.css</p>
                </blockquote>
                <p>Lo que debo hacer en el archivo html para arrancar a relacionar estos dos archivos es agregar una etiqueta link en el head del mismo, de la siguiente manera:</p>
                <p><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;./styles.css&quot;&gt;</code></p>
                <p>En href como sabemos va la ruta al archivo de estilos desde el archivo HTML.</p>
                <h3 id="estructura-de-los-estilos-en-css">Estructura de los estilos en CSS</h3>
                <p>Basicamente en css los estilos se resuelven de la siguiente manera:</p>
                <pre><code><span class="hljs-selector-tag">selector</span> {
                    <span class="hljs-attribute">propiedad</span>: valor;    
                }
                </code></pre><p>El selector es el o los elementos que estoy seleccionando. Cuando tenemos seleccionado lo que queremos cambiar ¿Que le vamos a cambiar? El color de un texto, por ejemplo:</p>
                <pre><code><span class="hljs-selector-tag">selector</span> {
                    <span class="hljs-attribute">color</span>: red;    
                }
                </code></pre>
                `,
      },
      {
        id: 1,
        title: "👉🙋 Selectores",
        content: `
        <h2 id="selectores-en-css">Selectores en CSS 🙋👈</h2>
        <p>Bueno bien, ahora que tenemos esto en cuenta vamos a ver las distintas formas que tenemos de seleccionar.</p>
        <h3 id="universal">Universal</h3>
        <p>Para empezar tenemos el selector universal ¿Cuál es el selector universal? El que selecciona todos los elementos, se usa con un asterisco &quot;*&quot;.</p>
        <pre><code>* {
            <span class="hljs-attribute">propiedad</span>: valor;
        }
        </code></pre><p>Ahora vamos a ponerle la propiedad mas sensillita:</p>
        <pre><code>* {
            <span class="hljs-attribute">color</span>: red;
        }
        </code></pre><p>Ya van a ver mas adelante que en realidad no hay que poner implicitamente red, sino que hay que hacer uso de codigos de color hexadecimales, que, para el rojo puede ser este:</p>
        <pre><code>* {
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>;
        }
        </code></pre><p>¿Cuál es la diferencia entre usar la forma implicita y los codigos hexadecimales? El hexadecimal es la definicion exacta del color que queremos mostrar, sin embargo, si le decis red, va a utilizar lo que es red por predeterminado para el navegador, asi, por ejemplo, vas a tener un rojo mas claro en un navegador que en otro.</p>
        <p>Supongamos que tenemos una pagina en HTML como esta:</p>
        <pre><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Learning CSS!<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"styles.css"</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Aprendiendo CSS<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Estamos aprendiendo css para hacer nuestras paginas mas lindas<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
        </code></pre><p>Y la hoja de estilos &quot;styles.css&quot; tiene el siguiente estilo:</p>
        <pre><code>* {
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>
        }
        </code></pre><p>Tendriamos el siguiente resultado:</p>
        <p><img src="https://user-images.githubusercontent.com/84806140/170365771-8702a490-e494-44bb-9d1b-931be7e80cf6.png" alt="universalSelector" title="Universal Selector"></p>
        <p>Es decir, todos los elementos de la web pasan a ser rojos.</p>
        <h3 id="por-tipo">Por tipo</h3>
        <p>¿Cómo es el tema de seleccionar por tipo? es simple, seleccionas unicamente el tipo de elemento que vos definas, por ejemplo, los elementos p. De la siguiente manera:</p>
        <pre><code><span class="hljs-selector-tag">p</span> {
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>;
        }
        </code></pre><p>Suponiendo que mantenemos el codigo anterior y solo cambiamos los estilos, tendriamos un resultado asi:</p>
        <p><img src="https://user-images.githubusercontent.com/84806140/170386969-7e8827ab-93fd-44ab-b766-4049e12a9a6c.png" alt="porTipo" title="Por tipo"></p>
        <p>Lo mismo pasa si en vez de poner p pongo h1 como selector:</p>
        <pre><code><span class="hljs-selector-tag">h1</span> {
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>;
        }
        </code></pre><p>El titulo (h1) se volveria rojo.</p>
        <h3 id="por-clases">Por clases</h3>
        <p>Si queremos seleccionar un elemento por clase, es tan simple como agarrar el elemento que quieras estilizar de HTML y darle una clase personalizada:</p>
        <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"titulo texto"</span>&gt;</span>Aprendiendo CSS<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"parrafo texto"</span>&gt;</span>Estamos aprendiendo css para hacer nuestras paginas mas lindas<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
        </code></pre><p>Por tanto, yo aca defini que mi elemento h1 va a pertenecer a la clase de titulo y mi elemento p a mi clase parrafo. Ambos pertenecen a la clase texto. Ahora bien, yendo a styles.css ¿Cómo hago alusion a alguna clase? con un punto. De la siguiente manera:</p>
        <pre><code><span class="hljs-selector-class">.titulo</span> {
            <span class="hljs-attribute">color</span>: red;
        }
        
        <span class="hljs-selector-class">.parrafo</span>{
            <span class="hljs-attribute">color</span>: blue;
        }
        
        <span class="hljs-selector-class">.texto</span>{
            <span class="hljs-attribute">font-family</span>: sans-serif
        }
        </code></pre><p>Por tanto, defino que los elementos con la clase texto tengan una fuente sans-serif, los titulos un color rojo y los parrafos un color azul.</p>
        <p><img src="https://user-images.githubusercontent.com/84806140/170387912-b9d30fb0-75b0-40fd-ad6b-08684b6742a5.png" alt="porClase" title="Por clase"></p>
        <h3 id="por-id">Por ID</h3>
        <p>Ahora, ¿Cuál es la diferencia entre un ID y una clase? Bueno, para empezar, a la hora de seleccionar un ID se utiliza el hashtag, el numeral, la almohadilla o como le digan en tu pais. En segundo termino, si queremos trabajar correctamente, tenemos que trabajar de tal manera que los ID sean unicos, porque un ID es eso, un identificador (identifier) de un elemento UNICO, es como tu DNI. Ahora que esto quedo claro, ¿Cómo se usa?</p>
        <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"titulo-piola"</span>&gt;</span>Aprendiendo CSS<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Estamos aprendiendo css para hacer nuestras paginas mas lindas<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
        </code></pre><p>Volvemos a identificar a un elemento con el ID, dandole dicho atributo con su respectivo valor, y despues, en la hoja de estilos otro tanto:</p>
        <pre><code><span class="hljs-selector-id">#titulo-piola</span>{
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#F47C7C</span>;
        }
        </code></pre><p>Nos da un resultado como este:</p>
        <p><img src="https://user-images.githubusercontent.com/84806140/170402127-6e753403-74f6-4893-8d94-485dcfb9431c.png" alt="porID" title="por ID"></p>
        <h3 id="por-atributo">Por atributo</h3>
        <p>Como su nombre lo indica, vamos a seleccionar elementos en funcion de su atributo-valor. Vamos a hacer un ejemplo:</p>
        <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">lala</span>=<span class="hljs-string">"lele"</span>&gt;</span>Aprendiendo CSS<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Estamos aprendiendo css para hacer nuestras paginas mas lindas<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
        </code></pre><p>Teniendo este codigo, con tales atributos, en este caso &quot;lala&quot; que equivale a &quot;lele&quot;, vamos a identificar ese elemento mediante este codigo css:</p>
        <pre><code><span class="hljs-selector-attr">[lala="lele"]</span>{
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#F47C7C</span>;
        }
        </code></pre><p>Y de esta manera nuestro querido h1..:</p>
        <p><img src="https://user-images.githubusercontent.com/84806140/170402127-6e753403-74f6-4893-8d94-485dcfb9431c.png" alt="porAtributo" title="por Atributo"></p>
        <p>Vale aclarar que no debe ser un atributo especifico, puede ser cualquier cosa.</p>
        <h3 id="por-descendiente">Por Descendiente</h3>
        <p>En este caso, se selecciona uno o varios elementos mediante la descendencia entre elementos. Supongamos por ejemplo este codigo:</p>
        <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Hola mundo! <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Adios mundo cruel <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
        </code></pre><p>Ahora bien, imaginemos que queremos darle un estilo a las etiquetas p, facil, con un estilo por elemento:</p>
        <pre><code><span class="hljs-selector-tag">p</span>{
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>;
        }
        </code></pre><p>Pero suponete que unicamente queremos darle estilo a los elemento p que estan dentro de un div (que son descendientes de un div). Para tal cosa deberiamos modificar el codigo un tanto asi:</p>
        <pre><code><span class="hljs-selector-tag">div</span> <span class="hljs-selector-tag">p</span>{
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>;
        }
        </code></pre><p>De esta manera tendriamos el resultado esperado:</p>
        <p><img src="https://user-images.githubusercontent.com/84806140/170505343-37b6c86a-05b0-4220-9491-095659849661.png" alt="por descendiente" title="por descendiente"></p>
        <p>De la misma manera puede hacerse pero utilizando clases, algo tal que asi:</p>
        <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Hola mundo! <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Adios mundo cruel <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
        </code></pre><p>Y en la hoja de estilos:</p>
        <pre><code><span class="hljs-selector-class">.container</span> <span class="hljs-selector-tag">p</span>{
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>;
        }
        </code></pre><p>Y ocurriria exactamente lo mismo.</p>
        <h3 id="por-pseudo-clases">Por pseudo-clases</h3>
        <p>Este selector lo vamos a ver mas a lo largo de esta introduccion, sin embargo, voy a explicar con la psudo-clase mas conocida para que por lo menos te quede el concepto capo. Una psudo-clase es que en un evento se genere una seleccion. Por ejemplo: supongamos el siguiente codigo:</p>
        <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Aprendiendo CSS<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Estamos aprendiendo css para hacer nuestras paginas mas lindas<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
        </code></pre><p>y supongamos la siguiente hoja de estilos:</p>
        <pre><code><span class="hljs-selector-tag">p</span> {
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>;
        }
        </code></pre><p>El resultado no seria ningun misterio:</p>
        <p><img src="https://user-images.githubusercontent.com/84806140/170386969-7e8827ab-93fd-44ab-b766-4049e12a9a6c.png" alt="porTipo" title="Por tipo"></p>
        <p>Peeero, si queremos por ejemplo, que cuando pasemos el mouse por encima del parrafo se vuelva azul, deberiamos hacerlo mediante pseudo-clases, en este caso, hover, se aplican de esta manera:</p>
        <pre><code><span class="hljs-selector-tag">p</span> {
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>;
        }
        <span class="hljs-selector-tag">p</span><span class="hljs-selector-pseudo">:hover</span> {
            <span class="hljs-attribute">color</span>: blue;
        }
        </code></pre><p>Y ahora si, ya tendriamos ese estilo deseado, al pasar el mouse por encima, seria azul:</p>
        <p><img src="https://user-images.githubusercontent.com/84806140/170512247-71074006-4be7-4338-8ebd-0f285655b1b2.png" alt="for pseudo-clase" title="Por pseudo-clase"></p>
        <p>( No se si se aprecia en la imagen, sin embargo, creeme estoy pasandole el mouse :) )</p>
        <p>Hay más formas de seleccion, sin embargo, por ahora, en esta introduccion nos quedamos con las mas basicas. <a href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors">Ver todos los selectores.</a></p>
        `,
      },
      {
        id: 2,
        title: "📍📎 Especificidad",
        content: `<h2 id="especificidad">Especificidad 📍📎</h2>
        <p>Bueno ahora, ya vistos los selectores vamos a ver especificidad 😈. La especificidad se da generalmente cuando das estilos a diferentes cosas en una pagina web y surgen conflictos en los estilos, esto es algo muy comun cuando estas desarrollando una pagina. Suponete que tenes un parrafo con la clase &quot;lala&quot; y en algun punto de tu hoja de estilos das estilos tanto a la clase como a los parrafos ¿Que estilo deberia conservar? Bueno, esto lo resuelve la especificidad.</p>
        <p>Para solucionar este problema, te voy a mostrar las formas de seleccion de la menos especifica a la más especifica:</p>
        <blockquote>
        <p>Por elemento</p>
        </blockquote>
        <p>La seleccion por elementos, por ejemplo:</p>
        <pre><code><span class="hljs-selector-tag">p</span>{
            <span class="hljs-attribute">color</span>:red;
        }
        </code></pre><p>es la menos especifica de todas.</p>
        <blockquote>
        <p>Por clases, por pseudo-clases y por atributo</p>
        </blockquote>
        <p>Seguido de la seleccion por elemento, es más especifico hablar de clases, de pseudo clases y de atributo, te doy ejemplos respectivamente:</p>
        <pre><code><span class="hljs-selector-class">.clase-de-ejemplo</span>{
            <span class="hljs-attribute">color</span>:red;
        }
        
        <span class="hljs-selector-tag">h1</span><span class="hljs-selector-pseudo">:hover</span>{
            <span class="hljs-attribute">color</span>:red;
        }
        
        <span class="hljs-selector-attr">[atributo="valor"]</span>{
            <span class="hljs-attribute">color</span>:red;
        }
        </code></pre><blockquote>
        <p>Por ID</p>
        </blockquote>
        <p>Más especificamente hablando o codeando, tenemos a la seleccion por ID que te recuerdo, es unica:</p>
        <pre><code><span class="hljs-selector-id">#id-de-ejemplo</span>{
            <span class="hljs-attribute">color</span>:red;
        }
        </code></pre><blockquote>
        <p>Estilos en linea</p>
        </blockquote>
        <p>No me he metido a hablar de los estilos en linea, esto es debido a que hoy en dia se tiende a modularizar los estilos a una hoja de estilos aparte, los estilos en linea son eso, estilizar un elemento de HTML en la misma linea en la que se crea:</p>
        <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color:red;"</span>&gt;</span> Hola mundo! <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        </code></pre><blockquote>
        <p>!important</p>
        </blockquote>
        <p>El important es algo que se utiliza en contadas ocasiones. El important es el mayor grado de especificidad que hay, es decir, si hay important, de seguro que se aplica la propiedad. Vamos a verlo:</p>
        <pre><code><span class="hljs-selector-tag">h1</span>{
            <span class="hljs-attribute">color</span>:red <span class="hljs-meta">!important</span>
        }
        </code></pre><p>De esta manera, no hay manera de que los h1 no se hagan rojos.</p>
        `,
      },
      {
        id: 3,
        title: "📏 Unidades de medida",
        content: `<h2 id="unidades-de-medida">Unidades de medida 📏</h2>
        <p>Antes de ponernos a ver propiedades de texto, vamos a ver unidades de medida, seguro ya estas hasta el cuello de solo conocer la propiedad color, pero bueno, primero, antes de conocer propiedades que nos van a venir re bien y van a ser divertidas, tenemos que saber como medir, ¿Solo vamos a usar pixeles? obvio que no, por eso vamos a ver esto, presta atencion.</p>
        <p>Para el transcurso de este &quot;capitulo&quot; vamos a usar el siguiente codigo:</p>
        <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Aprendiendo CSS<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
        </code></pre><h3 id="unidades-fijas">Unidades fijas</h3>
        <p>Dentro de lo que vienen siendo las unidades, tenemos dos ramas, las unidades fijas y las relativas. En este caso, las unidades fijas son aquellas que no dependen de nada y no varian, son por ejemplo: los centimetros, puntos, pulgadas, pixeles, milimetros, etcetera. Ahora vamos a probar, podemos con estas unidades cambiar el tamaño de la fuente del titulo que mostre mas arriba, ¿Como? asi:</p>
        <pre><code><span class="hljs-selector-tag">h1</span>{
          <span class="hljs-attribute">font-size</span>: <span class="hljs-number">50px</span>;
        }
        </code></pre><p>En este caso, cambie el tamaño de fuente a 50 pixeles, pero podria haber usado &quot;cm&quot; por ejemplo.</p>
        <p>Ahora bien, ¿Cúal es el problema de las medidas fijas? El problema es que si bien pueden servir para determinadas cosas, supongamos que tenemos cierta aplicación con medidas fijas, ¿se adaptará a dispositivos moviles? NO! Este es el problema de las medidas fijas, cosa que no pasa con medidas relativas.</p>
        <h3 id="unidades-relativas">Unidades Relativas</h3>
        <p>Las principales medidas relativas son em, rem, vw, vh, %. Suponete que yo al titulo le doy un font size de 5em, ¿que carajo es un em?¿a cuanto equivale? te comento, por defecto, un em son 16 pixeles, por lo tanto, lo que haces cuando le das 5em es darle 16px * 5 = 80px en este caso. ¿Como hago yo para cambiar el valor por defecto del em? Bueno, el valor del em se hereda, por tanto, usando el codigo anterior:</p>
        <pre><code><span class="hljs-selector-tag">body</span>{
          <span class="hljs-attribute">font-size</span>:<span class="hljs-number">20px</span>;
        }
        </code></pre><p>De esta manera, un em valdrá ahora por defecto 20 pixeles.</p>
        <p>REM tiene la diferencia de que tiene como referencial al root y tambien se usa bastante, parecido a em.</p>
        <p>Ahora vamos con unas de las que mas me gustan, en este caso el viewport width (vw) y el viewport height (vh). Estas medidas wtf son buenisimas, 100vw son igual a todo el ancho de la pantalla y 100vh son igual a todo el alto de la pantalla, asi de simple. Por ejemplo: Les menti, vamos a cambiar el codigo, imaginen esto:</p>
        <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span> holis <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
        </code></pre><p>Es simplemente una caja dentro del body. Pero ahora vamos a darle un color de fondo (background-color) y un ancho (width) para que veamos el poder del viewport:</p>
        <pre><code><span class="hljs-selector-tag">div</span> {
          <span class="hljs-attribute">background-color</span>:<span class="hljs-number">#000</span>;
          <span class="hljs-attribute">width</span>:<span class="hljs-number">50vw</span>;
        }
        </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/170531241-bee46791-0ec3-4c63-bbf3-f07cd103d463.png" alt="vw" title="vw"></p>
        <p>Como pueden ver tiene un ancho de la mitad de la pantalla (contiene margin y padding, eso luego nos vamos a encargar de definirlo). De la misma manera puede trabajarse con el vh.</p>
        <p>Y finalmente, cuando hablamos de porcentaje, hacemos alucion al contenedor de nuestro elemento, es decir, por ejemplo, si te digo que le des un width (ancho) de 50% a un elemento, este va a adoptar un ancho del 50% de su contenedor. Asi de simple.</p>
        `,
      },
      {
        id: 4,
        title: "✏️ Propiedades de texto",
        content: `<h2 id="propiedades-de-texto">Propiedades de texto ✏️</h2>
                <p>Aleluya! al fin vamos a ver propiedades copadas para estilizar nuestras webs. Atentis.</p>
                <h3 id="font-size">font-size</h3>
                <p>Esta ya tuvimos unos acercamientos a su definicion y demas, se trata de que tan grande sea la letra, el tamaño de letra, esta se define con las unidades que vimos recien. Seria una cosa como la siguiente:</p>
                <pre><code><span class="hljs-selector-tag">h1</span> {
                    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
                }
                </code></pre><p>Este codigo haria que mis h1 tengan un tamaño de 2em, por defecto, 32px.</p>
                <h3 id="font-family">font-family</h3>
                <p>font-family es la tipografia, simplemente. Por ejemplo, miren este ejemplo de cambio de tipografia:</p>
                <pre><code><span class="hljs-selector-tag">h1</span> {
                    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
                    <span class="hljs-attribute">font-family</span>: sans-serif;
                }
                </code></pre><p>De esta manera los h1 tendrian una tipografia &quot;sans-serif&quot;.</p>
                <h3 id="line-height">line-height</h3>
                <p>Para explicar lo que es el line-height voy a requerir abrir paint:</p>
                <p><img src="https://user-images.githubusercontent.com/84806140/170844980-44724fd2-a9fc-4d2c-8007-db7ccaa9f2bd.png" alt="line-height" title="line height"></p>
                <p>Supongamos que la caja negra es el contenedor. Ahora suponete que a un texto le damos un line height 1 ¿Qué sucede? bueno, va a ser el &quot;alto&quot; de la caja verde que contiene la letra, si se fijan, empieza de la mitad y se divide la mitad para arriba y la otra para abajo. Si le dieramos un line-height 2, se dividiria diferente a la imagen, en vez de distribuirse 0.5, se distribuiria en 1 entero.</p>
                <pre><code><span class="hljs-selector-tag">h1</span> {
                    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
                    <span class="hljs-attribute">font-family</span>: sans-serif;
                    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">1</span>;
                }
                </code></pre><h3 id="font-weight">font-weight</h3>
                <p>El font weight es mas que nada el grosor de la letra, generalmente varia de 100 a 1000 aproximadamente (depende de las tipografias), tambien se le pueden dar valores como &quot;normal&quot;, &quot;lighter&quot;, &quot;bold&quot;:</p>
                <pre><code><span class="hljs-selector-tag">h1</span> {
                    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
                    <span class="hljs-attribute">font-family</span>: sans-serif;
                    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">1</span>;
                    <span class="hljs-attribute">font-weight</span>: bold;
                }
                </code></pre><h3 id="color">color</h3>
                <p>Ni me gastaria en explicarlo de tanto que lo vimos, pero simplemente cambia el color de la letra, un ejemplito mas:</p>
                <pre><code><span class="hljs-selector-tag">h1</span> {
                    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
                    <span class="hljs-attribute">font-family</span>: sans-serif;
                    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">1</span>;
                    <span class="hljs-attribute">font-weight</span>: bold;
                    <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>;
                }
                </code></pre>`,
      },
      {
        id: 5,
        title: "🅰️ Usar tipografias externas",
        content: `<h2 id="tipografias-externas">Tipografias externas 🅰️</h2>
          <p>Imaginate que queres poner una tipografia cualquiera ¿no? bueno, voy a mostrar un ejemplo con <a href="https://fonts.google.com/">google fonts</a>. Cuando vas a google fonts elegis una tipografia y copias el link de la tipografia:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/170845328-7e49c268-d216-4ca0-8dd9-2ccb6f792dce.png" alt="google-fonts" title="google fonts"></p>
          <p>Una vez copiado lo pegas en el head:</p>
          <pre><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Learning CSS!<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"styles.css"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap"</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Aprendiendo CSS<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Estamos aprendiendo css para hacer nuestras paginas mas lindas<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
          </code></pre><p>Una vez pegado, ¿Como lo implementamos? Facil, google te dice como:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/170845368-a436db51-d350-457c-8684-42459f0f5335.png" alt="google font css" title="google font css"></p>
          <p>¿Porqué tiene sans-serif separado por coma? Debido a que si no se encuentra la primera tipografia por lo que sea, vamos a buscar la segunda.</p>
          `,
      },
      {
        id: 6,
        title: "🪖🎖️ Normalize",
        content: `<h2 id="normalize">Normalize 🪖🎖️</h2>
          <p>Los navegadores SIEMPRE traen un estilo por defecto. Por eso por ejemplo, cuando ponemos un h1 sin estilos, esta en negrita por defecto o tambien debido a eso es su tamaño. ¿Entonces que haces? usamos el normalize para reiniciar los estilos. ¿Como lo ponemos? googleamos <a href="https://necolas.github.io/normalize.css/">normalize.css</a> y abrimos el primero que nos salga. Descargamos el archivo y lo colocamos en el directorio del proyecto.</p>
          <p>Yo lo guardé como:</p>
          <blockquote>
          <p>normalize.css</p>
          </blockquote>
          <p>y tiene una pinta como esta:</p>
          <pre><code><span class="hljs-comment">/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */</span>
          
          <span class="hljs-comment">/* Document
             ========================================================================== */</span>
          
          <span class="hljs-comment">/**
           * 1. Correct the line height in all browsers.
           * 2. Prevent adjustments of font size after orientation changes in iOS.
           */</span>
          
          <span class="hljs-selector-tag">html</span> {
            <span class="hljs-attribute">line-height</span>: <span class="hljs-number">1.15</span>; <span class="hljs-comment">/* 1 */</span>
            <span class="hljs-attribute">-webkit-text-size-adjust</span>: <span class="hljs-number">100%</span>; <span class="hljs-comment">/* 2 */</span>
          }
          
          <span class="hljs-comment">/* Sections
             ========================================================================== */</span>
          
          <span class="hljs-comment">/**
           * Remove the margin in all browsers.
           */</span>
          
          <span class="hljs-selector-tag">body</span> {
            <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
          }
          
          ...
          </code></pre><p>Para ponerlo en el proyecto simplemente lo insertamos en el head con una etiqueta link:</p>
          <pre><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Learning CSS!<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"styles.css"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"normalize.css"</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Aprendiendo CSS<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Estamos aprendiendo css para hacer nuestras paginas mas lindas<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
          </code></pre><p>Yo para trabajar, generalmente le agrego al normalize las siguientes propiedades:</p>
          <pre><code>*{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
          }
          </code></pre><p>Mas adelante entenderemos que significan estos conceptos. Fue, nos quedaria una pagina como esta:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/170845853-bf913cda-ef91-4f87-a8f3-2109525fa997.png" alt="normalize" title="nomalize"></p>
          `,
      },
      {
        id: 7,
        title: "🖥️ Introduccion al display",
        content: `<h2 id="introduccion-al-display">Introduccion al display 🖥️</h2>
          <p>¿Te acordas cuando te explique el tema de las cajas en bloque y en linea en la parte de HTML? Bueno, hay maneras de hacer que, por ejemplo, un h1 se comporte como un elemento en linea, haciendo que la caja se ajuste al contenido, algo como esto:</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Aprendiendo CSS<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>Este h1 tiene este valor por defecto:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">display</span>: block;
          }
          </code></pre><p>Un display en bloque, sin embargo, ahora mismo queremos que se porte como un elemento en linea, se hace asi:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">display</span>: inline;
          }
          </code></pre><p>Ahora, a la hora de modelar cajas hay diferentes cosas que se pueden hacer tanto con los elementos en bloque, como con los elementos en linea, por ejemplo, a un elemento en bloque, como un h1 por defecto podria modificarle el alto y ancho de la caja, algo como esto:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
          }
          </code></pre><p>Sin embargo, con un elemento en linea no podria, es decir, esto no se puede:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">display</span>: inline;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
          }
          </code></pre><p>Entonces, ¿Como puedo solucionar este tema? Bueno, podes usar un display inline-block, el cual es un elemento en linea que conserva propiedades de un elemento en bloque, tal que asi:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">display</span>: inline-block;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
          }
          </code></pre><p>De esta manera, estaria funcionando. Mas adelante en esta introduccion seguiremos viendo distintos displays.</p>
      `,
      },
      {
        id: 8,
        title: "📦📝 Propiedades de cajas",
        content: `<h2 id="propiedades-de-cajas">Propiedades de cajas 📦📝</h2>
          <h3 id="background-color">background-color</h3>
          <p>Ya habiamos mirado un poco lo que era background color. Background color es el color de fondo de determinada caja. Vamos a ver un ejemplo de como poner una caja color negro, por ejemplo:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">background-color</span>:<span class="hljs-number">#000</span>;
          }
          </code></pre><p>De esta manera, mis h1 tendran un fondo color negro.</p>
          <h3 id="padding">padding</h3>
          <p>Bueno, llego la hora de introducir el padding, una propiedad importantisima de las cajas, muy importante. ¿Qué es el padding? el padding es la distancia que hay entre los bordes de la caja y su contenido, por ejemplo:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/170847600-36924a8f-16df-4de8-9e9b-e8331d63c79e.png" alt="padding" title="padding"></p>
          <p>Entonces... Tenemos cuatro paddings, el padding-top (padding de arriba), padding-bottom (padding de abajo), padding-right (padding derecho) y padding-left (padding izquierdo).</p>
          <p>¿Como le damos padding a todos los lados sin volvernos locos? Padding es un shorthand propertie, por lo tanto, es una propiedad acortada, que podemos acortar, que podemos poner de varias maneras.</p>
          <p>La forma mas intuitiva es la siguiente:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">display</span>: inline-block;
              <span class="hljs-attribute">background-color</span>:<span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">padding-top</span>: <span class="hljs-number">50px</span>;
              <span class="hljs-attribute">padding-right</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">padding-bottom</span>: <span class="hljs-number">150px</span>;
              <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">200px</span>;
          }
          </code></pre><p>Que daria algo como esto:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/170847743-d8fddc9f-7381-47fe-9b60-97bd64f049e1.png" alt="padding" title="padding"></p>
          <p>Tambien podemos poner el padding de esta manera:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
          }
          </code></pre><p>De esta manera le estamos dando 20px de padding a todos los lados. </p>
          <table>
          <thead>
          <tr>
          <th>padding</th>
          <th>all</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>property</td>
          <td>Afecta arriba, abajo, izquierda y derecha</td>
          </tr>
          </tbody>
          </table>
          <p>Ahora, ¿Que pasa si quiero que el padding sea igual arriba y abajo e igual a la derecha e izquiera, es decir, igual en el eje x e igual en el eje y? Podemos poner el padding asi:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span> <span class="hljs-number">30px</span>;
          }
          </code></pre><p>De esta manera, arriba y abajo le dimos 20px y a los costados 30px.</p>
          <table>
          <thead>
          <tr>
          <th>padding</th>
          <th>y</th>
          <th>x</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>property</td>
          <td>Afecta arriba y abajo</td>
          <td>Afecta a la izquierda y la derecha</td>
          </tr>
          </tbody>
          </table>
          <p>Ahora mira, si le queres dar a todos lados de manera diferente como en el primer ejemplo, pero usando el shorthand, tenes que hacerlo con este orden, como si fuesen las agujas de un reloj:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">20px</span> <span class="hljs-number">30px</span> <span class="hljs-number">40px</span>;
          }
          </code></pre><p>De esta manera: 10px arriba; 20px derecha; 30px abajo y 40px izquierda:</p>
          <table>
          <thead>
          <tr>
          <th>padding</th>
          <th>top</th>
          <th>right</th>
          <th>bottom</th>
          <th>left</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>property</td>
          <td>Afecta arriba</td>
          <td>Afecta a la derecha</td>
          <td>Afecta abajo</td>
          <td>Afecta a la izquierda</td>
          </tr>
          </tbody>
          </table>
          <h3 id="margin">margin</h3>
          <p>Otra propiedad recontra importante. El margin es la distancia entre nuestra caja y otras cajas. Es como un margen justamente, desde la caja afectada, ilustremos:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/170848041-f01c09ee-9a35-4799-9363-76f7ce9838b5.png" alt="margin" title="margin"></p>
          <p>El resto, el margin-top, margin-right, margin-bottom y margin-left son la misma historia que en el padding, al igual que padding, margin es un shorthand.</p>
          <h3 id="border-radius">border-radius</h3>
          <p>Border radius es una propiedad que sirve para redondear los bordes y para aplicarlo es tan simple como:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">display</span>: inline-block;
              <span class="hljs-attribute">background-color</span>:<span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">30px</span>;
              <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">10px</span>;
          }
          </code></pre><p>Se puede manejar con porcentajes, pixeles, em, etcetera.</p>
          <h3 id="border">border</h3>
          <p>Border es una propiedad acortada y sirve para manejar los bordes justamente de la caja. Tenemos border-width, border-color, border-style, sirven para, el ancho del borde, el color y el estilo de borde respectivamente. Se aplica de la siguiente manera:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">display</span>: inline-block;
              <span class="hljs-attribute">background-color</span>:<span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">30px</span>;
              <span class="hljs-attribute">border-widht</span>: <span class="hljs-number">3px</span>;
              <span class="hljs-attribute">border-color</span>: <span class="hljs-number">#000</span>;
              <span class="hljs-attribute">border-style</span>: solid;
          }
          </code></pre><p>Ahora, ¿Como aplicamos el shorthand? bueno, asi:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">display</span>: inline-block;
              <span class="hljs-attribute">background-color</span>:<span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">30px</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">3px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><table>
          <thead>
          <tr>
          <th>border</th>
          <th>width</th>
          <th><a href="https://www.w3schools.com/css/css_border.asp">style</a></th>
          <th>color</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>property</td>
          <td>Ancho del borde</td>
          <td>Estilo del borde</td>
          <td>Color del borde</td>
          </tr>
          </tbody>
          </table>
          <h3 id="box-model">box model</h3>
          <p>Todas estas propiedades: el padding, el margin, el border y bueno, el content son los cuales componen el box model, cada uno puede ser modificado con una propiedad: el padding, margin, border y line-height, respectivamente. Ademas, es una jerarquia en la que se van poniendo las cosas, se arranca del content, seguido de el padding, border y margin:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/170848438-f2e32be9-35f6-4b72-82ee-1c61c5ce1945.png" alt="box-model" title="box model"></p>
          <h3 id="box-shadow">box shadow</h3>
          <p>box shadow me re gusta, nos permite darle sombra a nuestra cajita. Y se aplica de la siguiente manera mira:</p>
          <pre><code><span class="hljs-selector-tag">h1</span>{
              <span class="hljs-attribute">display</span>: inline-block;
              <span class="hljs-attribute">background-color</span>:<span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">30px</span>;
              <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">2px</span> <span class="hljs-number">4px</span> <span class="hljs-number">15px</span> <span class="hljs-number">0</span> <span class="hljs-number">#000</span>
          }
          </code></pre><p>Y vos me preguntaras... ¿Que carajo hiciste? Bueno, te explico:</p>
          <table>
          <thead>
          <tr>
          <th>box-shadow</th>
          <th>x</th>
          <th>y</th>
          <th>desenfoque</th>
          <th>border</th>
          <th>color</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>property</td>
          <td>Desplazamiento de la sombra en el eje x</td>
          <td>Desplazamiento de la sombra en el eje y</td>
          <td>Desenfoque del sombreado</td>
          <td>Cuanto borde va a tener</td>
          <td>Color de la sombra</td>
          </tr>
          </tbody>
          </table>
          `,
      },
      {
        id: 9,
        title: "〽🔲 Outline",
        content: `<h2 id="outline">Outline 〽🔲</h2>
          <p>¿Qué es el outline? Bueno, es un shorthand. Bueno ya sé, pero en si, ¿Qué es outline? Outline es como un border, pero sin afectar a las demas cajas ni a la misma caja, es decir, no ocupa un espacio real. Dicho de la manera correcta, no ocupa un espacio en el DOM ¿Qué es el DOM? Es el document object model, son todos los elementos que estan dentro de nuestra pagina.</p>
          <p><img src="https://www.freecodecamp.org/news/content/images/2021/09/Document.jpg" alt="dom" title="dom"></p>
          <p>Bueno vamos a aprenderlo con un ejemplo. Para empezar imaginate estos estilos y estructura:</p>
          <pre><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Learning CSS!<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"styles.css"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"normalize.css"</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caja1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caja2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
          </code></pre><p>Y styles.css:</p>
          <pre><code><span class="hljs-selector-class">.caja1</span>, <span class="hljs-selector-class">.caja2</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
          }
          <span class="hljs-selector-class">.caja1</span>{
              <span class="hljs-attribute">background-color</span>: red;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">10px</span> solid blue;
          }
          <span class="hljs-selector-class">.caja2</span>{
              <span class="hljs-attribute">background-color</span>: yellow;
          }
          </code></pre><blockquote>
          <p>Cuando agregamos un margin auto a los lados centramos las cajas. Debido a que pone la misma cantidad de margen a ambos lados teniendo en cuenta el tamaño del content.</p>
          </blockquote>
          <p><img src="https://user-images.githubusercontent.com/84806140/170849062-9f8f2a17-e2fd-432f-82ad-80e5c3f5269c.png" alt="outline" title="outline"></p>
          <p>Asi se ve claramente como se agrega un borde que ocupa espacio y mueve las demas cajas.</p>
          <pre><code><span class="hljs-selector-class">.caja1</span>{
              <span class="hljs-attribute">background-color</span>: red;
              <span class="hljs-attribute">outline</span>: <span class="hljs-number">10px</span> solid blue;
          }
          </code></pre><p>Si hacemos este minimo cambio, mira el resultado que logramos:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/170849104-7d558882-5d26-4f0c-87b0-1e0312e866c2.png" alt="outline" title="outline"></p>
          `,
      },
      {
        id: 10,
        title: "🧘‍♀️🙆🏻‍♂️ Position",
        content: `<h2 id="position-">Position 🧘‍♀️🙆🏻‍♂️</h2>
          <p>Bueno, lo que vamos a ver ahora es el position que es re importante en CSS, che. Asi que prestá atención. Para empezar te voy a decir que vamos a usar este codigo en el documento HTML:</p>
          <pre><code>&lt;body&gt;
              &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"caja-1"</span>&gt;Caja <span class="hljs-number">1</span> 📦&lt;/<span class="hljs-keyword">div</span>&gt;
              &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"caja-2"</span>&gt;Caja <span class="hljs-number">2</span> 📦&lt;/<span class="hljs-keyword">div</span>&gt;
              &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"caja-3"</span>&gt;Caja <span class="hljs-number">3</span> 📦&lt;/<span class="hljs-keyword">div</span>&gt;
              &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"caja-4"</span>&gt;Caja <span class="hljs-number">4</span> 📦&lt;/<span class="hljs-keyword">div</span>&gt;
          &lt;/body&gt;
          </code></pre><p>Y para el codigo CSS vamos a usar algo asi, mirá:</p>
          <pre><code><span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">font-weight</span>: bold;
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.5em</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">120px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">120px</span>;
              <span class="hljs-attribute">display</span>: block;
          }
          
          <span class="hljs-selector-class">.caja-1</span> {
              <span class="hljs-attribute">background-color</span>:red;
          }
          <span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
          }
          <span class="hljs-selector-class">.caja-3</span> {
              <span class="hljs-attribute">background-color</span>:yellow;
          }
          <span class="hljs-selector-class">.caja-4</span> {
              <span class="hljs-attribute">background-color</span>:green;
          }
          </code></pre><p>Finalmente deberias tener un resultado asi:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/172024006-3722ad49-9b5a-4377-ab0e-3631a13f00d3.png" alt="position" title="position"></p>
          <p>Bueno ahora con esto asi, quiero que comprendamos la propiedad del position. Position lo que hace posicionar los elementos, tan simple como eso, agarramos un elemento y lo posicionamos ¿Qué significa que un elemento este posicionado? Simplemente significa que adquiere nuevas propiedades y va a afectar al flujo de HTML.</p>
          <p>Estas propiedades que adquiere nos permiten hacer varias cosas, por ejemplo: &quot;top&quot;, &quot;right&quot;, &quot;left&quot;, &quot;bottom&quot;, &quot;z-index&quot;, que ahora las vamos a ver mas profundamente.</p>
          <p>¿Qué valores puede recibir position?</p>
          <h3 id="static">Static</h3>
          <p>Que es el valor por defecto, osea, si le damos este valor, en realidad no estaria posicionado debido a que no adquiere las propiedades de un elemento si posicionado.</p>
          <h3 id="relative">Relative</h3>
          <p>Bien, vamos a arrancar por relative. Para empezar, cuando posicionas un elemento de forma relative, parece que no cambia nada, pero no es asi. Veamos, vamos a agarrar la caja 2 y la vamos a posicionar:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
          }
          </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/172024006-3722ad49-9b5a-4377-ab0e-3631a13f00d3.png" alt="positionRelative" title="position relative"></p>
          <p>Como ven, al agregar el position relative &quot;no cambia nada&quot;. Vamos a ver que cambio. Suponete que le damos la propiedad top a la caja 1, de la siquiente manera:</p>
          <pre><code><span class="hljs-selector-class">.caja-1</span> {
              <span class="hljs-attribute">background-color</span>:red;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">20px</span>;
          }
          </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/172024006-3722ad49-9b5a-4377-ab0e-3631a13f00d3.png" alt="positionRelative" title="position relative"></p>
          <p>Nuevamente, esta vez no paso nada. Sin embargo, si a nuestra caja <strong>posicionada</strong> le damos un top de 20px mirá lo que pasa:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">20px</span>;
          }
          </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/172024454-a211e121-5879-45b3-b632-09db14b317bc.png" alt="positionRelative" title="position relative"></p>
          <p>Re zarpada esta propiedad, es buenisima para posicionar. Bueno... Todo muy lindo, pero ¿Porque paso esto? Esto paso porque cuando posicionamos un elemento adquiere cuatro propiedades nuevas: top, right, left, bottom. Las mas importantes son top y left. Si te fijas en el ejemplo, le di un top de 20px y se movio 20px para abajo. Otro detalle importantisimo es que el espacio reservado del DOM que ocupa la caja lo guardo y conservo. Este ultimo lo voy a explicar con otro ejemplo, suponete esto:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">300px</span>;
          }
          </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/172024611-17136d21-90e5-4a36-8d8c-a88e64ca6106.png" alt="positionRelative" title="position relative"></p>
          <p>Fijate que la cajita 2 se va re lejos pero a pesar de posicionarse en cualquier lugar, esta conserva su espacio reservado.</p>
          <p>Otra particularidad del position relative es que cuando posiciono con un top, por ejemplo, el punto de referencia es el mismo espacio reservado de la caja. En criollo, los 300px que bajo la caja 2 fue desde su espacio reservado:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/172024712-e28bb382-968e-44a1-8fdf-d493170c4e21.png" alt="positionRelative" title="position relative"></p>
          <p>Ahora hablemos un poco mas de left, right y bottom, es algo muy similar a lo que pasa con top, nada mas que en otra direccion, pongamos un ejemplo:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">bottom</span>: <span class="hljs-number">10px</span>;
              <span class="hljs-attribute">left</span>: <span class="hljs-number">60px</span>;
          }
          </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/172024780-cbfb08b4-f9d9-4d60-ab82-72a8e624b96b.png" alt="positionRelative" title="position relative"></p>
          <p>Finalmente, lo que todos esperaban, ¿Qué pasa si a mi caja le doy un bottom y un top?</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">10px</span>;
              <span class="hljs-attribute">bottom</span>: <span class="hljs-number">10px</span>;
          }
          </code></pre><p>¿Que creen que hara el navegador? ¿hacerle caso al bottom y al top? ¿hacerle caso a uno solo? veamos...</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/172024857-10d06f69-0291-482f-bb37-59e648a04166.png" alt="positionRelative" title="position relative"></p>
          <p>Basicamente, no le dió pelota al bottom y se quedo con el top. La explicacion de esto es que frente a las otras dos, top y left, tienen la prioridad.</p>
          <p>Ademas de estas cuatro propiedades que te comenté que agrega el posicionamiento, tambien añade uno llamado <strong>z-index</strong>. El z-index es como la tercera dimension de las webs (por eso &quot;z&quot;-index, porque es el eje z de los elementos), es lo que define que elemento esta encima del otro, a mayor z-index, estara posicionado mas arriba de los demas elementos.</p>
          <p>Vamos a explicar esto con un ejemplo, te tiro los estilos:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">40px</span>;
              <span class="hljs-attribute">left</span>: <span class="hljs-number">20px</span>;
          }
          </code></pre><p>Lo puse de esta manera para que nos quede la caja bien encimada a la otra:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/172025055-1a5b4c76-711b-4d53-99bf-4160e0dc0bfe.png" alt="z-index" title="z-index"></p>
          <p>Che! y mira si quiero poner la caja 3 por encima de la 2...¿Como hago? Bueno le damos un posicionamiento a la caja 3:</p>
          <pre><code><span class="hljs-selector-class">.caja-3</span> {
              <span class="hljs-attribute">background-color</span>:yellow;
              <span class="hljs-attribute">position</span>: relative;
          }
          </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/172025102-f62d5f80-2c63-4713-b5a8-048a4b591ab2.png" alt="z-index" title="z-index"></p>
          <p>¿Porque pasa esto? Porque es el flujo con que se colocan los elementos en HTML, imaginate que el navegador dibuja la caja 1, despues dibuja la caja 2 y finalmente la 3. Claramente si dibujó la 3 despues de la caja 2 va a estar por encima. </p>
          <p>Recapitulemos... El z-index funciona solamente cuando las cajas estan posicionadas. Si no esta posicionada, no va a funcionar. El z-index por defecto es 0. Osea que tanto la caja 2, como la 3 tienen un z-index de 0. Mirá, te voy a mostrar como poner la caja 2 nuevamente arriba sin importar que este posicionada la caja 3:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">40px</span>;
              <span class="hljs-attribute">left</span>: <span class="hljs-number">20px</span>;
              <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;
          }
          </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/172025055-1a5b4c76-711b-4d53-99bf-4160e0dc0bfe.png" alt="z-index" title="z-index"></p>
          <p>Como caja 3 tiene un z-index de 0 y nuestra caja 2 tiene un z-index de 1 entonces se mostrara por encima, porque 1 es mayor que 0.</p>
          <p>Te comento que ademas, suponete que tenes tu caja 3 asi y tenes que visualizar la caja 2 por encima:</p>
          <pre><code><span class="hljs-selector-class">.caja-3</span> {
              <span class="hljs-attribute">background-color</span>:yellow;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">z-index</span>: <span class="hljs-number">10</span>;
          }
          </code></pre><p>Es simple, le doy un z-index de 11 a la caja 2. Si pero no, bastar, bastaria, pero suponete que en el futuro tenes un problema o queres agregar algo, no vas a tener un rango para poder agregar esa caja. Entonces, yo, Felipe, le daria un z-index de 60 a mi caja 2, por ejemplo.</p>
          <h3 id="absolute">Absolute</h3>
          <p>Position absolute es re parecido a position relative.</p>
          <pre><code><span class="hljs-selector-class">.caja-1</span> {
              <span class="hljs-attribute">background-color</span>:red;
          }
          <span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: absolute;
          }
          <span class="hljs-selector-class">.caja-3</span> {
              <span class="hljs-attribute">background-color</span>:yellow;
          }
          <span class="hljs-selector-class">.caja-4</span> {
              <span class="hljs-attribute">background-color</span>:green;
          }
          </code></pre><p>Arranquemos asi ¿Que vemos?</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/172025628-edc078b9-b2c5-4711-8af6-c2393df53281.png" alt="positionAbsolute" title="position absolute"></p>
          <p>¿Como?¿Desaparecio la caja 3? Mmm... No, en realidad no desaparece. Vamos a darle una opacidad a la caja 2 para que podamos ver, la opacidad es basicamente la transparencia del elemento:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: absolute;
              <span class="hljs-attribute">opacity</span>: .<span class="hljs-number">5</span>;
          }
          </code></pre><p>En CSS, cuando agrego una opacidad de .5 es lo mismo que decir 0.5, la opacidad vira entre 0 y 1, si doy opacidad 0, el elemento no se verá, si le doy opacidad 1, el elemento no tendra transparencia. En fin, esto es lo que vemos:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/172025714-d07ade91-43f1-4bdc-9b4c-1b477bf51b93.png" alt="positionAbsolute" title="position absolute"></p>
          <p>Como podemos ver esta la caja 3 ahi escondida atras de la caja 2 (puse la opacidad para que veas este detalle nada mas). Ahora bien ¿Porque se puso por debajo? Esto es porque el espacio reservado que se mantenia en el position relative, no se mantiene en position absolute. Por eso subió la caja 3, porque como no habia espacio de nadie donde estaba la caja dos, obvio que lo ocupó. </p>
          <p>Ademas, ahora el punto de referencia cuando yo le doy un top 0px, por ejemplo, va a ser el contenedor o el viewport:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: absolute;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
          }
          </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/172025881-03619b8d-d1d1-4f85-859a-9ae98d459d45.png" alt="positionAbsolute" title="position absolute"></p>
          <p>En este caso, el punto de referencia es el viewport, que es todo lo que podemos ver en la pagina:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/172026002-7a53e67c-a5b7-4fef-aa18-55fa49bcc710.png" alt="viewport" title="viewport"></p>
          <p>Ahora, ¿En que casos el contenedor se usa de referencia? Cuando está posicionado.</p>
          <p>Vamos a usar este codigo:</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"contenedor"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span> hijo <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>Y estos estilos:</p>
          <pre><code><span class="hljs-selector-class">.contenedor</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">50vw</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">50vh</span>;
              <span class="hljs-attribute">background-color</span>: blueviolet;
          }
          <span class="hljs-selector-class">.contenedor</span> <span class="hljs-selector-tag">div</span>{
              <span class="hljs-attribute">position</span>: absolute;
              <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;
              <span class="hljs-attribute">color</span>: white;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">20%</span>;
              <span class="hljs-attribute">background-color</span>: black;
          }
          </code></pre><p>Va a pasar esto:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/172026108-ce872e16-de05-44bb-8cb5-b13851ef318e.png" alt="positionAbsolute" title="position absolute"></p>
          <p>Bueno, ya todos sabemos porque, simplemente esta usando el viewport como referencia porque el div contenedor no esta posicionado. ¿Y si posiciono?:</p>
          <pre><code><span class="hljs-selector-class">.contenedor</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">50vw</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">50vh</span>;
              <span class="hljs-attribute">background-color</span>: blueviolet;
              <span class="hljs-attribute">position</span>: absolute;
          }
          </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/172026153-585e5e13-190d-4bf4-928e-eeb8fcb21fae.png" alt="positionAbsolute" title="position absolute"></p>
          <p>No digo mas. Está buenisimo.</p>
          <h2 id="fixed">Fixed</h2>
          <p>Fixed es igual que absolute pero queda &quot;fijado&quot;. Al igual que en absolute, fixed es sacado del flujo normal de HTML y pierde su lugar en el DOM. Vamos a ver un ejemplo:</p>
          <pre><code>&lt;body&gt;
              &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"fixed"</span>&gt; fijo!&lt;/<span class="hljs-keyword">div</span>&gt;
              &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"contenido"</span>&gt;ESTE ES EL CONTENIDO DE ESTA PAGINA WEB&lt;/<span class="hljs-keyword">div</span>&gt;
          &lt;/body&gt;
          </code></pre><p>Estilos:</p>
          <pre><code><span class="hljs-selector-class">.fixed</span>{
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#ffffff</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">text-align</span>: center; <span class="hljs-comment">/* Centro el texto */</span>
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100vw</span>;
          }
          
          <span class="hljs-selector-class">.contenido</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">text-align</span>: center;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">300vh</span>;
          }
          </code></pre><p>Como pueden ver, doy un height bien grande para que podamos desarrollar mas scroll en la pagina y mostrar el ejemplo:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/172026490-bba828ab-a4c8-40c1-8a16-f16f62d41254.png" alt="positionFixed" title="position fixed"></p>
          <p>Ahora bien, si le doy un fixed al primer div pasará algo asi:</p>
          <pre><code><span class="hljs-selector-class">.fixed</span>{
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#ffffff</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">text-align</span>: center; <span class="hljs-comment">/* Centro el texto */</span>
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100vw</span>;
              <span class="hljs-attribute">position</span>: fixed;
          }
          </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/172026562-8e666971-8c3f-43a2-9d2a-dccede128e3d.png" alt="positionFixed" title="position fixed"></p>
          <p>Tal como un absolute, utiliza el viewport como referencia y se posiciono. Funciona tal como el absolute, la unica diferencia es que a medida que scrolleo en la pagina, mantendra su posicion fija:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/172026590-f6cbca38-bd4c-4f9a-9894-403d922cec79.png" alt="positionFixed" title="position fixed"></p>
          <h3 id="sticky">Sticky</h3>
          <p>Es una mezcla rara de position fixed y position relative. Con sticky mantenemos el espacio del elemento en el DOM, al igual que el position relative. Y... ¿Porque fixed? Mirá:</p>
          <p>Vamos a usar el codigo anterior, nomas cambié esto:</p>
          <pre><code><span class="hljs-selector-class">.fixed</span>{
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#ffffff</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">text-align</span>: center; <span class="hljs-comment">/* Centro el texto */</span>
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100vw</span>;
              <span class="hljs-attribute">position</span>: sticky;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
              <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">300px</span>;
          }
          </code></pre><p><img src="https://user-images.githubusercontent.com/84806140/172026773-8dc84a81-3c9c-4f9e-844f-088e829d08c8.png" alt="positionSticky" title="position sticky"></p>
          <p>Ahora si scrolleamos hacia abajo y nos cruzamos con el div &quot;fixed&quot;, se quedará fijo en top 0px:</p>
          <p><img src="https://user-images.githubusercontent.com/84806140/172026812-5265d3cd-5f04-4c81-a9d5-62cf4643a5ef.png" alt="positionSticky" title="position sticky"></p>`,
      },
    ],
  },
  {
    name: "fundamentos_de_programacion",
    contents: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: `
              <h2>No la hice capo 😎</h2>
              <p>Proximamente vas a poder gozar de esta parte😈🧠.</p>
              `,
      },
    ],
  },
  {
    name: "javascript",
    contents: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: `
              <h2>No la hice capo 😎</h2>
              <p>Proximamente vas a poder gozar de esta parte😈🧠.</p>
              `,
      },
    ],
  },
  {
    name: "bases_de_datos",
    contents: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: `
              <h2>No la hice capo 😎</h2>
              <p>Proximamente vas a poder gozar de esta parte😈🧠.</p>
              `,
      },
    ],
  },
  {
    name: "nodejs",
    contents: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: `
              <h2>No la hice capo 😎</h2>
              <p>Proximamente vas a poder gozar de esta parte😈🧠.</p>
              `,
      },
    ],
  },
  {
    name: "express",
    contents: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: `
              <h2>No la hice capo 😎</h2>
              <p>Proximamente vas a poder gozar de esta parte😈🧠.</p>
              `,
      },
    ],
  },
  {
    name: "react",
    contents: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: `
              <h2>No la hice capo 😎</h2>
              <p>Proximamente vas a poder gozar de esta parte😈🧠.</p>
              `,
      },
    ],
  },
  {
    name: "typescript",
    contents: [
      {
        id: 0,
        title: "🤕🤒 No hay contenido",
        content: `
              <h2>No la hice capo 😎</h2>
              <p>Proximamente vas a poder gozar de esta parte😈🧠.</p>
              `,
      },
    ],
  },
];

export default themes;
