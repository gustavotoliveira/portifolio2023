import Axios from 'axios';
import { useEffect, useState } from 'react';

import Card from '../../components/Cards';
import './projetos.css'

function Projetos() {

    const [listaProjetos, setListaProjetos] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/getCards")
            .then((respose) => {
                setListaProjetos(respose.data);
            })
    }, [])

    return (
        <div className='containerProjetos'>
            <h1 className='titulo'>Projetos</h1>
            {typeof listaProjetos !== "undefined" && listaProjetos.map((value) => {
                return (
                    <div>
                        <Card key={value.id}
                            listCard={listaProjetos}
                            setListCard={setListaProjetos}
                            id={value.id}
                            titulo={value.titulo}
                            lang={value.lang}
                            data={value.data}>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default Projetos;