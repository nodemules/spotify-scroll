import axios from 'axios';

const {get} = axios

const host = "https://afternoon-tor-36303.herokuapp.com"

export type Track = {
    id: string
    name: string
    uri: string
    href: string
    popularity: number
    album: Album
    external_urls: Record<string, string>
    duration_ms: number
}

export type Album = {
    images: Image[]
    name: string
}

export type Image = {
    url: string
    height: number
    width: number
}

export const getRandomTrack = (): Promise<Track> =>
    get(`${host}/track/recent/random`)
    .then(res => res.data as Track)
