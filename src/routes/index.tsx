import React from 'react';
import Layout from '../containers/Layout';
// /* All routes */
import About from '../views/about/About';
import Contact from '../views/contact/Contact';
import Home from '../views/home/Home';

const routes = [
  /* Home */
  { path: '/', name: 'Home', component: <Layout content={<Home />} header footer={false} /> },
  /* About */
  { path: '/about', name: 'About', component: <Layout content={<About />} header footer /> },
  /* Contact */
  { path: '/contact', name: 'About', component: <Layout content={<Contact />} header footer /> },
];

export default routes;
