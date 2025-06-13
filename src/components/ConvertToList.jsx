import React, { useEffect } from 'react';
import './ConvertToList.css';
function ConvertToList({ videosData }) {


  return (
    <div className='flex flex-col'>
      {videosData.length > 0 && videosData.map((item, index) => {
        const { snippet: { title, thumbnails: { high: { url = '' } } = {}, resourceId: { videoId = '' } = {} } = {}, id } = item || {};
        return (
          <div key={index} className="card w-full max-w-2xl mx-auto p-4 flex flex-col lg:flex-row items-center bg-[rgba(0,0,0,0.1)] rounded-2xl mb-4">
            <div className="w-full lg:w-1/3">
              <img src={url} alt="Image not available" className="w-full rounded-lg" />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left mt-4 lg:mt-0 lg:ml-4">
              <div className="text-lg font-semibold text-white">{title}</div>
              <div className="mt-2 text-sm text-white">{videoId}</div>
            </div>
          </div>

        )
      }
      )}
    </div>
  )
}

export default ConvertToList