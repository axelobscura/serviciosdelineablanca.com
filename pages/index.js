import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SERVICIOS DE LÍNEA BLANCA EN MÉXICO</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/lux/bootstrap.min.css" />
      </Head>

      <main className={styles.main}>
        <img src="https://centrosautorizadoscdmx.com/img/logo.png" alt="SERVICIOS DE LÍNEA BLANCA EN MÉXICO" title="SERVICIOS DE LÍNEA BLANCA EN MÉXICO" style={{ width: '200px', background: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '30px' }} />
        <h1 className={styles.title}>SERVICIOS DE LÍNEA BLANCA</h1>
        <h2>(55)6235-3054</h2>
        <h3>CDMX, Estado de México, Toluca, Metepec, Lerma</h3>
        <p className="center-text" style={{ textAlign: 'center' }}><b>Contamos con técnicos capacitados</b><br />Somos el servicio de linea blanca en donde atendemos todos sus requerimientos<br />Reparación, Servicio de Mantenimiento e instalación de lavadoras, refrigeradores, secadoras, centros de lavado, lavavajillas, estufas y hornos de gas.</p>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <button type="button" className="btn btn-primary mr-2">MÁS INFORMACIÓN</button>
          <button type="button" className="btn btn-primary">PÓNGASE EN CONTACTO</button>
        </div>

      </main>

      <footer className={styles.footer} style={{ textAlign: 'center', flexDirection: 'column', padding: '0' }}>
        <b>SERVICIOS DE LÍNEA BLANCA</b>CDMX, Estado de México, Toluca, Metepec, Lerma<br />(55)6235-3054
      </footer>
    </div>
  )
}
