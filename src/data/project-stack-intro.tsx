import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faWandMagicSparkles,
  faBrain,
  faAtom,
  faBellConcierge,
  faFontAwesome,
  faFileLines,
  faDatabase,
  faServer,
  faCube,
} from "@fortawesome/free-solid-svg-icons";

export const project_stack = [
  {
    title: "HTML",
    description:
      "Todas las páginas web que visitamos están escritas en HTML, y este lenguaje nos permite darle estructura y significado a los contenidos de una página web. ",
    icon: <FontAwesomeIcon icon={faCity} />,
    path: "/html",
  },
  {
    title: "CSS",
    description: "Utilizado para dar estilo a páginas web escritas en HTML. Separa el contenido de la apariencia de una página web, haciéndola más fácil de mantener y actualizar y permitiendo diseños más avanzados y adaptables.",
    icon: <FontAwesomeIcon icon={faWandMagicSparkles} />,
    path: "/css",
  },
  {
    title: "Javascript",
    description: "Lenguaje de programación que se utiliza para crear páginas web interactivas y dinámicas. Nos permite añadir funcionalidades y ejecutar código en el navegador del usuario.",
    icon: <FontAwesomeIcon icon={faBrain} />,
    path: "/javascript",
  },
  {
    title: "Node",
    description: "Entorno de ejecución de JavaScript que se utiliza para crear aplicaciones web completas. Nos permite ejecutar código JavaScript en el servidor y nos ofrece herramientas y librerías para el desarrollo de aplicaciones web de alto rendimiento y escalables.",
    icon: <FontAwesomeIcon icon={faServer} />,
    path: "/node",
  },
  {
    title: "Express",
    description: "Express es un marco de trabajo para Node.js que facilita la creación de aplicaciones web y APIs. Proporciona funcionalidades y características para ahorrar tiempo y enfocarse en la lógica de la aplicación.",
    icon: <FontAwesomeIcon icon={faBellConcierge} />,
    path: "/express",
  },
  {
    title: "ReactJs",
    description: "React es una librería de JavaScript para construir interfaces de usuario. Nos permite crear componentes reutilizables y estructurar nuestra aplicación de forma lógica, lo que nos facilita el desarrollo y mantenimiento de aplicaciones de gran escala.",
    icon: <FontAwesomeIcon icon={faAtom} />,
    path: "/react",
  },
  {
    title: "Typescript",
    description: "TypeScript es un superconjunto de JavaScript que añade tipos estáticos y características de programación orientada a objetos. Nos permite escribir código más seguro y mantenible, especialmente en proyectos grandes.",
    icon: <FontAwesomeIcon icon={faFontAwesome} />,
    path: "/typescript",
  },
];

export const other_fundamentals = [
  {
    title: "Editor de texto",
    description: "El lugar donde escribimos y editamos nuestro código fuente. Los editores de texto vienen con muchas características útiles para los programadores, como resaltado de sintaxis, autocompletar código, depuración, refactorización de código y mucho más.",
    icon: <FontAwesomeIcon icon={faFileLines} />,
    path: "/editor",
  },
  {
    title: "Fundamentos de programacion",
    description: "Los fundamentos incluyen conceptos básicos como variables, operadores, estructuras de control de flujo, funciones y tipos de datos, entre otros. Aprender los fundamentos de la programación nos ayuda a entender cómo funcionan las cosas por debajo del capó y nos da una base sólida para seguir aprendiendo y creciendo como programadores. ",
    icon: <FontAwesomeIcon icon={faCube} />,
    path: "/fundamentals",
  },
  {
    title: "Bases de datos",
    description: "Sistemas que nos permiten almacenar, organizar y acceder a grandes cantidades de información de manera eficiente. Nos ayudan a mantener nuestros datos organizados y nos permiten hacer consultas para obtener la información que necesitamos.",
    icon: <FontAwesomeIcon icon={faDatabase} />,
    path: "/database",
  },
];
