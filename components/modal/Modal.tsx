import React, { useEffect, useRef, useState } from "react";
import styles from './Modal.module.css'
import { createPortal } from "react-dom";
import { useModalStore } from "../../hooks/useModalStore";
import ButtonFilled from "../buttons/ButtonFilled/ButtonFilled";
import { motion } from 'framer-motion'

const Modal = () => {

    const ref = useRef<HTMLElement | null>(null)
    useEffect(() => { ref.current = document.getElementById('modal') },[])
    const { visible, title, body, setModal } = useModalStore()

    if(!ref.current || !visible) return null;

    return createPortal(
        <motion.div 
            className={styles.backdrop} 
            initial={{ opacity: 0}} 
            animate={{ opacity: 1, transition: { duration: .2 }}}
            onClick={() => setModal(null)}
        >
            <div className={styles.container} onClick={e => e.stopPropagation()}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.body}>{body}</p>
                <ButtonFilled 
                    disableHoverColor={true}
                    hoverScale={1.03}
                    height={48}
                    className={styles.button}
                    onClick={() => setModal(null)}
                >Close</ButtonFilled>
            </div>
        </motion.div>,
    ref.current)
};

export default Modal;
