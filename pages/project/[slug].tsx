import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TechCard from '../../components/cards/TechCard/TechCard'
import styles from '../../styles/Project.module.css'
import { MdWeb } from 'react-icons/md'
import { IProject, StackItem } from '../../types/Project'
import IconButton from '../../components/buttons/IconButton/IconButton'
import { IoLogoGithub, IoLogoGooglePlaystore } from 'react-icons/io5'
import { GrAppleAppStore } from 'react-icons/gr'
import Line from '../../components/layout/line/Line'
import axios from '../../config/axios'

const Project: NextPage<IProject> = (props) => {

  return (
    <div className={styles.container}>
      <Head><title>{props.title} -- Julian Hahn</title></Head>
      <section className={styles.left}>
        <div className='fc'>
          <h1 className={styles.title}>{props.title}</h1>
          <div className={styles.typeGroup}>
            <h3 className={styles.type}>{props.type}</h3>
            <div className={styles.buttons}>
              <a href={props.github || undefined} target='_blank'>
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

interface PathsRes {
  data: { 
    projectCollection: {
      items: Pick<IProject, 'slug'>[]
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = "query{projectCollection{items{slug}}}";
  const res = await axios.post<PathsRes>(process.env.CONTENTFUL_GRAPH_URL!, { query })
  return {
    paths: res.data.data.projectCollection.items.map(x => ({ params: { slug: x.slug }})),
    fallback: false
  }
}

interface PropsRes{
  data: {
    projectCollection: {
      items: IProject[]
    }
  }
}

export const getStaticProps: GetStaticProps<IProject, { slug: string }> = async ({ params }) => {
  const query = `query{projectCollection(where:{slug:"${params?.slug}"}){items{sys{id},title,type,description,thumbnail,web,github,apple,playstore,stack,tags,slug,body{json}}}}`
  const res = await axios.post<PropsRes>(process.env.CONTENTFUL_GRAPH_URL!, { query })
  return { props: { ...res.data.data.projectCollection.items[0] } }
}

export default Project