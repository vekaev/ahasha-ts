import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { BackIcon, MoreIcon } from '../../components/Icons/Icons';
import Post from '../../pages/user/post/Post';
import Layout from '../Layout/Layout';
import moment from 'moment';

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
  const [userPost, setUserPost] = useState(location?.state?.post);
  const myUsername = location?.state?.myUsername;
  const profile = location?.state?.profile || userPost?.profile;
  const params: any = match.params;

  useEffect(() => {
    if (!userPost) {
      post.one(params.postId);
    }

    if (!profile) {

    }
  }, []);

  useEffect(() => {
    if (!userPost && post?.current) {
      setUserPost({
        createdAt: post?.current.createdAt,
        deletedAt: post?.current.deletedAt,
        description: post?.current.description,
        id: post?.current.id,
        resources: post?.current.resources,
        updatedAt: post?.current.updatedAt,
        profile: {
          ...(post?.current.profile || {}), get fullName() {
            return `${this.firstName} ${this.lastName}`;
          },
          get age() {
            return `${moment().diff(this.birthday, 'years')} years`;
          },
          get info() {
            return this.age;
          }
        },
      });
    }
  }, [post.current]);

  console.log({ userPost })


  if (!profile) {
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

export default withRouter(PostContainer);
