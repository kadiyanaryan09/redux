import React from 'react'
import SearchBar from '../SearchBar'
import Tabs from '../Tabs'
import ResultGrid from '../ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Homepages = () => {
    const {query}=useSelector((store)=> store.search)
  return (
    <div>

       
        <SearchBar/>
        {query!=''?<div><Tabs/><ResultGrid/></div>:''}
      
    </div>
  )
}

export default Homepages
