import React from "react";
import { motion, MotionProps } from 'framer-motion'
import styles from './IconButton.module.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & {
    icon: JSX.Element,
    small?: boolean
}

const IconButton = ({ icon, className, small=false, ...props}: Props) => {
  return (
    <motion.button 
        {...props} whileTap={{ scale: .98 }}
        className={`${styles.container} ${small ? styles.small : styles.normal} ${className}`} 
        whileHover={{ scale: 1.05, cursor: 'pointer' }}
    >
        {icon}
    </motion.button>
  );
};

export default IconButton;