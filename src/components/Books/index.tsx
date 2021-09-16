import React, { useCallback } from "react";
import { useQuery } from "react-query";

import { fetchRequest } from "../../api/notion";
import Book from "../Book";

const Books = ({ name }: { name: string }) => {
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

  const books = useQuery<[], Error>(name || "all", fetchBooks);

  if (books.isLoading) {
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

  if (books.isError) {
    return <span>Error: {books.error.message}</span>;
  }

  return (
    <div className="books">
      {books.data &&
        books.data.map((book: any) => {
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
