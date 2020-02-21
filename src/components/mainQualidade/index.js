import React from 'react';
import './styles.css';

const Qualidade = () => {
    return (
        <section className="qualidadeSection">
            <div className="qualiCima">
                <div className="qualidade">
                    <h1>Inteligente</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi a eleifend magna. justo id dignissim semper.</p>
                </div>
                <div className="qualidade">
                    <h1>Compacto</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi a eleifend magna. justo id dignissim semper.</p>
                </div>
                <div className="qualidade">
                    <h1>Economico</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi a eleifend magna. justo id dignissim semper.</p>
                </div>
            </div>
            <div className="qualiBaixo">
                <div className="qualidade">
                    <h1>Transparente</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi a eleifend magna. justo id dignissim semper.</p>
                </div>
                <div className="qualidade">
                    <h1>Sustentavel</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi a eleifend magna. justo id dignissim semper.</p>
                </div>
                <div className="qualidade">
                    <h1>Opaco</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi a eleifend magna. justo id dignissim semper.</p>
                </div>
            </div>
        </section>
    );
}

export default Qualidade;