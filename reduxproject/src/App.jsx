import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Homepages from './components/pages/Homepages'
import CollectionPage from './components/pages/CollectionPage'
  import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='min-h-screen text-white w-full bg-black'>
      <nav className="flex justify-between items-center p-5 bg-blue-800 shadow-md">
        <div className="text-2xl font-bold tracking-wider">Media Search</div>
        <div className="flex gap-4 text-lg font-medium">
          <Link to="/" className="bg-white text-blue-800 hover:bg-gray-100 transition-colors px-5 py-2 rounded-lg shadow font-semibold">Search</Link>
          <Link to="/collection" className="bg-white text-blue-800 hover:bg-gray-100 transition-colors px-5 py-2 rounded-lg shadow font-semibold">Collection</Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Homepages />} />
        <Route path='/collection' element={<CollectionPage />} />

      </Routes>
     <ToastContainer


/>

    </div>

  )

}
export default App
