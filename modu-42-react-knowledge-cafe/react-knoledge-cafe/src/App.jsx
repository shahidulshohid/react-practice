
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  
  //handle book mark button
  const handleAddToBookmar = blog => {
    const newBlog = [...bookmarks, blog]
    setBookmarks(newBlog)
  }

  // handle reading Time
  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
    //remove the read blog form bookmark
    // console.log(id)
    const remaingBookmarks = bookmarks.filter(book => book.id !== id)
    setBookmarks(remaingBookmarks)
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmar={handleAddToBookmar} handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
