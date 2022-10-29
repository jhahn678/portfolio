import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import styles from './Select.module.css'
import { FaChevronDown } from 'react-icons/fa'
import { IoCheckmark } from "react-icons/io5";

export interface Options{
    value: string
    label?: string
}

interface Props {
    label: string
    options: (Options | string)[]
    values: string[]
    setValues: React.Dispatch<React.SetStateAction<string[]>>
    className?: string
}

const Select = ({ values, setValues, ...props}: Props) => {

    const ref = useRef<HTMLDivElement | null>(null)
    const [active, setActive] = useState(false)
    const [touched, setTouched] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    
    const handleClickAway = (e: MouseEvent) => {
        if(ref.current && !ref.current.contains(e.target as Node)){
            setActive(false)
        }
    }

    const handleClick = () => {
        setActive(state => {
            if(state){
                if(touched) setTimeout(() => setShowOptions(false),500)
                return false
            }else{
                setTouched(true)
                setShowOptions(true)
                return true;
            }
        })
    }

    useEffect(() => {
        window.addEventListener('click', handleClickAway, true)
        return () => window.removeEventListener('click', handleClickAway, true);
    }, []);
    

    const handleSelect = (e: React.FormEvent<HTMLParagraphElement>, value: string) => {
        e.stopPropagation()
        setValues(
            state => state.includes(value) ?  
                state.filter(x => x !== value)
                : [...state, value]
        )
    }

    return (
        <motion.div 
            ref={ref} onClick={handleClick}
            className={`${styles.container} ${props.className}`}
            whileHover={{ borderColor: 'var(--orangeLight)'}}
            animate={{ height: active ? 250 : 54 }}
        >
            <motion.p className={styles.label}>{props.label}</motion.p>
            <FaChevronDown color={'var(--orangeLight)'} className={styles.icon}/>
            <motion.div animate={{ opacity: active ? 1 : 0 }} className={styles.divider}/>
            <motion.div className={styles.optionContainer} animate={{ height: active ? 190 : 0 }}>
                {showOptions && props.options.map(x => (
                    <motion.div 
                        className={styles.option} key={typeof x === 'string' ? x : x.value}
                        onClick={(e) => handleSelect(e, typeof x === 'string' ? x : x.value)}
                    >
                        <motion.p 
                            className={styles.optionLabel}
                            animate={{ opacity: active ? 1 : 0}}
                            whileHover={{ x: 6, fontWeight: '600' }}
                            whileTap={{ scale: 1.05 }}
                        >{typeof x === 'string' ? x : x.label}</motion.p>
                        <motion.span
                            style={{ marginRight: 16 }}
                            animate={{ 
                                scale: values.includes(typeof x === 'string' ? x : x.value) ? 1 : 0,
                                transition: { duration: .1 }
                            }}>
                            <IoCheckmark size={24} color={'var(--orangeLight)'} />
                        </motion.span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Select;
