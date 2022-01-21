
import MovieCard from "./CardMovies"
import { ContainerMoviesList } from "./styled"
import axios from "axios"
import { useEffect } from "react"

const MoviesList = () => {


    const movies = async ()=>{
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=292c233f130d0ab2e4331fdc9ae64f6f`

        await axios.get(url)
        .then((res)=>{
            console.log(res.data.results)
        })
        .catch((err)=>{
            console.log(err.res.data)
        })

    }

    useEffect(()=>{
        movies()
    }, [])


    // const renderMovieList = () => {
       
    // }


    return <ContainerMoviesList>
        {movies.map((movie)=>{
            return <MovieCard
                img={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            />
        })}
    </ContainerMoviesList>
}

export default MoviesList