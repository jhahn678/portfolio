import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PlanetSvg from "../../svg/PlanetSvg/PlanetSvg";
import styles from './Header.module.css'
import HeaderDrawer from "../HeaderDrawer/HeaderDrawer";

const Header = () => {

  const router = useRouter()
  const minWidth850 = useMediaQuery('(min-width: 850px)')
  
  return (
    <header className={styles.container}>
      <PlanetSvg className={styles.planet} onClick={() => router.push('/')}/>
      <HeaderDrawer breakpoint={850}/>
      {minWidth850 &&
        <div className={styles.links}>
          <Link href={'/project'}>
            <motion.p 
              className={styles.link} 
              whileHover={{ scale: 1.05 }}
              animate={{ borderBottomWidth: router.pathname === '/project' ? 3 : 0 }}
            >Projects</motion.p></Link>
          <Link href={'/about'}>
            <motion.p 
              className={styles.link} 
              animate={{ borderBottomWidth: router.pathname === '/about' ? 3 : 0 }}
              whileHover={{ scale: 1.05 }}
            >About</motion.p>
          </Link>
          <Link href={'/contact'}>
            <motion.p 
              className={styles.link} 
              whileHover={{ scale: 1.05 }}
              animate={{ borderBottomWidth: router.pathname === '/contact' ? 3 : 0 }}
            >Contact</motion.p>
          </Link>
          <Link href={'/resume'}>
            <motion.p 
              className={styles.link}
              whileHover={{ scale: 1.05 }}
              animate={{ borderBottomWidth: router.pathname === '/resume' ? 3 : 0 }}
            >Resume</motion.p>
          </Link>
        </div>
      } 
    </header>
  );
};

export default Header;
