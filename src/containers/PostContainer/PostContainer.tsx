import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { BackIcon, MoreIcon } from '../../components/Icons/Icons';
import { UserDataContext } from '../../components/UserDataContext/UserDataContext';
import { IUser } from '../../pages/settings/Interfaces';
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
  let user: IUser = location?.state?.user;
  const myUsername = location?.state?.myUsername;

  if (!post) {
    console.log('!post')

    // useEffect(() => { 
    //   setPost();
    // }, []);
  }

  if (!user) {
    const pathUsername: string = history.location.pathname.substr(1);

    console.log('!user');
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
      user={user}
      myUsername={myUsername}
    >
      <Post
        post={post}
        user={user}
      />
    </Layout>
  );
}

export default withRouter(PostContainer);
