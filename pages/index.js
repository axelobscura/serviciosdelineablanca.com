import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const masInfo = (e) => {
    console.log('amigo');
  }

  const masContacto = (e) => {
    console.log('amigo');
  }

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
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <button type="button" className="btn btn-primary mr-2" onClick={masInfo}>MÁS INFORMACIÓN</button>
          <button type="button" className="btn btn-primary" onClick={masContacto}>PÓNGASE EN CONTACTO</button>
        </div>
      </main>

      <main className={styles.mainDos} id="masInfo">
        <h2>Reparación de lavadoras</h2>
        <hr />
        <p className="center-text" style={{ textAlign: 'center' }}>¿Tú lavadora ya no lava cómo antes? ¿se mueve de lugar a lugar a la hora de prender la lavadora? Será mejor que llame a un técnico para evitar un problema mayor, por lo que lo invitamos a ponerse en contacto con nosotros para ofrecerle un servicio de excelencia.</p>
        <h2 className="pt-5">Reparación de secadoras</h2>
        <hr />
        <p className="center-text" style={{ textAlign: 'center' }}>Contamos con técnicos altamente calificados para reparación y mantenimiento de secadoras. Sí ha notado que su secadora ya no trabaja como antes contáctenos ¡hoy mismo!</p>
        <h2 className="pt-5">Reparación de refrigeradores</h2>
        <hr />
        <p className="center-text" style={{ textAlign: 'center' }}>Hoy en día, el refrigerador es el electrodoméstico más utilizado, por esto que es tan importante que funcione de la mejor manera. Si usted nota que ya no enfría como antes póngase en contacto con nosotros de inmediato.</p>
      </main>

      <footer className={styles.footer} style={{ textAlign: 'center', flexDirection: 'column', padding: '0' }}>
        <b>SERVICIOS DE LÍNEA BLANCA</b>CDMX, Estado de México, Toluca, Metepec, Lerma<br />(55)6235-3054
      </footer>
    </div>
  )
}
