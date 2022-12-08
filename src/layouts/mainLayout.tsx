import { Outlet } from 'react-router-dom'
import Header from '../components/sections/Header/Header'
import Footer from '../components/sections/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
