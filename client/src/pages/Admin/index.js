
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import CardsAdmin from '../../components/CardsAdmin';
import './admin.css';

function Admin() {

    const [values, setValues] = useState();
    const [listaProjetos, setListaProjetos] = useState();

    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))

    }

    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
            titulo: values.titulo,
            lang: values.lang,
            data: values.data,
        })
            .then((response) => {
                console.log(response);
            })
    }


    useEffect(() => {
        Axios.get("http://localhost:3001/getCards")
            .then((respose) => {
                setListaProjetos(respose.data);
            })
    }, [])

    return (
        <div className="containerAdmin">
            <h1 className="tituloAdmin">Admin</h1>
            <div>
                <input className="inputAdmin" type="text" name="titulo" placeholder="Titulo" onChange={handleChangeValues} />
                <input className="inputAdmin" type="text" name="lang" placeholder="Linguagem" onChange={handleChangeValues} />
                <input className="inputAdmin" type="text" name="data" placeholder="Data" onChange={handleChangeValues} />
                <button className="buttonEnviarAdmin" onClick={() => handleClickButton()}>Enviar</button>
            </div>

            {typeof listaProjetos !== "undefined" && listaProjetos.map((value) => {
                return (
                    <div>
                        <CardsAdmin className="cardAdmin" key={value.id}
                            listCard={listaProjetos}
                            setListCard={setListaProjetos}
                            id={value.id}
                            titulo={value.titulo}
                            lang={value.lang}
                            data={value.data}>
                        </CardsAdmin>
                    </div>
                )
            })}
        </div>
    )
}

export default Admin;