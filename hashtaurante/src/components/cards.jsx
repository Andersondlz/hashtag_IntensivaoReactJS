import React from "react";
import imgBurguer from "../assets/pratos/burguer-picanha.jpeg"

const Cards = () => {
    return (

            <div className="card">
                <div className="card_textos">
                    <h2 className="card__titulo">Burgue de Picanha</h2>
                    <p>
                        Burguer de Picanha Argus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon
                    </p>
                    <p className="card__preco">
                        R$ 44,90
                    </p>
                </div>
                <div className="card__img">
                    <img src={imgBurguer} alt="Foto da burguer" />
                </div>
            </div>
        
    );
};

export default Cards;