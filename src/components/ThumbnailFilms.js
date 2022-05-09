import { useState, useEffect} from 'react';
import axios from 'axios';
import Loading from './Loading';

/* Url de l'API */
const urlFilms = 'https://swapi.dev/api/films';


const ThumbnailFilms = () => {
    
    const [films, setFilms] = useState([]);
    const [onSort, setOnSort] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        /**intéragis avec l'API pour récupérer des données des films */
        const fetchFilms = () => {
            axios.get(urlFilms).then(res => {
                setFilms(res.data.results);
                setLoading(false);
            });
        };
        
        fetchFilms();

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
    

    return loading ? (
        <Loading />
    ) : (
        <>
            <div className="flex flex-row flex-nowrap justify-center align-center mb-9">
                <p>Sort by :</p>
                <button className={`${(onSort) ? '' : 'opacity-25 pointer-events-none '}ml-2 border-b border-transparent hover:border-b hover:border-amber-400 transition ease-in duration-200`} type="button" onClick={onButton}>Release date /</button>
                <button className={`${(onSort) ? 'opacity-25 pointer-events-none ' : ''}ml-2 border-b border-transparent hover:border-b hover:border-amber-400 transition ease-in duration-200`} type="button" onClick={onButton}>History timeline</button>
            </div>
            <div className='flex flex-row flex-wrap justify-evenly items-stretch'>
                {films.sort((a,b) => (onSort) ? a.episode_id - b.episode_id : a - b)
                      .map(film => (
                        <div key={film.episode_id} className='sm:w-2/5 lg:w-1/4 mx-5 mb-10 border border-amber-600 p-8'>
                                <h2 className='w-4/5 mx-auto mb-5 border border-amber-400 p-4 font-bold text-center uppercase'>{film.title}</h2>
                                <p>Episode : {film.episode_id}</p>
                                <p>Release date : {formattedDate(film.release_date)}</p>
                                <p>Director : {film.director}</p>
                                <p>Producers : {film.producer}</p>
                                <p>Synopsis : {film.opening_crawl}</p>
                        </div>
                ))}
            </div>  
        </>
    );
}

export default ThumbnailFilms;
