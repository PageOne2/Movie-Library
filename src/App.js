import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';

import Content from './components/ContentComponent/Content.js';
import Navbar from './components/NavBar/NavBar.js';

function App() {

  const movieList = [
    {
      slug: 'action',
      title: 'Action',
      id: 28
    },
    {
      slug: 'adventure',
      title: 'Adventure',
      id: 12
    },
    {
      slug: 'animation',
      title: 'Animation',
      id: 16
    },
    {
      slug: 'comedy',
      title: 'Comedy',
      id: 35
    },
    {
      slug: 'crime',
      title: 'Crime',
      id: 80
    },
    {
      slug: 'documentary',
      title: 'Documentary',
      id: 99
    },
    {
      slug: 'drama',
      title: 'Drama',
      id: 18
    },
    {
      slug: 'family',
      title: 'Family',
      id: 10751
    },
    {
      slug: 'fantasy',
      title: 'Fantasy',
      id: 14
    },
    {
      slug: 'history',
      title: 'History',
      id: 36
    },
    {
      slug: 'horror',
      title: 'Horror',
      id: 27
    },
    {
      slug: 'music',
      title: 'Music',
      id: 10402
    },
    {
      slug: 'mistery',
      title: 'Mistery',
      id: 9648
    },
    {
      slug: 'romance',
      title: 'Romance',
      id: 10402
    },
    {
      slug: 'syfy',
      title: 'Science Fiction',
      id: 878
    },
    {
      slug: 'thriller',
      title: 'Thriller',
      id: 53
    },
    {
      slug: 'war',
      title: 'War',
      id: 10752
    },
  ];

  const [str, setStr] = useState("")

  let handleClick = (e, movie) => {
    e.preventDefault()
    if (movie !== "") {
      setStr(movie)
    }
  }


  return (
    <Router>
      <div>

        <Navbar click={handleClick} />

        <Switch>
          <Route exact path="/">
            <Content str={undefined} id={0} title="Popular" />
          </Route>
          <Route path="/results">
            <Content str={str} id={-1} title="Results..." />
          </Route>

          {movieList && movieList.map((item, key) => (
            <Route path={`/${item.slug}`} key={key}>
              <Content id={item.id} title={item.title} />
            </Route>
          ))}
        </Switch>

      </div>
    </Router>
  );
}
export default App;
