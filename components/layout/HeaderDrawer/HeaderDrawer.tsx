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
                    backgroundColor: "var(--black)", 
                    maxWidth: 500, 
                    width: "100%",
                    borderWidth: 0,
                    borderRightWidth: 5,
                    borderBottomWidth: 5,
                    borderStyle: 'solid',
                    borderColor: 'var(--orange)',
                    borderBottomRightRadius: minWidth380 ? 200 : 0,
                    filter: 'var(--orangeDropShadow)'
                }}}
            >
                <div className={styles.drawerHeader}>
                    <PlanetSvg className={styles.planet} onClick={() => router.push('/')}/>
                    <div className={styles.menuClose} onClick={() => setOpened(false)}>
                        <IoClose size={40} color={'var(--orangeLight)'}/>
                    </div>
                </div>
                <ul style={{ padding: 0, margin: 0 }}>
                    <Link href={'/'}>
                        <motion.li 
                            className={styles.menuItem}
                            whileHover={{ x: 8 }}
                            animate={{ 
                                color: router.pathname === '/' ? 'var(--orangeLight)' : 'var(--orange)',
                                borderBottomColor: router.pathname === '/' ? 'var(--orangeLight)' : undefined
                            }}
                        >Home</motion.li>
                    </Link>
                    <Link href={'/project'}>
                        <motion.li 
                            className={styles.menuItem}
                            whileHover={{ x: 8 }}
                            animate={{ 
                                color: router.pathname === '/project' ? 'var(--orangeLight)' : 'var(--orange)',
                                borderBottomColor: router.pathname === '/project' ? 'var(--orangeLight)' : undefined
                            }}
                        >Projects</motion.li>
                    </Link>
                    <Link href={'/skills'}>
                        <motion.li 
                            className={styles.menuItem}
                            whileHover={{ x: 8 }}
                            animate={{
                                color: router.pathname === '/skills' ? 'var(--orangeLight)' : 'var(--orange)',
                                borderBottomColor: router.pathname === '/skills' ? 'var(--orangeLight)' : undefined
                            }}
                        >Skills</motion.li>
                    </Link>
                    <Link href={'/contact'}>
                        <motion.li 
                            className={styles.menuItem}
                            whileHover={{ x: 8 }}
                            animate={{
                                color: router.pathname === '/contact' ? 'var(--orangeLight)' : 'var(--orange)',
                                borderBottomColor: router.pathname === '/contact' ? 'var(--orangeLight)' : undefined
                            }}
                        >Contact</motion.li>
                    </Link>
                    <Link href={'/about'}>
                        <motion.li 
                            className={styles.menuItem}
                            whileHover={{ x: 8 }}
                            animate={{
                                color: router.pathname === '/about' ? 'var(--orangeLight)' : 'var(--orange)',
                                borderBottomColor: router.pathname === '/about' ? 'var(--orangeLight)' : undefined
                            }}
                        >About</motion.li>
                    </Link>
                </ul>
                <div className={styles.drawerIconContainer}>
                <a href="https://github.com/jhahn678" target='_blank' rel="noreferrer">
                    <IconButton icon={<IoLogoGithub size={32} color={'var(--orangeLight)'}/>}/>
                </a>
                <a href="https://www.linkedin.com/in/julian-hahn-440527232/" target='_blank' rel="noreferrer">
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
