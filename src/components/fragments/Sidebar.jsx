import React from 'react'
import SidebarList from '../elements/SidebarList'
import Navbar from '../elements/Navbar'

const Sidebar = ({className}) => {
  return (
    <div className={className}>
      <div className='sticky-top h-100 border border-2'>
        <div className='sticky-top'  style={{ paddingLeft: "49px", paddingRight: "49px", paddingTop: "68px", paddingBottom: "68px"  }} >
          <SidebarList/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar