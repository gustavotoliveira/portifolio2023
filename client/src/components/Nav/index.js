import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import { AiFillFolderOpen } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { SiAboutdotme } from 'react-icons/si';

import './nav.css'

function Nav() {


    return (
        <header className='navbar'>
            <Link className='logo' to="/"></Link>
            <div className='navigation'>
                <ul>
                    <li className='list'>
                        <Link to="/" className='link'>
                            <span className='text'>Sobre</span>
                        </Link>
                    </li>
                    <li className='list'>
                        <Link to="/projetos" className='link'>
                            <span className='text'>Projetos</span>
                        </Link>
                    </li>
                    <li className='list'>
                        <Link className='link'>
                            <span className='text'>Certificados</span>

                        </Link>
                    </li>
                    <li className='list'>
                        <Link className='link'>
                            <span className='text'>Contato</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Nav;