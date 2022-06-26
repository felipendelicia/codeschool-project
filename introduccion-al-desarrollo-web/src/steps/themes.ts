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
                <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/169602174-8d254c26-721a-48ee-9f10-c2f44209baab.png" alt="VS Code Download page" title="VS Code Download page"></p>
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
                <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/169606310-5cedce55-be39-4927-9147-389ff64bf10e.png" alt="HTML shorthand" title="HTML shorthand"></p>
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
                <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/169615912-8e5fa8a5-b9b7-4289-86b7-1a4829b6a4ec.png" alt="diplay" title="Display"></p>
                <p>En este caso la etiqueta b y la i. ¿Porqué ocurre esto? Esto pasa debido a que las etiquetas como h1,h2, h3 y los parrafos ocupan todo el ancho de la caja que los contiene (en este caso el body) independiente de su contenido. Estos elementos se denominan en bloque:</p>
                <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/169616185-e9d0827c-363b-43b1-a332-5da29341c6f3.png" alt="displayBlock" title="Display Block"></p>
                <p>En el caso de las demas etiquetas, se adaptan al contenido, es decir, el tamaño de la caja esta regido unicamente por su contenido, estos se denominan en linea:</p>
                <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/169616280-53ce163f-fa4c-4f53-a597-617bbdfc325c.png" alt="displayInline" title="Display Inline"></p>
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
                </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/169910467-03db0f3d-8536-42d3-af62-98eb9ff4ec29.png" alt="Video tag" title="video tag"></p>
                <p>Como podran ver, el video se muestra, pero , sin embargo, no se reproduce ni hay forma de que lo puedas reproducir.
                Para esto (para poder controlar el video) tenemos que agregar un atributo, el atributo controls, este atributo no tiene un valor, su valor esta configurado por el navegador.</p>
                <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">video</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"videoprueba.mp4"</span> <span class="hljs-attr">controls</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">video</span>&gt;</span>
                </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/169910912-87f75d31-01b8-4028-b32d-c0a4eedf5792.png" alt="Video tag" title="video tag"></p>
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
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170365771-8702a490-e494-44bb-9d1b-931be7e80cf6.png" alt="universalSelector" title="Universal Selector"></p>
        <p>Es decir, todos los elementos de la web pasan a ser rojos.</p>
        <h3 id="por-tipo">Por tipo</h3>
        <p>¿Cómo es el tema de seleccionar por tipo? es simple, seleccionas unicamente el tipo de elemento que vos definas, por ejemplo, los elementos p. De la siguiente manera:</p>
        <pre><code><span class="hljs-selector-tag">p</span> {
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>;
        }
        </code></pre><p>Suponiendo que mantenemos el codigo anterior y solo cambiamos los estilos, tendriamos un resultado asi:</p>
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170386969-7e8827ab-93fd-44ab-b766-4049e12a9a6c.png" alt="porTipo" title="Por tipo"></p>
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
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170387912-b9d30fb0-75b0-40fd-ad6b-08684b6742a5.png" alt="porClase" title="Por clase"></p>
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
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170402127-6e753403-74f6-4893-8d94-485dcfb9431c.png" alt="porID" title="por ID"></p>
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
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170402127-6e753403-74f6-4893-8d94-485dcfb9431c.png" alt="porAtributo" title="por Atributo"></p>
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
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170505343-37b6c86a-05b0-4220-9491-095659849661.png" alt="por descendiente" title="por descendiente"></p>
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
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170386969-7e8827ab-93fd-44ab-b766-4049e12a9a6c.png" alt="porTipo" title="Por tipo"></p>
        <p>Peeero, si queremos por ejemplo, que cuando pasemos el mouse por encima del parrafo se vuelva azul, deberiamos hacerlo mediante pseudo-clases, en este caso, hover, se aplican de esta manera:</p>
        <pre><code><span class="hljs-selector-tag">p</span> {
            <span class="hljs-attribute">color</span>: <span class="hljs-number">#f00</span>;
        }
        <span class="hljs-selector-tag">p</span><span class="hljs-selector-pseudo">:hover</span> {
            <span class="hljs-attribute">color</span>: blue;
        }
        </code></pre><p>Y ahora si, ya tendriamos ese estilo deseado, al pasar el mouse por encima, seria azul:</p>
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170512247-71074006-4be7-4338-8ebd-0f285655b1b2.png" alt="for pseudo-clase" title="Por pseudo-clase"></p>
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
        </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170531241-bee46791-0ec3-4c63-bbf3-f07cd103d463.png" alt="vw" title="vw"></p>
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
                <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170844980-44724fd2-a9fc-4d2c-8007-db7ccaa9f2bd.png" alt="line-height" title="line height"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170845328-7e49c268-d216-4ca0-8dd9-2ccb6f792dce.png" alt="google-fonts" title="google fonts"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170845368-a436db51-d350-457c-8684-42459f0f5335.png" alt="google font css" title="google font css"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170845853-bf913cda-ef91-4f87-a8f3-2109525fa997.png" alt="normalize" title="nomalize"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170847600-36924a8f-16df-4de8-9e9b-e8331d63c79e.png" alt="padding" title="padding"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170847743-d8fddc9f-7381-47fe-9b60-97bd64f049e1.png" alt="padding" title="padding"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170848041-f01c09ee-9a35-4799-9363-76f7ce9838b5.png" alt="margin" title="margin"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170848438-f2e32be9-35f6-4b72-82ee-1c61c5ce1945.png" alt="box-model" title="box model"></p>
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
          <p class="img-container"><img src="https://www.freecodecamp.org/news/content/images/2021/09/Document.jpg" alt="dom" title="dom"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170849062-9f8f2a17-e2fd-432f-82ad-80e5c3f5269c.png" alt="outline" title="outline"></p>
          <p>Asi se ve claramente como se agrega un borde que ocupa espacio y mueve las demas cajas.</p>
          <pre><code><span class="hljs-selector-class">.caja1</span>{
              <span class="hljs-attribute">background-color</span>: red;
              <span class="hljs-attribute">outline</span>: <span class="hljs-number">10px</span> solid blue;
          }
          </code></pre><p>Si hacemos este minimo cambio, mira el resultado que logramos:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/170849104-7d558882-5d26-4f0c-87b0-1e0312e866c2.png" alt="outline" title="outline"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172024006-3722ad49-9b5a-4377-ab0e-3631a13f00d3.png" alt="position" title="position"></p>
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
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172024006-3722ad49-9b5a-4377-ab0e-3631a13f00d3.png" alt="positionRelative" title="position relative"></p>
          <p>Como ven, al agregar el position relative &quot;no cambia nada&quot;. Vamos a ver que cambio. Suponete que le damos la propiedad top a la caja 1, de la siquiente manera:</p>
          <pre><code><span class="hljs-selector-class">.caja-1</span> {
              <span class="hljs-attribute">background-color</span>:red;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">20px</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172024006-3722ad49-9b5a-4377-ab0e-3631a13f00d3.png" alt="positionRelative" title="position relative"></p>
          <p>Nuevamente, esta vez no paso nada. Sin embargo, si a nuestra caja <strong>posicionada</strong> le damos un top de 20px mirá lo que pasa:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">20px</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172024454-a211e121-5879-45b3-b632-09db14b317bc.png" alt="positionRelative" title="position relative"></p>
          <p>Re zarpada esta propiedad, es buenisima para posicionar. Bueno... Todo muy lindo, pero ¿Porque paso esto? Esto paso porque cuando posicionamos un elemento adquiere cuatro propiedades nuevas: top, right, left, bottom. Las mas importantes son top y left. Si te fijas en el ejemplo, le di un top de 20px y se movio 20px para abajo. Otro detalle importantisimo es que el espacio reservado del DOM que ocupa la caja lo guardo y conservo. Este ultimo lo voy a explicar con otro ejemplo, suponete esto:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">300px</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172024611-17136d21-90e5-4a36-8d8c-a88e64ca6106.png" alt="positionRelative" title="position relative"></p>
          <p>Fijate que la cajita 2 se va re lejos pero a pesar de posicionarse en cualquier lugar, esta conserva su espacio reservado.</p>
          <p>Otra particularidad del position relative es que cuando posiciono con un top, por ejemplo, el punto de referencia es el mismo espacio reservado de la caja. En criollo, los 300px que bajo la caja 2 fue desde su espacio reservado:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172024712-e28bb382-968e-44a1-8fdf-d493170c4e21.png" alt="positionRelative" title="position relative"></p>
          <p>Ahora hablemos un poco mas de left, right y bottom, es algo muy similar a lo que pasa con top, nada mas que en otra direccion, pongamos un ejemplo:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">bottom</span>: <span class="hljs-number">10px</span>;
              <span class="hljs-attribute">left</span>: <span class="hljs-number">60px</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172024780-cbfb08b4-f9d9-4d60-ab82-72a8e624b96b.png" alt="positionRelative" title="position relative"></p>
          <p>Finalmente, lo que todos esperaban, ¿Qué pasa si a mi caja le doy un bottom y un top?</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">10px</span>;
              <span class="hljs-attribute">bottom</span>: <span class="hljs-number">10px</span>;
          }
          </code></pre><p>¿Que creen que hara el navegador? ¿hacerle caso al bottom y al top? ¿hacerle caso a uno solo? veamos...</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172024857-10d06f69-0291-482f-bb37-59e648a04166.png" alt="positionRelative" title="position relative"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172025055-1a5b4c76-711b-4d53-99bf-4160e0dc0bfe.png" alt="z-index" title="z-index"></p>
          <p>Che! y mira si quiero poner la caja 3 por encima de la 2...¿Como hago? Bueno le damos un posicionamiento a la caja 3:</p>
          <pre><code><span class="hljs-selector-class">.caja-3</span> {
              <span class="hljs-attribute">background-color</span>:yellow;
              <span class="hljs-attribute">position</span>: relative;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172025102-f62d5f80-2c63-4713-b5a8-048a4b591ab2.png" alt="z-index" title="z-index"></p>
          <p>¿Porque pasa esto? Porque es el flujo con que se colocan los elementos en HTML, imaginate que el navegador dibuja la caja 1, despues dibuja la caja 2 y finalmente la 3. Claramente si dibujó la 3 despues de la caja 2 va a estar por encima. </p>
          <p>Recapitulemos... El z-index funciona solamente cuando las cajas estan posicionadas. Si no esta posicionada, no va a funcionar. El z-index por defecto es 0. Osea que tanto la caja 2, como la 3 tienen un z-index de 0. Mirá, te voy a mostrar como poner la caja 2 nuevamente arriba sin importar que este posicionada la caja 3:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">40px</span>;
              <span class="hljs-attribute">left</span>: <span class="hljs-number">20px</span>;
              <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172025055-1a5b4c76-711b-4d53-99bf-4160e0dc0bfe.png" alt="z-index" title="z-index"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172025628-edc078b9-b2c5-4711-8af6-c2393df53281.png" alt="positionAbsolute" title="position absolute"></p>
          <p>¿Como?¿Desaparecio la caja 3? Mmm... No, en realidad no desaparece. Vamos a darle una opacidad a la caja 2 para que podamos ver, la opacidad es basicamente la transparencia del elemento:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: absolute;
              <span class="hljs-attribute">opacity</span>: .<span class="hljs-number">5</span>;
          }
          </code></pre><p>En CSS, cuando agrego una opacidad de .5 es lo mismo que decir 0.5, la opacidad vira entre 0 y 1, si doy opacidad 0, el elemento no se verá, si le doy opacidad 1, el elemento no tendra transparencia. En fin, esto es lo que vemos:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172025714-d07ade91-43f1-4bdc-9b4c-1b477bf51b93.png" alt="positionAbsolute" title="position absolute"></p>
          <p>Como podemos ver esta la caja 3 ahi escondida atras de la caja 2 (puse la opacidad para que veas este detalle nada mas). Ahora bien ¿Porque se puso por debajo? Esto es porque el espacio reservado que se mantenia en el position relative, no se mantiene en position absolute. Por eso subió la caja 3, porque como no habia espacio de nadie donde estaba la caja dos, obvio que lo ocupó. </p>
          <p>Ademas, ahora el punto de referencia cuando yo le doy un top 0px, por ejemplo, va a ser el contenedor o el viewport:</p>
          <pre><code><span class="hljs-selector-class">.caja-2</span> {
              <span class="hljs-attribute">background-color</span>:lightblue;
              <span class="hljs-attribute">position</span>: absolute;
              <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172025881-03619b8d-d1d1-4f85-859a-9ae98d459d45.png" alt="positionAbsolute" title="position absolute"></p>
          <p>En este caso, el punto de referencia es el viewport, que es todo lo que podemos ver en la pagina:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172026002-7a53e67c-a5b7-4fef-aa18-55fa49bcc710.png" alt="viewport" title="viewport"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172026108-ce872e16-de05-44bb-8cb5-b13851ef318e.png" alt="positionAbsolute" title="position absolute"></p>
          <p>Bueno, ya todos sabemos porque, simplemente esta usando el viewport como referencia porque el div contenedor no esta posicionado. ¿Y si posiciono?:</p>
          <pre><code><span class="hljs-selector-class">.contenedor</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">50vw</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">50vh</span>;
              <span class="hljs-attribute">background-color</span>: blueviolet;
              <span class="hljs-attribute">position</span>: absolute;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172026153-585e5e13-190d-4bf4-928e-eeb8fcb21fae.png" alt="positionAbsolute" title="position absolute"></p>
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
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172026490-bba828ab-a4c8-40c1-8a16-f16f62d41254.png" alt="positionFixed" title="position fixed"></p>
          <p>Ahora bien, si le doy un fixed al primer div pasará algo asi:</p>
          <pre><code><span class="hljs-selector-class">.fixed</span>{
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#ffffff</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">text-align</span>: center; <span class="hljs-comment">/* Centro el texto */</span>
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100vw</span>;
              <span class="hljs-attribute">position</span>: fixed;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172026562-8e666971-8c3f-43a2-9d2a-dccede128e3d.png" alt="positionFixed" title="position fixed"></p>
          <p>Tal como un absolute, utiliza el viewport como referencia y se posiciono. Funciona tal como el absolute, la unica diferencia es que a medida que scrolleo en la pagina, mantendra su posicion fija:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172026590-f6cbca38-bd4c-4f9a-9894-403d922cec79.png" alt="positionFixed" title="position fixed"></p>
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
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172026773-8dc84a81-3c9c-4f9e-844f-088e829d08c8.png" alt="positionSticky" title="position sticky"></p>
          <p>Ahora si scrolleamos hacia abajo y nos cruzamos con el div &quot;fixed&quot;, se quedará fijo en top 0px:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172026812-5265d3cd-5f04-4c81-a9d5-62cf4643a5ef.png" alt="positionSticky" title="position sticky"></p>`,
      },
      {
          id:11,
          title:"🦒🐍 Overflow",
          content:`<h2 id="-overflow">Overflow 🦒🐍</h2>
          <p>La propiedad overflow especifica, cuando por ejemplo, una caja desborda de contenido, recortarlo, agregar barras de desplazamiento (scroll), o mostrar el contenido excedente.</p>
          <p>Por ejemplo, yo querria aplicar overflow en una situacion como esta:</p>
          <pre><code><span class="hljs-section">&lt;div&gt;</span>
              <span class="hljs-attribute">Lorem</span> ipsum, ... (mucho texto).
          <span class="hljs-section">&lt;/div&gt;</span>
          </code></pre><p>con estos estilos:</p>
          <pre><code><span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">3em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid red;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172031452-9208a666-e283-4619-8464-39a13a0c4f17.png" alt="overflow" title="overflow"></p>
          <blockquote>
          <p>Basicamente lo que voy a hacer con overflow ahora es decirle que hacer con lo que &quot;sobra&quot; </p>
          </blockquote>
          <p>Por defecto la propiedad tiene un valor &quot;visible&quot;, lo cual hace que el excedente sea visible, justamente.</p>
          <p>Existe el valor &quot;auto&quot; la cual detecta si el contenido posee o no excedente, si lo posee, coloca una scroll bar (barra de desplazamiento).</p>
          <p>Despues tenemos el valor &quot;scroll&quot; la cual obligatoriamente pone la scroll bar, a pesar de que el contenido no se sobrepase.</p>
          <p>Un detalle, supongamos el siguiente codigo:</p>
          <pre><code><span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">3em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid red;
              <span class="hljs-attribute">overflow</span>: scroll;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172031619-47f00087-927a-4a22-9ec7-27399b3a0c23.png" alt="overflow" title="overflow"></p>
          <p>Como pueden ver, se agrega como les dije, la scroll bar. Sin embargo... ¿Porque se agrega la scrollbar en el eje x (abajo)? Esto es porque overflow es un shorthand, es una propiedad acortada. Overflow abrevia las propiedades: overflow-y e overflow-x.</p>
          `
      },
      {
          id:12,
          title:"📱🔍 Pseudoelementos",
          content:`<h2 id="-pseudoelementos">Pseudoelementos 📱🔍</h2>
          <p>Para empezar fuerte: Un pseudoelemento es un elemento que no es un elemento. ¿Que? Exacto, es un elemento que no es un elemento por el hecho de que no forma parte del DOM, pero si podemos ver cambios visuales, es una movida parecida al outline, podemos ver un cambio visual pero no afecta al DOM.</p>
          <h3 id="-first-line">::first-line</h3>
          <p>Primero les voy a presentar este pseudoelemento, el cual no funciona en los elementos en linea (inline). Como su nombre lo dice, este sirve para modificar la primera linea de elemento que contiene texto.</p>
          <p>Como ya lo esperas, si, vamos con ejemplos que es lo que mejor se entiende.</p>
          <pre><code><span class="hljs-section">&lt;div&gt;</span>
              <span class="hljs-attribute">Lorem</span> ipsum, ... (mucho texto).
          <span class="hljs-section">&lt;/div&gt;</span>
          </code></pre><p>Y mis estilos:</p>
          <pre><code><span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
          }
          
          <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">::first-line</span> {
              <span class="hljs-attribute">color</span>: violet;
              <span class="hljs-attribute">font-weight</span>: bold;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172031901-18c3db92-9b29-459d-b5d8-4785b827e1d7.png" alt="first-line" title="first line"></p>
          <p>Esto obtenemos. Está buenisimo, a mi particularmente me encanta. Tiene una gran utilidad debido a que la primera linea de texto cambia segun el dispositivo donde nos encontremos, esto debido al viewport. Entonces el pseudoelemento first-line nos viene como anillo al dedo. Mirá, te doy un ejemplo:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172032007-5120d2d1-0b0f-45bf-a234-45a751795365.png" alt="first-line" title="first-line"></p>
          <h3 id="-first-letter">::first-letter</h3>
          <p>Es exactamente lo mismo que first-line, con la diferencia que en vez de aplicar a toda la primera linea, afecta unicamente a la primera letra.</p>
          <pre><code><span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">::first-letter</span> {
              <span class="hljs-attribute">color</span>: red;
              <span class="hljs-attribute">font-weight</span>: bold;
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172032064-b6563817-a64c-48ce-82fa-34dc0374dcd7.png" alt="first-letter" title="first letter"></p>
          <p>Como se habran podido dar cuenta, en este caso, first-line y first-letter si hacen parte del DOM.</p>
          <h3 id="-placeholder">::placeholder</h3>
          <p>¿Que era el placeholder? El placeholder es esto mirá:</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">form</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Inserte su nombre"</span>/&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>estilos:</p>
          <pre><code><span class="hljs-selector-tag">form</span>{
              <span class="hljs-attribute">text-align</span>: center; <span class="hljs-comment">/* Centro el input */</span>
              <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">3em</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172032244-c62464cb-da73-4fd6-a730-d06092ab7b24.png" alt="placeholder" title="placeholder"></p>
          <p>Ese &quot;inserte su nombre&quot; es nuestro placeholder.</p>
          <p>El placeholder por defecto tiene ciertas propiedades, que, las cuales podemos modificar con este pseudoelemento:</p>
          <pre><code><span class="hljs-selector-tag">form</span> <span class="hljs-selector-tag">input</span><span class="hljs-selector-pseudo">::placeholder</span>{
              <span class="hljs-attribute">color</span>: brown;
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172032314-17543589-bbdc-4c62-ad22-62b54ef77ce8.png" alt="placeholder" title="placeholder"></p>
          <h3 id="-selection">::selection</h3>
          <p>Primero que nada voy a aclarar que voy a utilizar el mismo codigo que en el placeholder para explicar el selection 😂.</p>
          <p>Selection es un pseudoelemento que nos va a ayudar a modificar las propiedades de nuestra propia seleccion. ¿Que es la seleccion?</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172032387-e09256dc-3ea7-4595-a7d4-c7b3297d4e1d.png" alt="selection" title="selection"></p>
          <pre><code><span class="hljs-selector-tag">form</span> <span class="hljs-selector-tag">input</span><span class="hljs-selector-pseudo">::selection</span>{
              <span class="hljs-attribute">background-color</span>: green;
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#ffffff</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172032443-b0021949-0f25-4fc6-bbda-0a576773783f.png" alt="selection" title="selection"></p>
          <h3 id="-before">::before</h3>
          <p>After y before (el que viene despues) los deje al final porque tienen una particularidad. La particularidad es que los elementos after y before son &quot;hijos&quot; de los elementos a los que se le aplica. Necesitan necesariamente la propiedad content que ya vamos a ver. Y ademas, son elementos en linea.</p>
          <pre><code><span class="hljs-section">&lt;body&gt;</span>
              <span class="hljs-section">&lt;b&gt;</span>
              <span class="hljs-attribute">program</span>é
              <span class="hljs-section">&lt;/b&gt;</span>
          <span class="hljs-section">&lt;/body&gt;</span>
          </code></pre><p>¿Como hago para poner &quot;Ayer <strong>programé</strong> una web&quot; con tan solo tener &quot;programé&quot;? Bueno, seguí leyendo... Como espero que sepas, before, en español significa &quot;antes&quot;:</p>
          <pre><code><span class="hljs-selector-tag">body</span> {
              <span class="hljs-attribute">text-align</span>: center;
          }
          
          <span class="hljs-selector-tag">b</span><span class="hljs-selector-pseudo">::before</span>{
              <span class="hljs-attribute">content</span>: <span class="hljs-string">"Ayer"</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172032673-a3347ffe-7642-45d4-8e43-30a8c09c634d.png" alt="before" title="before"></p>
          <p>Y vos me diras &quot;Pero, Felipe, ese contenido que agregaste a la etiqueta b pertenece al DOM&quot;, y no, no pertenece al DOM, como veran si tratan de seleccionarla no podran:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172032746-b3b92426-00cc-4e4d-a3e2-b3832aa4f5b6.png" alt="before" title="before"></p>
          <p>Un ultimo tip seria que, ademas de la propiedad content, podemos agregar mas propiedades, como color, para cambiar el color del content, probalo!</p>
          <h3 id="-after">::after</h3>
          <p>Es exactamente que el before, nada mas que en vez de &quot;antes&quot;, es &quot;despues&quot;:</p>
          <pre><code><span class="hljs-selector-tag">body</span> {
              <span class="hljs-attribute">text-align</span>: center;
          }
          
          <span class="hljs-selector-tag">b</span><span class="hljs-selector-pseudo">::before</span>{
              <span class="hljs-attribute">content</span>: <span class="hljs-string">"Ayer"</span>;
          }
          
          <span class="hljs-selector-tag">b</span><span class="hljs-selector-pseudo">::after</span>{
              <span class="hljs-attribute">content</span>: <span class="hljs-string">"una web"</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172032828-bc8452e3-59c5-4f8d-acf7-0a25d7276792.png" alt="after" title="after"></p>
          `
      },
      {
          id:13,
          title:"🔘🆕 Pseudoclases",
          content:`<h2 id="-pseudoclases">Pseudoclases 🔘🆕</h2>
          <p>Cuando trabajamos con pseudoclases, es algo similar a los pseudoelementos en el sentido de que se aplican a &quot;x&quot; selector. Son como selecciones que se generan tras un evento, algo asi como escuchas (si sabes algo de programacion te vas a dar una idea).</p>
          <h3 id="-hover">:hover</h3>
          <p>Creo que ya habia hablado de hover, hover realiza una seleccion en cuanto el mouse pase por encima del elemento al cual se aplica.</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Pasá el mouse por encima mio! <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>y lo de siempre:</p>
          <pre><code><span class="hljs-selector-tag">body</span> {
              <span class="hljs-attribute">text-align</span>: center;
          }
          
          <span class="hljs-selector-tag">p</span> {
              <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">5em</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">display</span>: inline-block;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">1em</span> <span class="hljs-number">3em</span>;
              <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">12px</span>;
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#ffffff</span>;
              <span class="hljs-attribute">font-weight</span>: bold;
          }
          
          <span class="hljs-selector-tag">p</span><span class="hljs-selector-pseudo">:hover</span> {
              <span class="hljs-attribute">background-color</span>: blueviolet;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172033014-41d648c9-22b3-4c27-af0a-baa06afbaf4a.png" alt="hover" title="hover"></p>
          <blockquote>
          <p>No se aprecia, sin embargo si estoy con el mouse sobre el parrafo.</p>
          </blockquote>
          <p>Como podes ver che, al pasar el mouse por encima del parrafo ya no es mas brown, sino blueviolet.</p>
          <h3 id="-link">:link</h3>
          <p>Lo que hace es modificar las propiedades de un link (etiqueta a) al cual todavia no visitamos.</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://avatars.githubusercontent.com/u/84806140?s=80&amp;v=4"</span>&gt;</span> 
                  Mi foto!
              <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>Y no puede faltar:</p>
          <pre><code><span class="hljs-selector-tag">body</span> {
              <span class="hljs-attribute">text-align</span>: center;
          }
          
          <span class="hljs-selector-tag">a</span> {
              <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">5em</span>;
              <span class="hljs-attribute">display</span>: inline-block;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">1em</span> <span class="hljs-number">3em</span>;
              <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">12px</span>;
              <span class="hljs-attribute">font-weight</span>: bold;
          }
          
          <span class="hljs-selector-tag">a</span><span class="hljs-selector-pseudo">:link</span>{
              <span class="hljs-attribute">background-color</span>: blue;
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#ffffff</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172033250-1d841b02-8382-4eef-bb33-1164a1f43d54.png" alt="link" title="link"></p>
          <p>Como podes ver, no visité aun el link y tengo los estilos declarados dentro de la pseudoclase :link.</p>
          <h3 id="-visited">:visited</h3>
          <p>Es exactamente lo mismo que la pseudoclase :link, con la diferencia de que afecta no a los links no visitados, afecta a los links si visitados.</p>
          <pre><code><span class="hljs-selector-tag">a</span><span class="hljs-selector-pseudo">:visited</span>{
              <span class="hljs-attribute">background-color</span>: gold;
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#000000</span>;
          }
          </code></pre><p>Este es un ejemplo de visited.</p>
          <h3 id="-active">:active</h3>
          <p>Afecta a los elementos que esten siendo presionados. Por ejemplo, imaginate que tenes una etiqueta button y que estas manteniendo presionado sobre ella el click, la pseudoclase active estaria funcionando.</p>
          <pre><code><span class="hljs-section">&lt;body&gt;</span>
              <span class="hljs-section">&lt;button&gt;</span>
              <span class="hljs-attribute">Boton</span>
              <span class="hljs-section">&lt;/button&gt;</span>
          <span class="hljs-section">&lt;/body&gt;</span>
          </code></pre><p>y:</p>
          <pre><code><span class="hljs-selector-tag">body</span>{
              <span class="hljs-attribute">text-align</span>: center;
          }
          
          <span class="hljs-selector-tag">button</span> {
              <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">4em</span>;
              <span class="hljs-attribute">color</span>: red;
          }
          
          <span class="hljs-selector-tag">button</span><span class="hljs-selector-pseudo">:active</span>{
              <span class="hljs-attribute">color</span>: blue;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172033450-b557bfeb-b239-45aa-bddc-c8b5e008ce4c.png" alt="active" title="active"></p>
          <blockquote>
          <p>Aunque no se vea, estoy manteniendo presionado el boton</p>
          </blockquote>
          <p>Como pueden ver, active se activa 😂 cuando mantengo presionado el mismo.</p>
          <h3 id="-focus">:focus</h3>
          <p>Este generalmente funciona con inputs y etiquetas relacionadas. Lo que hace es seleccionar el elemento cuando este siendo &quot;enfocado&quot;, por ejemplo, en el caso de los inputs, estarian siendo seleccionados cuando los presionas para escribir.</p>
          <pre><code><span class="hljs-section">&lt;body&gt;</span>
              <span class="hljs-section">&lt;input/&gt;</span>
          <span class="hljs-section">&lt;/body&gt;</span>
          </code></pre><p>y:</p>
          <pre><code><span class="hljs-selector-tag">body</span>{
              <span class="hljs-attribute">text-align</span>: center;
          }
          
          <span class="hljs-selector-tag">input</span> {
              <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">4em</span>;
              <span class="hljs-attribute">background-color</span>: red;
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
          }
          
          <span class="hljs-selector-tag">input</span><span class="hljs-selector-pseudo">:focus</span>{
              <span class="hljs-attribute">background-color</span>: blue;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172033580-51db44c2-c12a-43d9-b8d1-8872f9b95717.png" alt="focus" title="focus"></p>
          `
      },
      {
          id:14,
          title:"🏋️‍♂️🖼️ Object fit",
          content:`<h2 id="object-fit-">Object fit 🏋️‍♂️🖼️</h2>
          <p>Es una propiedad que se aplica a imagenes y hay que aprenderla para trabajar con imagenes, galerias y cosas asi, porque es importante y muy interesante.</p>
          <p>Antes de arrancar de lleno con object-fit vamos a ver cuales son los problemones que nos soluciona esta propiedad. </p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caja"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://user-images.githubusercontent.com/84806140/172066533-5bb7e0d5-5ea7-452f-8616-a209f5f8960a.jpg"</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>Vamos a usar este codigo HTML, y vos te preguntaras... &quot;Felipe, ¿Que es ese source que elegiste para la imagen?&quot; Es una de mis fotos de instagram 😂:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172066533-5bb7e0d5-5ea7-452f-8616-a209f5f8960a.jpg" alt="Felipe" title="Felipe"></p>
          <pre><code><span class="hljs-selector-class">.caja</span> <span class="hljs-selector-tag">img</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">20em</span>;
          }
          
          <span class="hljs-selector-class">.caja</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">3em</span>;
          }
          </code></pre><p>Solo le cambie el ancho para que podamos visualizar mejor mi fantastico rostro:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172066749-d180702e-2c4e-40b0-92bc-93b8e7848189.png" alt="object-fit" title="object-fit"></p>
          <p>Pero ahora mira lo que pasa si hago esto:</p>
          <pre><code><span class="hljs-selector-class">.caja</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">1000px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;
          }
          
          <span class="hljs-selector-class">.caja</span> <span class="hljs-selector-tag">img</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
          }
          </code></pre><p>Me hago mas gordo todavia 😂:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172066939-96d613c4-07af-4138-b7cc-3132d3045c55.png" alt="object-fit" title="object-fit"></p>
          <p>Bueno, ¿como hacemos para volver a mi normalidad? Bueno, aca es donde entra object-fit: Object fit tiene los siguientes valores: fill, contain, cover, none, scale-down.</p>
          <h3 id="fill">fill</h3>
          <p>Fill es simplemente el valor por defecto de object-fit.</p>
          <h3 id="contain">contain</h3>
          <p>Contain lo que hace es que las resoluciones de la imagen se ajusten al contenedor.</p>
          <pre><code><span class="hljs-selector-class">.caja</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">1000px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;
          }
          
          <span class="hljs-selector-class">.caja</span> <span class="hljs-selector-tag">img</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid blue;
              <span class="hljs-attribute">object-fit</span>: contain;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172067188-ecd1c034-fd78-486e-bd49-441d65e1ee14.png" alt="contain" title="contain"></p>
          <p>Me quede como tiene que ser pero se ajustan las resoluciones a las reales.</p>
          <h3 id="cover">cover</h3>
          <p>Pero, ¿Que pasa si nosotros queremos una galeria con items y necesitamos que si o si ocupe todo ese tamaño? Queremos que el contenedor sea de 1000px por 500px y no hay tu tia, queremos que sea asi o asi, entonces le damos object-fit cover.</p>
          <pre><code><span class="hljs-selector-class">.caja</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">1000px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;
          }
          
          <span class="hljs-selector-class">.caja</span> <span class="hljs-selector-tag">img</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid blue;
              <span class="hljs-attribute">object-fit</span>: cover;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172067323-29a4c377-d5af-4fa3-a083-ccad4c3c58c9.png" alt="cover" title="cover"></p>
          <p>De esta forma, la imagen se ajusta al contenedor y recorta lo que &quot;sobra&quot; para ajustarse al tamaño. Mira, te doy otro ejemplo con una caja cuadrada:</p>
          <pre><code><span class="hljs-selector-class">.caja</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;
          }
          
          <span class="hljs-selector-class">.caja</span> <span class="hljs-selector-tag">img</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid blue;
              <span class="hljs-attribute">object-fit</span>: cover;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172067385-b9155469-8cf6-49cf-b39f-159add8e6598.png" alt="cover" title="cover"></p>
          <p>De esta manera, con una caja cuadrada, se ajusta igual! Increible propiedad.</p>
          <h3 id="none">none</h3>
          <p>None lo que hace es mantener las resoluciones reales de la imagen a pesar de todo. En este caso mi imagen es de 640x800 px:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172067569-d25e7c5b-195e-4f9e-ac64-f184a9e28648.png" alt="resolution" title="resolution"></p>
          <p>Y si hago algo asi:</p>
          <pre><code><span class="hljs-selector-class">.caja</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">800px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;
          }
          
          <span class="hljs-selector-class">.caja</span> <span class="hljs-selector-tag">img</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid blue;
              <span class="hljs-attribute">object-fit</span>: none;
          }
          </code></pre><p>Va a tener las mismas resoluciones que las reales, pero se va a recortar lo que sea excedente, asi:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172067642-d7e5140d-618c-4eab-b3fe-b23b833902f0.png" alt="none" title="none"></p>
          <p>Entonces, la diferencia entre none y cover es que none se queda con las resoluciones originales sin importar nada, mientras que cover hace que sean proporcionales a las originales pero agrandandolas.</p>
          <h3 id="scale-down">scale-down</h3>
          <p>Despues tenemos a scale-down, que lo que hace es analizar, ¿Que es mas chiquito? ¿contain? ¿o none? Si none es mas chiquito, entonces dejo none, si contain es mas chico, entonces dejo contain.</p>
          <p>Imaginemos esta caja:</p>
          <pre><code><span class="hljs-selector-class">.caja</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
          }
          </code></pre><p>Con object-fit none:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172067847-a18a5c1c-f687-4f84-943b-455f5d90bb5a.png" alt="none" title="none"></p>
          <p>Con object-fit contain:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172067873-3d8228c9-7508-4911-ad4a-323c6664d6fb.png" alt="contain" title="contain"></p>
          <p>Y con object-fit scale-down:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172067873-3d8228c9-7508-4911-ad4a-323c6664d6fb.png" alt="scale-down" title="scale down"></p>
          <p>Como pueden ver, en este caso se queda con contain, porque es la imagen mas chiquita, pero en el caso de que hagamos la caja suficientemente grande como para que la imagen contain sea mas grande, va a usar none como object-fit</p>
          <h3 id="object-position">object-position</h3>
          <p>Por ultimo, te voy a tirar un tip de como posicionar la imagen en ciertas situaciones cuando ya tiene la propiedad object fit:</p>
          <pre><code><span class="hljs-selector-class">.caja</span>{
              <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;
          }
          
          <span class="hljs-selector-class">.caja</span> <span class="hljs-selector-tag">img</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid blue;
              <span class="hljs-attribute">object-fit</span>: cover;
          }
          </code></pre><p>Suponete esta situacion, que se veria asi:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172068132-9db8c55e-7d9e-4fe9-a613-16e5df13b5ae.png" alt="object-position" title="object-position"></p>
          <p>Imaginate que quiero que la imagen se ajuste y se posicione del lado izquierdo de mi rostro, ¿Como hacemos? con object-position, el cual tiene cuatro posibles valores: top, bottom, left y right.</p>
          <pre><code><span class="hljs-selector-class">.caja</span> <span class="hljs-selector-tag">img</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid blue;
              <span class="hljs-attribute">object-fit</span>: cover;
              <span class="hljs-attribute">object-position</span>: left;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172068207-add2addc-1042-4fe7-a68e-52be78db800e.png" alt="object-position" title="object-position"></p>
          <p>De esta manera trabajan los cuatro valores, para reposicionar la imagen.</p>
          `
      },
      {
          id:15,
          title:"📲 Responsive design",
          content:`<h2 id="responsive-design-">Responsive design 📲</h2>
          <p>Bueno, lo que vamos a ver ahora es un par de conceptos que son el Responsive design y Mobile first. </p>
          <p>Responsive design lo que hace es trabajar con las distintas resoluciones, lo que hacemos es adaptar nuestra web a varios dispositivos. Voy a esquematizar este concepto:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172068502-6fd21361-23f2-4ea7-ae80-c2c0e712a736.png" alt="responsive-design" title="responsive design"></p>
          <p>Imaginate que tenes esta web, con un header que funciona de barra de navegacion, un contenido principal, cualquier cosa, una barra lateral (aside) con mas items para navegar y un footer con informacion de contacto. ¿Que pasa si se achica la resolucion?</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172068573-733aad26-0c5f-4692-90f5-6567afb5b117.png" alt="responsive-design" title="responsive-design"></p>
          <p>Ahora imaginate que los enlaces y el contenido no entrarian en el achicado header, aside y asi. Por tanto, podemos deducir que no es optimo tener el mismo estilo en una web para desktop (escritorio) que para mobile. ¿Como se puede arreglar?</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172068738-e62cdbd5-facf-4d37-a411-8174908bdfbf.png" alt="responsive-design" title="responsive-design"></p>
          <p>Lo que se puede hacer es ajustar la web a diferentes resoluciones, de esta manera todo el contenido se visualizara correctamente estemos donde estemos, es re importante dar una buena experiencia tanto en desktop como en mobile. Este es el concepto de responsive design.</p>
          <p>Despues tenemos el concepto de mobile first que es lo contrario, es adaptar el contenido de un mobile a un desktop, de resoluciones pequeñas a mas grandes. Es decir, crearlo especialmente para mobile y despues adaptarlo para desktop. </p>
          <p>Ahora, ¿De donde salio esto? Esto salio porque google premia y posiciona mejor a las paginas que tienen esto, mobile first.</p>
          <p>Para trabajar con temas de resolucion se usa algo que no es una propiedad, es una particularidad de css que es @media, que permite detectar la resolucion y adaptar las etiquetas. </p>
          <p>Vamos a probarlo con este ejemplo:</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"seccion-1"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Seccion 1<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Lorem, ipsum... (Mucho texto)<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"seccion-2"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Seccion 2<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Lorem, ipsum... (Mucho texto)<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>y:</p>
          <pre><code><span class="hljs-selector-tag">div</span> <span class="hljs-selector-tag">h2</span> {
              <span class="hljs-attribute">color</span>: red;
          }
          
          <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">display</span>: inline-block;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">45%</span>;
              <span class="hljs-attribute">background-color</span>: grey;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172069101-78e0d0c8-0875-419f-9a10-a8875a5903af.png" alt="responsive-design" title="responsive design"></p>
          <p>Como pueden ver, todo bien en desktop, pero si achico las resoluciones pasa esto:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172069155-ec9eb906-f755-47de-8b59-65b127fd8f76.png" alt="responsive-design" title="responsive design"></p>
          <p>Lo cual no está del todo bien... ¿Como lo arreglamos? Facil, con @media, asi:</p>
          <pre><code><span class="hljs-selector-tag">div</span> <span class="hljs-selector-tag">h2</span> {
              <span class="hljs-attribute">color</span>: red;
          }
          
          <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">display</span>: inline-block;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">45%</span>;
              <span class="hljs-attribute">background-color</span>: grey;
          }
          
          @<span class="hljs-keyword">media</span> (max-width: <span class="hljs-number">800px</span>) {
              <span class="hljs-selector-tag">div</span> {
                  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
              } 
          }
          </code></pre><p>Lo que hace este codigo css es leer todo hasta el @media y ahi se para y se pregunta ¿Tiene esta pantalla menos de 800px de ancho? Si tiene menos de 800px de ancho se ejecuta lo que esta dentro del media, en caso contrario, no. Osea, si tenemos una pantalla de menos de 800px va a sobreescribirse la propiedad width de arriba que dice que el ancho sea del 45% por un ancho de 100%:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172069337-996cd951-8869-4308-bf98-309a5a7b787f.png" alt="responsive-design" title="responsive-design"></p>
          <p>Y si volvemos a desktop:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172069101-78e0d0c8-0875-419f-9a10-a8875a5903af.png" alt="responsive-design" title="responsive design"></p>
          <p>Nuestra web tiene responsive design!</p>
          <p>Mirá este tip que te tiro eh:</p>
          <p>Si tocas f12 en el navegador ingresas a las herramientas del desarrollador, si tocas aca:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172069595-c224ca27-06fc-4f24-87bb-63718216e0bf.png" alt="responsive-design" title="responsive design"></p>
          <p>Vas a tener la visualizacion de tu pagina en distintos dispositivos predeterminados:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172069629-bd9a09cd-cd6d-4304-9b47-39f14b2fd1c0.png" alt="responsive-design" title="responsive design"></p>
          <p>Che! ¿¡pero porque no me sale responsive en el celular!? En nuestro caso, es porque en la etiqueta head de nuestra web no tengo incluida la etiqueta <a href="https://www.w3schools.com/css/css_rwd_viewport.asp">meta viewport.</a></p>
          <p><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</code></p>
          <p>Si la incluimos en el head:</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">link</span>
              <span class="hljs-attr">href</span>=<span class="hljs-string">"https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;700&amp;display=swap"</span>
              <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
              /&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"./estilos.css"</span> /&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
          </code></pre><p>Veremos este cambio:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172069765-229b1800-e92c-404f-8735-87fee189510c.png" alt="responsive-design" title="responsive design"></p>
          <p>Cuando ponemos esta etiqueta, el viewport se ajusta automaticamente a la resolucion donde efectivamente esté.</p>
          `
      },
      {
          id:16,
          title:"📈🥊 Flexbox",
          content:`<h2 id="-flexbox">Flexbox 📈🥊</h2>
          <p>Este tema esta re zarpado y va a cambiar la manera en que haces webs. Hace referencia a cajas flexibles, por eso &quot;flex&quot; + &quot;box&quot;.</p>
          <p>En el pasado las webs se contruian a base de tablas, se maquetaba a base de tablas. Donde todo era una tabla con filas, columnas, celdas, y hasta habia tablas dentro de tablas!. Locuras. Hoy en dia las cosas cambiaron, hoy en dia las cosas se hacen de otras maneras.</p>
          <p>Estas nuevas formas de maquetar son con flex y grid, los cuales son nuevos displays que vamos a ver! Flex cambio completamente en escenario de maquetado de webs, fue una revolucion gigante. Despues aparecio grid y le paso el trapo a flex y la revolucion fue todavia mayor.</p>
          <p>Pero ¿que pasa?, la mejor combinacion es grid+flex. Hay cosas que podemos hacer con flex que con grid no y cosas que podemos hacer con grid que no con flex, entonces se complementan perfectamente.</p>
          <p>Las cajas flex y grid de por si son block, ahora, lo que esta dentro de la caja, las etiquetas hijas se comportan diferente.</p>
          <p>Flexbox tiene varios conceptos que tenemos que entender antes de llevarlos a codigo. Flex necesita de dos cosas: un flex container (un contenedor) y un flex item (un hijo de este contenedor). El container es el que va a contener el o los flex items. Porque, a ver, si le damos por dar flex a un elemento sin hijos, va a comportarse simplemente como un block. Donde vamos a notar los cambios es adentro del contenedor, con los hijos.</p>
          <p>Flexbox tiene dos ejes:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172070736-2cdb8022-4512-4da5-99ca-a22a89274ec5.png" alt="flexbox" title="flexbox"></p>
          <p>Estos ejes poseen direcciones a las que se dirigen los flex items, algo como esto:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172070781-cd8fdc1e-c846-4ece-8d39-b70b314edac7.png" alt="flexbox" title="flexbox"></p>
          <p>Lo que hacemos con CSS, para que te des una idea che, es cambiar el flujo de esto que esta aca. Por defecto, el flujo de los ejes es como en la imagen, es decir, el main es de izquierda a derecha y el cross de arriba a abajo.</p>
          <p>Dale vamos a arrancar con codigo que seguro estas re manija 😂.</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-container"</span>&gt;</span>
              Hola!
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>y...</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">display</span>: flex;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172070996-83fb7a4d-3711-4130-af9e-bd8e8fb9fd2e.png" alt="flexbox" title="flexbox"></p>
          <p>Como pueden ver, no pasó nada inesperado. Esto es porque lo que hicimos es cambiar el display de un block a flex, pero sigue siendo bloque. ¿Que cambio? Bueno suponete que ahora tengo esto:</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-container"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span> Cajita 1 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span> Cajita 2 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>y...</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">display</span>: flex;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
              <span class="hljs-attribute">background-color</span>: brown;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172071120-d04e8526-2f62-4509-bf26-5dd85fe261bb.png" alt="flexbox" title="flexbox"></p>
          <p>Lo que pasa es que los flex-items se colocan uno al lado del otro adaptandose al contenedor, pero la altura siempre es la misma, no hay problemas de altura! Mira:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">display</span>: flex;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">1em</span> <span class="hljs-number">3em</span>;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172071249-9693f44a-2d57-4740-970a-c9cbd29c4e54.png" alt="flexbox" title="flexbox"></p>
          <p>A pesar de agregar un margin y padding mira como lo agarra! esta propiedad es muy zarpada.</p>
          <p>Ahora vamos a ver un ejemplo diferente para entender algo:</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-container"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span> Cajita 1 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span> Lorem ipsum... (mucho texto) <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>Vamos a usar este HTML:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172071332-bc8b6c50-a01a-401b-bcb0-fefdba2345da.png" alt="flexbox" title="flexbox"></p>
          <p>Como podes ver la altura se sigue manteniendo. Sucede que se ajusta el contenido ¿Porqué? para que la altura se mantenga. Esto es algo que pasa con flexbox, que en base al contenido, mantiene la altura.</p>
          <h3 id="flex-direction">Flex direction</h3>
          <p>Mira lo que vamos a hacer, tengo este codigo:</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-container"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>y:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">display</span>: flex;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">background-color</span>: chocolate;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
          }
          </code></pre><p>Obtengo esto:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172071574-1b9a7867-a22a-4fd9-b9b9-1e2efe3b72ee.png" alt="flexbox" title="flexbox"></p>
          <p>Pero.. ¿Que pasa si quiero que las cajas vayan para abajo? Lo que tengo que hacer es cambiar la direccion del main axis, ahora debe pertenecer al eje y, y debemos hacer que apunte de arriba a abajo.</p>
          <p>Esto se hace con la propiedad flex-direction, el cual tiene varios valores, el valor por defecto es row, que hace que el main axis sea de derecha a izquierda, como van las filas. Pero ademas de esta, tenemos column, row-reverse, column-reverse, todas funcionan para lo mismo, cambiar la direccion del main axis.</p>
          <p>Column sirve para que el main axis vaya de arriba hacia abajo, row-reverse hace que el main axis vaya de izquierda a derecha, column-reverse hace que vaya de abajo hacia arriba.</p>
          <p>Voy a hacer un ejemplo con el codigo anterior aplicando flex-direction: column:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">flex-direction</span>: column;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">background-color</span>: chocolate;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172071769-9bb4d41d-fd7f-4bed-ae8c-899777289559.png" alt="flex-direction" title="flex direction"></p>
          <h3 id="flex-wrap">Flex wrap</h3>
          <p>Vamos a usar el mismo html de antes, pero mira estos estilos:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">display</span>: flex;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:first-child</span>{ <span class="hljs-comment">/* Selecciono el primer hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: blueviolet;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:last-child</span>{ <span class="hljs-comment">/* Selecciono el ultimo hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: yellow;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172071909-058e57de-6ec5-4503-80a9-2ade06d2f098.png" alt="flex-wrap" title="flex-wrap"></p>
          <p>Si achico la web asi como muestro, los flex-items se ajustan y esta genial! Pero, suponete que yo no quiero que se ajusten, quiero que se vayan &quot;para abajo&quot; para que conserve su resolucion. Es tan simple como agregar este atributo:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">flex-wrap</span>: wrap;
          }
          </code></pre><p>Flex wrap tiene tres valores: wrap, nowrap y wrap-reverse. Nowrap es el valor por defecto, despues wrap logra algo asi:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172072051-b317dd02-2494-40d1-97a7-863724052e4a.png" alt="flex-wrap" title="flex wrap"></p>
          <p>Flex-wrap: wrap-reverse lo que hace es, en vez de tirar los elementos hacia abajo, los tira para arriba, asi:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172072100-c9f153ec-7e0e-4ed3-a93e-6f9fddd748e7.png" alt="flex-wrap-reverse" title="flex wrap reverse"></p>
          <h3 id="alineacion-con-flex">Alineacion con flex</h3>
          <p>Me encanta este tema. Suponete que tenemos unas cajas como estas:</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-container"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>Daria algo asi:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172072405-1ae1e3c8-010f-4399-9b1f-6f2664cbe69c.png" alt="flex-align" title="flex align"></p>
          <p>Ahora imaginate que queres centrar esas cajas. Podemos usar justify-content. Esta propiedad se aplica al flex container y tiene distintos valores:</p>
          <p>Con center:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">justify-content</span>: center;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172072644-662d87e4-d2d3-4ad2-8b2a-03c808578e54.png" alt="justify-content" title="justify content"></p>
          <p>Con space-around:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172072769-2eee2401-8850-4a0f-a10f-0e498d824aa0.png" alt="justify-content" title="justify content"></p>
          <p>Con space-between:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172072738-b2882c05-a27e-40a1-97e1-4ed8d67e7cb7.png" alt="justify-content" title="justify content"></p>
          <p>Con space-evenly:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172072857-7ec8eb5f-8123-407d-8363-ffb5f3309daf.png" alt="justify-content" title="justify content"></p>
          <p>Con flex-end:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172072904-f5a42ac8-8619-4ee0-a5ef-304963ad11d4.png" alt="justify-content" title="justify content"></p>
          <p>Y flex-start es la propiedad por defecto.</p>
          <p>Bueno, lo que hicimos hasta ahora es nada mas alinear en el main axis. ¿Como alineamos en el cross axis? Bueno depende, tenemos dos propiedades para hacer esto, align-items (Esta es para cuando hay solo una linea de flex-items) y align-content cuando hay mas de una. Primero lo primero, voy a darle un height a el flex-container para que ocupe toda la pantalla y podamos ver los cambios:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">justify-content</span>: space-evenly;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:first-child</span>{ <span class="hljs-comment">/* Selecciono el primer hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: blueviolet;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:last-child</span>{ <span class="hljs-comment">/* Selecciono el ultimo hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: yellow;
          }
          </code></pre><p>Empecemos, esta es la propiedad que viene por defecto con align-items:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">justify-content</span>: space-evenly;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;
              <span class="hljs-attribute">align-items</span>: stretch;
          }
          </code></pre><p>Despues tenemos mas valores, como: center, flex-end, flex-start. Vamos a ver como se veria si le doy un align-items con un valor center:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172204976-69031512-0df3-4ebc-8b71-b6b6237cb34c.png" alt="align-items" title="align-items"></p>
          <p>Como podes ver, basicamente se centra en el cross-axis.</p>
          <p>Si le damos un flex-end pasa algo como esto:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172205295-bc4c64bc-0ec7-464d-acd8-0c0b0c8b5b62.png" alt="align-items" title="align-items"></p>
          <p>Es decir, nos lo pone al final.</p>
          <p>Finalmente si le damos un flex-start pasa esto:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172205693-04e59f5a-db1a-4a75-a0f0-f349e666961c.png" alt="align-items" title="align-items"></p>
          <p>Y vos me diras, &quot;eu, pero no cambia nada respecto a stretch&quot;, pero si cambia, para visualizarlo vamos a hacer esto:</p>
          <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-container"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>caja 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>caja 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>caja 3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
          </code></pre><p>y le sacamos el height a las cajas:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">justify-content</span>: space-evenly;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;
              <span class="hljs-attribute">align-items</span>: flex-start;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:first-child</span>{ <span class="hljs-comment">/* Selecciono el primer hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: blueviolet;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:last-child</span>{ <span class="hljs-comment">/* Selecciono el ultimo hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: yellow;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172206126-11b68eca-3cc8-4641-8e15-707cbd3e79a8.png" alt="align-items" title="align-items"></p>
          <p>Esto pasa, pero si le ponemos stretch nuevamente al align-items pasa esto, mira:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172206299-beab96b3-22af-4cf2-938a-65eac3af48c9.png" alt="align-items" title="align-items"></p>
          <p>Se nos estira por todo el cross-axis. Entonces, lo que hacemos para evitar esto es poner flex-start, de esta forma se ajusta la caja flexible a su contenido. </p>
          <p>¿Y que pasa con el align-content? Vamos a ver. Voy a agregar un flex-wrap asi las cajas bajan y generan mas lineas.</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">justify-content</span>: space-evenly;
              <span class="hljs-attribute">align-items</span>: flex-start;
              <span class="hljs-attribute">flex-wrap</span>: wrap;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:first-child</span>{ <span class="hljs-comment">/* Selecciono el primer hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: blueviolet;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:last-child</span>{ <span class="hljs-comment">/* Selecciono el ultimo hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: yellow;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172207256-bff3b16a-ba5c-4be1-b984-c63b6df46e32.png" alt="align-content" title="align-content"></p>
          <p>Como podes ver (agregue unas cajitas mas) cuando hay mas de una linea, funcionar sigue funcionando, se centran automaticamente, pero ese no es el efecto que queremos lograr. Voy a darle un height a las cajas para que lo apreciemos mejor y en vez de poner align-items voy a poner align-content:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">justify-content</span>: space-evenly;
              <span class="hljs-attribute">align-content</span>: flex-start;
              <span class="hljs-attribute">flex-wrap</span>: wrap;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172207939-b1d48ba3-5d16-4db5-aa42-e3b67ab3de0e.png" alt="align-content" title="align-content"></p>
          <p>Y asi de la misma manera funciona el flex-end y el center, centrando el conjunto de lineas de flex-items o poniendolos al final.</p>
          <p>Bien! a lo largo de esta explicacion de flexbox hemos estado trabajando principalmente con el flex-container, con las propiedades que podemos darle a el, es decir, propiedades reservadas para el flex-container. Ahora vamos a empezar a ver propiedades reservadas para los flex-items, vamos!.</p>
          <p>Lo primero que voy a hacer es modificar el codigo un poco y acondicionarlo para mostrar lo que quiero mostrar:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">justify-content</span>: space-evenly;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:first-child</span>{ <span class="hljs-comment">/* Selecciono el primer hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: blueviolet;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:last-child</span>{ <span class="hljs-comment">/* Selecciono el ultimo hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: yellow;
          }
          </code></pre><p>Y en HTML voy a dejar unicamente cuatro cajas, nos quedamos con este resultado:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172209652-94b61990-edd5-48fa-ae2a-14d7a6295018.png" alt="align-self" title="align-self"></p>
          <p>Imaginate que queremos bajar unicamente la caja amarilla, ¿Como lo hacemos? facil, primero seleccionamos el flex item de la caja amarilla, el cual ya tenemos seleccionado, aca, mira:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:last-child</span>{ <span class="hljs-comment">/* Selecciono el ultimo hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: yellow;
          }
          </code></pre><p>Y le vamos a dar un align-self (acordate que esto es alineacion en el cross axis), por defecto como sabemos esta en stretch, pero le puedo dar los mismos valores que a align-items, mirá, te voy a mostrar un ejemplo con align-self: center:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:last-child</span>{ <span class="hljs-comment">/* Selecciono el ultimo hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: yellow;
              <span class="hljs-attribute">align-self</span>: center;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172210318-17b8aa8c-fb3b-4a1e-a140-158a82f97686.png" alt="align-self" title="align-self"></p>
          <p>Te invito a que intentes darle los distintos valores que le podes dar a align-self, juga con esta propiedad!</p>
          <h3 id="flex-grow">Flex grow</h3>
          <p>Flex grow, como dije, pertenece a propiedades de flex-items. Lo que hace es agarrar el espacio sobrante y lo reparte entre las cajas que quedan. Vamos a ver, voy a dejar tres cajas y voy a darles este estilo:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;
              <span class="hljs-attribute">display</span>: flex;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:first-child</span>{ <span class="hljs-comment">/* Selecciono el primer hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: blueviolet;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:last-child</span>{ <span class="hljs-comment">/* Selecciono el ultimo hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: yellow;
          }
          </code></pre><p>Nada nuevo ¿no?</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172212351-1788d048-f8fc-4230-8b83-820b4ff667b2.png" alt="flex-grow" title="flex-grow"></p>
          <p>Y mira que pasa si hago este cambio:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">flex-grow</span>: <span class="hljs-number">1</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172212307-07714374-5048-465f-a411-b1d646b9e951.png" alt="flex-grow" title="flex-grow"></p>
          <p>Esta buenisimo! Lo que hace es bueno, ¿cuantas cajas hay? ¿3? bueno, a cada una dales un pedacito del espacio total. Por ejemplo, si el espacio que queda es de 600px, dale 200px a cada caja.</p>
          <p>Pero... ¿Esto se puede aplicar a flex-items de forma individual? Si! Mira, suponete que quiero darle el espacio sobrande a la caja violeta, entonces agarro la caja violeta y le doy el flex-grow:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;
              <span class="hljs-attribute">display</span>: flex;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:first-child</span>{ <span class="hljs-comment">/* Selecciono el primer hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: blueviolet;
              <span class="hljs-attribute">flex-grow</span>: <span class="hljs-number">1</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:last-child</span>{ <span class="hljs-comment">/* Selecciono el ultimo hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: yellow;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172213217-661f5226-f15f-4442-b88f-c60013c65c49.png" alt="flex-grow" title="flex-grow"></p>
          <p>En este caso, si sobraran 600px, se los damos todos a la violeta.</p>
          <p>Tambien puedo darle un pedazo al amarillo:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;
              <span class="hljs-attribute">display</span>: flex;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:first-child</span>{ <span class="hljs-comment">/* Selecciono el primer hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: blueviolet;
              <span class="hljs-attribute">flex-grow</span>: <span class="hljs-number">1</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:last-child</span>{ <span class="hljs-comment">/* Selecciono el ultimo hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: yellow;
              <span class="hljs-attribute">flex-grow</span>: <span class="hljs-number">1</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172214084-f27d6d9c-5044-49a0-a0da-095490c9baa7.png" alt="flex-grow" title="flex grow"></p>
          <p>¿Y que pasa si le doy un flex-grow 2 a el primer hijo?</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:first-child</span>{ <span class="hljs-comment">/* Selecciono el primer hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: blueviolet;
              <span class="hljs-attribute">flex-grow</span>: <span class="hljs-number">2</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172214638-2f467b52-37b2-47a9-9809-7fc9217dcccc.png" alt="flex-grow" title="flex-grow"></p>
          <p>Ahora el espacio que sobro se va a dividir en tres y van a ir dos partes para el primer hijo (violeta) y una para el ultimo hijo (amarillo). En otras palabras, 1/3 del excedente para el ultimo y 2/3 para el primero.</p>
          <h3 id="flex-shrink">Flex shrink</h3>
          <p>Esta propiedad sirve para administrar cuanto espacio del main axis &quot;cede&quot; cada flex-item. Suponte que tenes un contenedor de 600px de ancho y tres flex item de 300px de ancho, es decir, que en total tienen un ancho de 900px, por tanto, a la hora de colocarse dentro del contenedor de 600px van a tener que ajustarse cediendo entre las tres 300px, que es lo que les falta. Ahora vos me diras, facil, se les quita 100px a cada caja y quedan entran las tres cajas con un ancho de 200px, si, pero esto puede modificarse.</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172230681-bddea15c-f665-490d-bbc7-17f0838f5078.png" alt="flex-shrink" title="flex shrink"></p>
          <p>Con flex shrink puedo modificar cuanto cede una caja a la hora de ajustarse a su contenedor, por ejemplo, vamos a hacer que la caja violeta ceda mas ancho a la hora de ajustarse:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span>{
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;
              <span class="hljs-attribute">display</span>: flex;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span> {
              <span class="hljs-attribute">background-color</span>: brown;
              <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">width</span>: <span class="hljs-number">400px</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:first-child</span>{ <span class="hljs-comment">/* Selecciono el primer hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: blueviolet;
              <span class="hljs-attribute">flex-shrink</span>: <span class="hljs-number">2</span>;
          }
          
          <span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:last-child</span>{ <span class="hljs-comment">/* Selecciono el ultimo hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: yellow;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172230996-9dd578dd-3039-4541-b549-5366078790b2.png" alt="flex-shrink" title="flex shrink"></p>
          <p>Como pueden ver, a la hora de achicar el ancho, el que mas cede ancho es la caja violeta, eso es simplemente el flex shrink, la mejor forma de entender flex shrink es agarrar flex shrink y hacer pruebas y intentar cosas con esta propiedad. A medida que aumenta el numero de flex shrink, mas cede esa caja.</p>
          <p>Ademas, como podemos hacer que las cajas cedan espacio, podemos hacer que una caja ceda menos, el valor por defecto de flex-shrink es 1, por tanto, si damos un valor menor a 1, estara entregando menos. Mira lo que pasa si le doy flex-shrink 0:</p>
          <pre><code><span class="hljs-selector-class">.flex-container</span> <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:first-child</span>{ <span class="hljs-comment">/* Selecciono el primer hijo de .flex-container */</span>
              <span class="hljs-attribute">background-color</span>: blueviolet;
              <span class="hljs-attribute">flex-shrink</span>: <span class="hljs-number">0</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172231614-c3a8718b-0f9f-4f79-bc48-e9911dbbd707.png" alt="flex-shrink" title="flex-shrink"></p>
          <p>Fijate que egoista la caja violeta que no cede nada de su ancho, sigue teniendo los 400px de ancho que le di.</p>
          `
      },
      {
          id:17,
          title:"📅 Grid",
          content:`<h2 id="grid-">Grid 📅</h2>
          <p>Para arrancar a trabajar con grid tenemos que revisar varios conceptos antes de arrancar. Buen, pero, para arrancar vamos a ver que es grid. Grid es una forma en la que se pueden maquetar las webs, al igual que flex. Es un nuevo display que tenemos. Lo que hacemos es trabajar el layout a traves de grillas (&quot;grid&quot;-&quot;grillas&quot;). Vamos a arrancar, ahora si, a ver conceptos referidos a grid:</p>
          <h3 id="conceptos-basicos-de-grid">Conceptos basicos de grid</h3>
          <p>Las grillas en CSS funcionan a traves de celdas, columnas, filas, tracks, etc. Para empezar veamos el primer concepto:</p>
          <p><strong>Grid container</strong>, grid container es tal cual el flex container, es el que contiene nuestra grilla, en este caso, algo como esto:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172475304-88dbfda5-32f7-4307-bb03-0b4a98850a41.png" alt="grid-container" title="grid-container"></p>
          <p class="img-container">Lo mismo que pasa con flex, pasa con grid, cuando le damos grid a una etiqueta, le estamos cambiando la estructura, el comportamiento de los hijos de esa etiqueta, transformandose asi en <strong>grid items</strong>:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/172476298-ad8b13f4-aabc-4c0a-b4ab-26c06a2acc24.png" alt="grid-item" title="grid-item"></p>
          <p>Hay que entender que, aunque haya 15 celdas en una grilla (<strong>grid-cells</strong>), por ejemplo, no necesariamente hay 15 grid items en esa grilla. Por ejemplo, en el ejemplo de la imagen, vos te imaginaras que hay una sola celda, ya que el div tiene un solo elemento, sin embargo, no necesariamente. Ese div podria tener 15 celdas independientemente de sus elementos.</p>
          <p>Las <strong>grid-cells</strong> son las celdas de nuestra grilla:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173111011-0375b88d-3c1c-4ec2-9d05-77e5ddfdabf8.png" alt="grid-cells" title="grid-cells"></p>
          <p>Esto es una grid-cell de nuestra grilla, por ejemplo. En total, la grilla presentada posee 9 grid-cells.</p>
          <p>Despues de las grid-cells, existen los <strong>grid-tracks</strong>, pero estos pueden ser en forma de columna o en forma de fila. Empecemos con los tracks en fila, son algo como esto:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173111971-61e64b23-0bfb-4343-8aef-5ae2bbbcaa0a.png" alt="grid-trackRow" title="grid-track row"></p>
          <p>Basicamente, son una fila. Despues tenemos los grid-tracks column que son como una columna, son algo asi:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173112226-3630a33f-152c-446e-9ca6-0690188ab999.png" alt="grid-trackColumn" title="grid-track column"></p>
          <p>Despues de los tracks estan los <strong>grid-areas</strong> los cuales no vienen por defecto en una grilla que nosotros creemos, estos deben ser definidos por notrotros y a su vez deben ser consecutivas:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173113501-6a063440-052d-4812-8bd5-daca2d026d56.png" alt="grid-area" title="grid-area"></p>
          <p>Esto seria un grid-area que puede ser definido, sin embargo, hay otras que no pueden serlo, por ejemplo, un grid-area en forma de cruz, de ele, etc. Los grid-area deben ser consecutivos, por ejemplo, este seria un uso erroneo de grid-area:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173113830-a31bbd46-88e4-4731-ae26-52fa057b06f5.png" alt="grid-area" title="grid-area"></p>
          <p>El final y ultimo concepto de grid son las <strong>grid-lines</strong>. Las lines son las lineas divisorias entre las columnas y las filas, por lo tanto, hay dos tipos de grid-lines, las que dividen columnas y las que dividen filas. En el caso de nuestro ejemplo anterior, nuestra grilla posee 4 grid lines column y 4 grid lines row, mira:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173115172-01a109a3-cb8b-4bc4-8bdf-be6bc2b2c825.png" alt="grid-lines" title="grid-lines"></p>
          <h3 id="primeros-pasos-con-grid">Primeros pasos con grid</h3>
          <p>Vamos a arrancar a meter codigo grid! lee:</p>
          <pre><code>&lt;body&gt;
              &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-container"</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">1</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">2</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">3</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">4</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">5</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">6</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">7</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">8</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">9</span>&lt;/<span class="hljs-keyword">div</span>&gt;
              &lt;/<span class="hljs-keyword">div</span>&gt;
          &lt;/body&gt;
          </code></pre><p>Y mis estilos queridos:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">display</span>: grid;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173116437-ecf99ac2-1e2b-4bf9-b6e8-096e7bc9d63c.png" alt="displayGrid" title="grid"></p>
          <p>Bueno, como veran, aparentemente no hay ningun cambio, de hecho, no lo hay. Vamos a ver, cuando damos un display grid, nosotros lo que queremos hacer es crear una grilla donde haya columnas y filas, sin embargo, grid, por defecto, tiene una unica columna y una unica fila.</p>
          <p>Para definir la cantidad de columnas y filas en una grilla, se le aplican las siguientes propiedades al grid-container:</p>
          <p><code>grid-template-columns</code></p>
          <p>y</p>
          <p><code>grid-template-rows</code></p>
          <p>Voy a suponer en este ejemplo que queremos tener una grilla tal como la del ejemplo, es decir, de tres filas y tres columnas.</p>
          <p>Ahora voy a definir que haya tres filas de 100px cada una, de la siguiente manera:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173118202-6da322af-367f-4ba5-8d80-aa3dc9c455d6.png" alt="grid-template-rows" title="grid-template-rows"></p>
          <p>Y vos me vas a decir... &#39;No, para. Hay nueve filas.&#39; Bueno, no. Dentro del grid container tenemos 3 filas, el resto es grid <strong>implicito</strong>, es grid que no estamos programando. Pero para que esto quede bien, vamos a agregarle las columnas de 100px cada una tambien.</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173118703-d4119637-24b4-426d-a4f5-d7286a38d692.png" alt="grid-template-columns" title="grid-template-columns"></p>
          <p>De esta manera mira que hermoso lo que se nos armo.</p>
          <h3 id="unidades-especiales-en-grid">Unidades especiales en grid</h3>
          <p>Cuando trabajamos con grid de la manera que lo hicimos con la anterior grilla, nos queda una grilla muerta que si cambia la resolucion se mantiene como esta, no es responsiva. Sin embargo, hay un valor: fr, que dan vida a tus grillas.</p>
          <p>Arranquemos con fr. Fr es algo parecido a lo que llamabamos flex-grow, agarra las columnas, por ejemplo, y todo el espacio que sobre se divide entre las columnas que tengan fr como unidad:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">1</span>fr;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173119633-4032eb57-2d73-4913-b67c-2d1600393737.png" alt="grid-fr" title="fr"></p>
          <p>Acordate que, al igual que en flex-grow, aca tambien podemos dividir el espacio con un valor diferente a 1, por ejemplo, si le doy a la segunda columna un fr de valor 1 y a la ultima un fr de valor 2, se va a dar 1/3 del espacio sobrante a la segunda columna y 2/3 del espacio sobrante a la ultima columna:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">100px</span> <span class="hljs-number">1</span>fr <span class="hljs-number">2</span>fr;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173120367-f51989d0-ff0f-4678-84cd-897ba6a85277.png" alt="grid-fr" title="fr"></p>
          <h3 id="grid-gap">grid gap</h3>
          <p>Estas propiedades se le aplican al grid container. Son algo asi como un margin pero entre celdas.</p>
          <p>Si queremos separar las filas, usamos &#39;grid-row-gap&#39;, de esta manera:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">grid-row-gap</span>: <span class="hljs-number">10px</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173121237-d1f86a52-c410-4b18-bef0-bba39a0f4237.png" alt="grid-row-gap" title="grid-row-gap"></p>
          <p>Si queremos separar las columnas, usamos &#39;grid-column-gap&#39;, de esta manera:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">grid-column-gap</span>: <span class="hljs-number">10px</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173121624-8c917ff6-045f-4806-b0f1-e6048bd61ce7.png" alt="grid-column-gap" title="grid-column-gap"></p>
          <h3 id="grid-row-y-grid-column">grid row y grid column</h3>
          <p>Agarremos este codigo:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173118703-d4119637-24b4-426d-a4f5-d7286a38d692.png" alt="grid row, column" title="grid row column"></p>
          <p>Ahora imaginate que agarro la cajita numero 1 y quiero que ocupe en su fila lo que ocupa la cajita 1 y la 2, osea, el doble de su ancho. Esto se hace asi (seleccionando a la caja que queremos afectar):</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span><span class="hljs-selector-pseudo">:first-child</span> { <span class="hljs-comment">/*Selecciono el primer hijo de .grid-container*/</span>
              <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#999</span>;
              <span class="hljs-attribute">grid-column</span>: <span class="hljs-number">1</span> / <span class="hljs-number">3</span>;
          }
          </code></pre><p>Basicamente, lo que hice fue decirle con la propiedad &#39;grid-column&#39; cuanto debe iniciar y finalizar la celda. En el primer numero le dije en que grid-line column debia iniciar y en el segundo le dije en cual debia acabar:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173129628-4a16a7f1-ee88-4abf-812c-3c48209597a6.png" alt="grid-column" title="grid column"></p>
          <p>Si te fijas, ademas de pasar lo que te comente, tambien se creo una nueva fila donde se coloco el 9. Digamos que el 1 empujo al 2, el 2 al 3 y asi hasta que el 8 empujo al 9. </p>
          <p>Ahora imaginate que tambien, ademas de ocupar dos &#39;cuadraditos&#39;(celdas) de ancho, quiero que ocupe dos &#39;cuadraditos&#39;(celdas) de alto:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span><span class="hljs-selector-pseudo">:first-child</span> { <span class="hljs-comment">/*Selecciono el primer hijo de .grid-container*/</span>
              <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#999</span>;
              <span class="hljs-attribute">grid-column</span>: <span class="hljs-number">1</span> / <span class="hljs-number">3</span>;
              <span class="hljs-attribute">grid-row</span>: <span class="hljs-number">1</span> / <span class="hljs-number">3</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173130303-0831216a-76b7-44e5-82aa-e2eb9b05fd9b.png" alt="grid-row" title="grid-row"></p>
          <h3 id="repeat-">repeat()</h3>
          <p>Ahora vamos a ver de que otra forma podemos crear columnas. Porque ahora nosotros estuvimos creando columnas que son repetitivas (100px 100px 100px), nosotros podemos abreviar esto. Muy facil, usamos la funcion repeat(), la cual recibe dos parametros (deberiamos ver lo que es en programacion), lo que significa que debe recibir dos datos, en este caso &#39;cantidad&#39;y &#39;magnitud&#39;. En nuestro caso, para reemplazar exactamente esto:</p>
          <p><code>grid-template-rows: 100px 100px 100px;</code></p>
          <p>Deberiamos usar el siguiente codigo:</p>
          <p><code>grid-template-rows: repeat(3,100px);</code></p>
          <p>basicamente, por si no lo entendiste, le estamos diciendo que repita 100px tres veces.</p>
          <p>Ahora imaginate que quiero tener algo como esto:</p>
          <p><code>grid-template-rows: 100px 1fr 100px 1fr;</code></p>
          <p>Esto se puede lograr igualmente con repeat, de esta manera:</p>
          <p><code>grid-template-rows: repeat(2, 100px 1fr)</code></p>
          <p>Como podes ver, cualquie cosa que ponga como segundo parametro se va a repetir, no hay chance.</p>
          <h3 id="grid-implicito-y-explicito">grid implicito y explicito</h3>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173133980-61a30746-7263-450d-a72a-82b9178be134.png" alt="grid implicito" title="grid implicito"></p>
          <p>Suponete que nosotros definimos una grilla con tres filas y tres columnas. Ahora suponete que tenes un item de mas y ese item se te pone como esta en la foto, este item va a pertenecer al grid implicito y va a tener determinadas cualidades.</p>
          <p>El grid explicito es el que venimos programando hasta ahora, el que pertenece al grid que nosotros programamos.</p>
          <p>Vamos a ir a codigo:</p>
          <pre><code>&lt;body&gt;
              &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-container"</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">1</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">2</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">3</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">4</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">5</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">6</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">7</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">8</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">9</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">10</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">11</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">12</span>&lt;/<span class="hljs-keyword">div</span>&gt;
              &lt;/<span class="hljs-keyword">div</span>&gt;
          &lt;/body&gt;
          </code></pre><p>y:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173135019-06d3c2e9-8f78-4866-887b-5b21324f19a0.png" alt="grid-implicito" title="grid implicito"></p>
          <p>Como pueden ver, nosotros programamos tres columnas y tres celdas, sin embargo, los elementos 10, 11 y 12 estan de mas, no forman parte de lo que queriamos hacer inicialmente.</p>
          <p>Tambien podriamos verlo con un ejemplo como este:</p>
          <blockquote>
          <p>En HTML agregue un total de 21 cajas.</p>
          </blockquote>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(6, 100px);
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173135597-7675eb34-0807-4890-b3a2-dbe245b01e86.png" alt="grid-implicito" title="grid implicito"></p>
          <p>Como podes ver, aca ademas de tener un excedente de celdas, tambien tengo un hueco que no se llena en la esquina inferior derecha.</p>
          <p>Para trabajar con este tipo de grid se agregan tres propiedades nuevas. </p>
          <p>Primero tenemos el grid-auto-rows y grid-auto-columns que funciona exactamente igual que el grid-template-rows y grid-template-columns respectivamente, nada mas que se usa para manejar el tema del grid implicito. Y grid-auto-flow, que ahora vamos a ver bien que es.</p>
          <p>Empecemos! lo que voy a hacer es agregar esta propiedad al codigo:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(6, 100px);
              <span class="hljs-attribute">grid-auto-columns</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
          }
          </code></pre><p>Ponelo en el codigo y fijate que pasa. Spoiler: no pasa nada, no hay ningun cambio. Esto pasa porque por defecto el excedente de un grid container se agrega como una fila, no como una columna. Lo que quiero que comprendas, es que, entonces para hacer esto, lo primero que tengo que hacer es configurar las filas implicitas, asi:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(6, 100px);
              <span class="hljs-attribute">grid-auto-rows</span>: <span class="hljs-number">150px</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p>Lo primero que vas a decirme es &#39;Che Felipe, pone el repeat&#39;, pero no, porque no estamos definiendo cuanto va a medir la fila que vamos a crear, sino las que se salgan del grid explicito:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173137275-d568a47f-4fdb-4460-924f-27691ed2761b.png" alt="grid-implicito" title="grid implicito"></p>
          <p>Ahora imaginate que quiero que se comporte como una columna y no como una fila pedorra, lo hago asi, graba:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(6, 100px);
              <span class="hljs-attribute">grid-auto-rows</span>: <span class="hljs-number">150px</span>;
              <span class="hljs-attribute">grid-auto-flow</span>: column;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p>Con el queridisimo auto-flow.</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173137649-47e5fbd0-a156-437c-8674-b76ad54e8eac.png" alt="grid-auto-flow" title="grid-auto-flow"></p>
          <p>Ahora si, vamos a configurar las columnas:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(6, 100px);
              <span class="hljs-attribute">grid-auto-columns</span>: <span class="hljs-number">150px</span>;
              <span class="hljs-attribute">grid-auto-flow</span>: column;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173137806-d32e84cc-0a75-4e01-9c4a-033b6ac99067.png" alt="grid-implicito" title="grid implicito"></p>
          <h3 id="grid-dinamico">grid dinamico</h3>
          <p>Arranquemos con el min-content y el max-content. Vamos a poner un codigo:</p>
          <pre><code>&lt;body&gt;
              &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-container"</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">1</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">2</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;Hola! Soy un programador&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">4</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">5</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">6</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">7</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">8</span>&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item"</span>&gt;<span class="hljs-number">9</span>&lt;/<span class="hljs-keyword">div</span>&gt;
              &lt;/<span class="hljs-keyword">div</span>&gt;
          &lt;/body&gt;
          </code></pre><p>y:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, 300px);
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173140511-6b937ca4-afb3-414b-9637-25770bcb035b.png" alt="grid-dinamico" title="grid dinamico"></p>
          <p>Mira, ahora voy a hacer que las columnas se ajusten al contenido minimo que tenga la celda, asi:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, min-content);
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173140792-a6d67730-7534-43d4-8ce0-3692616abf57.png" alt="grid-min-content" title="grid min-content"></p>
          <p>Ves, ahora las columnas que tenemos ahi van a valer el minimo contenido que tenga la celda. Y si...</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, max-content);
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173141053-be28e344-86b7-4502-b7e0-7c9fe8dee44f.png" alt="grid-max-content" title="grid-max-content"></p>
          <p>Ahora vamos a trabajar con la funcion minmax(). Esta funcion sirve para definir cuanto de minimo tiene que medir algo y cuanto de maximo:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, minmax(100px,300px));
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p>De esta manera, las columnas tendran como minimo 100px, mas chiquitas que eso imposible, y tendran 300px como maximo, no se estiraran mas. Te invito a que hagas la prueba.</p>
          <p>Y esto nos va a venir bien para algo:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, minmax(min-content,300px));
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p>De esta manera, no se va a achicar mas de lo que el contenido permita.</p>
          <p>Ahora vamos a ver la propiedad auto-fill que lo que hace es rellenar, en el caso del ejemplo que voy a dar, las columnas.</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fill, minmax(100px,1fr));
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p>Como podes ver le agregue un borde al container para que se aprecie mejor y le dije a grid-template-columns que repita tantas columnas como pueda, es decir, lo que hace grid-template-columns es preguntarse si puede entrar otra celda que cumpla el minimo y maximo que estas pueden tener:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173143525-f5dd8bb8-7ce3-4cb2-8ca5-01c0d4df6c03.png" alt="grid-auto-fill" title="auto-fill"></p>
          <p>Ahora mismo todos los elementos se me hacen columna porque si los 9 elementos miden 100px siguen cabiendo en una sola fila. Ahhh pero si le damos un minimo mas alto ni ahi, mira:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fill, minmax(300px,1fr));
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173143018-08e2af3f-96ad-4497-9814-158d53dabfd4.png" alt="grid-auto-fill" title="auto-fill"></p>
          <p>Che, mira lo que pasa cuando hacemos esto:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fill, minmax(100px,1fr));
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173143525-f5dd8bb8-7ce3-4cb2-8ca5-01c0d4df6c03.png" alt="grid-auto-fit" title="auto-fit"></p>
          <p>Como podes ver, pasa lo que ya explique, pero si quiero hacer que se escale al ancho del grid-container, se hace asi:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fit, minmax(100px,1fr));
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173143770-7d11e465-74a1-4586-9bb9-e2a85176f269.png" alt="grid-auto-fit" title="auto-fit"></p>
          <p>Esto lo logre usando, en vez de, auto-fill, auto-fit.</p>
          <h3 id="alineacion-y-control-de-flujo-con-grid">Alineacion y control de flujo con grid</h3>
          <p>Para empezar vamos a ver que onda la diferencia que hay entre flex y grid. Como sabemos, con flex nosotros alineabamos en el main y cross axis. Aca en grid tenemos el alineamiento general de todos los items (se aplica al contenedor), el alineamiento de una columna o fila en particular (se aplica al contenedor) y el de una celda particular (se aplica a un elemento).</p>
          <p>Como esto es dificil de explicar solo en palabras, vamos a ponerlo en practica.</p>
          <blockquote>
          <p>Tenemos 9 cajas en HTML!</p>
          </blockquote>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, minmax(120px,1fr));
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.5em</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173145536-17d8df0c-239c-4d8f-9296-8069a340938b.png" alt="grid-align" title="grid Align"></p>
          <p>Por ahora nada raro, mira si hacemos esto:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, minmax(120px,1fr));
              <span class="hljs-attribute">justify-items</span>: center;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.5em</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173145699-afdbcf90-8fbd-4a33-b4b7-17bd484169c1.png" alt="grid-justify-items" title="grid justify-items"></p>
          <p>Tambien podemos darle el valor start:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173145914-5c0dc367-97a0-4f92-ac31-560ab15e7791.png" alt="grid-justify-items" title="grid justify-content"></p>
          <p>Y tenemos end que es lo mismo nada mas que al final, te invito a intentarlo.</p>
          <p>Ahora bien, ademas de centrarlo hacia los costados, lo podemos centrar verticalmente con align-items:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, minmax(120px,1fr));
              <span class="hljs-attribute">justify-items</span>: center;
              <span class="hljs-attribute">align-items</span>: center;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.5em</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173146257-0e7f2a0d-ea62-4828-a07b-ea1cca5ff544.png" alt="grid-align-items" title="align-items"></p>
          <p>Como podes ver, ahora tenemos todo centrado en los dos ejes, tambien funciona el start y el end al igual que en justify items.</p>
          <p>Los valores por defecto de estas dos propiedades es stretch. Mira, vamos a ver dos casos:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, minmax(120px,1fr));
              <span class="hljs-attribute">justify-items</span>: stretch;
              <span class="hljs-attribute">align-items</span>: center;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.5em</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p>Para que lo veas primero te voy a mostrar como se veria si pongo solo el justify-items como stretch:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173146569-82be37a1-26d0-4851-ac93-7281fb5b366a.png" alt="stretch" title="stretch"></p>
          <p>Y despues el align-items:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, minmax(120px,1fr));
              <span class="hljs-attribute">justify-items</span>: center;
              <span class="hljs-attribute">align-items</span>: stretch;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.5em</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173146711-1784abc7-d4b6-47b1-9804-8b51ddec0456.png" alt="stretch" title="stretch"></p>
          <p>Ahora despues de ver como alinear todos los elementos vamos a hablar de otra cosa: justify-content y align-content. </p>
          <p>Vamos a arrancar con el justify-content, primero que nada vamos a arrancar con este codigo:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, minmax(120px,300px));
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.5em</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p>Como podes ver, lo unico que hice es sacarle el fr y poner una medida fija para que se pueda apreciar mejor:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173147227-5fa1a01a-08ac-4f8a-8cc4-211dd2833511.png" alt="justify-content" title="justify-content"></p>
          <p>Ahora vamos a centrar de esta manera el contenido, mira:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/*Agregue margin pa' que se vea mejor*/</span>
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 200px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, minmax(120px,300px));
              <span class="hljs-attribute">justify-content</span>: center;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.5em</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173147423-547f1b4a-614a-490b-a424-0434047537e7.png" alt="justify-content" title="justify-content"></p>
          <p>Como ves, se me ajusto el contenido al centro, tambien con el valor end se podria colocar al final, te invito a probarlo.</p>
          <p>Ahora vamos a alinearlo en el eje y, de la siguiente manera:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">8vh</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">height</span>: <span class="hljs-number">80vh</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.5em</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p>Primero voy a agrandar y hacer mas grande el contenedor de los items para que se vea bien:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173147952-0d415620-7ca9-4e4b-9757-2c2ef10678f8.png" alt="align-content" title="align-content"></p>
          <p>Ahora si lo vamos a centrar en el eje y:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">8vh</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, 100px);
              <span class="hljs-attribute">height</span>: <span class="hljs-number">80vh</span>;
              <span class="hljs-attribute">align-content</span>: center;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.5em</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173148070-0bffbfb0-40c3-4174-ba6e-05a3112d3fe1.png" alt="align-content" title="align-content"></p>
          <p>Obviamente como te digo siempre, proba ponerle el end, se va a poner al final del eje y.</p>
          <p>Aclaro que los valores space-evenly, space-beetwen y space-around estan disponibles para justify-content y para align-content.</p>
          <p>Ahora vamos a posicionar a los elementos particularmente, a las celdas. Voy a usar este codigo:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">8vh</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 1fr);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, 1fr);
              <span class="hljs-attribute">height</span>: <span class="hljs-number">80vh</span>;
              <span class="hljs-attribute">justify-items</span>: center;
              <span class="hljs-attribute">align-items</span>: center;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.5em</span> <span class="hljs-number">1em</span>;
              <span class="hljs-attribute">background-color</span>: chocolate;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          </code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173150305-fdbe1073-2023-44a1-9441-572dbb8e3325.png" alt="align-self" title="align self"></p>
          <p>Las alineaciones verticales se hacen como dijimos con align, en este caso, align-self para un solo elemento y las horizontales con justify, en este caso justify-self.</p>
          <p>Por lo tanto, para ver como funcionaria esto, vamos a ver como hariamos para que quede algo como esto:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173150868-3156fa5d-0a40-46cc-b757-8a882dbaa8b6.png" alt="maqueta" title="maqueta"></p>
          <p>Lo que hariamos de esta manera:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">8vh</span>;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#f00</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(3, 1fr);
              <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(3, 1fr);
              <span class="hljs-attribute">height</span>: <span class="hljs-number">80vh</span>;
              <span class="hljs-attribute">justify-items</span>: center;
              <span class="hljs-attribute">align-items</span>: center;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2em</span>;
              <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.5em</span> <span class="hljs-number">1em</span>;
              <span class="hljs-attribute">background-color</span>: chocolate;
              <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
          }
          
          <span class="hljs-selector-class">.grid-item</span><span class="hljs-selector-pseudo">:first-child</span>{
              <span class="hljs-attribute">align-self</span>: start;
              <span class="hljs-attribute">justify-self</span>: start;
          }
          
          <span class="hljs-selector-class">.grid-item</span><span class="hljs-selector-pseudo">:nth-child(3)</span>{
              <span class="hljs-attribute">align-self</span>: start;
              <span class="hljs-attribute">justify-self</span>: end;
          }
          
          <span class="hljs-selector-class">.grid-item</span><span class="hljs-selector-pseudo">:nth-child(4)</span>{
              <span class="hljs-attribute">justify-self</span>: end;
          }
          
          <span class="hljs-selector-class">.grid-item</span><span class="hljs-selector-pseudo">:nth-child(6)</span>{
              <span class="hljs-attribute">justify-self</span>: start;
          }
          
          <span class="hljs-selector-class">.grid-item</span><span class="hljs-selector-pseudo">:nth-child(7)</span>{
              <span class="hljs-attribute">align-self</span>: end;
              <span class="hljs-attribute">justify-self</span>: start;
          }
          
          <span class="hljs-selector-class">.grid-item</span><span class="hljs-selector-pseudo">:last-child</span>{
              <span class="hljs-attribute">align-self</span>: end;
              <span class="hljs-attribute">justify-self</span>: end;
          }
          </code></pre><p>Primero aclarar un detalle, el selector :nth-child(numero) selecciona el numero de hijo que se le indique en el numero, por ejemplo, si quiero seleccionar el cuarto hijo, se hace asi: :nth-child(4).</p>
          <p>Por ejemplo, con el primer hijo, lo que hice fue decirle que en el eje y (align-self) vaya al inicio y en el eje x (justify-self) al inicio tambien. Y asi con los demas elementos.</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173154063-1fbeaafd-f55c-48b5-b234-3f38f6066351.png" alt="rta" title="rta"></p>
          <h3 id="grid-areas">grid areas</h3>
          <p>Ya estamos preparados para comprender el funcionamiento de los grid areas. Ahora vamos a ver como hacer unas areas, mira, suponte algo asi:</p>
          <pre><code>&lt;body&gt;
              &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-container"</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item header"</span>&gt;header&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item aside"</span>&gt;aside&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item main"</span>&gt;main&lt;/<span class="hljs-keyword">div</span>&gt;
                  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"grid-item footer"</span>&gt;footer&lt;/<span class="hljs-keyword">div</span>&gt;
              &lt;/<span class="hljs-keyword">div</span>&gt;
          &lt;/body&gt;
          </code></pre><p>y:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#444</span>;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
              <span class="hljs-attribute">display</span>: grid;
          }
          
          <span class="hljs-selector-class">.grid-item</span>{
              <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
          }
          
          <span class="hljs-selector-class">.header</span>{
              <span class="hljs-attribute">background-color</span>: green;
          }
          
          <span class="hljs-selector-class">.aside</span>{
              <span class="hljs-attribute">background-color</span>: red;
          }
          
          <span class="hljs-selector-class">.footer</span>{
              <span class="hljs-attribute">background-color</span>: blue;
          }
          
          <span class="hljs-selector-class">.main</span>{
              <span class="hljs-attribute">background-color</span>: orange;
          }
          </code></pre><p>Por ahora no tenemos nada:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173156511-3b45cfa7-a15a-45be-a164-4f01ef9e60e1.png" alt="grid-area" title="grid area"></p>
          <p>Ahora vamos a laburar con areas. Se labura con grid-template-areas. Se divide en areas como si fueran nombres, algo asi:</p>
          <pre><code><span class="hljs-selector-class">.grid-container</span>{
              <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#444</span>;
              <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-areas</span>: 
              <span class="hljs-string">'header header header'</span>
              <span class="hljs-string">'aside main main'</span>
              <span class="hljs-string">'aside main main'</span>
              <span class="hljs-string">'aside main main'</span>
              <span class="hljs-string">'aside main main'</span>
              <span class="hljs-string">'footer footer footer'</span>;
          }
          </code></pre><p>Ahora si vemos los resultados, no paso nada. Esto porque debemos vincular los nombres de las areas con sus respectivas areas:</p>
          <pre><code><span class="hljs-selector-class">.header</span>{
              <span class="hljs-attribute">background-color</span>: green;
              <span class="hljs-attribute">grid-area</span>: header;
          }
          
          <span class="hljs-selector-class">.aside</span>{
              <span class="hljs-attribute">background-color</span>: red;
              <span class="hljs-attribute">grid-area</span>: aside;
          }
          
          <span class="hljs-selector-class">.footer</span>{
              <span class="hljs-attribute">background-color</span>: blue;
              <span class="hljs-attribute">grid-area</span>: footer;
          }
          
          <span class="hljs-selector-class">.main</span>{
              <span class="hljs-attribute">background-color</span>: orange;
              <span class="hljs-attribute">grid-area</span>: main;
          }
          </code></pre><p>Y ahora si, mire:</p>
          <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/173156947-cf33095c-36c7-4af2-b3d7-4c3d3ea9d76e.png" alt="grid-area" title="grid-area"></p>
          `
      },
      {
          id:18,
          title:"🌓🌔 Transition",
          content:`
          <h2 id="transition-">Transition 🌓🌔</h2>
<p>Para arrancar vamos a aclarar un par de cosas... ¿Que es transition? Transition es una propiedad que lo que nos permite es realizar transiciones dentro de los elementos.</p>
<p>Transition es un shorthand (una propiedad acortada), sin embargo, vamos a ver todas las propiedades por separado. </p>
<p>Para usar transition, como minimo hay que darle dos valores a dos de sus propiedades, primero que nada hay que darle una propiedad a la que vamos a transicionar, por ejemplo, imaginate que le queremos hacer hover a un elemento y que pase de ser un texto azul a uno rojo, entonces la propiedad seria &#39;color&#39; che!</p>
<p>Despues, la segunda propiedad que hay que poner y no te queda otra, es la duracion de la transicion que vamos a realizar!</p>
<p>Bueno che, para explicar este temita que tenemos aca, voy a agarrar y a usar este codigo HTML:</p>
<pre><code>&lt;body&gt;
    &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"container"</span>&gt;
        &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"caja"</span>&gt;&lt;/<span class="hljs-keyword">div</span>&gt;
    &lt;/<span class="hljs-keyword">div</span>&gt;
&lt;/body&gt;
</code></pre><p>Y voy a usar estos estilos:</p>
<pre><code><span class="hljs-selector-class">.container</span>{
    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f00</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">1em</span>;
}

<span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
}

<span class="hljs-selector-class">.caja</span><span class="hljs-selector-pseudo">:hover</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#025</span>;
}
</code></pre><p>Si tenes un poco de idea de lo que venimos haciendo en esta introduccion, sabras que tenemos dos div, uno dentro del otro. Lo que pasa es que al pasar el cursor sobre el que esta dentro (.caja) cambia de color a un color mas azulado:</p>
<p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175751659-b96f72cf-4e23-4dfc-bb59-bc76abe1a3e1.gif" alt="hover" title="hover"></p>
<p>Empece a implemetar gifs eh, que calidad.</p>
<p>Volviendo al tema de hacer transiciones, estariamos queriendo hacer que esto ocurra, que transicione pero de manera mas suave, que muestre todos los pasos (o frames) entre el color ese rojo clarito y el azul ¿Como lo hacemos? En este caso, demosle una propiedad la cual transicionar y un tiempo que durará la transicion:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">transition-property</span>: background-color;
    <span class="hljs-attribute">transition-duration</span>: <span class="hljs-number">1s</span>;
}

<span class="hljs-selector-class">.caja</span><span class="hljs-selector-pseudo">:hover</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#025</span>;
}
</code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175758086-b08e3c37-745c-4e2b-8ddf-27f2cde46c20.gif" alt="background-transition" title="background transition"></p>
<p>Esas dos propiedades son OBLIGATORIAS a la hora de usar el transition.</p>
<p>Sin embargo, tenemos otras propiedades a pesar de esto. Por ejemplo, transition delay. Sirve para que la animacion se ejecute despues de x tiempo (delay) y desaparece despues de ese mismo tiempo tambien:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">transition-property</span>: background-color;
    <span class="hljs-attribute">transition-duration</span>: <span class="hljs-number">1s</span>;
    <span class="hljs-attribute">transition-delay</span>: <span class="hljs-number">1s</span>;
}

<span class="hljs-selector-class">.caja</span><span class="hljs-selector-pseudo">:hover</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#025</span>;
}
</code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175758461-c984c5f2-7c0f-4252-92f1-c122b84242dd.gif" alt="delay" title="delay"></p>
<p>Y finalmente, y el mas dificil, el transition timing function que basicamente nos dice la curva del tiempo que va a tardar en realizar la animacion, son los frames en funcion del tiempo. Te recomiendo que los mires en <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function">developer mozilla</a> para conocer todos los valores que podes darle, yo te voy a mostrar este ejemplo:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">transition-property</span>: background-color;
    <span class="hljs-attribute">transition-duration</span>: <span class="hljs-number">2s</span>;
    <span class="hljs-attribute">transition-delay</span>: <span class="hljs-number">0.2s</span>;
    <span class="hljs-attribute">transition-timing-function</span>: ease-in;
}

<span class="hljs-selector-class">.caja</span><span class="hljs-selector-pseudo">:hover</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#025</span>;
}
</code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175758835-251a1d9f-a1ae-49a2-b182-c3dc14f4d900.gif" alt="timing function" title="timing function"></p>
<p>Ahora, como les dije, esto es un shorthand, asi que, ¿Como hago para poner todo en una sola propiedad? Bueno:</p>
<p><code>transition: background-color 2s ease-in 2s</code></p>
<p>Te quedaria primero la propiedad, despues la duracion, la timing-function y el delay.</p>
`
      },
      {
          id:19,
          title:"🎮 Animation",
          content:`
          <h2 id="animation-">Animation 🎮</h2>
<p>Ahora vamos a ver el tema de las animaciones que es muy similar al de las transiciones. Lo que las diferencia a las animaciones es que ellas dependen de una regla:</p>
<p><code>@keyframes</code></p>
<p>Vamos a quedarnos con este codigo CSS:</p>
<pre><code><span class="hljs-selector-class">.container</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f00</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">1em</span>;
}

<span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
}
</code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175759264-8949516e-f4ed-42ab-9a91-9a294c74c6e7.png" alt="animation" title="Animation"></p>
<p>Ahora suponete que tenemos graves problemas psicologicos y queremos que ese cubito este constantemente rondando de izquierda a derecha y viceversa.</p>
<p>Para empezar hice algo asi, mira:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">animation-name</span>: desplazarse;
    <span class="hljs-attribute">animation-duration</span>: <span class="hljs-number">3s</span>;
}

@<span class="hljs-keyword">keyframes</span> desplazarse {
    0%{
        <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
        <span class="hljs-attribute">background-color</span>: blue;
    }
    100%{
        <span class="hljs-attribute">left</span>: <span class="hljs-number">80%</span>;
        <span class="hljs-attribute">background-color</span>: aqua;
    }
}
</code></pre><p>Primero defini un keyframe, que es una especie de funcion en la que indique que al inicio de la animacion la posicion sea left 0 y al final sea 80% y que al inicio tenga un color azul y al final un color agua.</p>
<p>Esta animacion se la aplique a la caja con la propiedad animation-name y le di un tiempo de ejecucion de 3 segundos:</p>
<p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175759501-13f1709f-1978-402e-9b9e-a66490970574.gif" alt="initial animation"></p>
<p>A esto tambien le podemos agregar timing-functions como en las transiciones:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">animation-name</span>: desplazarse;
    <span class="hljs-attribute">animation-timing-function</span>: ease-out;
    <span class="hljs-attribute">animation-duration</span>: <span class="hljs-number">3s</span>;
}
</code></pre><p>A esto, tambien le podemos decir cuantas veces quiero que se repita la animacion, asi mira pibe:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">animation-name</span>: desplazarse;
    <span class="hljs-attribute">animation-timing-function</span>: ease-out;
    <span class="hljs-attribute">animation-iteration-count</span>: <span class="hljs-number">3</span>;
    <span class="hljs-attribute">animation-duration</span>: <span class="hljs-number">3s</span>;
}
</code></pre><p>Ahi le dije &#39;Ejecutate tres veces!&#39;. Che Felipe, perooo ¿si quiero que se ejecute de forma infinita mi animacion? Asi mira:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">animation-name</span>: desplazarse;
    <span class="hljs-attribute">animation-timing-function</span>: ease-out;
    <span class="hljs-attribute">animation-iteration-count</span>: infinite;
    <span class="hljs-attribute">animation-duration</span>: <span class="hljs-number">3s</span>;
}
</code></pre><p>Otra propiedad interesante que nos queda y con la que vamos a lograr nuestro cometido de hacer el cubo que va y viene es el siguiente:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">animation-name</span>: desplazarse;
    <span class="hljs-attribute">animation-timing-function</span>: ease-out;
    <span class="hljs-attribute">animation-iteration-count</span>: <span class="hljs-number">3</span>;
    <span class="hljs-attribute">animation-duration</span>: <span class="hljs-number">3s</span>;
    <span class="hljs-attribute">animation-direction</span>: normal;
}
</code></pre><p>De esta manera le dije que siga el flujo normal de la animacion, es decir, de 0% a 100%. Si le pongo:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">animation-name</span>: desplazarse;
    <span class="hljs-attribute">animation-timing-function</span>: ease-out;
    <span class="hljs-attribute">animation-iteration-count</span>: <span class="hljs-number">3</span>;
    <span class="hljs-attribute">animation-duration</span>: <span class="hljs-number">3s</span>;
    <span class="hljs-attribute">animation-direction</span>: reverse;
}
</code></pre><p>El flujo de ejecucion seria al reves, del 100% al 0%. Y finalmente:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">animation-name</span>: desplazarse;
    <span class="hljs-attribute">animation-timing-function</span>: ease-out;
    <span class="hljs-attribute">animation-iteration-count</span>: <span class="hljs-number">3</span>;
    <span class="hljs-attribute">animation-duration</span>: <span class="hljs-number">3s</span>;
    <span class="hljs-attribute">animation-direction</span>: alternate;
}
</code></pre><p>El cual alterna la direccion del keyframe, de tal manera que vaya y venga, en nuestro caso. Seria ir del 0% al 100% y volver al 0%:</p>
<p>Finalmente, mi codigo es este:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">animation-name</span>: desplazarse;
    <span class="hljs-attribute">animation-timing-function</span>: ease-out;
    <span class="hljs-attribute">animation-iteration-count</span>: infinite;
    <span class="hljs-attribute">animation-duration</span>: <span class="hljs-number">1s</span>;
    <span class="hljs-attribute">animation-direction</span>: alternate;
}

@<span class="hljs-keyword">keyframes</span> desplazarse {
    0%{
        <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
        <span class="hljs-attribute">background-color</span>: blue;
    }
    50%{
        <span class="hljs-attribute">background-color</span>: black;
    }
    100%{
        <span class="hljs-attribute">left</span>: <span class="hljs-number">90%</span>;
        <span class="hljs-attribute">background-color</span>: aqua;
    }
}
</code></pre><p>Fijate que le agregue un 50%, lo que hace es que en la mitad de la animacion pone nuestra caja con un fondo negro, mira:</p>
<p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175759755-882a9d17-a29b-496e-b574-8d4a79355b7c.gif" alt="final animation"></p>
<blockquote>
<p>Tambien se le puede agregar un animation-delay con la misma finalidad que las transiciones</p>
</blockquote>
`
      },
      {
          id:20,
          title:"💧🍷 Transform",
          content:`
          <h2 id="transform-">Transform 💧🍷</h2>
<p>Transform es una propiedad que nos permite cambiar el elemento (literal todas las propiedades se explican solas con el nombre). Las transformaciones reciben funciones.</p>
<p>Mira el codigo HTML:</p>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"caja"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>GitHub<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
</code></pre><p>Y el codigo CSS:</p>
<pre><code><span class="hljs-selector-class">.container</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f00</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">1em</span>;
}

<span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
}

<span class="hljs-selector-tag">b</span>{
    <span class="hljs-attribute">margin</span>: auto;
}
</code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175759929-1d50fcca-3667-41bd-aad8-e30dcdf38244.png" alt="transform"></p>
<p>Vamos a arrancar con el valor traslate:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateX</span>(100px);
}
</code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175759995-b72137f8-119a-4645-9e90-37e886d76442.png" alt="traslate"></p>
<p>Aca le agregue la funcion traslateX y le di 100px, facilmente vemos que se mueve 100px a la derecha, si lo quisiesemos mover a la izquierda, simplemente le damos -100px. Esto funciona de la misma manera para traslateY.</p>
<p>Tambien podemos usar una funcion que me traslade en ambos ejes, asi:</p>
<p><code>transform: traslate(100px, 100px)</code></p>
<p>Este valor trasladaria el elemento 100px a la derecha y 100px abajo.</p>
<p>Ahora vamos a ver scale(). Veamos esto:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">scale</span>(1)
}
</code></pre><p>Si pones esto en el codigo no va a pasar nada, te lo digo yo, porque el elemento ya estaba por defecto en escala 1, sin embargo, si ponemos:</p>
<p><code>transform: scale(2)</code></p>
<p>Pasa algo asi:</p>
<p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175760160-b4a05350-84ad-49a5-abe1-7f386cd61c48.png" alt="scale"></p>
<p>Simplemente se escala al numero que vos le indiques ahi. &quot;dos veces el elemento&quot; le dije, el doble del elemento. Tambien podemos darle mas escala en un solo eje con scaleX y scaleY.</p>
<p>Ahora skew(). Skew vos lo lees y te quedas como &quot;que carajo es esto&quot;, es muy simple, quedate tranquilo. Skew lo que es es deformar el elemento y toma como parametro una cantidad de grados (deg), por ejemplo esto:</p>
<pre><code><span class="hljs-selector-class">.caja</span>{
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f99</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">skew</span>(45deg)
}
</code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175760267-1ef41875-6825-44c5-8a36-3f36479579e6.png" alt="skew"></p>
<p>Como podes ver se inclina digamos 40 grados el elemento. Como te imaginaras, se puede realizar para un solo eje tambien.</p>
<blockquote>
<p>Hay varios valores mas para el transform, te recomiendo que los mires en <a href="https://www.w3schools.com/cssref/css3_pr_transform.asp">W3Schools</a></p>
</blockquote>
`
      },
      {
          id:21,
          title:"🔴 Background",
          content:`
          <h2 id="background-">Background 🔴</h2>
<p>Background es un shorthand de un monton de propiedades, por ejemplo, de la propiedad background-color que tanto usamos. Vamos a ver background-image que a mi me encanta:</p>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
</code></pre><p>Y los estilos:</p>
<pre><code><span class="hljs-selector-class">.container</span>{
    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(https://cloudfront-us-east-1.images.arcpublishing.com/infobae/5OQRLMSKNVB2NHS4R5JULXC4D4.jpg);
}
</code></pre><p>Como veran, le pasamos una funcion url con la url de nuestra imagen, y vos diras, Felipe!¿Que es esa imagen? Es un artista que me encanta que se llama Leo Mattioli.</p>
<p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175760738-12535b91-fcc0-4194-a9e4-84307a610750.png" alt="background-img"></p>
<p>Se ve asi porque la imagen es enorme comparado a nuestra pequeña caja de 300x300.</p>
<p>Si queremos que el tamaño de la imagen sea del 100% lo podemos hacer con la propiedad background-size:</p>
<pre><code><span class="hljs-selector-class">.container</span>{
    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(https://cloudfront-us-east-1.images.arcpublishing.com/infobae/5OQRLMSKNVB2NHS4R5JULXC4D4.jpg);
    <span class="hljs-attribute">background-size</span>: <span class="hljs-number">100%</span>;
}
</code></pre><p>El tema esta en que se repite la imagen:</p>
<p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175760772-939bf04a-b84a-495f-8b1b-c0c634c41cf1.png" alt="background-size"></p>
<p>Tambien podriamos darle un:</p>
<p><code>background-size: 100% 100%</code></p>
<p>Lo que haria que ocupe toda la caja pero con la consecuencia de que se estiraria horriblemente la imagen. Finalmente tenemos la opcion de trabajarla como si fuera un object-fit, con la propiedad cover:</p>
<pre><code><span class="hljs-selector-class">.container</span>{
    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(https://cloudfront-us-east-1.images.arcpublishing.com/infobae/5OQRLMSKNVB2NHS4R5JULXC4D4.jpg);
    <span class="hljs-attribute">background-size</span>: cover;
}
</code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175760832-51380377-a80e-4b33-af26-3d1fd598348b.png" alt="cover"></p>
<p>Igual quiero mostrar algo, supongamos que volvemos al background-size: 100%, ¿Recordas que se repetia? Imaginate que no quiero que se repita, hago asi, mira:</p>
<pre><code><span class="hljs-selector-class">.container</span>{
    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(https://cloudfront-us-east-1.images.arcpublishing.com/infobae/5OQRLMSKNVB2NHS4R5JULXC4D4.jpg);
    <span class="hljs-attribute">background-size</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">background-repeat</span>: no-repeat;
}
</code></pre><p>Y no se va a repetir.</p>
<p>Ahora, volvamos al presente:</p>
<pre><code><span class="hljs-selector-class">.container</span>{
    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(https://cloudfront-us-east-1.images.arcpublishing.com/infobae/5OQRLMSKNVB2NHS4R5JULXC4D4.jpg);
    <span class="hljs-attribute">background-size</span>: cover;
}
</code></pre><p>¿Como hago para centrarlo a Leito? Hago algo similar a cuando alineabamos el object-fit con la propiedad background-position:</p>
<pre><code><span class="hljs-selector-class">.container</span>{
    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(https://cloudfront-us-east-1.images.arcpublishing.com/infobae/5OQRLMSKNVB2NHS4R5JULXC4D4.jpg);
    <span class="hljs-attribute">background-size</span>: cover;
    <span class="hljs-attribute">background-position</span>: center;
}
</code></pre><p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175760975-9edc4a04-a206-4c4e-b1bf-a77191198fed.png" alt="background-position"></p>
`
      }
    ],
  },
  {
    name: "fundamentos_de_programacion",
    contents: [
      {
        id: 0,
        title: "🧑‍🏫 Principios básicos de programación",
        content: `
        <h2 id="principios-b-sicos-de-programaci-n-">Principios básicos de programación 🧑‍🏫</h2>
        <p>En este primer apartado vamos a empezar a asentar las bases donde nosotros vamos a construir el resto de nuestros conocimientos en programacion, asi que pilas. Los principios que vamos a ver son identicos en todos los lenguajes, sea cual sea el lenguaje que aprendas, los siguientes principios hacen parte del mismo.</p>
        <p>Uno de los principios basicos de la programacion es la <strong>logica</strong>, lo cual es tener una idea del camino mas simple y facil que escogemos para lograr nuestro objetivo o solucionar un problema, algo que ocurre constantemente en la programacion debido a que hay que buscar las formas mas faciles y eficientes para solucionar problemas y gastar la menor cantidad de recursos.</p>
        <p>El siguiente concepto es <strong>programa</strong>. ¿Que es un programa? Un programa es un conjunto de instrucciones que al ser ejecutadas logran un objetivo. Cuando nosotros programamos un codigo, no estamos haciendo mas que generando una serie de instrucciones que haran parte de nuestro programa.</p>
        <p>El ultimo concepto de este apartado es la <strong>programacion</strong>. ¿Que es la programacion? Como lo vine diciendo antes, programar es dar una serie de instrucciones o pasos a la computadora para dar solucion a un problema.</p>
        `,
      },
      {
        id: 1,
        title: "💾 Datos e información",
        content: `
        <h2 id="datos-e-informaci-n-">Datos e información 💾</h2>
        <p>Los datos son una representacion simbolica (alfanumerica, numerica, espacial, etc.) de una variable cuantitativa o cualitativa. Por ejemplo, supongamos que recibimos la siguiente <strong>informacion</strong>: &quot;Javier es un joven de 24 años, ingeniero informatico que le gusta el futbol y la programacion.&quot;. Con esto, nos indico varios datos acerca de Javier, por ejemplo:</p>
        <table>
        <thead>
        <tr>
        <th>Variable</th>
        <th>Dato</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Nombre</td>
        <td>Javier</td>
        </tr>
        <tr>
        <td>Edad</td>
        <td>24</td>
        </tr>
        <tr>
        <td>Profesion</td>
        <td>Ingeniero informatico</td>
        </tr>
        <tr>
        <td>Gustos</td>
        <td>Futbol y programacion</td>
        </tr>
        </tbody>
        </table>
        <p>Por lo que podemos deducir que, la informacion es un conjunto organizado de datos procesados que constituyen un mensaje.</p>
        <p>Sin embargo, cabe aclarar que no basta con decir &quot;Javier es joven&quot;, no podemos catalogar &quot;joven&quot; dentro de alguna variable debido a la <strong>ambiguedad</strong> de este dato, debido a que quizas en otros paises y culturas es considerada diferente la vejez respecto a mi pais, Argentina.</p>
        <p class="img-container"><img src="https://caymansseo.com/wp-content/uploads/2018/05/diferencia-entre-datos-e-informacion.jpg" alt="datos e informacion"></p>
        `,
      },
      {
        id: 2,
        title: "💿📀 Tipos de datos",
        content: `
        <h2 id="tipos-de-datos-">Tipos de datos 💿📀</h2>
        <blockquote>
        <p>⛔ AVISO: Los siguientes tipos de datos son validos para Javascript, otros lenguajes poseen distintos tipos de datos o los mismos tipos con distintos nombres o subtipos.</p>
        </blockquote>
        <h3 id="undefined-">Undefined 🚫</h3>
        <p>Cuando definimos una variable sin expresar su valor en Javascript, se le asigna el tipo <strong>undefined</strong> (indefinido).</p>
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175782802-5dc9e234-d226-4a69-b97d-bc4342c9fa29.png" alt="undefined"></p>
        <h3 id="null-">Null ❌</h3>
        <p>Ahora, cuando queremos definir una variable con un valor nulo de manera intencional y explicita, podemos utilizar el tipo <strong>null</strong>.</p>
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175782834-8b7385f7-3a86-47a3-9d66-f31f1cc18236.png" alt="null"></p>
        <h3 id="number-">Number 🔢</h3>
        <p>Podemos querer tambien expresar cantidades numericas. Javascript lo hace simple, enteros, decimales, positivos y negativos. Todos son del tipo <strong>number</strong> (Otros lenguajes utilizan el tipo float, int, etc. Segun los distintos numeros de bits).</p>
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175782896-9170a207-a22f-4566-affc-291ace480329.png" alt="number"></p>
        <h3 id="string-">String 🔠</h3>
        <p>Es el tipo de dato de toda cadena de caracteres, es decir, pueden incluir caracteres especiales, numeros y letras, lo que sea.</p>
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175782957-84181295-131a-4cd0-8cd9-faa8fe902e1a.png" alt="string"></p>
        <h3 id="boolean-">Boolean 🦬</h3>
        <p>Ni si, ni no, ni blanco, ni negro. Los datos booleanos (en honor a George Boole) son datos logicos que solamente pueden ser verdaderos (true) o falses (false).</p>
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175782993-5f4ec3f9-9fc1-4776-9582-207466924d02.png" alt="boolean"></p>
        <h3 id="array-">Array 🗒</h3>
        <p>Ahora arrancamos con los datos compuestos o no primitivos.</p>
        <p>Los <strong>arrays</strong> son listas ordenadas de datos. Estos datos pueden ser de cualquier tipo de dato (incluso de otros arrays). Estos datos tienen posiciones ordinales o indices que se comienzan a contar desde el numero 0.</p>
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175783128-8ea3aef5-85d4-4bff-894c-b4aabd9f1bbc.png" alt="array"></p>
        <h3 id="object-">Object ☕</h3>
        <p>Un <strong>objeto</strong> es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. </p>
        <p>Los objetos, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real. El concepto de Objetos se puede entender con objetos tangibles de la vida real.</p>
        <p>Un objeto es un entidad independiente con propiedades y tipos. Compáralo con una taza, por ejemplo. Una taza es un objeto con propiedades. Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc. Del mismo modo, los objetos pueden tener propiedades que definan sus características.</p>
        <p class="img-container"><img src="https://user-images.githubusercontent.com/84806140/175783219-fbdcb861-de0f-4a65-9185-263d5d863020.png" alt="object"></p>
        <p>Mas adelante vamos a retomar el concepto de objetos cuando veamos programacion orientada a objectos (POO).</p>
        <p class="img-container"><img src="https://www.cursosgis.com/wp-content/uploads/javascript-data-types-primitive-and-non-primitive.png" alt="data types"></p>
        `,
      },
      {
        id: 3,
        title: "🧺🕳 Variables y constantes",
        content: `
            <h2 id="variables-y-constantes-">Variables y constantes 🧺🕳</h2>
            <h3 id="variables">Variables</h3>
            <p>Una variable es algo que varia o cambia, en la programacion, son lugares de almacenamiento que pueden contener datos de distintos tipos, como los mencionados en el anterior apartado.</p>
            <p>Una variable es un espacio en la memoria de la computadora que permite almacenar temporalmente este dato y su contenido puede cambiar durante la ejecucion del programa.</p>
            <p>Una analogia re comun a la hora de explicar acerca de variables es la de un deposito donde hay cajas. Imaginate que creo una variable con el valor &quot;Boca Junior&quot;, en nuestra analogia equivaldria a escribir en una hoja de papel ese texto y colocarlo dentro de una caja, el nombre de la variable elegida seria, por ejemplo, &quot;elMasGrande&quot;, y esta caja con ese nombre se guardaria en una estanteria debidamente tabulada. Por lo tanto, si quisieramos acceder al valor de &quot;elMasGrande&quot; deberiamos ver donde se encuentra nuestra querida variable.</p>
            <p class="img-container"><img src="https://www.cursosgis.com/wp-content/uploads/2-54.jpg" alt="variable"></p>
            <h3 id="constantes">Constantes</h3>
            <p>Por otro lado tenemos las constantes. Una constante al igual que las variables puede contener un dato, pero con la diferencia que se mantiene constante durante la ejecucion del programa.</p>
            `,
      },
      {
        id: 4,
        title: "🔣 Operadores",
        content: `
        <h2 id="operadores-">Operadores 🔣</h2>
        <p>En programacion existen diferentes tipos de operadores. Los operadores sirven para justamente operar entre datos. Existen operadores aritmeticos, de asignacion, comparativos y logicos.</p>
        <h3 id="operadores-aritmeticos">Operadores aritmeticos</h3>
        <p>Los operadores aritmeticos son los de toda la vida. La suma, resta, multiplicacion, division, etc. Sin embargo, se suma algun operador extra, como el &quot;resto de la division entera&quot;.</p>
        <p>En la programacion, la sintaxis de estos operadores es asi:</p>
        <table>
        <thead>
        <tr>
        <th>Operacion</th>
        <th>Sintaxis</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>suma</td>
        <td>+</td>
        </tr>
        <tr>
        <td>resta</td>
        <td>-</td>
        </tr>
        <tr>
        <td>multiplicacion</td>
        <td>*</td>
        </tr>
        <tr>
        <td>division</td>
        <td>/</td>
        </tr>
        <tr>
        <td>resto de division entera</td>
        <td>%</td>
        </tr>
        </tbody>
        </table>
        <p>Ahora... ¿Que es esto de division entera? Es el resto de una division de enteros, mira unos ejemplos:</p>
        <p>Si hacemos <strong>15 % 5</strong> nos va a dar un output <strong>0</strong> ya que la division de 15 entre 5 da como resto 0.</p>
        <p>Ahora bien, si hacemos esta operacion: <strong>13 % 5</strong> nos va a dar un output de <strong>3</strong> porque la division entera de 13 entre 5 da un resto de 3.</p>
        <h3 id="operadores-de-asignacion">Operadores de asignacion</h3>
        <p>En el contexto de la asignacion, tenemos a nuestro operador por asignacion por excelencia, el &quot;<strong>=</strong>&quot;, el cual se usa para cambiar el valor o dato que lleva dentro una variable o asignarselo a fin de cuentas.</p>
        <p>En algunos lenguajes de programacion (como javacript) se usa tambien a veces operadores del tipo compuesto como este &quot;+=&quot;, este &quot;-=&quot; y otros como estos &quot;*=&quot;, &quot;/=&quot; y &quot;%=&quot;.</p>
        <p>Los cuales serian algo como esto:</p>
        <table>
        <thead>
        <tr>
        <th>Sentencia</th>
        <th>Equivalencia</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>a += b</td>
        <td>a = a + b</td>
        </tr>
        <tr>
        <td>a -= b</td>
        <td>a = a - b</td>
        </tr>
        <tr>
        <td>a *= b</td>
        <td>a = a * b</td>
        </tr>
        <tr>
        <td>a /= b</td>
        <td>a = a / b</td>
        </tr>
        <tr>
        <td>a %= b</td>
        <td>a = a % b</td>
        </tr>
        </tbody>
        </table>
        <blockquote>
        <p>Notese que los operadores de asignacion deben ir seguidos asi: &quot;+=&quot; y no asi: &quot;+ =&quot; (con un espacio entre medio).</p>
        </blockquote>
        <h3 id="operadores-comparativos">Operadores comparativos</h3>
        <p>Los operadores comparativos sirven para comprar dos datos, expresiones o variables. Tienen la particularidad de que el resultado de la comparacion es booleana (true-false).</p>
        <p>Si escribo una sentencia como esta: &quot;2 &lt; 5&quot; (dos es menor que cinco) voy a tener un output <strong>true</strong> debido a que la sentencia se cumple.</p>
        <p>Los operadores mas utilizados en la programacion son:</p>
        <table>
        <thead>
        <tr>
        <th>Operacion</th>
        <th>Sintaxis</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>&gt;</td>
        <td>mayor que</td>
        </tr>
        <tr>
        <td>&gt;=</td>
        <td>mayor o igual que</td>
        </tr>
        <tr>
        <td>&lt;</td>
        <td>menor que</td>
        </tr>
        <tr>
        <td>&lt;=</td>
        <td>menor o igual que</td>
        </tr>
        <tr>
        <td>==</td>
        <td>igual que</td>
        </tr>
        <tr>
        <td>!=</td>
        <td>distinto que</td>
        </tr>
        </tbody>
        </table>
        <p>Cabe aclarar que cuando queremos comparar no se utiliza el &quot;=&quot; a secas, ya que es un operador de asignacion, no comparativos. En su lugar, se usa el operador comparativo &quot;==&quot;.</p>
        <p>Este tipo de operadores son los que se utilizan en las sentencias condicionales para verificar una condicion.</p>
        <h3 id="operadores-logicos">Operadores logicos</h3>
        <p>Estos operadores voy a dejarlos para mas adelante, los voy a explicar cuando toque hablar acerca de las sentencias condicionales ya que sirven para unir condiciones.</p>
        `,
      },
      {
        id: 5,
        title: "❓🚧 Control de flujo condicional",
        content: `
        <h2 id="control-de-flujo-condicional-">Control de flujo condicional ❓🚧</h2>
        <h3 id="introduccion">Introduccion</h3>
        <p>Tanto las estructuras de control condicional, como las de iteracion sirven para alterar la estructura secuencial. El flujo condicional hace que se analice una condicion y si es afirmativa ejecute ciertas intrucciones y sino otras.</p>
        <p>En Javascript (y en la mayoria de lenguajes) podemos utilizar estos tipos de sentencias condicionales:</p>
        <table>
        <thead>
        <tr>
        <th>Tipos</th>
        <th>Sintaxis</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Simple</td>
        <td>if</td>
        </tr>
        <tr>
        <td>Ampliada</td>
        <td>if - else</td>
        </tr>
        <tr>
        <td>Anidada</td>
        <td>if - else if - ... - else</td>
        </tr>
        </tbody>
        </table>
        <h3 id="control-condicional-simple">Control condicional simple</h3>
        <p>Es una sentencia en la que se evalua una condicion y, solo si es verdad, se ejecuta un conjunto de instrucciones asociadas.</p>
        <pre><code><span class="hljs-function"><span class="hljs-title">if</span><span class="hljs-params">(condicion)</span></span>{
            bloque de intrucciones
        }
        </code></pre><h3 id="control-condicional-ampliado">Control condicional ampliado</h3>
        <p>La forma ampliada permite ejecutar dos bloques de sentencias distintas dependiendo de que se cumpla la condicion o no.</p>
        <pre><code><span class="hljs-keyword">if</span>(condicion){
            bloque <span class="hljs-keyword">de</span> intrucciones 1
        } <span class="hljs-keyword">else</span> {
            bloque <span class="hljs-keyword">de</span> intrucciones 2
        }
        </code></pre><h3 id="control-condicional-anidado">Control condicional anidado</h3>
        <p>En muchas ocasiones, interesa evaluar de forma anidada varias expresiones condicionales de arriba a abajo. Cuando aparece una condicion verdadera, ejecutar las intrucciones asociadas y salta el resto de sentencias condicionales sin necesidad de evaluarlas. </p>
        <p>Normalmente existe un bloque <strong>else</strong> al final de las sentencias condicionales por si no entra en ninguna.</p>
        <pre><code><span class="hljs-keyword">if</span>(condicion){
            bloque <span class="hljs-keyword">de</span> instrucciones 1
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span>(condicion){
            bloque <span class="hljs-keyword">de</span> instrucciones 2
        } <span class="hljs-keyword">else</span> {
            bloque <span class="hljs-keyword">de</span> intrucciones 3
        }
        </code></pre><p>Cabe aclarar que puede haber mas sentencias <strong>else if</strong>.</p>
        <h3 id="aplicacion-operadores-logicos">Aplicacion operadores logicos</h3>
        <p>Al igual que las comparativas tendra un resultado true o false segun los datos involucrados. La evaluacion de operadores logicos se realiza de izquierda a derecha y se interrumpe en cuanto se haya asegurado el resultado.</p>
        <blockquote>
        <p>⛔ AVISO: Voy a utilizar la sintaxis de javascript para ejemplificar su uso, la cual varia segun el lenguaje.</p>
        </blockquote>
        <table>
        <thead>
        <tr>
        <th>Operador</th>
        <th>Descripcion</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>&amp;&amp;</td>
        <td><strong>Y</strong>, devuelve true unicamente cuando todas las sentencias relacionadas sean true</td>
        </tr>
        <tr>
        <td>&#124;&#124;</td>
        <td><strong>O</strong>, devuelve true cuando al menos una sentencia sea verdadera</td>
        </tr>
        <tr>
        <td>!</td>
        <td><strong>NO</strong>, devuelve true cuando la expresion a la que afecta devuelve false</td>
        </tr>
        </tbody>
        </table>
        <p>Si aplicamos estos operadores a una condicion simple, por ejemplo, nos quedaria algo como esto:</p>
        <pre><code>if(<span class="hljs-number">2</span> &gt; <span class="hljs-number">3</span> &amp;&amp; <span class="hljs-number">1</span> != <span class="hljs-number">2</span>){
            bloque de instrucciones
        }
        </code></pre><p>En este caso, el bloque de instrucciones no se ejecutara, ya que la primera comparacion es falsa y la segunda verdadera, sin embargo, al estas comparaciones ser relacionadas con un comparador logico, va a ser falso. Esto porque una relacion logica del tipo &quot;&amp;&amp;&quot; devuelve true si y solo si todas sus sentencias son verdaderas.</p>
        <pre><code>if(<span class="hljs-number">2</span> &gt; <span class="hljs-number">3</span> || <span class="hljs-number">1</span> != <span class="hljs-number">2</span>){
            bloque de instrucciones
        }
        </code></pre><p>En este caso, si se ejecutara el bloque, ya que al utilizar un comparador logico como &quot;||&quot; aseguramos que si al menos una sentencia es verdadera, devuelva true.</p>
        <pre><code><span class="hljs-function"><span class="hljs-title">if</span><span class="hljs-params">(!( <span class="hljs-number">2</span> &gt; <span class="hljs-number">3</span> )</span></span>){
            bloque de instrucciones
        }
        </code></pre><p>En este caso, se ejecuta el bloque tambien. Esto porque si bien la condicion en falsa, al tener el operador &quot;!&quot; es como si se &quot;invirtiese&quot;.</p>
        `,
      },
      {
        id: 6,
        title: "🎬 Control de flujo iterativo",
        content: `
        <h2 id="control-de-flujo-iterativo-">Control de flujo iterativo 🎬</h2>
        <h3 id="introduccion">Introduccion</h3>
        <p>Las sentencias repetitivas o iterativas permiten repetir una secuencia de instrucciones en tanto no deje de cumplirse una condición. Estas estructuras se denominan también bucles (loops).</p>
        <p>En el momento que la condición pasa a ser falsa, la ejecución del programa continúa en la línea que sigue al bucle.</p>
        <p>Los bucles mas comunes son: el bucle <strong>while</strong>, <strong>do - while</strong> y <strong>for</strong>.</p>
        <h3 id="bucle-while">Bucle while</h3>
        <p>Un bucle while tiene asociado un bloque de sentencias que se ejecutarán secuencialmente mientras la condición de entrada al bucle sea cierta.</p>
        <p>La condición se evalúa al comienzo de la estructura. Esto supone que el bloque de instrucciones puede no ejecutarse ninguna vez si la condición es inicialmente falsa.</p>
        <pre><code><span class="hljs-function"><span class="hljs-title">while</span><span class="hljs-params">(condicion)</span></span>{
            bloque de instrucciones
        }
        </code></pre><h3 id="bucle-do-while">Bucle do while</h3>
        <p>Es una variante especial del bucle while. Al contrario que el bucle while, que comprueba la condición antes de entrar en el bucle, el bucle do - while la evalúa al final del bucle. Esto implica que el bucle se ejecutará al menos una vez.</p>
        <pre><code><span class="hljs-keyword">do</span> {
            bloque <span class="hljs-keyword">de</span> instrucciones
        } <span class="hljs-keyword">while</span>(condicion)
        </code></pre><h3 id="bucle-for">Bucle for</h3>
        <p>El bucle for está concebido fundamentalmente para ejecutar sus sentencias asociadas un número fijo de veces.</p>
        <p>El bucle for está concebido fundamentalmente para ejecutar sus sentencias asociadas un número fijo de veces.</p>
        <p>El diseño sintáctico de la sentencia compuesta for es la de integrar un contador, con su valor inicial, su valor final y un valor fijo de incremento.</p>
        <pre><code>for(inicializacion<span class="hljs-comment">; condicion; incremento){</span>
            <span class="hljs-keyword">bloque </span>de <span class="hljs-keyword">instrucciones
        </span>}
        </code></pre>`,
      },
      {
        id: 7,
        title: "👨‍🔧 Funciones",
        content: `
        <h2 id="funciones-">Funciones 👨‍🔧</h2>
        <p>Las funciones de alguna manera nos permiten dividir el trabajo que hace nuestro programa en tareas mas pequeñas. </p>
        <p>Por ejemplo, imaginate que estas desarrollando una calculadora, una funcion valida que deberia incluir tu programa seria algo como esto:</p>
        <pre><code><span class="hljs-keyword">function</span> <span class="hljs-title">suma</span>(numero1, numero2){
            <span class="hljs-keyword">return</span> <span class="hljs-type">numero1</span> + numero2
        }
        </code></pre><p>Como podes ver aca, cree una funcion que puede funcionar de forma independiente al programa y tiene la gran ventaja de que es reutilizable lo que nos ahorra escribir codigo, ya que, tenga los numeros que tenga, con esta funcion los podre sumar.</p>
        <p>Ahora explicare como es el tema de las funciones, esa funcion <strong>&quot;suma&quot;</strong> lo que hace es recibir dos parametros <strong>&quot;numero1&quot;</strong> y <strong>&quot;numero2&quot;</strong> que si ven, los devuelve en la sentencia:</p>
        <p><code>return numero1 + numero2</code></p>
        <p>Cabe aclarar que no necesariamente debemos utilizar parametros en funciones ni deben obligatoriamente devolver algo.</p>
        `,
      },
      {
        id: 8,
        title: "📝💼 ¿Que es un algoritmo?",
        content: `
        <h2 id="-que-es-un-algoritmo-">¿Que es un algoritmo? 📝💼</h2>
        <p>Un <strong>algoritmo</strong> es una herramienta muy util a todos los programadores. Por lo general, se crean los algoritmos antes de programarlos en si. Antes de escribirlos en cualquier leguaje de programacion, pensamos cuales son los pasos que debemos pensar para solucionar el problema.</p>
        <blockquote>
        <p>Un algoritmo es una serie de pasos o instrucciones finitas y ordenadas que sirven para dar solucion a un problema.</p>
        </blockquote>
        `,
      }
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
