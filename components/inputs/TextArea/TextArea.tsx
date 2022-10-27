import React, { useState } from "react";
import { motion } from 'framer-motion'
import styles from './TextArea.module.css'

interface Props {
    label: string
    className?: string
    error?: boolean,
    type?: React.HTMLInputTypeAttribute
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const TextArea = ({ value, setValue, type='text', error, ...props}: Props) => {

    const [active, setActive] = useState(false)

    const handleInput: React.FormEventHandler<HTMLTextAreaElement> = (e) => setValue(e.currentTarget.value) 

    return (
        <motion.div className={`${styles.container} ${props.className}`}>
            <motion.span 
                className={`${styles.label}`}
                animate={{ y: active || value.length ? -22 : 0 }}
            >{props.label}</motion.span>
            <motion.textarea 
                className={styles.input}
                onInput={handleInput}
                value={value}
                onFocus={() => setActive(true)} 
                onBlur={() => setActive(false)}/>
        </motion.div>
    );
};

export default TextArea;
