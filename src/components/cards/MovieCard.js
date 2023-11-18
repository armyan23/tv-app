import React from "react";
import Image from "next/image";

const MovieCard = ({movie, changMovie}) => {
    return (
        <div onClick={()=>changMovie(movie)} className='d-flex direction-column gap-10 cursor-p'>
            <Image
                alt="Main movie"
                width={100}
                height={160}
                src={`/movies/${movie.CoverImage}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <p className="m-0 subtitle">{movie.Title}</p>
        </div>
    )
}

export default MovieCard;