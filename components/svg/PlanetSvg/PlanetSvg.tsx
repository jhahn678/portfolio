import React from "react";
import Image from "next/image";
import styles from './PlanetSvg.module.css'
import { motion } from 'framer-motion'

interface Props {
    className?: string
}

const PlanetSvg = ({ className }: Props) => {

  return (
    <motion.div 
      whileHover={{ rotate: '-10deg', cursor: 'pointer' }}
      className={`${styles.container} ${className}`}
    >
        <Image src={'/planet.svg'} layout='fill'/>
    </motion.div>
  )
};

export default PlanetSvg;
