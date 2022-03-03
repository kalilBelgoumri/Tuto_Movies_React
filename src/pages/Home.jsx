import React from "react";
import CardUsers from "../components/Card";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Formulaire from "../components/Form";
import { StarTwoTone } from "@ant-design/icons";

function Home() {
  const [posts, setPosts] = useState([]);
  const uniqid = require("uniqid");
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=24516a6f5d7d2a3dc0d5b6d79c4d3f4f&query=star"
      );
      setPosts(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center mt-5">React Movies</h1>
      <Header />
      <Formulaire />
      <div className="flex justify-center gap-5 flex-wrap px-5  mt-20">
        {posts.slice(0, 12).map((post) => (
          <div key={uniqid()} className="flex rounded-lg">
            <CardUsers
              className="text-center"
              description={post.title}
              image={post.poster_path}
              title={
                post.release_date ? (
                  <h5>Sortie le : {dateFormater(post.release_date)} </h5>
                ) : (
                  ""
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;