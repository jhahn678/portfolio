import React from "react";
import { motion, MotionProps } from 'framer-motion'
import styles from './IconButton.module.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & {
    icon: JSX.Element
}

const IconButton = ({ icon, className, ...props}: Props) => {
  return (
    <motion.button 
        {...props}
        className={`${styles.container} ${className}`} 
        whileHover={{ scale: 1.05, cursor: 'pointer' }}
    >
        {icon}
    </motion.button>
  );
};

export default IconButton;