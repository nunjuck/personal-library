import { FC } from 'react'

import myAvatar1x from '../../images/my-avatar.png'
import myAvatar2x from '../../images/my-avatar@2x.png'

import classes from './Logo.module.css'

export const Logo: FC = () => {
  return (
    <div className={classes.logo}>
      <div className={classes.avatar}>
        <picture>
          <img src={myAvatar1x} srcSet={myAvatar2x + ' 2x'} alt='Фото Никиты Кошелева' />
        </picture>
      </div>
      <div className={classes.logoInfo}>
        <div className={classes.title}>Никита Кошелев</div>
        <div className={classes.logoSubtitle}>Фронтенд разработчик</div>
      </div>
    </div>
  )
}
