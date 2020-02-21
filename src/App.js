import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';
import Main from './pages/main';
import Preco from './components/mainPreco';
import Qualidade from './components/mainQualidade';
import NewsL from './components/mainNewsLetter';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Menu />
    <Main />
    <Preco />
    <Qualidade />
    <NewsL />
    </BrowserRouter>
  );
}

export default App;
