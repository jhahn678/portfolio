import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import TechCard from '../../components/cards/TechCard/TechCard'
import styles from '../../styles/Project.module.css'
import { MdWeb } from 'react-icons/md'
import { IProject, StackItem } from '../../types/Project'
import projects from '../../public/projects.json'
const data = projects as unknown as IProject[];
import IconButton from '../../components/buttons/IconButton/IconButton'
import { IoLogoGithub, IoLogoGooglePlaystore } from 'react-icons/io5'
import { GrAppleAppStore } from 'react-icons/gr'
import Line from '../../components/layout/line/Line'

const Project: NextPage<IProject> = (props) => {

  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>{props.sys.id} -- Julian Hahn</title>
      </Head>
      <section className={styles.left}>
        <div className='fc'>
          <h1 className={styles.title}>{props.title}</h1>
          <div className={styles.typeGroup}>
            <h3 className={styles.type}>{props.type}</h3>
            <div className={styles.buttons}>
              <a href={props.github} target='_blank'>
                  <IconButton small icon={<IoLogoGithub size={24} color={'var(--orangeLight)'}/>}/>
              </a>
              {props.web &&
                <a href={props.web} target='_blank'>
                  <IconButton small icon={<MdWeb size={24} color={'var(--orangeLight)'}/>}/>
                </a>
              }
              {props.apple && 
                <a href={props.apple} target='_blank'>
                    <IconButton small icon={<GrAppleAppStore size={24} color={'var(--orangeLight)'}/>}/>
                </a>
              }
              {props.playstore && 
                <a href={props.playstore} target='_blank'>
                  <IconButton small icon={<IoLogoGooglePlaystore size={24} color={'var(--orangeLight)'} style={{ transform: 'translate(2px, 2px)' }}/>}/>
                </a>
              }
            </div>
          </div>
          <Line height={3} width={'65%'} color={'var(--orangeLight)'} className={styles.hline}/>
          <p className={styles.description}>{props.description}</p>
          <Line height={3} width={'85%'} color={'var(--orangeLight)'} className={styles.hline}/>
          <h4 className={styles.subtitle}>Technologies</h4>
          <div className={styles.techContainer}>
            { props.stack.map(x => <TechCard label={x as StackItem}/>)}
          </div>
        </div>
      </section>
      <section className={styles.right}>
        <div className={styles.image}>
          <Image src={props.thumbnail} layout='fill' objectFit='cover'/>
        </div>
      </section>
    </div>
  )
}

export const  getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: data.map(x => ({ params: { id: x.sys.id }})),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<IProject, { id: string }> = async ({ params }) => {
  return {
    props: {
      ...data.find(x => x.sys.id === params?.id),
    } as IProject,

  }
}

export default Project