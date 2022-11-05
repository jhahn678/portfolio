import React from "react";
import styles from '../../styles/Skills.module.css'
import { NextPage } from "next";
import Image from "next/image";
import Card from "../../components/cards/Card/Card";
import { HiOutlineDownload } from "react-icons/hi";
import TechCard from "../../components/cards/TechCard/TechCard";
import { useMediaQuery } from "@mantine/hooks";
import SkillsHeader from "../../components/layout/headers/SkillsHeader/SkillsHeader";

const SkillsPage: NextPage = () => {

    const breakpoint1050 = useMediaQuery('(max-width: 1050px)')
    const breakpoint525 = useMediaQuery('(max-width: 525px)')
    const breakpoint400 = useMediaQuery('(max-width: 400px)')
    
    return(
        <div className={styles.container}>
            <SkillsHeader/>
            <div className={styles.skills}>
                <div className={styles.left}>
                    <div className={styles.cardRow}>
                        <TechCard label={"AWS"} size={breakpoint1050 ? 40 : undefined}/>
                        <TechCard label={"React Native"} size={breakpoint1050 ? 40 : undefined}/>
                        <TechCard label={"TypeScript"} size={breakpoint1050 ? 40 : undefined}/>
                    </div>
                    <div className={styles.cardRow}>
                        <TechCard label={"Google Cloud"} size={breakpoint1050 ? 40 : undefined}/>
                        <TechCard label={"Apollo"} size={breakpoint1050 ? 40 : undefined}/>
                        <TechCard label={"PostgreSQL"} size={breakpoint1050 ? 40 : undefined}/>
                        {!breakpoint400 && <TechCard label={"MongoDB"} size={breakpoint1050 ? 40 : undefined}/>}
                    </div>
                    <div className={styles.cardRow}>
                        <TechCard label={"Mapbox"} size={breakpoint1050 ? 40 : undefined}/>
                        <TechCard label={"Contentful"} size={breakpoint1050 ? 40 : undefined}/>
                        {!breakpoint525 && <TechCard label={"HTML & CSS"} size={breakpoint1050 ? 40 : undefined}/>}
                        <TechCard label={"Redis"} size={breakpoint1050 ? 40 : undefined}/>
                        {!breakpoint400 && <TechCard label={"Redux"} size={breakpoint1050 ? 40 : undefined}/>}
                    </div>
                    <div className={styles.cardRow}>
                        <TechCard label={"Node"} size={breakpoint1050 ? 40 : undefined}/>
                        <TechCard label={"Jest"} size={breakpoint1050 ? 40 : undefined}/>
                        <TechCard label={"Pandas"} size={breakpoint1050 ? 40 : undefined}/>
                        {!breakpoint400 && <TechCard label={"Expo"} size={breakpoint1050 ? 40 : undefined}/>}
                    </div>
                    {breakpoint400 &&
                        <div className={styles.cardRow}>
                            <TechCard label={"Redux"} size={breakpoint1050 ? 40 : undefined}/>
                            <TechCard label={"MongoDB"} size={breakpoint1050 ? 40 : undefined}/>
                            <TechCard label={"Expo"} size={breakpoint1050 ? 40 : undefined}/>
                        </div>
                    }
                    <div className={styles.cardRow}>
                        <TechCard label={"GraphQL"} size={breakpoint1050 ? 40 : undefined}/>
                        <TechCard label={"Firebase"} size={breakpoint1050 ? 40 : undefined}/>
                        <TechCard label={"React-Query"} size={breakpoint1050 ? 40 : undefined}/>
                    </div>
                </div>
                <div className={styles.right}>
                    <h3 className={styles.heading}>Some of my <span className='text-gradient'>skills.</span></h3>
                    <p className={styles.text}>
                        I pride myself on being a fast and flexible learner. An opportunity 
                        to explore a new stack is an opportunity for me to broaden my horizons 
                        as a developer. These are a handful of the  technologies I currently 
                        have experience with, but I&apos;m always eager to dive into the deep end with more!
                    </p>
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
        </div>
    );
};

export default SkillsPage;
