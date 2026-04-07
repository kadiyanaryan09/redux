import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../CollectionCard'

const CollectionPage = () => {
    const collection=useSelector((state) => state.collection.items)
    return (
    <div className='min-h-screen bg-gray-950 p-4'>
        <div className='max-w-screen-2xl mx-auto px-2'>
            <h1 className='text-2xl font-bold text-white mb-6'>My Collection</h1>
            {collection.length === 0 ? (
                 <div className='text-center text-gray-400 mt-20'>
                    <p className='text-lg'>Your collection is empty</p>
                    <p className='text-sm mt-2'>Start adding items to see them here!</p>
                </div>

            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
                    {collection.map((item,idx)=>{
                        return(
                            <div key={item.id || idx} className='flex justify-center'>
                               <CollectionCard item={item}/>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    </div>
  )
}

export default CollectionPage
