import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Chip from "../../../buttons/Chip/Chip";
import ProjectCard, { IProject } from "../../../cards/ProjectCard/ProjectCard";
import Select from "../../../inputs/Select/Select";
import PlanetSvg from "../../../svg/PlanetSvg/PlanetSvg"
import styles from './ProjectsSection.module.css'
import data from'../../../../public/projects.json'
import FilterBar from "../../../inputs/FilterBar/FilterBar";

const OPTIONS = [
    'React', 'Node', 'PostgreSQL', 'React Native', 
    'Next.js', 'TypeScript', 'Contentful', 'AWS', 
    'GraphQL', 'Postgis', 'Google Cloud', 'MongoDB', 'Stripe'
]

const ProjectsSection = () => {

    const [filters, setFilters] = useState<string[]>([])

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <Link href={'/'}><div><PlanetSvg className={styles.planet}/></div></Link>
                <h1 className={styles.headerText}>My Projects</h1>
            </header>
            <LayoutGroup>
                <FilterBar 
                    label={'Filter by stack'} 
                    options={OPTIONS} 
                    containerClass={styles.filterSection} 
                    selected={filters}
                    setSelected={setFilters}
                    totalResults={4}
                />
                <motion.div className={styles.grid} layout>
                    {data.map(x => (
                        <ProjectCard key={x.id} data={x as IProject}/>
                    ))}
                </motion.div>
            </LayoutGroup>
        </section>
    )
};

export default ProjectsSection;
