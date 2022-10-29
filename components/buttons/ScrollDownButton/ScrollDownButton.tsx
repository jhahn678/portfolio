import React from "react";
import { motion, MotionProps } from 'framer-motion'
import styles from './ScrollDownButton.module.css'
import { IoArrowDown } from "react-icons/io5";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & {
    iconSize?: number
}

const ScrollDownButton = ({iconSize=36, className, ...props}: Props) => {
  return (
    <motion.button 
        {...props} whileTap={{ scale: .98 }}
        className={`${styles.container} ${className}`} 
        whileHover={{ scale: 1.05, cursor: 'pointer' }}
    >
        <IoArrowDown className={styles.arrow} size={iconSize}/>
    </motion.button>
  );
};

export default ScrollDownButton;
