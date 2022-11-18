import './CartWidget.css';
import Logo from '../../assets/images/cart.png';

const CartWidget = () =>{
    return(
        <div className="cart">
            <img src={Logo} className="cart__image" alt="cart"/>
            <label className="cart__items" htmlFor="">0</label>
        </div>
    )
}

export default CartWidget;