import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';
import Main from './pages/main'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Menu />
    <Main />
    </BrowserRouter>
  );
}

export default App;
