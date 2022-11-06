import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TechCard from '../../components/cards/TechCard/TechCard'
import styles from '../../styles/Project.module.css'
import { MdWeb } from 'react-icons/md'
import { IProject, IProjectRichText, StackItem } from '../../types/Project'
import IconButton from '../../components/buttons/IconButton/IconButton'
import { IoLogoGithub, IoLogoGooglePlaystore } from 'react-icons/io5'
import { GrAppleAppStore } from 'react-icons/gr'
import Line from '../../components/layout/line/Line'
import axios from '../../config/axios'
import { documentToReactComponents,  } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, Document } from '@contentful/rich-text-types'
import Link from 'next/link'
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

const Project: NextPage<IProjectRichText> = (props) => {
  const splitNodes = (nodes: IProjectRichText['body']['json']): Document[]  => {
    const docs: Document[] = [];
    const indexes = nodes.content.map((x, index) => ({ ...x, index }))
    const sections = indexes.filter(x => x.nodeType === 'heading-3')
    let index = 0;
    for(let section of sections){
      if(index === sections.length - 1){
        docs.push({
          nodeType: BLOCKS.DOCUMENT,
          data: {},
          content: nodes.content.slice(section.index)
        })
      }else{
        docs.push({
          nodeType: BLOCKS.DOCUMENT,
          data: {},
          content: nodes.content.slice(section.index, sections[index + 1].index)
        })
      }
      index ++;
    }
    return docs;
  }

  return (
    <div className={styles.page}>
      <Head><title>{props.title} -- Julian Hahn</title></Head>
      <section className={styles.container}>
        <div className={styles.left}>
          <div className='fc'>
            <h1 className={styles.title}>{props.title}</h1>
            <div className={styles.typeGroup}>
              <h3 className={styles.type}>{props.type}</h3>
              <div className={styles.buttons}>
                <a href={props.github || undefined} target='_blank' rel="noreferrer">
                    <IconButton small={true} 
                      icon={<IoLogoGithub size={20} color={'var(--orangeLight)'}/>}
                    />
                </a>
                {props.web &&
                  <a href={props.web} target='_blank' rel="noreferrer">
                    <IconButton small={true} 
                      icon={<MdWeb size={20} color={'var(--orangeLight)'}/>}
                    />
                  </a>
                }
                {props.apple && 
                  <a href={props.apple} target='_blank' rel="noreferrer">
                      <IconButton small={true} 
                        icon={<GrAppleAppStore size={20} color={'var(--orangeLight)'}/>}
                      />
                  </a>
                }
                {props.playstore && 
                  <a href={props.playstore} target='_blank' rel="noreferrer">
                    <IconButton small={true} 
                      icon={<IoLogoGooglePlaystore size={20} color={'var(--orangeLight)'} style={{ transform: 'translate(2px, 2px)' }}/>}
                    />
                  </a>
                }
              </div>
            </div>
            <Line height={3} width={'65%'} color={'var(--orangeLight)'} className={styles.hline}/>
            <p className={styles.description}>{props.description}</p>
            <Line height={3} width={'85%'} color={'var(--orangeLight)'} className={styles.hline}/>
            <h4 className={styles.subtitle}>Technologies</h4>
            <motion.div 
              className={styles.techContainer} 
              initial={'initial'} 
              whileInView={'animate'} 
              viewport={{ once: true }} 
              variants={containerVariants}
            >
              { props.stack.map(x => <TechCard variants={cardVariants} key={x} label={x as StackItem} size={50}/>)}
            </motion.div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <Image src={props.thumbnail} layout='fill' objectFit='cover'/>
          </div>
        </div>
      </section>
      <main className={styles.content}>
        {
          splitNodes(props.body.json).map((x, index) => {
            return (
              <div className={styles.contentSection} key={index}>
                <div className={styles.contentLeft}>{
                  documentToReactComponents({
                    nodeType: BLOCKS.DOCUMENT,
                    data: {},
                    content: x.content.slice(0,x.content.length - 1)},{
                      renderNode: {
                        [INLINES.ENTRY_HYPERLINK]: (node) => {
                          const { id } = node.data.target.sys;
                          const link = props.body.links.entries.hyperlink.find(x => x.sys.id === id)!
                          return(
                            <Link href={`/project/${link.slug}`}>{link.title}</Link>
                          );
                        }
                      }
                    })
                }</div>
                <div className={styles.contentRight}>{
                  documentToReactComponents({
                    nodeType: BLOCKS.DOCUMENT,
                    data: {},
                    content: x.content.slice(x.content.length - 1,)},{
                      renderNode: { 
                        [BLOCKS.EMBEDDED_ASSET]: (node) => {
                          const { id } = node.data.target.sys;
                          const asset = props.body.links.assets.block.find(x => x.sys.id === id)!
                          return (
                            <figure className={styles.contentFigure}>
                              <div key={asset.sys.id} className={styles.contentImage}>
                                <Image src={asset.url} alt={asset.description} layout='responsive' height={asset.height} width={asset.width} style={{ borderRadius: 12 }}/>
                              </div>
                              <p className={styles.contentImageCaption}>{asset.description}</p>
                            </figure>
                          )
                        }
                      }
                    })
                }</div>
              </div>
            )
          })
        }
      </main>
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
      items: IProjectRichText[]
    }
  }
}

export const getStaticProps: GetStaticProps<IProject, { slug: string }> = async ({ params }) => {
  const query = `
    query{
      projectCollection(where:{slug:"${params?.slug}"}, limit: 1){
        items{
          sys{
            id
          },
          title,
          type,
          description,
          thumbnail,
          web,
          github,
          apple,
          playstore,
          stack,
          tags,
          slug,
          body{
            json,
            links{
              entries{
                hyperlink{
                  sys{
                    id
                  }
                  ... on Project{
                    title
                    slug
                  }
                }
              }
              assets{
                block{
                  sys{
                    id
                  }
                  description
                  height
                  width
                  url
                }
              }
            }
          }
        }
      }
    }
  `
  const res = await axios.post<PropsRes>(process.env.CONTENTFUL_GRAPH_URL!, { query })
  return { props: { ...res.data.data.projectCollection.items[0] } }
}

export default Project