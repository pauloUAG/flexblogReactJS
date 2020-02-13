import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Menu />
    </BrowserRouter>
  );
}

export default App;
