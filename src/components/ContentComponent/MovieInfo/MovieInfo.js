import React, { useEffect, useState } from 'react';
import './MovieInfo.css';

import StarIcon from '@material-ui/icons/Star';

import Tmdb from '../../../TMDB.js'

function MovieInfo(props) {

    const [trailer, setTrailer] = useState()

    useEffect(() => {
        const loadTrailer = async () => {
            let movieTrailer = await Tmdb.getTrailer(props.movieId)
            setTrailer(movieTrailer)
        }
        loadTrailer()
    })

    let bool = props.rowId <= props.infoId && props.rowId >= props.infoId - 4

    return (
        bool && props.bool ?
            <div className='movie_info' style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
                <div className="overlay"></div>
                <div className="info">
                    <div className='movie_title'><p>{props.title}</p></div>
                    <div className='overview'><p>{props.overview}</p></div>
                    <div className="more_info">
                        <div className="votes"><StarIcon className="star" fontSize="large" /><p>{props.votes}</p></div>
                        <div className="date"><p>{props.date}</p></div>
                    </div>
                </div>
                <div className="video">
                    <iframe
                        src={`https://www.youtube.com/embed/${trailer}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
                <div className="close" onClick={props.onClick}><p>X</p></div>
            </div>
            : null
    )
}

export default MovieInfo;