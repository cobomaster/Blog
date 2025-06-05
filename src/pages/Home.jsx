import "./Home.css";

export default function Home(){
    return(
        <div className="home"> 
            <h1> Guía de supervivencia en el sector Tech </h1>
            <p> Si quieres saber como puedes sobrevivir ve a Articulos </p>
            <p> Si quieres un contacto mas rapido y cercano pasate por mis redes: </p>
                <ul>
                    <li className="redes">
                        <a href="https://www.linkedin.com/in/juan-francisco-cobo-salas-a84a92198/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        &nbsp;|&nbsp;
                        <a href="https://www.instagram.com/cobo_systems/?next=%2F" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>    
                </ul>
        </div>
    );
} 