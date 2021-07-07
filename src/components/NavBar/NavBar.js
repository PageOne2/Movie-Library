import React, { useState } from 'react';
import './NavBar.css'

import search from './img/search.png';

import HomeIcon from '@material-ui/icons/Home';

import { Link, useHistory } from 'react-router-dom'

function Navbar(props) {

    let history = useHistory()

    const [state, setState] = useState("")

    let handleSubmit = (e) => {
        if (state === "") {
            props.click(e, state)
            setState("")
        } else {
            history.push("/results")
            props.click(e, state)
            setState("")
        }
    }

    return (
        <div className="navbar">
            <div className="home"><Link to="/"><HomeIcon className="home_icon" fontSize="large" /></Link></div>
            <div className="input_field">
                <div className="input">
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        <input className="search_input" type="text"
                            placeholder="Search..."
                            style={{ backgroundImage: `url(${search})` }} value={state} onChange={(e) => setState(e.target.value)}></input>
                        <input className="submit_search" type="submit" value="search"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Navbar;