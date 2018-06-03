import React from "react";
import Image from "./Image";
const Showcase = ({
  item: { Poster = "", Title, Year, imdbID, Runtime = "" },
}) => (
  <div
    className="ui-showcase-container"
    style={{ maxWidth: "90%", margin: "0 auto" }}
  >
    <div className="ui-showcase">
      <figure className="floating-poster">
        <Image
          className="poster"
          src={Poster}
          alt={`${Title} ${Year}`}
        />
      </figure>
      <div className="ui-showcase-content">
        <h1 className="ui-showcase-title">{Title}</h1>
        <p className="ui-showcase-body">Year: {Year}</p>
        <p className="ui-showcase-body">
          Runtime: {Runtime}
        </p>
        <a
          href={`https://imdb.com/title/${imdbID}`}
          className="imdb-button"
        >
          Visit IMDB
        </a>
      </div>
    </div>
  </div>
);

export default Showcase;
