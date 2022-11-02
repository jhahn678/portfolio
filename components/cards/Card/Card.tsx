import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import styles from './Card.module.css'

const Card = ({ className, children, ...props}: HTMLMotionProps<'div'>): JSX.Element => {
  return (
    <motion.div className={`${styles.container} ${className}`} 
      {...props}
    >
        {children}
    </motion.div>
  )
};

export default Card;
