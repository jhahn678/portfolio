import Head from "next/head";
import { GetStaticProps, NextPage } from "next/types";
import axios from "../../config/axios";
import { IProject } from "../../types/Project";
import styles from '../../styles/MyProjects.module.css'
import PlanetSvg from "../../components/svg/PlanetSvg/PlanetSvg";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import FilterBar from "../../components/inputs/FilterBar/FilterBar";
import ProjectCard from "../../components/cards/ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import ProjectsHeader from "../../components/layout/headers/ProjectsHeader/ProjectsHeader";

interface Props {
  projects: IProject[]
}

const MyProjects: NextPage<Props> = ({ projects }) => {

    const filters = Array.from(new Set(projects.map(x => x.tags).flat()))
    const [selected, setSelected] = useState<string[]>([])
    const [filtered, setFiltered] = useState<IProject[]>(projects)

    useEffect(() => {
        selected.length === 0 ?
            setFiltered(projects) :
            setFiltered(projects.filter(x => x.tags.some(tag => selected.includes(tag))))
    },[selected])

    return (
        <div className={styles.container}>
            <Head><title>My Projects -- Julian Hahn</title></Head>
            <ProjectsHeader/>
            <LayoutGroup>
                <FilterBar 
                    label={'Filter by stack'} 
                    options={filters} 
                    containerClass={styles.filterSection} 
                    selected={selected}
                    setSelected={setSelected}
                    totalResults={projects.length}
                />
                <motion.div className={styles.grid}>
                    {filtered.map(x => (
                        <ProjectCard key={x.sys.id} data={x as IProject}/>
                    ))}
                </motion.div>
            </LayoutGroup>
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
    const query = "query{projectCollection{items{sys{id},title,type,description,thumbnail,web,github,apple,playstore,stack,slug,tags}}}"
    const res = await axios.post<ProjectsRes>(process.env.CONTENTFUL_GRAPH_URL!, { query })
    return { props: { projects: res.data.data.projectCollection.items } }
}