import Image from "next/image";
import ButtonFilled from "../../../buttons/ButtonFilled/ButtonFilled";
import ButtonOutlined from "../../../buttons/ButtonOutlined/ButtonOutlined";
import PlanetSvg from "../../../svg/PlanetSvg/PlanetSvg";
import styles from './LandingSection.module.css'
import { useRouter } from "next/router";
import ContactButtons from "../../../buttons/ContactButtons/ContactButtons";
import HeaderDrawer from "../../HeaderDrawer/HeaderDrawer";
import NavLink from "../../../buttons/NavLink/NavLink";
import { useMediaQuery } from "@mantine/hooks";

const LandingSection = () => {

    const router = useRouter()
    const minWidth850 = useMediaQuery('(min-width: 850px)')
    const navigateContactMe = () => router.push('/contact')
    const navigateProjects = () => router.push('/project')

    return (
        <div className={styles.landing}>
            <section className={styles.left}>
                <header className={styles.header}>
                    <PlanetSvg className={styles.planet}/>
                    <HeaderDrawer breakpoint={850}/>
                    {minWidth850 &&
                        <div className={styles.links}>
                            <div className={styles.divider}/>
                            <NavLink label='Projects' route='/project'/>
                            <NavLink label='Skills' route='/skills'/>
                            <NavLink label='Contact' route='/contact'/>
                            <NavLink label='About' route='/about'/>
                        </div>
                    }
                </header>
                <main className={styles.CTAgroup}>
                    <h1 className={styles.mainText}>
                        Hello, I’m Julian. A <span className={styles.textGradient}>full-stack</span> web and mobile developer
                    </h1>
                    <div className={styles.buttonContainer}>
                    <ButtonFilled className={styles.CTA} onClick={navigateProjects}>See My Work</ButtonFilled>
                    <ButtonOutlined onClick={navigateContactMe}>Contact Me</ButtonOutlined>
                    </div>
                </main>
                <ContactButtons/>
            </section>
            <section className={styles.right}>
                <Image src={'/landing-page-graphic.svg'} layout='fill'/>
            </section>
        </div>
    );
};

export default LandingSection;
