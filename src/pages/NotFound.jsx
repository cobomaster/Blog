import {Link} from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return(
        <div className='not-found'>
            <h2> 404 - Página no encontrada </h2>
            <p> La ruta que intentaste visitar no existe </p>
            <Link to="/"> Volver al inicio </Link>
        </div>
    );
}
