import React from 'react'
import './Sidebar.css'
import { House, Hash, Bell, Envelope, BookmarksSimple, FileText, User, DotsThreeCircle, Pencil } from 'phosphor-react'
import ttlogo from '/assets/ttlogo.png'
const Sidebar = () => {
  return (
    <aside className="sidebar">
        <img className="logo" src={ttlogo} alt="twitter logo" />

        <nav className='main-navigation'>
          <a href="/" className='active'><House weight='fill'/> Home</a>
          <a href="#">
            <Hash/>
           <span>Explore</span> </a>
          <a href="#">
            <Bell/>
           <span>Notifications</span> </a>
          <a href="#">
            <Envelope/>
           <span>Messages</span> </a>
          <a href="#">
            <BookmarksSimple/>
           <span>Bookmarks</span> </a>
          <a href="#">
            <FileText/>
            <span>Lists</span></a>
          <a href="#">
            <User/>
            <span>Profile</span></a>
          <a href="#">

            <DotsThreeCircle/>
            More</a>

        </nav>

        <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>        </aside>  )
}

export default Sidebar