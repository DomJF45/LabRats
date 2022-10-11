import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='globalContainer'>
      <div className='main'>
        {children}
      </div>
    </div>
  )
}

export default Layout