import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo_star-wars.png';


const Navbar = ()  => {
    return (
        <nav className='flex items-center p-2 mb-12'>
            <Link to='/' className='w-1/4'>
                <img className='w-1/2' src={logo} alt="Logo de Star Wars" />
            </Link>
            <div className='flex justify-evenly w-3/4'>
                <NavLink to="/films" className='transition ease-in-out duration-400 border-b-2 border-neutral-900 hover:border-b-amber-400'>Films</NavLink>
                <NavLink to="/characters" className='transition ease-in-out duration-400 border-b-2 border-neutral-900 hover:border-b-amber-400'>Characters</NavLink>
                <NavLink to="/planets" className='transition ease-in-out duration-400 border-b-2 border-neutral-900 hover:border-b-amber-400'>Planets</NavLink>
                <NavLink to="/species" className='transition ease-in-out duration-400 border-b-2 border-neutral-900 hover:border-b-amber-400'>Species</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;