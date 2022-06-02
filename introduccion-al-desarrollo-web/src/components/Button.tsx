import {motion} from "framer-motion"
import "../styles/Button.css"

const Button = (props:{children:string, onClick?:()=>void}) => {
  return (
    <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    onClick={props.onClick}
    className="button-component-container"
    >
        {props.children}
    </motion.button>
  )
}

export default Button