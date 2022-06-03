import {motion} from "framer-motion"
import animationStyles from "../config/animationStyles"

const ViewContainer = (props:{children:JSX.Element}) => {
  return (
    <motion.div
    initial={animationStyles.initial}
    animate={animationStyles.animate}
    exit={animationStyles.exit}
    style={{overflow:"hidden"}}>
        {props.children}
    </motion.div>
  )
}

export default ViewContainer