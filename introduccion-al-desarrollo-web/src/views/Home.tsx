import React from 'react'
import {motion} from "framer-motion"
import animationStyles from '../config/animationStyles'

const Home = () => {
  return (
    <motion.div
    initial={animationStyles.initial}
    animate={animationStyles.animate}
    exit={animationStyles.exit}>
        Hola!
    </motion.div>
  )
}

export default Home