import { useState, useEffect} from 'react';
import axios from 'axios';
import Loading from './Loading';

/* Url de l'API */
const urlPlanets = 'https://swapi.dev/api/planets';

/**tableau des pages */
const pageNumbers = [1, 2, 3, 4, 5, 6];


const ThumbnailPlanets = () => {
    
    const [planets, setPlanets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        /**intéragis avec l'API pour récupérer des données des planetes */
        const fetchPlanets = () => {
            axios.get(`${urlPlanets}/?page=${currentPage}`).then(res => {
                setPlanets(res.data.results);
                setLoading(false);
            });
        };

        fetchPlanets();

        //scroll en haut de page
        if(window.pageYOffset !== 0) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
    }, [currentPage]);

    return loading ? (
        <Loading />
    ) : (
        <>
            <div className='flex flex-row flex-wrap justify-evenly items-stretch'>
                {planets.map((planet, item) => (
                        <div key={item} className='sm:w-2/5 lg:w-1/4 mx-5 mb-10 border border-amber-600 p-8'>
                                <h2 className='w-4/5 mx-auto mb-5 border border-amber-400 p-4 font-bold text-center uppercase'>{planet.name}</h2>
                                <p>Diameter : {planet.diameter} km</p>
                                <p>Orbital period: {planet.orbital_period}</p>
                                <p>Gravity : {planet.gravity}{(planet.gravity === 'unknown') ? '' : ' G'}</p>
                                <p>Climate : {planet.climate}</p>
                                <p>Terrain : {planet.terrain}</p>
                                <p>Surface water : {planet.surface_water}{(planet.surface_water === 'unknown') ? '' : ' %'}</p>
                                <p>Population : {planet.population}</p>
                        </div>
                ))}
            </div>
            <div className='flex flex-row flex-nowrap justify-center pb-8'>
                {pageNumbers.map((number, index) => (
                    <button type='button' className={`${(currentPage) === number ? 'text-neutral-900 bg-amber-700 pointer-events-none ' : ' text-amber-700  bg-neutral-900 pointer '}ml-1 border border-amber-700 rounded px-4 py-2`} key={index} onClick={() => setCurrentPage(number)}>{number}</button>
                ))}
            </div>   
        </>
    );
}

export default ThumbnailPlanets;
