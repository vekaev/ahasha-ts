import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { BackIcon, MoreIcon } from '../../components/Icons/Icons';
import Post from '../../pages/user/post/Post';
import Layout from '../Layout/Layout';

const PostContainer: React.FC<any> = ({ history, location }) => {
  const [post, setPost] = useState(location?.state?.post);

  if (!post) {
    console.log('!post')

    // useEffect(() => { 
    //   setPost();
    // }, []);
  }

  const user = location?.state?.user;
  const myUsername = location?.state?.myUsername;

  const header = {
    left: <BackIcon />,
    onClickLeft: () => {
      history.goBack();
    },
    middle: 'Publication',
    right: <span style={{ opacity: .4, lineHeight: 0, marginTop: -2 }}><MoreIcon /></span>,
    // onClickRight: () => {
    //   history.push('/settings')
    // }
  }

  return (
    <Layout
      header={header}
      user={user}
      myUsername={myUsername}
    >
      <Post
        post={post}
        user={user}
        myUsername={myUsername}
      />
    </Layout>
  );
}

export default withRouter(PostContainer);
