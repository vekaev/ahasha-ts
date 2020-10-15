import React, { ReactChild, useContext } from 'react';
import styles from './Profile.module.scss';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import PostImage from '../../../components/PostImage/PostImage';
import PostFeedPreview from '../../../components/PostFeedPreview/PostFeedPreview';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Layout from '../../../containers/Layout/Layout';
import { Add, BackIcon, Chat, MoreIcon } from '../../../components/Icons/Icons';
import joinClass from '../../../utils/join';
import { IUser } from '../../Settings/Interfaces';
import { UserDataContext } from '../../../components/UserDataContext/UserDataContext';
import { LangContext } from './../../../components/LangContext/LangContext';

// interface IMyProfileProps {
//   history: RouteComponentProps;
//   anotherUser: {}
//   posts: [
//     {
//       id: number,
//       likes: number,
//       myLike: boolean,
//       img: string,
//     }
//   ];
// }

const Profile: React.FC<any> = ({ history, anotherUser, posts, user }) => {
  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['user']['profile'];

  const header = {
    left: <BackIcon />,
    onClickLeft: () => {
      history.goBack();
    },
    middle: anotherUser?.username || text['header'],
    right: (
      <span style={{ opacity: 0.4, lineHeight: 0, marginTop: -2 }}>
        <MoreIcon />
      </span>
    ),
    // onClickRight: () => {
    //   history.push('/settings')
    // }
  };

  const followClickHandler = (): void => {
    console.log('following');
  };

  // const chatClickHandler = (): void => {
  //   console.log('chat');
  // }
  return (
    <Layout header={header} user={user}>
      <div className={styles['profile']}>
        <div className={joinClass(styles['profile-user-wrapper'], 'container')}>
          <div className={styles['profile-user']}>
            <div
              className={joinClass(
                styles['profile-user-follow-btn'],
                styles['disabled']
              )}
              onClick={followClickHandler}
            >
              <Add />
            </div>
            <div>
              <div className={styles['profile-user-photo']}>
                <UserPhoto src={anotherUser.mainPhoto} />
              </div>
              <div className={styles['profile-user-full-name']}>
                {anotherUser?.fullName}
              </div>
              <div className={styles['profile-user-info']}>
                {anotherUser?.info}
              </div>
            </div>
            <div
              className={joinClass(
                styles['profile-user-chat-btn'],
                styles['disabled']
              )}
            // onClick={chatClickHandler}
            >
              <Chat />
            </div>
          </div>

          <Switch>
            <Route exact path={`/${anotherUser.username}`}>
              <div className={styles['profile-posts']}>
                <div className={styles['profile-tabs']}>
                  <div
                    className={joinClass(
                      styles['profile-tabs-links-post'],
                      styles['tab-link'],
                      styles['active']
                    )}
                  >
                    <Link to={`/${anotherUser.username}`}>
                      <span>
                        {anotherUser?.quantityPosts} {text['post']}
                      </span>
                    </Link>
                  </div>
                  <div
                    className={joinClass(
                      styles['profile-tabs-links-rank'],
                      styles['tab-link']
                    )}
                  >
                    {/* <Link to={`/${anotherUser.username}/r`}> */}
                    <span style={{ color: '#CACFD4' }}>
                      {anotherUser?.rank || ''} {text['rank']}
                    </span>
                    {/* </Link> */}
                  </div>
                </div>
                {posts ? (
                  <PostFeedPreview>
                    {posts.map(
                      (
                        post: { id: number; img: string; url: string | number },
                        index: number
                      ): ReactChild => {
                        return (
                          <Link
                            key={index}
                            to={{
                              pathname: `/${anotherUser.username}/p/${post.id}`,
                              state: {
                                user: anotherUser,
                                post,
                              },
                            }}
                          >
                            <PostImage id={post.id} src={post.img} />
                          </Link>
                        );
                      }
                    )}
                  </PostFeedPreview>
                ) : (
                    <div className={styles['profile-posts-empty']}>
                      <p>{text['noPhoto']}</p>
                    </div>
                  )}
              </div>
            </Route>
            <Route path={`/${anotherUser.username}/r`}>
              <div className={styles['profile-tabs']}>
                <div
                  className={joinClass(
                    styles['profile-tabs-links-post'],
                    styles['tab-link']
                  )}
                >
                  <Link to={`/${anotherUser.username}`}>
                    <span>
                      {posts?.length || 0} {text['post']}
                    </span>
                  </Link>
                </div>
                <div
                  className={joinClass(
                    styles['profile-tabs-links-rank'],
                    styles['tab-link'],
                    styles['active']
                  )}
                >
                  <Link to={`/${anotherUser.username}/r`}>
                    <span>
                      {anotherUser?.rank} {text['rank']}
                    </span>
                  </Link>
                </div>
              </div>
              <span
                style={{ textAlign: 'center', display: 'block', marginTop: 30 }}
              >
                {text['rankProcess']}
              </span>
            </Route>
          </Switch>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Profile);
