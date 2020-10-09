import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Post from '../../pages/user/post/Post';

const PostContainer: React.FC<any> = ({ history, location }) => {
  console.log(location.state.post)
  const [post, setPost] = useState(location?.state.post);
  const user = location.state.user;
  const myUsername = location.state.myUsername;

  if (!post) {
    console.log('!post')
    // useEffect(() => {
    //   setPost();
    // }, []);
  }

  return (
    <Post
      post={post}
      user={user}
      myUsername={myUsername}
    />
  );
}

export default withRouter(PostContainer);
