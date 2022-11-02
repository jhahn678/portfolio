import React from "react";
import styles from '../../styles/About.module.css'
import Image from "next/image";
import AboutHeader from "../../components/layout/headers/AboutHeader/AboutHeader";
import Card from "../../components/cards/Card/Card";
import { useMediaQuery } from "@mantine/hooks";
import { BiMessageDetail } from "react-icons/bi";

const AboutPage = () => {

    const breakpoint1050 = useMediaQuery('(max-width: 1050px)')

    return(
        <div className={styles.page}>
            <AboutHeader/>
            <section className={styles.container}>
                <div className={styles.left}>
                    <h3 className={styles.headingLeft}>A little about <span className='text-gradient'>me.</span></h3>
                    <p className={styles.textLeft}>
                        I’m Julian Hahn, a 25-year-old, self-taught, full-stack developer with 
                        about two years of experience. Most of that time was in the JavaScript 
                        ecosystem, but I’ve also used languages such as Python, Java, and Visual C++. 
                    </p>
                    <p className={styles.textLeft}>
                        I’ve designed a wide-variety of projects; Ecommerce systems, Social-media 
                        applications, GeoJSON API’s, to my current project and start-up, 
                        Heron, a native mobile application.
                    </p>
                </div>
                <div className={styles.right}>
                    <figure className={styles.figureOne}>
                        <Image src={'https://julian-hahn-portfolio.s3.amazonaws.com/DSC02777.jpg'} 
                            layout='fill' objectFit="cover" style={{ borderRadius: 16 }}
                            alt={'A picture of me in Grand Teton National Park'}/>
                        <figcaption className={styles.figureOneCaption}>Me in Grand Teton National Park - September 2021</figcaption>
                    </figure>
                </div>
                <div className={styles.divider}/>
                <div className={styles.left}>
                    <figure className={styles.figureTwo}>
                        <Image src={'https://julian-hahn-portfolio.s3.amazonaws.com/images-2021.png'}
                            layout='fill' objectFit="contain" style={{ borderRadius: 16 }}
                            alt={'A couple of my favorite photographs from 2021'}/>
                    </figure>
                </div>
                <div className={styles.right}>
                    <h3 className={styles.headingRight}>Outside of work.</h3>
                    <p className={styles.textRight}>
                        When I’m not honing my skills as a developer, I spend most of my time running, 
                        fishing, climbing, kayaking, backbacking, and anything else active that takes 
                        place outside! I also love landscape photography. I’ve spent several summers 
                        over the past few years taking long backpacking/photography trips. 
                    </p>
                </div>
            </section>
            <section className={styles.contact}>
                <div className={styles.contactContent}>
                        <h3 className={styles.contactHeading}>Want to know more?</h3>
                        <p className={styles.contactText}>
                           Feel free to reach out by phone, email or LinkedIn, below. You can also click here to find the contact page!
                        </p>
                    </div>
                    {!breakpoint1050 && <Image src={'/arrow-two.svg'} height={220} width={220} className={styles.arrow}/>}
                    <a href='https://julian-hahn-portfolio.s3.amazonaws.com/Julian-Hahn-Resume.pdf' download target={'_blank'}>
                        <Card className={styles.card} whileHover={{ scale: 1.05 }} whileTap={{ scale: .98 }}>
                            <h2 className={styles.cardHeader}>Contact Me</h2>
                            <BiMessageDetail size={36}/>
                        </Card>
                    </a>
            </section>
        </div>
    );
};

export default AboutPage;
