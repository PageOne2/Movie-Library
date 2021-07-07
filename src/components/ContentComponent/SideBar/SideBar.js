import React, { useState } from 'react';
import './SideBar.css';

import { Link } from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu';

function Sidebar() {

    const [state, setState] = useState('')

    let handleClick = () => {
        state === '' ? setState('active') : setState('')
    }

    return (
        <>
            <MenuIcon className="menu_icon" onClick={handleClick} />
            <div className={`side_bar ${state}`}>
                <div className="categories">
                    <div className="genre"><p>Genres</p></div>
                    <ul>
                        <li><Link to="/action">Action</Link></li>
                        <li><Link to="/adventure">Adventure</Link></li>
                        <li><Link to="/animation">Animation</Link></li>
                        <li><Link to="/comedy">Comedy</Link></li>
                        <li><Link to="/crime">Crime</Link></li>
                        <li><Link to="/documentary">Documentary</Link></li>
                        <li><Link to="/drama">Drama</Link></li>
                        <li><Link to="/family">Family</Link></li>
                        <li><Link to="/fantasy">Fantasy</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/horror">Horror</Link></li>
                        <li><Link to="/music">Music</Link></li>
                        <li><Link to="/mistery">Mistery</Link></li>
                        <li><Link to="/romance">Romance</Link></li>
                        <li><Link to="/syfy">Science Fiction</Link></li>
                        <li><Link to="/thriller">Thriller</Link></li>
                        <li><Link to="/war">War</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;