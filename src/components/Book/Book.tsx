import React, { FC } from 'react'

import { BookType } from '../../types/book'
import LazyImage from '../helpers/LazyImage'

import classes from './Book.module.css'

export const Book: FC<BookType> = ({ cover, title, availability }) => {
  const copySign = (data: string, event: React.FormEvent<HTMLButtonElement>) => {
    const th = event.currentTarget
    const name = th.innerText
    navigator.clipboard
      .writeText(data)
      .then(() => {
        th.innerText = 'Скопировано'
        setTimeout(() => {
          th.innerText = name
        }, 2000)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('При копировании произошла ошибка. Обновите страницу или скопируйте вручную', error)
      })
  }

  return (
    <article className={classes.card}>
      <div className={classes.cover}>
        <LazyImage
          image={{
            alt: `Обложка книги ${title}`,
            src: cover,
            height: 237
          }}
        />
      </div>
      <h2 className={classes.name} title={title}>
        {title}
      </h2>
      <span className={`${classes.availability} ${availability ? classes.availabilityYes : ''}`}>
        {availability ? 'Доступна' : 'Занята'}
      </span>
      <button
        className={classes.copy}
        type='button'
        onClick={(event) => {
          copySign(title, event)
        }}
      >
        Скопировать название
      </button>
    </article>
  )
}
