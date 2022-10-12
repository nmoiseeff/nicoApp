import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Button from '../Button/Button'
import Negocio from "../Assets/Negocio.jpg"


const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div>
                <h1>Ecommerce</h1>
                <img src={Negocio} alt= "logo"/>
            </div>
            <div>
                <button>Categoria 1</button>
                <button>Categoria 2</button>
                <button>Categoria 3</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar