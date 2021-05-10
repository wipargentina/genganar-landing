import React from 'react';
import { Link as Scroll } from 'react-scroll';

export default function Hero() {
  return (
    <div className='hero'>
      <div className='overlay'></div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <h1>
              Tu Cabaña, genética y productos en nuestra plataforma de ventas
              online
            </h1>
            <p className='lead'>
              Somos el 1° Mercado Online de Genética Bovina que te permitirá
              comercializar y promocionar tu cabaña de manera fácil y segura.
            </p>
            <Scroll
              to='form'
              spy={true}
              smooth={true}
              offset={-100}
              duration={599}
              className='btn btn-lg btn-primary text-uppercase cta'
            >
              Más información
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
}
