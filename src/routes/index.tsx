import React from 'react';
import Layout from '../containers/Layout';
// /* All routes */
import Gallery from '../views/gallery/Gallery';
import Contact from '../views/contact/Contact';
import Home from '../views/home/Home';
import Landing from '../views/landing/Landing';

const routes = [
  { path: '/', name: 'Home', component: <Layout content={<Home />} header footer /> },
  { path: '/gallery', name: 'gallery', component: <Layout content={<Gallery />} header footer /> },
  { path: '/contact', name: 'Contact', component: <Layout content={<Contact />} header footer /> },
  { path: '/*', name: 'Landing', component: <Layout content={<Landing />} header={false} footer /> },

];

export default routes;
