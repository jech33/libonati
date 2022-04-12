import React, { useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import routes from './routes';
import { appContext } from './context/contexts';

const App = () => {
  const cld = useMemo(() => new Cloudinary({ cloud: { cloudName: 'jech33' } }), []);
  const location = useLocation();
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <appContext.Provider value={{ cld }}>
      <Routes location={location}>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
    </appContext.Provider>
  );
};

export default App;
