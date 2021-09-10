import React, { useCallback } from "react";
import { useQuery } from "react-query";

import { fetchRequest } from "../../api/notion";
import Book from "../Book";

const Books = ({ name }) => {
  const fetchBooks = useCallback(async () => {
    const filterOnCategory = {
      filter: {
        property: "Category",
        select: {
          equals: name,
        },
      },
    };

    const response = await fetchRequest.post(
      `/v1/databases/${process.env.REACT_APP_NOTION_DATABASE}/query`,
      name ? filterOnCategory : {}
    );

    const libraryData = await response.json();

    if (!response.ok) {
      throw new Error(libraryData.message);
    } else {
      return libraryData.results;
    }
  }, [name]);

  const { isLoading, data, isError, error } = useQuery(
    name || "all",
    fetchBooks
  );

  if (isLoading) {
    return (
      <div className="skeleton-list">
        <div className="skeleton-books"></div>
        <div className="skeleton-books"></div>
        <div className="skeleton-books"></div>
        <div className="skeleton-books"></div>
        <div className="skeleton-books"></div>
        <div className="skeleton-books"></div>
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="books">
      {/* <div className="skeleton-books"></div> */}
      {data.map((book) => {
        return (
          <Book
            cover={book.properties.Cover.files[0].file.url}
            title={book.properties.Name.title[0].text.content}
            availability={book.properties.Available.checkbox}
            key={book.id}
          />
        );
      })}
    </div>
  );
};

export default Books;
