import styles from './AboutHeader.module.css'
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import NavLink from "../../../buttons/NavLink/NavLink";
import PlanetSvg from "../../../svg/PlanetSvg/PlanetSvg";
import HeaderDrawer from "../../HeaderDrawer/HeaderDrawer";

const AboutHeader = () => {
    
    const router = useRouter()
    const minWidth850 = useMediaQuery('(min-width: 850px)')

    return (
        <header className={styles.container}>
            <div className='frac'>
                <PlanetSvg className={styles.planet} onClick={() => router.push('/')}/>
                <motion.h1 className={styles.current}>
                    About
                </motion.h1>
            </div>
            <HeaderDrawer breakpoint={850}/>
            {minWidth850 &&
                <div className={styles.links}>
                    <div className={styles.divider}/>
                    <NavLink label='Home' route='/'/>
                    <NavLink label='Projects' route='/project'/>
                    <NavLink label='Contact' route='/contact'/>
                    <NavLink label='Skills' route='/skills'/>
                </div>
            } 
        </header>
    );
};

export default AboutHeader;
