import type { GetStaticProps, NextPage } from 'next'
import ProjectsSection from '../components/layout/home/ProjectsSection/ProjectsSection'
import axios from 'axios'
import { IProject } from '../types/Project'
import LandingSection from '../components/layout/home/LandingSection/LandingSection'
import AboutSection from '../components/layout/home/AboutSection/AboutSection'
import ResumeSection from '../components/layout/home/ResumeSection/ResumeSection'

interface Props {
  projects: IProject[]
}

const Home: NextPage<Props> = (props) => {

  return (
    <div style={{ backgroundColor: 'var(--black)'}}>
      <LandingSection />
      <ProjectsSection projects={props.projects} style={{ paddingTop: 64 }}/>
      <ResumeSection/>
      <AboutSection/>
    </div>
  )
}

export default Home

interface ProjectsRes {
  data: {
    projectCollection: {
      items: IProject[]
    }
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.post<ProjectsRes>(process.env.CONTENTFUL_GRAPH_URL!, {
    query: "query{projectCollection{items{sys{id},title,type,description,thumbnail,web,github,apple,playstore,stack,slug,tags}}}"
  }, {
    headers: { "Authorization": `Bearer ${process.env.CONTENT_PREVIEW_ACCESS_TOKEN!}` }
  })
  const { items: projects } = res.data.data.projectCollection;
  return {
    props: { projects }
  }
}




