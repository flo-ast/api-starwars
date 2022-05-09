import { useState, useEffect} from 'react';
import axios from 'axios';
import Loading from './Loading';

/* Url de l'API */
const urlSpecies = 'https://swapi.dev/api/species';

/**tableau des pages */
const pageNumbers = [1, 2, 3, 4];


const ThumbnailSpecies = () => {
    
    const [species, setSpecies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        /**intéragis avec l'API pour récupérer des données des espèces */
        const fetchSpecies = () => {
            axios.get(`${urlSpecies}/?page=${currentPage}`).then(res => {
                setSpecies(res.data.results);
                setLoading(false);
            });
        };

        fetchSpecies();

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
                {species.map((specie, item) => (
                        <div key={item} className='sm:w-2/5 lg:w-1/4 mx-5 mb-10 border border-amber-600 p-8'>
                                <h2 className='w-4/5 mx-auto mb-5 border border-amber-400 p-4 font-bold text-center uppercase'>{specie.name}</h2>
                                <p>Classification: {specie.classification}</p>
                                <p>Designation : {specie.designation}</p>
                                <p>Average height : {(specie.average_height === 'n/a') ? 'unknown' : specie.average_height + ' cm'}</p>
                                <p>Average lifespan : {specie.average_lifespan}{(specie.average_lifespan === 'indefinite' || specie.average_lifespan === 'unknown') ? '' : ' ans'}</p>
                                <p>Eye colors : {(specie.eye_colors === 'n/a') ? 'unknown' : specie.eye_colors}</p>
                                <p>Hair colors : {(specie.hair_colors === 'n/a') ? 'unknown' : specie.hair_colors}</p>
                                <p>Skin colors : {(specie.skin_colors === 'n/a') ? 'unknown' : specie.skin_colors}</p>
                                <p>Language : {(specie.language === 'n/a') ? 'unknown' : specie.language}</p>
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

export default ThumbnailSpecies;
