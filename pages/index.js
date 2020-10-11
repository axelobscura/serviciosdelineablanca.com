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
        <h1 className={styles.title}>SERVICIOS DE LÍNEA BLANCA</h1>
        <h2>(55)6235-3054</h2>
        <h3>CDMX, Estado de México, Toluca, Metepec, Lerma</h3>
        <p className="center-text" style={{ textAlign: 'center' }}><b>Contamos con técnicos capacitados</b><br />Somos el servicio de linea blanca en donde atendemos todos sus requerimientos<br />Reparación, Servicio de Mantenimiento e instalación de lavadoras, refrigeradores, secadoras, centros de lavado, lavavajillas, estufas y hornos de gas.</p>
      </main>

      <footer className={styles.footer} style={{ textAlign: 'center', flexDirection: 'column', padding: '0' }}>
        <b>SERVICIOS DE LÍNEA BLANCA</b>CDMX, Estado de México, Toluca, Metepec, Lerma<br />(55)6235-3054
      </footer>
    </div>
  )
}
