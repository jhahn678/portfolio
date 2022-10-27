import React, { useState } from "react";
import { motion } from 'framer-motion'
import styles from './TextInput.module.css'

interface Props {
    label: string
    className?: string
    type?: React.HTMLInputTypeAttribute
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const TextInput = ({ value, setValue, type='text', ...props}: Props) => {

    const [active, setActive] = useState(false)

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return (
        <motion.div className={`${styles.container} ${props.className}`}>
            <motion.span 
                className={styles.label}
                animate={{ y: active || value.length ? -22 : 0 }}
            >{props.label}</motion.span>
            <motion.input 
                type={type}
                className={styles.input}
                onInput={handleInput}
                value={value}
                onFocus={() => setActive(true)} 
                onBlur={() => setActive(false)}/>
        </motion.div>
    );
};

export default TextInput;
