import React from 'react';
import { goBack, goToHome } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';


function Post() {
    const history = useHistory();
  return (
    <div>
      <h3>Post</h3>
      <button onClick={()=>goBack(history)}>Home</button>
    </div>
  );
}

export default Post;