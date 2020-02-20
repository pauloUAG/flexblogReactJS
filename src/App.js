import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';
import Main from './pages/main';
import Preco from './components/mainPreco';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Menu />
    <Main />
    <Preco />
    </BrowserRouter>
  );
}

export default App;
