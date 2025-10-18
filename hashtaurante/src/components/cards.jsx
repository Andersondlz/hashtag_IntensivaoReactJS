import Card from "./card.jsx";
import imgBurguer from "../assets/pratos/burguer-picanha.jpeg"

const Cards = () => {
    return (
    <div className="cards">
        <Card
            titulo="Burgue de Picanha"
            descricao="Burguer de Picanha Argus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon"
            preco="R$ 44,90"
            imagem={imgBurguer}
        />
    </div>
    );
};

export default Cards;