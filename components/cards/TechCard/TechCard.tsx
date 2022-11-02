import styles from './TechCard.module.css'
import { HTMLMotionProps, motion } from 'framer-motion'
import Image from 'next/image'
import React from "react";
import { StackItem } from '../../../types/Project';
import { stackItemToLogo } from '../../../utils/techStackLogo' 
import { Tooltip } from '@mantine/core';

interface Props extends HTMLMotionProps<'div'>{
    label: StackItem
    /** @default 54 */
    size?: number
}

const TechCard = ({ label, size=54, className, ...props }: Props) => {

    return (
        <Tooltip label={label}>
            <motion.div className={`${styles.container} ${className}`} whileHover={{ scale: 1.1 }} {...props}>
                <Image 
                    src={require(`/public/${stackItemToLogo(label)}.svg`)} 
                    height={size} 
                    width={size}
                    style={{ transform: label === 'HTML & CSS' ? 'scale(1.1)': undefined}}
                />
            </motion.div>
        </Tooltip>
    );
};

export default TechCard;
