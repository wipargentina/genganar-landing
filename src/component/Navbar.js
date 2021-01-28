import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/static/logo.svg';

export default function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-primary'>
      <div className='container'>
        <Link className='navbar-brand mx-auto py-3' to='/'>
          <img src={Logo} alt='' height='100' />
        </Link>
      </div>
    </nav>
  );
}
