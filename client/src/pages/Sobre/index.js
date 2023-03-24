import { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md'

import './sobre.css';

function Sobre() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', toggleVisible);


    return (
        <div className='container'>
            <div className='containerApresentacao'>
                <h1 className='tituloSobre animacao'>Bem vindo ao meu Portifolio!</h1>
                <p className='descricao'>Olá meu nome é Gustavo, estou à procura de uma
                    oportunidade no mercado de trabalho, buscando diariamente evoluir e quero
                    contribuir somando com a equipe!
                </p>
            </div>
            <div className='containerSobre'>
                <h2>Formação Academica</h2>
                <p>Cursando Analise e Desenvolvimento de Sistemas</p>
                <h3>Histórico Profissional</h3>
                <span>- Alfama Web -</span>
                <p><strong>Outubro 2019 - Novembro 2019 </strong>Desenvolvedor WEB (Estágio)</p>
                <span>- Kbyte -</span>
                <p><strong>Junho 2021 - Março 2023 </strong>Manutenção Predial (Auxiliar Técnico)</p>
                <h4>Resumo Profissional</h4>
                <p>Experiência na empresa Alfama Web na área de atendimento e
                    manutenção de sites. Experiência com manutenção predial. Conhecimento em
                    desenvolvimento web e UX Design.
                </p>
                <h5>Resumo Pessoal</h5>
                <p>
                    Me chamo Gustavo Torres de Oliveira, tenho 21 anos e moro em Praia Grande-SP.
                    Tenho conhecimento academico em algumas linguagens de programação: C#, Java, PHP,
                    C++. Faço alguns cursos de React JS pra me aprimorar cada vez mais no front-end e
                    breve conhecimento em back-end com alguns projetos dos cursos.
                </p>
            </div>
            <div className='voltarTopo voltarTopoAnimation' id='voltarTopo'>
                <MdOutlineKeyboardDoubleArrowUp onClick={() => handleClick()}
                    style={{ display: visible ? 'inline' : 'none' }} />
            </div>
            <footer className='footer'></footer>
        </div>
    )
}

export default Sobre;