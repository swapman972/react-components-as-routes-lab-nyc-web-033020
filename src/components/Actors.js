import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return <div key={index}>
          <h3>Name: {actor.name}</h3>
          <ul>Movies: 
              {actor.movies.map((movie, index) => {
              return <li key={index}> {movie} </li>
            })}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
