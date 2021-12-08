import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Greeting from './components/Greeting';

import store from './storing/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
