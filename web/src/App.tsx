import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Steam achievements</title>
      </Helmet>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
