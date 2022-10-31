import styles from './TechCard.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from "react";
import { StackItem } from '../../../types/Project';
import { stackItemToLogo } from '../../../utils/techStackLogo' 
import { Tooltip } from '@mantine/core';

interface Props{
    label: StackItem
    size?: number
}

const TechCard = ({ label, size=54 }: Props) => {

    return (
        <Tooltip label={label}>
            <motion.div className={styles.container}>
                <Image src={require(`/public/${stackItemToLogo(label)}.svg`)} height={size} width={size}/>
            </motion.div>
        </Tooltip>
    );
};

export default TechCard;
