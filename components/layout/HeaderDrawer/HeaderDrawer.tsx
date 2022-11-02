import styles from './HeaderDrawer.module.css'
import { Drawer } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsEnvelope, BsPhone } from "react-icons/bs";
import { IoClose, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { ModalType, useModalStore } from "../../../hooks/useModalStore";
import IconButton from "../../buttons/IconButton/IconButton";
import PlanetSvg from '../../svg/PlanetSvg/PlanetSvg';
import { borderBottomColor } from '@mui/system';

interface Props{
    breakpoint: number
}

const HeaderDrawer = ({ breakpoint }: Props) => {

    const router = useRouter()
    const setModal = useModalStore(store => store.setModal)
    const handlePhone = () => setModal(ModalType.Contact)

    const [opened, setOpened] = useState(false)

    const mediaQuery = useMediaQuery(`(min-width: ${breakpoint}px)`)
    const minWidth380 = useMediaQuery(`(min-width: 380px)`)
    
    if(mediaQuery) return null;
    
    return (
        <>
            <div className={styles.menu} onClick={() => setOpened(true)}>
                <BiMenuAltRight size={40} color={'var(--orangeLight)'}/>
            </div>
            <Drawer 
                opened={opened} 
                withCloseButton={false}
                onClose={() => setOpened(false)} 
                styles={{ drawer: { 
                backgroundColor: "var(--orangeLight)", 
                maxWidth: 500, 
                width: "100%",
                borderBottomRightRadius: minWidth380 ? 200 : 0
                }}}
            >
                <div className={styles.drawerHeader}>
                    <PlanetSvg className={styles.planet} onClick={() => router.push('/')}/>
                    <div className={styles.menuClose} onClick={() => setOpened(false)}>
                        <IoClose size={40} color={'var(--black)'}/>
                    </div>
                </div>
                <Link href={'/'}>
                    <motion.p 
                        className={styles.menuItem}
                        animate={{ 
                            color: router.pathname === '/' ? 'var(--orange)' : 'var(--black)',
                            borderBottomColor: router.pathname === '/' ? 'var(--orange)' : 'var(--black)'
                        }}
                    >Home</motion.p>
                </Link>
                <Link href={'/project'}>
                    <motion.p 
                        className={styles.menuItem}
                        animate={{ 
                            color: router.pathname === '/project' ? 'var(--orange)' : 'var(--black)',
                            borderBottomColor: router.pathname === '/project' ? 'var(--orange)' : 'var(--black)'
                        }}
                    >Projects</motion.p>
                </Link>
                <Link href={'/skills'}>
                    <motion.p 
                        className={styles.menuItem}
                        animate={{
                            color: router.pathname === '/skills' ? 'var(--orange)' : 'var(--black)',
                            borderBottomColor: router.pathname === '/skills' ? 'var(--orange)' : 'var(--black)'
                        }}
                    >Skills</motion.p>
                </Link>
                <Link href={'/contact'}>
                    <motion.p 
                        className={styles.menuItem}
                        animate={{
                            color: router.pathname === '/contact' ? 'var(--orange)' : 'var(--black)',
                            borderBottomColor: router.pathname === '/contact' ? 'var(--orange)' : 'var(--black)'
                        }}
                    >Contact</motion.p>
                </Link>
                <Link href={'/about'}>
                    <motion.p 
                        className={styles.menuItem}
                        animate={{
                            color: router.pathname === '/about' ? 'var(--orange)' : 'var(--black)',
                            borderBottomColor: router.pathname === '/about' ? 'var(--orange)' : 'var(--black)'
                        }}
                    >About</motion.p>
                </Link>
                <div className={styles.drawerIconContainer}>
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
            </Drawer>
        </>
    );
};

export default HeaderDrawer;
