import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Project.module.css'

const Project: NextPage = () => {

  const router = useRouter()

  const { id } = router.query

  return (
    <div className={styles.container}>
        <Head>
            <title>{id} -- Julian Hahn</title>
        </Head>
    </div>
  )
}

export default Project