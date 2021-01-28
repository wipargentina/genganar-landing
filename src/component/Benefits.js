import React from 'react';
import IconoMercado from '../assets/static/mercado.png';

export default function Benefits() {
  return (
    <section className='benefits'>
      <div className='container'>
        <h2>¿Qué solución traemos?</h2>
        <div className='row justify-content-center'>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src={IconoMercado} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>Promoción y Posicionamiento</h3>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src={IconoMercado} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>Venta Directa</h3>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src={IconoMercado} alt='' />
              <div className='card-body'>
                <h3 className='card-title'>Acreditación de pagos segura</h3>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top' src={IconoMercado} alt='' />
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
              <img className='card-img-top' src={IconoMercado} alt='' />
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
