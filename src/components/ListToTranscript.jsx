import React, { useEffect } from 'react'

function ListToTranscript({ videoIds }) {

    useEffect(() => {
        const ListToTranscripts = async () => {

            const res = await fetch('http://localhost:5001/transcript', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    videoIds
                    // videoUrl: `https://www.youtube.com/watch?v=${videoIds[0]}`,
                    // langCode: "en"
                })
            });

            const data = await res.json();
            console.log(data);


        }
        ListToTranscripts()
    }, [])


    return (
        <div>ListToTranscript</div>
    )
}

export default ListToTranscript