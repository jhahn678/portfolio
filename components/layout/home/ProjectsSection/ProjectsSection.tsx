import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProjectCard from "../../../cards/ProjectCard/ProjectCard";
import PlanetSvg from "../../../svg/PlanetSvg/PlanetSvg"
import styles from './ProjectsSection.module.css'
import FilterBar from "../../../inputs/FilterBar/FilterBar";
import { IProject } from "../../../../types/Project";

interface Props{
    projects: IProject[]
}

const ProjectsSection = ({ projects }: Props) => {

    const filters = Array.from(new Set(projects.map(x => x.tags).flat()))
    const [selected, setSelected] = useState<string[]>([])
    const [filtered, setFiltered] = useState<IProject[]>(projects)

    useEffect(() => {
        selected.length === 0 ?
            setFiltered(projects) :
            setFiltered(projects.filter(x => x.tags.some(tag => selected.includes(tag))))
    },[selected])

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <Link href={'/'}><div><PlanetSvg className={styles.planet}/></div></Link>
                <h1 className={styles.headerText}>My Projects</h1>
            </header>
            <LayoutGroup>
                <FilterBar 
                    label={'Filter by stack'} 
                    options={filters} 
                    containerClass={styles.filterSection} 
                    selected={selected}
                    setSelected={setSelected}
                    totalResults={projects.length}
                />
                <motion.div className={styles.grid} layout>
                    {filtered.map(x => (
                        <ProjectCard key={x.sys.id} data={x as IProject}/>
                    ))}
                </motion.div>
            </LayoutGroup>
        </section>
    )
};

export default ProjectsSection;
