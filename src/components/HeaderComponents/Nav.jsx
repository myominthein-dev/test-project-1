import React from 'react'

const Nav = ({text,path,origin}) => {
  return (
    <nav className={`${path == origin? 'text-[#6596A1] font-bold' : 'text-[#7F7D7D] font-semibold'}`}>{text}</nav>
  )
}

export default Nav