import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import React from "react";
import Card from "../../../cards/Card/Card";
import TechCard from "../../../cards/TechCard/TechCard";
import styles from './ResumeSection.module.css'
import { HiOutlineDownload } from 'react-icons/hi'
import { motion, Variants } from 'framer-motion'

const containerVariants: Variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: .1
        }
    }
}

const cardVariants: Variants = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1
    }
}

const ResumeSection = () => {

    const breakpoint1050 = useMediaQuery('(max-width: 1050px)')
    const breakpoint525 = useMediaQuery('(max-width: 525px)')
    const breakpoint400 = useMediaQuery('(max-width: 400px)')

  return(
    <section className={styles.container}>
        <div className={styles.skills}>
            <motion.div 
                className={styles.left} 
                initial={'initial'} 
                whileInView={'animate'} 
                viewport={{ once: true }} 
                variants={containerVariants}
            >
                <div className={styles.cardRow}>
                    <TechCard variants={cardVariants} label={"AWS"} size={breakpoint1050 ? 40 : undefined}/>
                    <TechCard variants={cardVariants} label={"React Native"} size={breakpoint1050 ? 40 : undefined}/>
                    <TechCard variants={cardVariants} label={"TypeScript"} size={breakpoint1050 ? 40 : undefined}/>
                </div>
                <div className={styles.cardRow}>
                    <TechCard variants={cardVariants} label={"Google Cloud"} size={breakpoint1050 ? 40 : undefined}/>
                    <TechCard variants={cardVariants} label={"Apollo"} size={breakpoint1050 ? 40 : undefined}/>
                    <TechCard variants={cardVariants} label={"PostgreSQL"} size={breakpoint1050 ? 40 : undefined}/>
                    {!breakpoint400 && <TechCard variants={cardVariants} label={"MongoDB"} size={breakpoint1050 ? 40 : undefined}/>}
                </div>
                <div className={styles.cardRow}>
                    <TechCard variants={cardVariants} label={"Mapbox"} size={breakpoint1050 ? 40 : undefined}/>
                    <TechCard variants={cardVariants} label={"Contentful"} size={breakpoint1050 ? 40 : undefined}/>
                    {!breakpoint525 && <TechCard variants={cardVariants} label={"HTML & CSS"} size={breakpoint1050 ? 40 : undefined}/>}
                    <TechCard variants={cardVariants} label={"Redis"} size={breakpoint1050 ? 40 : undefined}/>
                    {!breakpoint400 && <TechCard variants={cardVariants} label={"Redux"} size={breakpoint1050 ? 40 : undefined}/>}
                </div>
                <div className={styles.cardRow}>
                    <TechCard variants={cardVariants} label={"Node"} size={breakpoint1050 ? 40 : undefined}/>
                    <TechCard variants={cardVariants} label={"Jest"} size={breakpoint1050 ? 40 : undefined}/>
                    <TechCard variants={cardVariants} label={"Pandas"} size={breakpoint1050 ? 40 : undefined}/>
                    {!breakpoint400 && <TechCard variants={cardVariants} label={"Expo"} size={breakpoint1050 ? 40 : undefined}/>}
                </div>
                {breakpoint400 &&
                    <div className={styles.cardRow}>
                        <TechCard variants={cardVariants} label={"Redux"} size={breakpoint1050 ? 40 : undefined}/>
                        <TechCard variants={cardVariants} label={"MongoDB"} size={breakpoint1050 ? 40 : undefined}/>
                        <TechCard variants={cardVariants} label={"Expo"} size={breakpoint1050 ? 40 : undefined}/>
                    </div>
                }
                <div className={styles.cardRow}>
                    <TechCard variants={cardVariants} label={"GraphQL"} size={breakpoint1050 ? 40 : undefined}/>
                    <TechCard variants={cardVariants} label={"Firebase"} size={breakpoint1050 ? 40 : undefined}/>
                    <TechCard variants={cardVariants} label={"React-Query"} size={breakpoint1050 ? 40 : undefined}/>
                </div>
            </motion.div>
            <div className={styles.right}>
                <h3 className={styles.heading}>Some of my <span className="text-gradient">skills.</span></h3>
                <p className={styles.text}>{`
                    I pride myself on being a fast and flexible learner. An opportunity 
                    to explore a new stack is an opportunity for me to broaden my horizons 
                    as a developer. These are a handful of the  technologies I currently 
                    have experience with, but I’m always eager to dive into the deep end with more!
                `}</p>
            </div>
        </div>
        <div className={styles.resume}>
            <div className={styles.resumeContent}>
                <h3 className={styles.resumeHeading}>Resume.</h3>
                <p className={styles.resumeText}>
                    Looking for an official resume? Download a copy here
                </p>
            </div>
            {!breakpoint1050 && <Image src={'/arrow.svg'} height={150} width={170}/>}
            <a href='https://julian-hahn-portfolio.s3.amazonaws.com/Julian-Hahn-Resume.pdf' download target={'_blank'} rel="noreferrer">
                <Card className={styles.card} whileHover={{ scale: 1.05 }} whileTap={{ scale: .98 }}>
                    <h2 className={styles.cardHeader}>Download Resume</h2>
                    <HiOutlineDownload size={36}/>
                </Card>
            </a>
        </div>
    </section>
);
};

export default ResumeSection;