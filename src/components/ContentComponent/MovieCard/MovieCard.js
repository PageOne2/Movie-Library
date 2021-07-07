import React from 'react';
import './MovieCard.css';

function MovieCard(props) {

    return (
        <div className='movie_card' onClick={props.onClick}>
            <div className="movie_img"><img src={`https://image.tmdb.org/t/p/w300${props.image}`} alt="thumbnail"></img></div>
        </div>
    )
}

export default MovieCard