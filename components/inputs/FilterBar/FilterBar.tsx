import React, { useEffect, useRef, useState } from "react";
import styles from './FilterBar.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import Chip from "../../buttons/Chip/Chip";
import { IoCheckmark } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

type Option = ({ value: string, label: string} | string)

interface Props{
    options: Option[] | undefined
    selected: string[]
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
    totalResults: number | undefined
    containerClass?: string
    label: string
}
const getLabel = (x: Option) => typeof x === 'string' ? x : x.label;
const getValue = (x: Option) => typeof x === 'string' ? x : x.value;

const FilterBar = ({ options=[], totalResults=0, ...props }: Props) => {

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
        props.setSelected(
            state => state.includes(value) ?  
                state.filter(x => x !== value)
                : [...state, value]
        )
    }

    return (
        <motion.div className={`${styles.container} ${props.containerClass}`}>
            <div className={styles.inputWrapper}>
                <motion.div 
                    ref={ref} onClick={handleClick}
                    className={styles.input}
                    whileHover={{ borderColor: 'var(--orangeLight)' }}
                    animate={{ height: active ? 250 : 54 }}
                >
                    <div className={styles.labelContainer}>
                        <p className={styles.label}>{props.label}</p>
                        <FaChevronDown color={'var(--orangeLight)'} className={styles.icon}/>
                    </div>
                    <motion.div animate={{ opacity: active ? 1 : 0 }} className={styles.divider}/>
                    <motion.div className={styles.optionContainer}>
                    {showOptions && options.map(x => (
                        <motion.div 
                            className={styles.option} key={getValue(x)}
                            onClick={(e) => handleSelect(e, getValue(x))}
                        >
                            <motion.p 
                                className={styles.optionLabel}
                                animate={{ opacity: active ? 1 : 0}}
                                whileHover={{ x: 6, fontWeight: '600' }}
                                whileTap={{ scale: 1.05 }}
                            >{getLabel(x)}</motion.p>
                            <motion.span
                                style={{ marginRight: 16 }}
                                animate={{ 
                                    scale: props.selected.includes(getLabel(x)) ? 1 : 0,
                                    transition: { duration: .1 }
                                }}>
                                <IoCheckmark size={24} color={'var(--orangeLight)'} />
                            </motion.span>
                        </motion.div>
                    ))}
                    </motion.div>
                </motion.div>
            </div>
            <AnimatePresence>
                {props.selected.length && props.selected.map(x => (
                    <Chip key={x} label={x} className={styles.chip} 
                        onRemove={() => props.setSelected(state => state.filter(y => y !== x))}
                    />
                ))}
            </AnimatePresence>
            {props.selected.length === 0 &&
                <motion.p 
                    className={styles.placeholder} 
                    initial={{ opacity: 0, scaleY: 0 }} 
                    animate={{ opacity: 1, scaleY: 1, transition: { delay: .2 }}}>
                    Showing {totalResults} results
                </motion.p>
            }
        </motion.div>
    );
};

export default FilterBar;
