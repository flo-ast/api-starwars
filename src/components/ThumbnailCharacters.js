import { useState, useEffect} from 'react';
import axios from 'axios';
import Loading from './Loading';

/* Url de l'API */
const urlCharacters = 'https://swapi.dev/api/people';

/**tableau des pages */
const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const ThumbnailCharacters = () => {
    
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        /**intéragis avec l'API pour récupérer des données des personnages */
        const fetchCharacters = () => {
            axios.get(`${urlCharacters}/?page=${currentPage}`).then(res => {
                setCharacters(res.data.results);
                setLoading(false);
            });
        };
        
        fetchCharacters();

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
                {characters.map((character, item) => (
                        <div key={item} className='sm:w-2/5 lg:w-1/4 mx-5 mb-10 border border-amber-600 p-8'>
                                <h2 className='w-4/5 mx-auto mb-5 border border-amber-400 p-4 font-bold text-center uppercase'>{character.name}</h2>
                                <p>Birth year : {character.birth_year}</p>
                                <p>Gender : {character.gender}</p>
                                <p>Height : {character.height}</p>
                                <p>Mass : {character.mass}</p>
                                <p>Skin color: {character.skin_color}</p>
                                <p>Hair color : {character.hair_color}</p>
                                <p>Eye color : {character.eye_color}</p>
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

export default ThumbnailCharacters;
