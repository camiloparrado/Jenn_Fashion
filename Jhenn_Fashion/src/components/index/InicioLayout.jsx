import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export const InicioLayout = () => {
  return (
    <>
        {/* header? */}
        <Header/>
        <main className='layout_content'> {/*main*/}
          <Outlet></Outlet>
        </main>
        <Footer/>
    </>
  )
}
