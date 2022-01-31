import React from 'react';
import { goToDetailPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core';
import Filter from '../../components/Filter/Filter';
import MoviesList from '../../components/MovieList/MoviesList';



const HomePage = () => {

    const navigate = useNavigate()
    return (
        <div>
            <Filter/>
            <MoviesList/>
            HomePage
            <button onClick={()=>goToDetailPage(navigate, 2)}>Detalhe</button>

            <Button variant="contained" color="primary" textcolor="primary">Detalhe</Button>
        </div>
    );
}

export default HomePage;