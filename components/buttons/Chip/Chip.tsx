import React from "react";
import styles from './Chip.module.css'
import { BsX } from 'react-icons/bs'
import { motion } from 'framer-motion'

interface Props{
    onRemove: () => void
    label: string
    className?: string
}

const Chip = (props: Props) => {

    return (
        <motion.div 
            className={`${styles.chip} ${props.className}`} layout={true}
            whileHover={{ scale: 1.05 }} onClick={props.onRemove} whileTap={{ scale: .98 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .2 } }} 
            exit={{ opacity: 0, transition: { duration: .2 } }}
        >
            <BsX size={24} className={styles.x}/>
            <motion.p className={styles.label}>{props.label}</motion.p>
        </motion.div>
    );
};

export default Chip;
