import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ButtonFilled from '../components/buttons/ButtonFilled/ButtonFilled'
import ButtonOutlined from '../components/buttons/ButtonOutlined/ButtonOutlined'
import PlanetSvg from '../components/svg/PlanetSvg/PlanetSvg'
import styles from '../styles/Home.module.css'
import ScrollDownButton from '../components/buttons/ScrollDownButton/ScrollDownButton'
import { MouseEventHandler } from 'react'
import { ModalType, useModalStore } from '../hooks/useModalStore'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import IconButton from '../components/buttons/IconButton/IconButton'
import { BsEnvelope, BsPhone } from 'react-icons/bs'
import ProjectsSection from '../components/layout/home/ProjectsSection/ProjectsSection'
import Modal from '../components/modal/Modal'


const Home: NextPage = () => {

  const router = useRouter()

  const navigateContactMe = () => router.push('/contact')

  const setModal = useModalStore(store => store.setModal)
  const handlePhone = () => setModal(ModalType.Contact)

  const handleScrollDown: MouseEventHandler<HTMLButtonElement> = () => {
    const y = window.innerHeight;
    window.scroll({ top: window.innerWidth > 550 ? y + 32 : y, behavior: 'smooth' })
  }

  return (
    <div style={{ backgroundColor: 'var(--black)'}}>
      <div className={styles.landing}>
        <section className={styles.left}>
          <header className={styles.header}>
            <PlanetSvg className={styles.planet}/>
            <a href="https://github.com/jhahn678" target='_blank'>
                <IconButton icon={<IoLogoGithub size={32} color={'var(--orangeLight)'}/>}/>
            </a>
            <a href="https://www.linkedin.com/in/julian-hahn-440527232/" target='_blank'>
                <IconButton icon={<IoLogoLinkedin size={32} color={'var(--orangeLight)'}/>}/>
            </a>
            <IconButton icon={<BsPhone size={32} color={'var(--orangeLight)'}/>} onClick={handlePhone}/>
            <a href='mailto:jhahn678@yahoo.com'>
                <IconButton icon={<BsEnvelope size={32} color={'var(--orangeLight)'}/>}/>
            </a>
          </header>
          <main className={styles.CTAgroup}>
            <h1 className={styles.mainText}>
              Hello, I’m Julian. A <span className={styles.textGradient}>full-stack</span> web and mobile developer
            </h1>
            <div className={styles.buttonContainer}>
              <ButtonFilled className={styles.CTA}>See My Work</ButtonFilled>
              <ButtonOutlined onClick={navigateContactMe}>Contact Me</ButtonOutlined>
            </div>
          </main>
          <ScrollDownButton className={styles.scrollDownButton} onClick={handleScrollDown}/>
        </section>
        <section className={styles.right}>
          <Image src={'/landing-page-graphic.svg'} layout='fill'/>
        </section>
      </div>
      <ProjectsSection/>
    </div>
  )
}

export default Home











{/* <Comet order={1} startX={300}/>
    <Comet order={2} startX={-100}/>
    <Comet order={3} startX={-200}/>
    <Comet order={4} startX={400}/>
    <Comet order={5} startX={-500}/>
    <Comet order={6} startX={800}/>
    <Comet order={7} startX={500}/>
    <Comet order={8} startX={300}/>
    <Comet order={9} startX={600}/>
    <Comet order={10} startX={0}/>
    <Comet order={11} startX={-400}/> */}
