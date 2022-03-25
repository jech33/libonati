import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => <Route path={route.path} element={route.component} />)}
    </Routes>
  </BrowserRouter>
);

export default App;
