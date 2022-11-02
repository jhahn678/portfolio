import styles from './ContactHeader.module.css'
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PlanetSvg from "../../../svg/PlanetSvg/PlanetSvg";
import HeaderDrawer from "../../HeaderDrawer/HeaderDrawer";
import { useMediaQuery } from '@mantine/hooks';
import NavLink from '../../../buttons/NavLink/NavLink';

const ContactHeader = () => {

    const router = useRouter()
    const minWidth850 = useMediaQuery('(min-width: 850px)')

    return (
        <header className={styles.container}>
            <div className='frac'>
                <PlanetSvg className={styles.planet} onClick={() => router.push('/')}/>
                <motion.h1 className={styles.current}>
                    Contact
                </motion.h1>
            </div>
            <HeaderDrawer breakpoint={850}/>
            {minWidth850 &&
                <div className={styles.links}>
                    <div className={styles.divider}/>
                    <NavLink label='Home' route='/'/>
                    <NavLink label='Projects' route='/project'/>
                    <NavLink label='Skills' route='/skills'/>
                    <NavLink label='About' route='/about'/>
                </div>
            } 
        </header>
    );
};

export default ContactHeader;
