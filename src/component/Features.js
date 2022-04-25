import React from 'react';
import { Link as Scroll } from 'react-scroll';
import ImagenPropuesta from '../assets/static/te-proponemos.webp';
import ImagenHacemos from '../assets/static/como-lo-hacemos.webp';

export default function Features() {
  return (
    <section className='features'>
      <div className='container'>
        <article className='row'>
          <div className='col-md-6 order-sm-2'>
            <img
              className='img-fluid mb-5 mb-sm-0'
              src={ImagenPropuesta}
              alt=''
            />
          </div>
          <div className='col-md-6 order-sm-1'>
            <h2>Te proponemos</h2>
            <p>
              Una gestión Comercial y Administrativa de cada operación.
              Facilitamos y coordinamos con vos la logística de entrega.
            </p>
            <p>
              Brindamos financiación propia a los Compradores a través de medios
              de pago electrónicos y seguros. Nuestra pasarela de pagos permite
              la acreditación del dinero de forma directa en la cuenta bancaria
              de la Cabaña
            </p>
            <Scroll
              to='form'
              spy={true}
              smooth={true}
              offset={-100}
              duration={599}
              className='btn btn-primary cta'
            >
              ¿Te contamos más?
            </Scroll>
          </div>
        </article>
        <article className='row'>
          <div className='col-md-6'>
            <img
              className='img-fluid mb-5 mb-sm-0'
              src={ImagenHacemos}
              alt=''
            />
          </div>
          <div className='col-md-6'>
            <h2>¿Cómo lo hacemos?</h2>
            <ul>
              <li>Armamos la Tienda Digital de tu Cabaña.</li>
              <li>
                Generamos las fichas de venta de tus Productos con datos
                segurizados y trazables.
              </li>
              <li>
                Realizamos campañas y acciones de Marketing en diferentes
                canales digitales.
              </li>
              <li>
                Ofrecemos nuestro Servicio Integral de Comercio Exterior
                (Pedidos, Cotizaciones y Documentación)
              </li>
            </ul>
            <Scroll
              to='form'
              spy={true}
              smooth={true}
              offset={-100}
              duration={599}
              className='btn btn-primary cta'
            >
              ¿Querés saber más?
            </Scroll>
          </div>
        </article>
      </div>
    </section>
  );
}
