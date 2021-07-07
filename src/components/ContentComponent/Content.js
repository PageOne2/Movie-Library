import React, { useEffect, useState, Fragment } from 'react';
import './Content.css';

import Tmdb from '../../TMDB.js'

import MovieCard from './MovieCard/MovieCard.js'
import MovieInfo from './MovieInfo/MovieInfo.js'
import Sidebar from './SideBar/SideBar.js'


function Content(props) {

    const [movie, setMovies] = useState([])
    const [page, setPage] = useState(2)

    useEffect(() => {
        const load = async () => {
            let list = await Tmdb.getMovies(props.str, props.id, 1)
            setMovies(list.results)
        }
        load()
    }, [props.str, props.id])

    let end = 4;

    let [state, setState] = useState({
        bool: false,
        image: undefined,
        title: undefined,
        overview: undefined,
        date: undefined,
        votes: undefined,
        key: undefined
    })

    let handleClick = (i, k) => {
        setState({
            bool: true,
            image: i.backdrop_path ? i.backdrop_path : undefined,
            title: i.title ? i.title : '',
            overview: i.overview ? i.overview : '',
            date: i.release_date ? i.release_date.slice(0, 4) : '',
            votes: i.vote_average ? i.vote_average : '',
            movieId: i.id,
            key: k,
        })
    }

    let changeState = () => {
        setState({ bool: false })
    }

    let loadMoreContent = async () => {
        let list = await Tmdb.getMovies(props.str, props.id, page)
        setMovies(prev => [...prev, ...list.results])
        setPage(prev => prev + 1)
    }

    let infoFunction = (k) => {
        if (k === end || k === movie.length - 1) {
            end += 5
            return (
                <MovieInfo
                    bool={state.bool}
                    rowId={state.key}
                    infoId={k}
                    movieId={state.movieId}
                    image={state.image}
                    title={state.title}
                    overview={state.overview}
                    date={state.date}
                    votes={state.votes}
                    key={k}
                    onClick={changeState}
                />
            )
        }
        return null
    }

    return (
        <div className="container">
            <div className="content">
                <Sidebar />
                <div className="title"><p>{props.title}</p></div>
                <div className="movie_list">
                    {movie && movie.map((item, key) => (

                        <Fragment key={key}>
                            <MovieCard
                                className="movie_card"
                                title={item.title}
                                image={item.poster_path}
                                infoImage={item.backdrop_path}
                                overview={item.overview}
                                key={item.id}
                                onClick={() => handleClick(item, key)}
                            />

                            {infoFunction(key)}
                        </Fragment>
                    ))}
                </div>
                {movie !== undefined ? <div className="more_btn"><button onClick={loadMoreContent}>More</button></div> : null}
            </div>
        </div>
    )
}

export default Content;