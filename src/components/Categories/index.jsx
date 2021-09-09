import React from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchRequest } from "../../api/notion";

const Categories = () => {
  const fetchDataBaseInfo = async () => {
    const response = await fetchRequest.get(
      `/v1/databases/${process.env.REACT_APP_NOTION_DATABASE}`
    );

    const dataBaseInfo = await response.json();

    if (!response.ok) {
      throw new Error(dataBaseInfo.message);
    } else {
      return dataBaseInfo.properties.Category.select.options;
    }
  };

  const { isLoading, data, isError, error } = useQuery(
    "categories",
    fetchDataBaseInfo
  );

  if (isLoading) {
    return <div className="skeleton-nav"></div>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <nav className="catalog">
      <ul className="catalog__list">
        <li className="catalog__item">
          <NavLink
            exact
            to={`/`}
            className="catalog__link"
            activeClassName="catalog__link--active"
          >
            Все книги
          </NavLink>
        </li>
        {data.map((category) => {
          return (
            <li className="catalog__item" key={category.id}>
              <NavLink
                to={`/category/${category.name}`}
                className="catalog__link"
                activeClassName="catalog__link--active"
              >
                {category.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Categories;
