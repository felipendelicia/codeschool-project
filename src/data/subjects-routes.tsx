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

const routes = [
    {
        title:"Editor de Texto",
        name:"editor_de_texto",
        icon:<FontAwesomeIcon icon={faFileLines}/>,
        path:"/editor"
    },
    {
        title:"HTML",
        name:"html",
        icon:<FontAwesomeIcon icon={faCity}/>,
        path:"/html"
    },
    {
        title:"CSS",
        name:"css",
        icon:<FontAwesomeIcon icon={faWandMagicSparkles}/>,
        path:"/css"
    },
    {
        title:"Fundamentos de Programación",
        name:"fundamentos_de_programacion",
        icon:<FontAwesomeIcon icon={faCube}/>,
        path:"/fundamentals"
    },
    {
        title:"Javascript",
        name:"javascript",
        icon:<FontAwesomeIcon icon={faBrain}/>,
        path:"/javascript"
    },
    {
        title:"Bases de Datos",
        name:"bases_de_datos",
        icon:<FontAwesomeIcon icon={faDatabase}/>,
        path:"/database"
    },
    {
        title:"NodeJS",
        name:"nodejs",
        icon:<FontAwesomeIcon icon={faServer}/>,
        path:"/node"
    },
    {
        title:"ExpressJS",
        name:"express",
        icon:<FontAwesomeIcon icon={faBellConcierge}/>,
        path:"/express"
    },
    {
        title:"ReactJS",
        name:"react",
        icon:<FontAwesomeIcon icon={faAtom}/>,
        path:"/react"
    },
    {
        title:"Typescript",
        name:"typescript",
        icon:<FontAwesomeIcon icon={faFontAwesome}/>,
        path:"/typescript"
    }
    
]

export default routes