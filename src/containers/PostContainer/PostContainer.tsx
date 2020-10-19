import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { BackIcon, MoreIcon } from '../../components/Icons/Icons';
import Post from '../../pages/user/post/Post';
import Layout from '../Layout/Layout';
import moment from 'moment';
import { observer } from 'mobx-react';
import { SessionContext } from '../../components/SessionContext/SessionContext';
import { Session } from '../../data/TestData2';

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

const PostContainer: React.FC<any> = ({ history, location, match, post }) => {
  const userPost = location?.state?.post || post?.current;
  const { session } = useContext(SessionContext);
  const profile = location?.state?.profile || session?.profile;
  const params: any = match.params;

  useEffect(() => {
    if (!userPost) {
      post.one(params.postId);
    }

    if (!session?.profile) {
      console.log("!session?.profile")
    }
  }, [post, session]);

  if (!profile || !session?.profile) {
    return null;
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
        post={userPost}
        profile={profile}
      />
    </Layout>
  );
}

export default observer(withRouter(PostContainer));
