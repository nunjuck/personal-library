import React, { useEffect, useState } from "react";
import Book from './Book'
import axios from "axios";

// const { Client } = require("@notionhq/client")

const Library = () => {
  const [books, setBooks] = useState([])

  useEffect(()=> {
    const fetchBooks = async (id) => {
      const response = await axios.get(`/notion/v1/databases/${id}`)
      console.log(response);
    }

    fetchBooks('c6baa094890c49d3ae3bfd3f209dc48')
  })


  return (
    <div className="container">
      <h1 className="title-page">Моя библиотека книг</h1>
      <nav className="catalog">
        <ul className="catalog__list">
          <li className="catalog__item"><a className="catalog__link" href="#all">Все книги</a></li>
          <li className="catalog__item"><a className="catalog__link" href="#soft">Программирование</a></li>
          <li className="catalog__item"><a className="catalog__link" href="#psychology">Психология</a></li>
          <li className="catalog__item"><a className="catalog__link" href="#marketing">Маркетинг</a></li>
          <li className="catalog__item"><a className="catalog__link" href="#design">Дизайн</a></li>
        </ul>
      </nav>
      <div className="books">
        <Book />
      </div>
    </div>
  )
}

export default Library
