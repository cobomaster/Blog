import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return(
        <nav className='navbar'>
            <Link to="/" className='nav-link'>Inicio</Link>
            <Link to="/posts" className='nav-link'>Artículos</Link>
            <Link to="/about" className='nav-link'>Sobre mí</Link>
        </nav>
    );
}
