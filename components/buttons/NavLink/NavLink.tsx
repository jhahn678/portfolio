import { useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion'
import styles from './NavLink.module.css'

interface Props{
    label: string
    route: string
}

const NavLink = ({ label, route }: Props) => {

    const [hover, setHover] = useState(false)

    return (
        <Link href={route}>
            <motion.div 
                className={styles.container}
                onHoverStart={() => setHover(true)} 
                onHoverEnd={() => setHover(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: .98 }}
            >
                <p className={styles.label}>{label}</p>
                <motion.div 
                    className={styles.underline}
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: hover ? 1 : 0 }}
                />
            </motion.div>
        </Link>
    );
};

export default NavLink;
