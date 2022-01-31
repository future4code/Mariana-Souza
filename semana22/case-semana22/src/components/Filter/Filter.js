import { BASE_URL, API_KEY } from "../../constants/urls"
import {ContainerFilter} from "./styled"
import { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "@material-ui/core"


const Filter = () => {

    
    const [genres, setGenres] = useState([])

    const url = `${BASE_URL}/genre/movie/list${API_KEY}`

    const getGenres = () => {
        axios.get(url)
        .then((res)=>{
            console.log(res.data.genres)
            setGenres(res.data.genres)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    useEffect(()=>{
        getGenres()
    }, [])


    const filterButtons = genres.map((genre)=>{
        return <Button variant="contained" color="#323232" textcolor="primary">
            {genre.name}
        </Button>
    })

    return <ContainerFilter>
        <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
        <h4>Filtre por</h4>
        {filterButtons}
        </ContainerFilter>
}
export default Filter;