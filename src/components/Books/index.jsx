import React, { useEffect, useState } from "react";

import Book from '../Book'
const Books = ({ name }) => {
  const [books, setBooks] = useState([])

  useEffect(()=> {
    const fetchBooks = async (nameCategory = null) => {
      const filterOnCategory = {
        filter: {
          property: "Category",
          select: {
            equals: nameCategory
          }
        }
      }
      const response = await fetch(`/notion/v1/databases/${process.env.REACT_APP_NOTION_DATABASE}/query`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`,
          'Notion-Version': '2021-08-16',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nameCategory ? filterOnCategory : {})
      })

      const libraryData = await response.json()
      setBooks(libraryData.results)
    }

    fetchBooks(name)
  }, [name])

  return (
    <div className="books">
        { books.map((book) => {
          return <Book
            cover={book.properties.Cover.files[0].file.url}
            title={book.properties.Name.title[0].text.content}
            availability={book.properties.Available.checkbox}
            key={book.id}
          />
        }) }
      </div>
  )
}

export default Books
