import React from 'react';
import Hero from '../component/Hero';
import Benefits from '../component/Benefits';
import Features from '../component/Features';
import Testimonials from '../component/Testimonials';
// import Form from '../component/Form';
import FormNetlify from '../component/FormNetlify';
import { Helmet } from 'react-helmet';

export default function home() {
  return (
    <>
      <Helmet>
        <title>GenGanar:1er Mercado Online de Génetica Bovina</title>
      </Helmet>
      <Hero />
      <Benefits />
      <Features />
      <Testimonials />
      {/* <Form /> */}
      <FormNetlify />
    </>
  );
}
