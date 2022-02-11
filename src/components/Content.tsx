import React from "react";
import { Button } from "../components/Button";
import { GenreResponseProps, MovieProps, } from "../../src/App";

import { MovieCard } from '../components/MovieCard';

type Props = {
  movies:  MovieProps[],
  selectedGenre: GenreResponseProps,
}

export function Content(props: Props) {
  const { movies, selectedGenre } = props;
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
