// import Button from '../Buttons/ButtonVerCertificado';

import './cardsAdmin.css';

function cardAdmin(props) {
    return(
        <div className="containerCardsAdmin"> 
            <h1>{props.titulo}</h1>
            <p>{props.lang}</p>
            <span>{props.data}</span>
        </div>
    )
}

export default cardAdmin;