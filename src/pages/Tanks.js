import React from 'react';
import { Helmet } from 'react-helmet';

export default function tanks() {
  return (
    <>
      <Helmet>
        <title>GenGanar: Gracias</title>
      </Helmet>
      <section className='thanks'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <h1>Gracias por completar el formulario</h1>
              <p className='lead mb-4'>
                Uno de nuestros comerciales se pondrán en contacto contigo para
                brindarte más información sobre nuestra plataforma y asesorarte
                en lo que necesites.
              </p>
              <p className='lead mb-3'>Conocé nuestro Mercado Online</p>
              <a
                id='btn-marketplace'
                href='https://mercado.genganar.com/es/?utm_source=landing&utm_medium=link&utm_campaign=landing_sumate_gracias'
                rel='noopener noreferrer'
                target='_blank'
                className='button btn btn-lg btn-primary mb-5'
              >
                Ir al Mercado GenGanar
              </a>
              <p className='mb-3'>
                Además ponemos a tu disposición más información en un documento
                PDF para que descargues
              </p>
              <a
                id='btn-download-brochure'
                href='https://drive.google.com/file/d/1oy93RQr89RO62USoD1RmVfRvne2ZaBAa/view?usp=sharing'
                rel='noopener noreferrer'
                target='_blank'
                className='button btn btn-lg btn-secondary mb-5'
              >
                Descargar Brochure
              </a>
              <p className='mb-3'>
                Te invitamos a que nos sigas en nuestras redes
              </p>
              <a
                id='btn-facebook'
                href='https://www.facebook.com/gen.ganar/'
                rel='noopener noreferrer'
                target='_blank'
                className='button social btn btn-outline-primary'
              >
                <span>
                  <ion-icon name='logo-facebook'></ion-icon>
                  Facebook
                </span>
              </a>
              <a
                id='btn-instagram'
                href='https://www.instagram.com/gen.ganar/'
                rel='noopener noreferrer'
                target='_blank'
                className='button social btn btn-outline-primary'
              >
                <span>
                  <ion-icon name='logo-instagram'></ion-icon>
                  Instagram
                </span>
              </a>
              <a
                id='btn-twitter'
                href='https://twitter.com/genganar'
                rel='noopener noreferrer'
                target='_blank'
                className='button social btn btn-outline-primary'
              >
                <span>
                  <ion-icon name='logo-twitter'></ion-icon>
                  Twitter
                </span>
              </a>
              <a
                id='btn-linkedin'
                href='https://www.linkedin.com/company/genganar'
                rel='noopener noreferrer'
                target='_blank'
                className='button social btn btn-outline-primary'
              >
                <span>
                  <ion-icon name='logo-linkedin'></ion-icon>
                  Linkedin
                </span>
              </a>
              <a
                id='btn-youtube'
                href='https://www.youtube.com/channel/UCGnKuYUA6ZKxamKvN07WCpw'
                rel='noopener noreferrer'
                target='_blank'
                className='button social btn btn-outline-primary'
              >
                <span>
                  <ion-icon name='logo-youtube'></ion-icon>
                  Youtube
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
