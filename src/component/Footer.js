import React from 'react';
import logoWip from '../assets/static/wip-white.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <a
        href='https://wipargentina.com/?utm_source=landing&utm_medium=link&utm_campaign=genganar'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={logoWip} alt='wip' className='wip' />
      </a>
    </footer>
  );
}
