import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {Provider} from '../store';
import Layout from './Layout';

const App: React.FC = () => {
  return (
    <Provider>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
};

export default App;
