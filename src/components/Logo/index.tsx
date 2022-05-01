import myAvatar1x from '../../images/my-avatar.png'
import myAvatar2x from '../../images/my-avatar@2x.png'

const Logo = () => {
  return (
    <div className='logo'>
      <div className='avatar'>
        <picture>
          <img src={myAvatar1x} srcSet={myAvatar2x + ' 2x'} alt='Фото Никиты Кошелева' />
        </picture>
      </div>
      <div className='logo__info'>
        <div className='logo__title'>Никита Кошелев</div>
        <div className='logo__subtitle'>Фронтенд разработчик</div>
      </div>
    </div>
  )
}

export default Logo
