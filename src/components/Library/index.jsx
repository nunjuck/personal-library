import React, { useEffect, useState } from "react";
import { NavLink, useParams } from 'react-router-dom';

import Books from '../Books'

const Library = () => {
  const [categories, setCategories] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const fetchDataBaseInfo = async () => {
      const response = await fetch(`/notion/v1/databases/${process.env.REACT_APP_NOTION_DATABASE}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`,
          'Notion-Version': '2021-08-16',
          'Content-Type': 'Content-Type: application/json',
        }
      })

      const dataBaseInfo = await response.json();
      setCategories(dataBaseInfo.properties.Category.select.options)
    }
    fetchDataBaseInfo()
  }, [])

  return (
    <div className="container">
      <h1 className="title-page">Моя библиотека книг</h1>
      <nav className="catalog">
        <ul className="catalog__list">
          <li className="catalog__item"><NavLink exact to={`/`} className="catalog__link" activeClassName="catalog__link--active">Все книги</NavLink></li>
          {
            categories.map((category) => {
              return <li className="catalog__item" key={category.id}><NavLink to={`/category/${category.name}`} className="catalog__link" activeClassName="catalog__link--active" >{category.name}</NavLink></li>
            })
          }
        </ul>
      </nav>
      <Books name={name} />
    </div>
  )
}



export default Library
