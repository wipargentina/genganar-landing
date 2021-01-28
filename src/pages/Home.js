import React from 'react';
import Hero from '../component/Hero';
import Benefits from '../component/Benefits';
import Features from '../component/Features';
import Testimonials from '../component/Testimonials';
import Form from '../component/Form';

export default function home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Features />
      <Testimonials />
      <Form />
    </>
  );
}
