import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={route.component}
        />
      ))}
    </Routes>
  );
};

export default App;
