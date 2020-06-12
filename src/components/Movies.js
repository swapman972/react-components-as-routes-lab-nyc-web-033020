import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map((movie, index) =>{
          return <div key={index}> 
            <h3>Title: {movie.title}</h3> 
            <p>Time: {movie.time}mn </p>
            <ul>Genres: 
              {movie.genres.map((element, index) => {
              return <li key={index}> {element}</li>
            })}
            </ul> 
          </div>
        })}
    </div>
  );
};

export default Movies;
