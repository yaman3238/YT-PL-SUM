import React, { useState } from 'react';
import './ExtactId.css'

function ExtactId({ setPlaylistId, playlistId, setVideosData }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleExtract = () => {
    setLoading(true);
    try {
      const parsed = new URL(url);
      const id = parsed.searchParams.get("list");
      setPlaylistId(id || "Invalid URL or no playlist ID found");
      fetchYoutubeList(id);
    } catch {
      setPlaylistId("Invalid URL");
      setLoading(false);
    }
  };

  const fetchYoutubeList = async (id) => {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${import.meta.env.VITE_API_KEY}&maxResults=50&part=snippet&playlistId=${id}`);
    const data = await res.json();
    setVideosData(data?.items);
    setLoading(false);
  }

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center px-4 relative z-10">
        {/* Title */}
        <div className="w-full text-center  z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-yellow-300 text-transparent bg-clip-text drop-shadow-lg text-shadow-sm p-4 ">
            YouTube Playlist Summarizer
          </h1>
        </div>

        {/* Card */}
        <div className="w-full flex justify-center mt-8 mb-8 z-10 ">
          <div className="backdrop-blur-md bg-white/10 px-6 py-4 rounded-2xl shadow-md inset-shadow-sm inset-shadow-gray-950/25 w-full max-w-2xl ">
            <div className="w-full px-4 py-6">
              <input
                className="border-b-2 border-white bg-transparent text-white w-full p-2 placeholder-white outline-none"
                type="text"
                placeholder="Enter YouTube playlist URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={loading}
              />
              <button
                disabled={loading}
                className="bg-pink-500 text-white px-4 py-4 rounded mt-4 w-full flex items-center justify-center"
                onClick={handleExtract}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  "Extract Playlist ID"
                )}
              </button>
            </div>
          </div>
        </div>


      </div>

    </>

  );

}

export default ExtactId