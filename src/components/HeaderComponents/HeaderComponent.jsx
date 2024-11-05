import React from 'react'
import Container from '../Container'
import vactor from "../../assets/logo.svg"
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
const HeaderComponent = () => {
  const location = useLocation();
  const path = location.pathname

  return (
    <Container className={"flex bg-white flex-col px-3 items-center h-[72px] justify-center"}>
      <header className='flex h-[32px] w-full max-w-[1412px] justify-between'>
          <nav>
              <img src={vactor}  />
          </nav>

          <navbar className = "w-[250px] flex gap-10 text-[14px] leading-[22px] font-lato h-[22px]">
            <Nav path={path} origin='/' text={'Home'} />
            <Nav path={path} origin='/about' text={'About'}/>
            <Nav path={path} origin='/blog' text={'Blog'}/>
            <Nav path={path} origin='/contact' text={'Contact'}/>
          </navbar>
      </header>
    </Container>
  )
}

export default HeaderComponent