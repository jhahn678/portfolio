import React from "react";
import styles from './ButtonFilled.module.css'
import { motion, MotionProps } from 'framer-motion'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & {
    hoverScale?: number,
    disableHoverColor?: true
    disableHover?: true
}

const ButtonFilled = ({ children, className, hoverScale=1.05, ...props}: Props) => {
    return (
        <motion.button 
        whileHover={
            props.disableHover ? undefined : { 
                scale: hoverScale, 
                backgroundColor: props.disableHoverColor ? undefined : 'var(--orangeLight)' 
            }}
        whileTap={{ 
            backgroundColor: 'var(--orange)', 
            scale: .98 
        }}
        className={`${styles.button} ${className}`} 
        {...props}>
            {children}
        </motion.button>
    );
};

export default ButtonFilled;
