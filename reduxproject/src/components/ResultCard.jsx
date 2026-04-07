import React from 'react';
import { useDispatch } from 'react-redux';
import { addCollection, addedToast } from '../redux/features/collectionSlice';

const ResultCard = ({ item }) => {
    const dispatch = useDispatch();

    const addToCollection = (e, item)  => {
        e.preventDefault();
        e.stopPropagation();
        console.log('hiji')
        dispatch(addCollection(item));
        dispatch(addedToast(item))
    };

    return (
        <div className='group'>
            <div className='w-full max-w-80 h-72 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer relative'>
                <div className='h-[75%] w-full overflow-hidden relative bg-black'>
                    {item.type === 'photo' && (
                        <img
                            className='h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out'
                            src={item.thumbnail || item.src}
                            alt={item.title}
                            loading="lazy"
                        />
                    )}
                    {item.type === 'video' && (
                        <video
                            className='h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out'
                            src={item.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={item.thumbnail}
                        />
                    )}
                    {item.type === 'gif' && (
                        <img
                            className='h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out'
                            src={item.thumbnail || item.src}
                            alt={item.title}
                            loading="lazy"
                        />
                    )}

                    <div
                        className={`absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md shadow-sm ${
                            item.type === 'video'
                                ? 'bg-red-500/80'
                                : item.type === 'gif'
                                ? 'bg-blue-600/80'
                                : 'bg-black/60'
                        }`}
                    >
                        {item.type}
                    </div>

                    {/* Overlay on hover */}
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300'></div>
                </div>

                <div className='h-[25%] px-4 py-3 flex items-center justify-between bg-gradient-to-t from-gray-950 to-gray-900 border-t border-gray-800'>
                    <h3 className='text-gray-200 font-medium text-sm line-clamp-2 capitalize tracking-wide flex-1 pr-2 leading-tight'>
                        {item.title || "Untitled item"}
                    </h3>
                    <button
                        onClick={(e) => addToCollection(e, item)}
                        className='px-3 py-1.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all duration-200 shrink-0 hover:shadow-md hover:scale-105'
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;