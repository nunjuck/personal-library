import { FC, useCallback } from 'react'
import { useQuery } from 'react-query'

import { fetchRequest } from '../../api/notion'
import { BookType } from '../../types/book'
import { Book } from '../Book'

import classes from './Books.module.css'

interface IBookProps {
  category: string
}

export const Books: FC<IBookProps> = ({ category }) => {
  const fetchBooks = useCallback(async () => {
    const filterOnCategory = {
      filter: {
        property: 'Category',
        select: {
          equals: category
        }
      }
    }

    const response = await fetchRequest.post(
      `/v1/databases/${process.env.REACT_APP_NOTION_DATABASE}/query`,
      category ? filterOnCategory : {}
    )

    const libraryData = await response.json()

    if (!response.ok) {
      throw new Error(libraryData.message)
    } else {
      return generateArrayBooks(libraryData.results)
    }
  }, [category])

  const generateArrayBooks = (results: any) => {
    const arr = results.map((result: any) => {
      return {
        id: result.properties.Name.title[0].text.content,
        cover: result.properties.Cover.files[0].file.url,
        title: result.properties.Name.title[0].text.content,
        availability: result.properties.Available.checkbox
      }
    })
    return arr
  }

  const books = useQuery<[], Error>(category || 'all', fetchBooks)

  if (books.isLoading) {
    return (
      <div className={classes.skeletonList}>
        <div className={classes.skeletonBooks}></div>
        <div className={classes.skeletonBooks}></div>
        <div className={classes.skeletonBooks}></div>
        <div className={classes.skeletonBooks}></div>
        <div className={classes.skeletonBooks}></div>
        <div className={classes.skeletonBooks}></div>
      </div>
    )
  }

  if (books.isError) {
    return <span>Error: {books.error.message}</span>
  }

  return (
    <div className={classes.books}>
      {books.data &&
        books.data.map((book: BookType) => {
          return (
            <Book cover={book.cover} title={book.title} availability={book.availability} id={book.id} key={book.id} />
          )
        })}
    </div>
  )
}
