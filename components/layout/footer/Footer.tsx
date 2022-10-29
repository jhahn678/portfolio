import React from "react";
import Image from "next/image";
import styles from './Footer.module.css'
import Line from "../line/Line";
import IconButton from "../../buttons/IconButton/IconButton";
import { BsEnvelope, BsPhone } from "react-icons/bs";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { ModalType, useModalStore } from "../../../hooks/useModalStore";
import { useMediaQuery } from "@mantine/hooks";

const Footer = () => {

  const setModal = useModalStore(store => store.setModal)
  const handlePhone = () => setModal(ModalType.Contact)

  const max1100 =  useMediaQuery('(max-width:1100px)')
  // const max400 = useMediaQuery('(max-width:400px)')

  return (
    <div className={styles.container}>
      <Image src={'/footer-rocket.svg'} height={max1100 ? 250 : 200} width={max1100 ? 420 : 335}/>
      <div className={styles.right}>
        <div>
          <h2 className={styles.name}>Julian Hahn</h2>
          <h3 className={styles.title}>Full-stack Engineer</h3>
        </div>
        <Line className={styles.line} color={'var(--orangeLight)'} 
          height={max1100 ? 5 : 100} width={max1100 ? 250 : 5}
        />
        <div className={styles.buttons}>
          <a href="https://github.com/jhahn678" target='_blank'>
            <IconButton icon={<IoLogoGithub size={32} color={'var(--orangeLight)'}/>}/>
          </a>
          <a href="https://www.linkedin.com/in/julian-hahn-440527232/" target='_blank'>
            <IconButton icon={<IoLogoLinkedin size={32} color={'var(--orangeLight)'}/>}/>
          </a>
          <IconButton icon={<BsPhone size={32} color={'var(--orangeLight)'}/>} onClick={handlePhone}/>
          <a href='mailto:jhahn678@yahoo.com'>
            <IconButton icon={<BsEnvelope size={32} color={'var(--orangeLight)'}/>}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
