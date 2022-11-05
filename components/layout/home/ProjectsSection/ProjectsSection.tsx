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
    style?: React.CSSProperties | undefined
}

const ProjectsSection = ({ projects, style }: Props) => {

    const filters = Array.from(new Set(projects.map(x => x.tags).flat()))
    const [selected, setSelected] = useState<string[]>([])
    const [filtered, setFiltered] = useState<IProject[]>(projects)

    useEffect(() => {
        selected.length === 0 ?
            setFiltered(projects) :
            setFiltered(projects.filter(x => x.tags.some(tag => selected.includes(tag))))
    },[selected])

    return (
        <section className={styles.container} style={style}>
            <header className={styles.header}>
                <h1 className={styles.headerText}>Latest <span className='text-gradient'>Projects</span></h1>
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
                <motion.div className={styles.grid}>
                    {filtered.map(x => (
                        <ProjectCard key={x.sys.id} data={x as IProject}/>
                    ))}
                </motion.div>
            </LayoutGroup>
        </section>
    )
};

export default ProjectsSection;
