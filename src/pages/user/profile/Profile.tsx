import React, { ReactChild } from 'react';
import styles from './Profile.module.scss';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import PostImage from '../../../components/PostImage/PostImage';
import PostFeedPreview from '../../../components/PostFeedPreview/PostFeedPreview';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Layout from '../../../containers/Layout/Layout';
import { Add, BackIcon, Chat, MoreIcon } from '../../../components/Icons/Icons';
import joinClass from '../../../utils/join';

// interface IMyProfileProps {
//   history: RouteComponentProps;
//   user: {}
//   posts: [
//     {
//       id: number,
//       likes: number,
//       myLike: boolean,
//       img: string,
//     }
//   ];
// }

const Profile: React.FC<any> = ({ history, user, posts, myUsername }) => {
  const header = {
    left: <BackIcon />,
    onClickLeft: () => {
      history.goBack();
    },
    middle: user?.username || 'profile',
    right: <span style={{ opacity: .4, lineHeight: 0, marginTop: -2 }}><MoreIcon /></span>,
    // onClickRight: () => {
    //   history.push('/settings')
    // }
  }

  const followClickHandler = (): void => {
    console.log('following');
  }

  const chatClickHandler = (): void => {
    console.log('chat');
  }
  return (
    <Layout
      header={header}
      user={user}
      myUsername={myUsername}
    >
      <div className={styles['profile']}>
        <div className={joinClass(styles['profile-user-wrapper'], 'container')} >
          <div className={styles['profile-user']}>
            <div
              className={joinClass(styles['profile-user-follow-btn'], styles['disabled'])}
              onClick={followClickHandler}
            >
              <Add />
            </div>
            <div>
              <div className={styles['profile-user-photo']}>
                <UserPhoto
                  src={user.mainPhoto}
                />
              </div>
              <div className={styles['profile-user-full-name']}>{user?.fullName}</div>
              <div className={styles['profile-user-info']}>{user?.info}</div>
            </div>
            <div
              className={joinClass(styles['profile-user-chat-btn'], styles['disabled'])}
            // onClick={chatClickHandler}
            >
              <Chat />
            </div>
          </div>

          <Switch>
            <Route exact path={`/u/${user.username}`}>
              <div className={styles['profile-posts']}>
                <div className={styles['profile-tabs']}>
                  <div className={joinClass(styles['profile-tabs-links-post'], styles['tab-link'], styles['active'])}>
                    <Link to={`/u/${user.username}`}>
                      <span>{user?.quantityPosts} post</span>
                    </Link>
                  </div>
                  <div className={joinClass(styles['profile-tabs-links-rank'], styles['tab-link'])}>
                    {/* <Link to={`/u/${user.username}/r`}> */}
                    <span style={{ color: '#CACFD4' }}>{user?.rank || ''} rank</span>
                    {/* </Link> */}
                  </div>
                </div>
                {(posts) ? (<PostFeedPreview>
                  {posts.map((post: { id: number, img: string, url: string | number }, index: number): ReactChild => {
                    return (
                      <Link
                        key={index}
                        to={{
                          pathname: `/u/${user.username}/p/${(post.id)}`,
                          state: {
                            user,
                            post,
                            myUsername,
                          }
                        }}>
                        <PostImage
                          id={post.id}
                          src={post.img}
                        />
                      </Link>
                    )
                  })}
                </PostFeedPreview>) : (
                    <div className={styles['profile-posts-empty']}>
                      <p>This profile has no photo yet.</p>
                    </div>
                  )}
              </div>
            </Route>
            <Route path={`/u/${user.username}/r`}>
              <div className={styles['profile-tabs']}>
                <div className={joinClass(styles['profile-tabs-links-post'], styles['tab-link'])}>
                  <Link to={`/u/${user.username}`}>
                    <span>{posts?.length || 0} post</span>
                  </Link>
                </div>
                <div className={joinClass(styles['profile-tabs-links-rank'], styles['tab-link'], styles['active'])}>
                  <Link to={`/u/${user.username}/r`}>
                    <span>{user?.rank} rank</span>
                  </Link>
                </div>
              </div>
              <span style={{ textAlign: 'center', display: 'block', marginTop: 30 }}>Rank is under construction</span>
            </Route>
          </Switch>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(Profile);
