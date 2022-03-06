import React from "react";
import CardUsers from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import Formulaire from "../components/Form";
import { Input, Button } from "antd";
import HeartOutlined from "@ant-design/icons";
function Home(item) {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("scary");
  const uniqid = require("uniqid");
  const { Search } = Input;
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  useEffect(() => {
    axios
      .get(
        ` https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THE_MOVIES_DB_API_KEY}&query=${search}&language=fr-FR`
      )
      .then((res) => setPosts(res.data.results))

      .catch((error) => console.log(error));
  }, [search]);

  const saveLocalStorage = () => {
    window.localStorage.setItem("name", item.id);
  };

  console.log(item);
  return (
    <div>
      <h1 className="text-4xl text-center mt-5">React Movies</h1>
      <Formulaire />
      <div className="flex justify-center">
        <div className="w-54">
          <Search
            placeholder="Rechercher ..."
            onChange={(e) => setSearch(e.target.value)}
            enterButton
          />
        </div>
      </div>
      <div className="flex justify-center gap-5 flex-wrap px-5 mt-20">
        {posts.slice(0, 22).map((post) => (
          <div key={uniqid()} className="flex rounded-lg">
            <CardUsers
              image={post.poster_path}
              className="text-center"
              avatar={
                <Button
                  onClick={() => saveLocalStorage()}
                  type="danger"
                  shape="round"
                  icon={<HeartOutlined />}
                >
                  Coup de coeur
                </Button>
              }
              description={post.title}
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
