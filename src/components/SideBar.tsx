import React from "react";
import { Button } from "../components/Button";
import { GenreResponseProps } from "../../src/App";

type Props = {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
};

export function SideBar(props: Props) {
  const { genres, handleClickButton, selectedGenreId } = props;

  return (
    <>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {genres.map((genre: GenreResponseProps) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
