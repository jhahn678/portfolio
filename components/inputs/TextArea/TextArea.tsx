import React, { useState } from "react";
import { motion } from 'framer-motion'
import styles from './TextArea.module.css'

interface Props {
    label: string
    className?: string
    type?: React.HTMLInputTypeAttribute
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    error?: boolean
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ type='text', ...props}: Props) => {

    const [active, setActive] = useState(false)

    const handleInput: React.FormEventHandler<HTMLTextAreaElement> = (e) => props.setValue(e.currentTarget.value) 

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if(props.onFocus) props.onFocus(e);
        setActive(true)
    }

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if(props.onBlur) props.onBlur(e)
        setActive(false)
    }

    return (
        <motion.div className={`${styles.container} ${props.className}`}>
            <motion.span 
                className={`${styles.label}`}
                animate={{ y: active || props.value.length ? -22 : 0 }}
            >{props.label}</motion.span>
            <motion.textarea 
                className={`${styles.input} ${props.error ? styles.error : undefined}`}
                onInput={handleInput}
                value={props.value}
                onFocus={handleFocus} 
                onBlur={handleBlur}/>
        </motion.div>
    );
};

export default TextArea;
