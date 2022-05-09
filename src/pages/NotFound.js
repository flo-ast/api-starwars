import { Link } from 'react-router-dom';
import loader from '../images/loader.gif';

const NotFound = () => {
  return (
    <div className='h-screen text-amber-400 bg-neutral-900 pb-9'>
      <div className='flex flex-col justify-between content-center mb-8'>
        <p className='self-center my-5 text-xl'>You got lost</p>
        <Link className="transition ease-in duration-300 hover:scale-105 w-1/3 text-3xl uppercase text-center text-amber-400 mx-auto mt-2 border-2 border-amber-400 rounded p-3" to="/">Return</Link>
      </div>
        <img src={loader} alt='Gif de Star Wars' className='m-auto rounded-full'/>
    </div>
  )
}

export default NotFound;