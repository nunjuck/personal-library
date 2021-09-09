import React from "react";
import { useParams } from "react-router-dom";

import Books from "../Books";
import Categories from "../Categories";

const Library = () => {
  const { name } = useParams();

  return (
    <div className="container">
      <h1 className="title-page">Моя библиотека книг</h1>
      <Categories />
      <Books name={name} />
    </div>
  );
};

export default Library;
