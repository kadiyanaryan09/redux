import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchgif } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/Slice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ResultCard from './ResultCard'
const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
  const dispatch = useDispatch()
  useEffect(function () {
    if(!query) return 
    const getData = async () => {
      try {
        dispatch(setLoading())
        let data=[]
        if (activeTab == 'photos') {
          let response = await fetchPhotos(query)
          data = response.results.map((item)=>({
            id:item.id,
            type:'photo',
            title: item.alt_description,
            thumbnail:item.urls.small,
            src:item.urls.full,
            url: item.links?.html || item.url
          }))
        }
        if (activeTab == 'videos') {
          let response = await fetchVideos(query)
          data = response.videos.map((item)=>({
            id:item.id,
            type:'video',
            title:item.user.name||'video',
            thumbnail:item.image,
            src:item.video_files[0].link,
           url:item.url



          }))
        }
        if (activeTab == 'gif') {
          let response = await fetchgif(query)
          data = response.data.data.map((item)=>({
            id:item.id,
            title:item.title||'gif',
            type:'gif',
            thumbnail:item.file.md.gif.url,
            src:item.file.md.gif.url,
            url:item.url
          }))
            
          
        }
        dispatch(setResults(data))
        console.log(data)
      } catch (err) {
        dispatch(setError(err.message))
      } 
    }
    if (query) {
      getData()
    }
  }, [query, activeTab])
  if(error) return<h1>Error</h1>
  if(loading) return <h1>Loading...</h1>
  return (
    <div className='flex flex-wrap gap-4 overflow-auto py-4 px-6 justify-center'>
      {
        results.map((item,idx)=>{
          return<div key={idx}>
            <a href={item.url} target="_blank" rel="noreferrer"><ResultCard item={item}/></a>
            </div>
        })
      }

    </div>
  )
}

export default ResultGrid
