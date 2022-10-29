import React, { useState } from "react";
import styles from './ProjectCard.module.css'
import { motion } from 'framer-motion'
import { IoLogoGithub } from 'react-icons/io'

export interface IProject {
  id: number,
  title: string,
  description: string,
  thumbnail: string,
  github: string,
  tags: string[]
}

interface Props{
  data: IProject
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .1
    }
  }
}

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
}

const ProjectCard = ({ data }: Props) => {

  const [hovering, setHovering] = useState(false)

  return (
    <motion.div 
      className={styles.container} 
      style={{ backgroundImage: `url("${data.thumbnail}")` }}
      whileHover={{ scale: 1.02 }} whileTap={{ scale: .98 }}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
    >
      <motion.div className={styles.heading} animate={{ height: hovering ? 100 : 60 }}>
        <div className={styles.row}>
          <motion.h3 className={styles.title}>{data.title}</motion.h3>
          <motion.a whileHover={{ scale: 1.2 }} href={data.github} target='_blank' style={{ height: 28 }}>
            <IoLogoGithub color={'var(--black)'} size={28}/>
          </motion.a>
        </div>
        <motion.p animate={{ opacity: hovering ? 1 : 0}}className={styles.caption}>{data.description}</motion.p>
      </motion.div>
      <motion.div className={styles.chips} variants={container} initial={'hidden'} animate={hovering ? "show" : "hidden"}>
        { data.tags.map(x => (
          <motion.p key={x} className={styles.chip} variants={item}>{x}</motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
