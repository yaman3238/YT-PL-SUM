import { useState } from 'react'
import './App.css'
import ExtactId from './components/ExtactId'
import ConvertToList from './components/ConvertToList'
import ListToTranscript from './components/ListToTranscript'

function App() {
  const [playlistId, setPlaylistId] = useState("");
  const [videosData, setVideosData] = useState([]);
  return (
    <>
      <div className="relative min-h-screen bg-[#1f1f47] overflow-hidden">
        {/* Blobs in background */}
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="blob blob4"></div>
        <div className="blob blob5"></div>
        <div className="blob blob6"></div>
        <ExtactId setPlaylistId={setPlaylistId} playlistId={playlistId} setVideosData={setVideosData} />
        <ConvertToList videosData={videosData} />
        {/* {videosData.length > 0 && <ListToTranscript videoIds={videoIds} />} */}
      </div>

    </>
  )
}

export default App
