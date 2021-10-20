import {useEffect, useState} from "react";
import {getRandomTrack, Track} from "./SpotifyStatsApi";

const RandomTrack = () => {
    const [error, setError] = useState(false)
    const [track, setTrack] = useState<Track>()

    useEffect(() => {
        getRandomTrack()
        .then(setTrack)
        .then(() => setError(false))
        .catch(() => setError(true))
    }, [])

    if (error) return (<>Unable to find a random track</>)
    return (
        track ?
            <>
                <a
                    href={track.external_urls['spotify']}
                    target={"_blank"}
                    rel="noreferrer noopener"
                >
                    <img src={track.album.images[0].url} alt={track.album.name}/>
                </a>
            </>
            :
            <>Searching for a track...</>
    )
}

export default RandomTrack
