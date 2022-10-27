import React from "react";
import styles from './ButtonOutlined.module.css'
import { motion, MotionProps } from "framer-motion";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & {
    hoverScale?: number
}

const ButtonOutlined = ({ className, children, hoverScale=1.05, ...props}: Props) => {
    return (
        <motion.button 
        whileHover={{ scale: hoverScale, borderColor: 'var(--orangeLight)', color: 'var(--orangeLight)' }}
        className={`${styles.button} ${className}`} 
        {...props}>
            {children}
        </motion.button>
    );
};

export default ButtonOutlined;
