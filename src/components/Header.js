import { NavLink } from 'react-router-dom';
import header from '../images/header.jpg';
import logo from '../images/logo_star-wars.png';

const Header = ()  => {
    return (
        <>
            <img className='w-screen h-screen object-cover' src={header} alt="Fond étoilé" />
            <img className='absolute w-3/4 left-1/2 top-1/4 -translate-x-1/2' src={logo} alt="logo de Star Wars" />
            <NavLink className="transition ease-in duration-300 hover:scale-105 absolute w-1/3 left-1/2 bottom-1/4 -translate-x-1/2 text-3xl uppercase text-center text-amber-400 border-2 border-amber-400 rounded p-3" to="/films">Enter</NavLink>
        </>
    )
}

export default Header;
