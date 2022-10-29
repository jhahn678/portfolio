import React from "react";
import { motion } from 'framer-motion'
import Image from "next/image";

interface Props {
    startX: number
    order: number
}

const Comet = ({ startX, order }: Props) => {


  return (
    <motion.div 
        initial={{ x: startX, y: -100, opacity: 1 }}
        animate={{ 
            x: startX + 1100, 
            y: 1000, 
            opacity: .2, 
            transition: { delay: .3 + (order * .05), duration: .7, ease: 'easeOut' } 
        }}
        style={{ 
            height: 80,
            width: 80,
            position: 'absolute'
        }}
    >
        <Image src={'/comet.svg'} height={80} width={80} style={{ transform: 'rotate(-7deg)' }}/>
    </motion.div>
  )
};

export default Comet;
