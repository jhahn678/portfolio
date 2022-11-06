import React, { useState } from "react";
import { motion } from 'framer-motion'
import styles from './TextInput.module.css'

interface Props {
    label: string
    className?: string
    type?: React.HTMLInputTypeAttribute
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    error?: boolean
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const TextInput = ({ value, setValue, type='text', ...props}: Props) => {

    const [active, setActive] = useState(false)

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if(props.onFocus) props.onFocus(e);
        setActive(true)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if(props.onBlur) props.onBlur(e)
        setActive(false)
    }

    return (
        <motion.div className={`${styles.container} ${props.className}`}>
            <motion.span 
                className={styles.label}
                animate={{ y: active || value.length ? -22 : 0 }}
            >{props.label}</motion.span>
            <motion.input 
                type={type}
                className={`${styles.input} ${props.error ? styles.error : undefined}`}
                onInput={handleInput}
                value={value}
                onFocus={handleFocus} 
                onBlur={handleBlur}/>
        </motion.div>
    );
};

export default TextInput;
