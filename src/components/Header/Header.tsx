import { FC } from 'react'

import Logo from '../Logo'

import classes from './Header.module.css'

export const Header: FC = () => {
  return (
    <div className='container'>
      <header className={classes.header}>
        <Logo />
      </header>
    </div>
  )
}
