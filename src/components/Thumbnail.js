import { useState, useEffect} from 'react';
import axios from 'axios';

/* Url de l'API */
const urlFilms = 'https://swapi.dev/api/films';


const Thumbnail = () => {
    
    const [films, setFilms] = useState([]);
    const [onSort, setOnSort] = useState(false);
    
    useEffect(() => {

        /**intéragis avec l'API pour récupérer des données des films */
        const fetchFilms = () => {
            axios.get(urlFilms).then(res => {
                setFilms(res.data.results);
            });
        };
        
        fetchFilms();
        console.log(onSort);
    }, [onSort]);


    /**change le format de la date */
    const formattedDate = (date) => {
        let formatted_date = date.split('-').reverse().join('/');
        return formatted_date;
    };

    /**change l'ordre des films */
    const onButton = () => {
        return setOnSort(current => !current);
    }
    

    return (
        <>
            <div className="flex flex-row flex-nowrap justify-center align-center mb-9">
                <p>Triez par :</p>
                <button className={`${(onSort) ? '' : 'opacity-25 pointer-events-none '}ml-2 border-b border-transparent hover:border-b hover:border-amber-400 transition ease-in duration-200`} type="button" onClick={onButton}>Date de sortie /</button>
                <button className={`${(onSort) ? 'opacity-25 pointer-events-none ' : ''}ml-2 border-b border-transparent hover:border-b hover:border-amber-400 transition ease-in duration-200`} type="button" onClick={onButton}>Chronologie de l'histoire</button>
            </div>
            <div className='flex flex-row flex-wrap justify-evenly items-stretch'>
                {films.sort((a,b) => (onSort) ? a.episode_id - b.episode_id : a - b)
                      .map(film => (
                        <div key={film.episode_id} className='sm:w-2/5 lg:w-1/4 mx-5 mb-10 border border-amber-600 p-8'>
                                <h2 className='w-4/5 mx-auto mb-5 border border-amber-400 p-4 font-bold text-center uppercase'>{film.title}</h2>
                                <p>Episode : {film.episode_id}</p>
                                <p>Date de sortie : {formattedDate(film.release_date)}</p>
                                <p>Réalisateur : {film.director}</p>
                                <p>Producteurs : {film.producer}</p>
                                <p>Synopsis : {film.opening_crawl}</p>
                        </div>
                ))}
            </div>  
        </>
    );
}

export default Thumbnail;
