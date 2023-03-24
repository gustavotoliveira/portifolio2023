
import Button from '../Buttons/ButtonVerProjeto';
import './cards.css'

function Card(props) {
    return(
        <div className='containerCard'> 
            <h1>{props.titulo}</h1>
            <p>{props.lang}</p>
            <span>{props.data}</span>
            <Button className="buttonCard"/>
        </div>
    )
}

export default Card;