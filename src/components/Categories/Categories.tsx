import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query'

import { fetchRequest } from '../../api/notion'
import { Category } from '../../types/category'

import classes from './Categories.module.css'

export const Categories: FC = () => {
  const fetchDataBaseInfo = async () => {
    const response = await fetchRequest.get(`/v1/databases/${process.env.REACT_APP_NOTION_DATABASE}`)

    const dataBaseInfo = await response.json()

    if (!response.ok) {
      throw new Error(dataBaseInfo.message)
    } else {
      return dataBaseInfo.properties.Category.select.options
    }
  }

  const categories = useQuery<[], Error>('categories', fetchDataBaseInfo)

  if (categories.isLoading) {
    return <div className={classes.skeletonNav}></div>
  }

  if (categories.isError) {
    return <span>Error: {categories.error.message}</span>
  }

  return (
    <nav className={classes.catalog}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink exact to={'/'} className={classes.link} activeClassName={classes.linkActive}>
            Все книги
          </NavLink>
        </li>
        {categories.data &&
          categories.data.map((category: Category) => {
            return (
              <li className={classes.item} key={category.id}>
                <NavLink
                  to={`/category/${category.name}`}
                  className={classes.link}
                  activeClassName={classes.linkActive}
                >
                  {category.name}
                </NavLink>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}
