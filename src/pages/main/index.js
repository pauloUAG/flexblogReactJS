import React from 'react'
import './styles.css'
import samurai from '../../assets/LaraCroftLegend.jpg'
import katana from '../../assets/katana.jpg'

const Main = () => {
    return (
        <section className="section-um">
            <div className="valores">
                <h1>Novos Valores e<br/> Propriedades de CSS</h1>
            </div>
            <div className="sobre-container">
                <div className="sobre-info">
                    <h1>Sobre</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a eleifend magna. 
                    Nunc ac tempor nulla. Suspendisse sollicitudin maximus augue. Phasellus feugiat 
                    magna vitae mi aliquam, eget placerat arcu volutpat. Phasellus pulvinar justo id 
                    dignissim semper. Sed nisi ligula, ultricies non.
                    </p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a eleifend magna. 
                    justo id dignissim semper.
                    </p>
                </div>
                <div className="sobre-imagens">
                    <img src={samurai} alt="samuraiUm" />
                </div>
                <div className="sobre-imagens-2">
                    <img src={samurai} alt="samuraiDois"/>
                </div>
            </div>
            <div className="produtos-container">
                <h1>Produtos</h1>
                <div className="produtos">
                    <div className="produto-item white">
                        <h2>White</h2>
                        <img src={katana} alt="katana"/>
                    </div>
                    <div className="produto-item black">
                        <h2>Black</h2>
                        <img src={katana} alt="katana"/>
                    </div>
                    <div className="produto-item purple">
                        <h2>Purple</h2>
                        <img src={katana} alt="katana"/>
                    </div>
                </div>
            </div>
            <div className="precos-container">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
}

export default Main;