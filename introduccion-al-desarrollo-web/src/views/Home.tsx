import React from 'react'
import {motion} from "framer-motion"
import animationStyles from '../config/animationStyles'
import Landing from '../components/Landing'

const Home = () => {
  return (
    <motion.div
    initial={animationStyles.initial}
    animate={animationStyles.animate}
    exit={animationStyles.exit}>
        <Landing/>
    </motion.div>
  )
}

export default Home