import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/Slice'

const SearchBar = () => {
    const[text,setText]=useState('')
    const dispatch=useDispatch()
    const SubmitHandler=(e)=>{
        e.preventDefault()
    dispatch(setQuery(text))
    setText(' ')
    }
  return (
    <div className='w-full max-w-4xl mx-auto p-6'>
      <form onSubmit={(e)=>{
        SubmitHandler(e)
      }}
      className="flex w-full gap-4 bg-gray-800 p-3 text-xl rounded-xl shadow-lg">
        
        <input value={text}
        onChange={(e)=>{
            setText(e.target.value)
        }}
          required
          type="text"
          placeholder="Search anything..."
          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:outline-none focus:border-blue-500 transition-colors"
        />

        <button className="px-8 py-3 border-2 border-blue-600 bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer text-white font-semibold shadow-md transition-colors duration-200">
          Search
        </button>

      </form>
    </div>
  )
}

export default SearchBar