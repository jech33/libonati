import React from 'react';
import Layout from '../containers/Layout';
// /* All routes */
import Gallery from '../views/gallery/Gallery';
import Contact from '../views/contact/Contact';
import Home from '../views/home/Home';

const routes = [
  /* Home */
  { path: '/', name: 'Home', component: <Layout content={<Home />} header footer /> },
  /* About */
  { path: '/gallery', name: 'gallery', component: <Layout content={<Gallery />} header footer /> },
  /* Contact */
  { path: '/contact', name: 'Contact', component: <Layout content={<Contact />} header footer /> },
];

export default routes;
