import Head from "next/head";
import { GetStaticProps, NextPage } from "next/types";
import axios from "../../config/axios";
import { IProject } from "../../types/Project";
import styles from '../../styles/MyProjects.module.css'

interface Props {
  projects: IProject[]
}

const MyProjects: NextPage<Props> = (props) => {
    return (
        <div className={styles.container}>
            <Head><title>My Projects -- Julian Hahn</title></Head>
        </div>
    )
}

export default MyProjects;

interface ProjectsRes {
  data: {
    projectCollection: {
      items: IProject[]
    }
  }
}

export const getStaticProps: GetStaticProps = async () => {
    const query = "query{projectCollection{items{sys{id},title,type,description,thumbnail,web,github,apple,playstore,stack,tags}}}"
    const res = await axios.post<ProjectsRes>(process.env.CONTENTFUL_GRAPH_URL!, { query })
    return { props: { projects: res.data.data.projectCollection.items } }
}