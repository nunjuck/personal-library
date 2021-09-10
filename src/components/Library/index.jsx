import React from "react";
import { useParams } from "react-router-dom";

import Books from "../Books";
import Categories from "../Categories";

const Library = () => {
  const { name } = useParams();

  return (
    <div className="container">
      <div className="page-info">
        <h1 className="page-info__title">Моя библиотека книг</h1>
        <p className="page-info__subtitle">
          Выбери книгу и напиши мне в
          <a
            className="link"
            href="https://t.me/nunjuck"
            target="_blank"
            rel="noreferrer"
          >
            Телеграм
          </a>
          .
        </p>
      </div>
      <Categories />
      <Books name={name} />
    </div>
  );
};

export default Library;
