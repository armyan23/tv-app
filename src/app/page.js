'use client'
import {useEffect, useState} from "react";
import { SwiperSlide } from 'swiper/react';

import MainMovie from "@/components/cards/MainMovie";
import MovieCard from "@/components/cards/MovieCard";
import Carousel from "@/components/carusel/Carousel";

import data from "@/utils/data.json";

export default function Home() {
    const prevSelected = typeof window === 'object' && JSON.parse(sessionStorage.getItem('movie')) || data.Featured
    const [selected, setSelected] = useState(prevSelected)
    const [movies, setMovies] = useState([])
    const [isPlay, setIsPlay] = useState(false)

    useEffect(() => {
        const sortedByDate =  data.TendingNow.sort((x,y)=>{
            const dateX = new Date(x.Date).getTime()
            const dateY = new Date(y.Date).getTime()

            if (dateX > dateY) return -1
            if (dateX < dateY) return 1
            return 0
        })

        setMovies(sortedByDate)
    }, [])

    const changMovie = (movie) => {
        setIsPlay(false)
        setSelected(movie)
        sessionStorage.setItem('movie', JSON.stringify(movie))
        setTimeout(()=>{
            setIsPlay(true)
        }, 2000)
    }

    return (
        <div className='vh-100'>
            <MainMovie movie={selected} isPlay={isPlay} setIsPlay={setIsPlay}/>
            <div className="h-inherit d-flex gap-20 overflow-x a-end select-none">
                <Carousel>
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.Id}>
                            <MovieCard movie={movie} changMovie={changMovie}/>
                        </SwiperSlide>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
