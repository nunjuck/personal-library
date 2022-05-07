import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { Books } from '../Books'
import { Categories } from '../Categories'

import classes from './Library.module.css'

export const Library: FC = () => {
  const { nameCategory } = useParams<{ nameCategory: string }>()

  return (
    <div className='container'>
      <div className={classes.pageInfo}>
        <h1 className={classes.title}>Моя библиотека книг</h1>
        <p className={classes.subtitle}>
          Выбери книгу и напиши мне в&nbsp;
          <a className='link' href='https://t.me/nunjuck' target='_blank' rel='noreferrer'>
            Телеграм
          </a>
          .
        </p>
      </div>
      <Categories />
      <Books category={nameCategory} />
    </div>
  )
}
