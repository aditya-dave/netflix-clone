import React, { Component, useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      // Gets the data from the get request which is an array of size 20. The Math function selects one of those objects in the array randomly.
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "100%",
        backgroundImage: `url(${base_url + movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
      </div>

      <div className="banner--fadeBottom" />

      {/* Background Image */}
      {/* title */}
      {/* div > 2 buttons Play and My list */}
      {/* description -> text */}
    </header>
  );
}

export default Banner;
