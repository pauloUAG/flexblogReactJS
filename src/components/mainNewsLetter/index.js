import React from 'react';
import './styles.css';

const NewsL = () => {
    return (
        <section className="sectionNewsL">
            <div className="NewsLContainer">
                <div className="newsletter">
                    <h1>News Letter</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="assinar">
                    <input type="text" placeholder="Seu email"></input>
                    <button>Assinar</button>
                </div>
            </div>
        </section>
    );
}

export default NewsL;