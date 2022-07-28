import logo from '../../assets/logoaula.png';
import {
    NavBar, 
    Logo,
    Opcoes
} from './MenuStyled';


function Menu() {
    return (
        <section>
            <NavBar>
                <Logo>
                    <img src={logo} />
                    <h1>Garfo e Faca</h1>
                </Logo>
                
                <Opcoes>
                    <li>Inicio</li>
                    <li>Cardápio</li>
                    <li>Sobre</li>
                </Opcoes>
            </NavBar>
        </section>
    );
}

export default Menu;