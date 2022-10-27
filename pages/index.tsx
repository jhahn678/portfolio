import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ButtonFilled from '../components/buttons/ButtonFilled/ButtonFilled'
import ButtonOutlined from '../components/buttons/ButtonOutlined/ButtonOutlined'
import PlanetSvg from '../components/svg/PlanetSvg/PlanetSvg'
import styles from '../styles/Home.module.css'
import ScrollDownButton from '../components/buttons/ScrollDownButton/ScrollDownButton'
import { MouseEventHandler } from 'react'


const Home: NextPage = () => {

  const router = useRouter()

  const navigateContactMe = () => router.push('/contact')

  const handleScrollDown: MouseEventHandler<HTMLButtonElement> = () => window
    .scroll({ top: window.innerHeight, behavior: 'smooth' })

  return (
    <div className={styles.container}>
      <PlanetSvg className={styles.planet}/>
      <main className={styles.main}>
        <section className={styles.left}>
          <h1 className={styles.mainText}>
            Hello, I’m Julian. A <span className={styles.textGradient}>full-stack</span> web and mobile developer
          </h1>
          <div className={styles.buttonContainer}>
            <ButtonFilled className={styles.CTA}>See My Work</ButtonFilled>
            <ButtonOutlined onClick={navigateContactMe}>Contact Me</ButtonOutlined>
          </div>
        </section>
        <section className={styles.right}>
          <Image src={'/landing-page-graphic.svg'} layout='fill'/>
        </section>
        <ScrollDownButton className={styles.scrollDownButton} onClick={handleScrollDown}/>
      </main>
    </div>
  )
}

export default Home
