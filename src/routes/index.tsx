import React from 'react';
import Layout from '../containers/Layout';
// /* All routes */
import About from '../views/about/About';
import Home from '../views/home/Home';

const routes = [
  /* Home */
  { path: '/', name: 'Home', component: <Layout content={<Home />} /> },
  /* About */
  { path: '/about', name: 'About', component: <Layout content={<About />} /> },
];

export default routes;
