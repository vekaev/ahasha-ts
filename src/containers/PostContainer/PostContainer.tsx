import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { BackIcon, MoreIcon } from '../../components/Icons/Icons';
import Post from '../../pages/user/post/Post';
import Layout from '../Layout/Layout';

// TODO: universal hoc
// const userContainer = (Component) => (props) => {
//   const user: IUser = useContext(UserDataContext);
//   return <Component {...props} user={user} />;
// }

// userContainer(
//   profileContainer(
//     Profile,
//   )
// );

const PostContainer: React.FC<any> = ({ history, location }) => {
  const [post, setPost] = useState(location?.state?.post);
  const myUsername = location?.state?.myUsername;
  const profile = location?.state?.profile;

  console.log(post);

  if (!post) {
    console.log('!post')

    // useEffect(() => {
    //   setPost();
    // }, []);
  }

  if (!profile) {
    console.log('!profile');
    // useEffect(() => { 
    //   setPost();
    // }, []);
  }

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
    >
      <Post
        post={post}
        profile={profile}
      />
    </Layout>
  );
}

export default withRouter(PostContainer);
