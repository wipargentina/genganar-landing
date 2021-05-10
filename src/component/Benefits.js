import React from 'react';
import IconoPromocion from '../assets/static/promocion.webp';
import IconoVentaDirecta from '../assets/static/venta-directa.webp';
import IconoPagoSeguro from '../assets/static/pago-seguro.webp';
import IconoMediosPagos from '../assets/static/medios-de-pago.webp';
import IconoMercado from '../assets/static/mercado-internacional.webp';
import Iconologistica from '../assets/static/logistica.webp';

export default function Benefits() {
  return (
    <section className='benefits'>
      <div className='container'>
        <h2>¿Qué solución traemos?</h2>
        <div className='row justify-content-center'>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src={IconoPromocion} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>Promoción y posicionamiento</h3>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src={IconoVentaDirecta} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>Venta directa</h3>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src={IconoPagoSeguro} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>Acreditación de pagos segura</h3>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src={IconoMediosPagos} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>Múltiples medios de pago</h3>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src={IconoMercado} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>Mercado internacional</h3>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src={Iconologistica} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>Solución logística integral</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
