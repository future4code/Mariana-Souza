import { useEffect, useState } from "react"
import { API_KEY, BASE_URL } from "../../constants/urls"
import MovieCard from "./CardMovies"
import { ContainerMoviesList } from "./styled"
import axios from "axios"

const MoviesList = () => {

    const url = `${BASE_URL}/movie/popular${API_KEY}`


    const [movies, setMovies] = useState([])


    const getMovies = () => {
        axios.get(url)
        .then((res)=>{
            console.log(res.data.results)
            setMovies(res.data.results)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    useEffect(()=>{
        getMovies()
    }, [])


    const movieCards = movies.map((movie)=>{
        return <MovieCard
            img={movie.poster_path}
            title={movie.original_title}
        />
    })

    return <ContainerMoviesList>
        {movieCards}
    </ContainerMoviesList>
}

export default MoviesList