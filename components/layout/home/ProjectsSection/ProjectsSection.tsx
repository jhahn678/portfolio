import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Chip from "../../../buttons/Chip/Chip";
import ProjectCard, { IProject } from "../../../cards/ProjectCard/ProjectCard";
import Select from "../../../inputs/Select/Select";
import PlanetSvg from "../../../svg/PlanetSvg/PlanetSvg"
import styles from './ProjectsSection.module.css'
import data from'../../../../public/projects.json'

const ProjectsSection = () => {

    const [filters, setFilters] = useState<string[]>([])

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <Link href={'/'}><div><PlanetSvg className={styles.planet}/></div></Link>
                <h1 className={styles.headerText}>My Projects</h1>
            </header>
            <div className={styles.filterSection}>
                <Select
                    label={'Filter by stack'} className={styles.select}    
                    values={filters} setValues={setFilters} 
                    options={['React.js', 'Node.js', 'PostgreSQL', 'React Native', 'Next.js']} 
                />
                <div className={styles.chipContainer}>
                    <AnimatePresence>
                    {filters.length ? filters.map(x => (
                        <Chip 
                            key={x} label={x} className={styles.chip} 
                            onRemove={() => setFilters(state => state.filter(y => y !== x))}
                        />
                    )):(
                        <motion.p 
                            className={styles.placeholder}
                            initial={{ opacity: 0}} 
                            animate={{ opacity: 1, transition: { delay: .2 } }} 
                            exit={{ opacity: 0}}
                        >
                            Showing {data.length} results
                        </motion.p>
                    )}
                    </AnimatePresence>
                </div>
            </div>
            <div className={styles.grid}>
                {data.map(x => (
                    <ProjectCard key={x.id} data={x as IProject}/>
                ))}
            </div>
        </section>
    )
};

export default ProjectsSection;
