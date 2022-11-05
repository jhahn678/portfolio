import React from "react";
import { BsEnvelope, BsPhone } from "react-icons/bs";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { useModalStore } from "../../../hooks/useModalStore";
import { ModalType } from "../../../utils/modalContent";
import IconButton from "../IconButton/IconButton";
import styles from './ContactButtons.module.css'

interface Props{
    className?: string | undefined
}

const ContactButtons = ({ className }: Props) => {

    const setModal = useModalStore(store => store.setModal)
    const handlePhone = () => setModal(ModalType.Contact)
    
  return (
    <div className={`${styles.iconButtonContainer} ${className}`}>
        <a href="https://github.com/jhahn678" target='_blank' rel="noreferrer">
            <IconButton 
            icon={<IoLogoGithub size={32} color={'var(--orangeLight)'}/>}
            />
        </a>
        <a href="https://www.linkedin.com/in/julian-hahn-440527232/" target='_blank' rel="noreferrer">
            <IconButton 
            icon={<IoLogoLinkedin size={32} color={'var(--orangeLight)'}/>}
            />
        </a>
        <IconButton 
            icon={<BsPhone size={32} color={'var(--orangeLight)'}/>} 
            onClick={handlePhone}
        />
        <a href='mailto:jhahn678@yahoo.com'>
            <IconButton 
            icon={<BsEnvelope size={32} color={'var(--orangeLight)'}/>}
            />
        </a>
    </div> 
  );
};

export default ContactButtons;
