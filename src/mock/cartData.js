import Logo from '../../assets/logo.png';
import TopImg from '../../assets/topo.png';
import tomate from '../../assets/fruits/Tomate.png';
import brocolis from '../../assets/fruits/Brócolis.png';
import batata from '../../assets/fruits/Batata.png';
import pepino from '../../assets/fruits/Pepino.png';
import abobora from '../../assets/fruits/Abóbora.png';

const cartData = {
    top: {
        background: TopImg,
        title: "Detalhe da Cesta"
    },
    details: {
        name: "Cesta de Verduras",
        logo: Logo,
        label: "Jenny Jack Farm",
        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        price: 40,
        button: "Comprar"
    },
    items: {
        title: "Itens da cesta",
        list: [
            {
                name: "Tomate",
                image: tomate,
            },
            {
                name: "Brócolis",
                image: brocolis,
            },
            {
                name: "Batata",
                image: batata,
            },
            {
                name: "Pepino",
                image: pepino,
            },
            {
                name: "Abóbora",
                image: abobora,
            }
        ]
    }
};

export default cartData