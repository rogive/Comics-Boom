import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "./Home.scss";

export const Home = () => {
  const [comic, setComic] = useState({});

  useEffect(() => {
    handleRequest(1);
  }, [])

  function handleRequest(numberComic) {
    axios({
      method: 'get',
      url: `${process.env.API_URL}/${numberComic}/${process.env.API_SERVICE}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then((data) => {
      setComic(data);
    })
    .catch((error) => alert(error.response.data.message))
  }

  return (
    <div className="Home">
      <div className="Comics__Container">
      </div>
    </div>
  );
};