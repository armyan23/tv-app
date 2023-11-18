import React from "react";
import Image from "next/image";

import Button from "@/components/buttons/Button";
import {getMovieTime} from "@/utils/helpers";

const MainMovie = ({movie, isPlay, setIsPlay}) => {

    const onPlay = () => {
        if (!isPlay){
            setTimeout(() => {
                setIsPlay(true)
            },2000)
        }
    }

    return (
        <div className='c-white'>
            <div style={{ zIndex: -1, position: "fixed", width: "100vw", height: "100vh" }}>
                {!isPlay ?
                    <Image
                        alt="Main movie"
                        layout="fill"
                        src={`/movies/${movie.CoverImage}`}
                        objectFit="cover"
                    /> :
                    <video
                        autoPlay
                        muted
                        loop
                        style={{
                            position: 'fixed',
                            right: 0,
                            bottom: 0,
                            minWidth: '100%',
                            minHeight: '100%',
                        }}
                    >
                        <source src={movie.VideoUrl} />
                    </video>
                }
            </div>
            <div style={{position: "fixed" }} className='d-flex direction-column gap-10 pt-150'>
                <p className="m-0 subtitle">MOVIE</p>
                <Image
                    alt="Main movie"
                    width={600}
                    height={80}
                    src={`/movies/${movie.TitleImage}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <p className="m-0">
                    {movie.ReleaseYear} {movie.MpaRating} {getMovieTime(movie.Duration)}
                </p>
                <p className="m-0 w-600">
                    {movie.Description}
                </p>
                <div className="d-flex gap-20">
                    <Button
                        onClick={onPlay}
                        name='Play'
                        icon='play.png'
                        style={{ width: '200px', backgroundColor: 'white', color:"black" }}
                    />
                    <Button
                        name='More Info'
                        style={{
                            width: '200px',
                            background: 'linear-gradient(90deg, rgba(31,31,207,1) 39%, rgba(12,5,124,1) 100%)',
                            color: 'white'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainMovie;