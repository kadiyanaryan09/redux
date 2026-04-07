import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/Slice';

const Tabs = () => {
  const tabs = ['photos', 'videos', 'gif'];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex justify-center gap-4 p-4 mb-2">
      {tabs.map((elem, idx) => (
        <button
          key={idx}
          className={`${activeTab === elem ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'} capitalize cursor-pointer font-semibold rounded-full px-8 py-2.5 transition-all duration-300`}
          onClick={() => dispatch(setActiveTabs(elem))}
        >
          {elem === 'gif' ? 'GIFs' : elem}
        </button>
      ))}
    </div>
  );
};

export default Tabs;