import React from "react";
import styles from './ButtonOutlined.module.css'
import { motion, MotionProps } from "framer-motion";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & {
    hoverScale?: number
    height?: number
}

const ButtonOutlined = ({ className, children, hoverScale=1.05, ...props}: Props) => {
    return (
        <motion.button 
        whileHover={{ 
            scale: hoverScale, 
            borderColor: 'var(--orangeLight)', 
            color: 'var(--orangeLight)' 
        }}
        whileTap={{ scale: .98 }}
        className={`${styles.button} ${className}`} 
        style={{ height: props.height }}
        {...props}>
            {children}
        </motion.button>
    );
};

export default ButtonOutlined;
