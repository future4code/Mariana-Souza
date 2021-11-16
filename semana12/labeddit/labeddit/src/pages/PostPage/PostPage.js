import React from 'react';
import { goBack } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useUnprotectedPage';
import {PageContainer} from '../../Style'
import {  CardContainer } from '../HomePage/HomePageStyle';
import PostCard from '../../components/Card/Card'
import {BASE_URL} from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom';

function Post() {

  return (
    <PageContainer>
      <CardContainer>
        {/* passar requisição para global state e passar por contexto infos de post detalhado */}
      </CardContainer>
 </PageContainer>
  );
}

export default Post;