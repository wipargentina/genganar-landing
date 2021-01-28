import React from 'react';

export default function Features() {
  return (
    <section className='features'>
      <div className='container'>
        <article className='row'>
          <div className='col-md-6 order-sm-2'>
            <img
              className='img-fluid mb-5 mb-sm-0'
              src='https://blog.structuralia.com/hubfs/business-team-present-professional-investor-working-new-start-up-project-finance-managers_t20_rR7ryd%20%281%29%20%281%29.jpg'
              alt=''
            />
          </div>
          <div className='col-md-6 order-sm-1'>
            <h2>Te proponemos</h2>
            <p>
              Una gestión Comercial integral y Administrativa de cada operación,
              facilitando y coordinando con vos la logística de entrega.
            </p>
            <p>
              Financiación propia a los Compradores a través de medios de pago
              electrónicos y seguros, nuestra pasarela de pagos permite la
              acreditación del dinero de forma directa en la cuenta de la
              Cabaña.
            </p>
          </div>
        </article>
        <article className='row'>
          <div className='col-md-6'>
            <img
              className='img-fluid mb-5 mb-sm-0'
              src='https://blog.structuralia.com/hubfs/business-team-present-professional-investor-working-new-start-up-project-finance-managers_t20_rR7ryd%20%281%29%20%281%29.jpg'
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
              <li>
                Entregamos un reporte trimestral de visitas, consultas y pedidos
                de usuarios.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
