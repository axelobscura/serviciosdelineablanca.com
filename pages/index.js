import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SERVICIOS DE LÍNEA BLANCA EN MÉXICO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SERVICIOS DE LÍNEA BLANCA
        </h1>
      </main>

      <footer className={styles.footer}>
          SERVICIOS DE LÍNEA BLANCA EN MÉXICO
      </footer>
    </div>
  )
}
