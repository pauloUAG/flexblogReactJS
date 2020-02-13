import React from 'react'
import './styles.css'

const Menu = () => {
    return (
        <div className="Menu-bg">
            <div className="Menu-container">
                <div className="titulo-menu">
                    <h1>FlexBlog</h1>
                </div>
                <div className="opcoes">
                    <a href="#">Sobre</a>
                    <a href="#">Produtos</a>
                    <a href="#">Preço</a>
                    <a href="#">Qualidade</a>
                </div>
            </div>
        </div>
    );
}

export default Menu;