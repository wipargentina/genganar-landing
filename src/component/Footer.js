import React from 'react';
import logoWip from '../assets/static/wip-white.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <a
        href='https://bit.ly/3iXAqtr'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={logoWip} alt='wip' className='wip' />
      </a>
    </footer>
  );
}
