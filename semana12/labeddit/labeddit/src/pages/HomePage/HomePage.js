import React from 'react';
import { useHistory } from 'react-router-dom';
// import { goToLogin, goToPost, goToRegister } from '../../routes/coordinator';
import { PageContainer } from '../../Style';
import {  CardContainer } from './HomePageStyle';
import PostCard from '../../components/Card/Card';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/urls";


function Home() {
    useProtectedPage();
    
    

    const posts = useRequestData([], `${BASE_URL}/posts`)

    console.log(posts)
    return (
        <PageContainer>
            
            {posts.map((post)=>{
                return (
                    <CardContainer>
                        <PostCard 
                            username={post.username}
                            body={post.body}
                            id={post.id}
                            post={post}
                        />
                    </CardContainer>
                )
            })}
            
            
            
        </PageContainer>
    );
}

export default Home;