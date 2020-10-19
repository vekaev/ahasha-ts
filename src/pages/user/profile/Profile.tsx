import React, { ReactChild, useContext } from 'react';
import styles from './Profile.module.scss';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import PostImage from '../../../components/PostImage/PostImage';
import PostFeedPreview from '../../../components/PostFeedPreview/PostFeedPreview';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Layout from '../../../containers/Layout/Layout';
import { Add, BackIcon, Chat, MoreIcon } from '../../../components/Icons/Icons';
import joinClass from '../../../utils/join';
import { LangContext } from './../../../components/LangContext/LangContext';
import { IPostResource } from '../../../data/dto';
import { observer } from 'mobx-react';

// interface IMyProfileProps {
//   history: RouteComponentProps;
//   profile: {};
//   posts: [
//     {
//       id: number;
//       likes: number;
//       myLike: boolean;
//       img: string;
//     }
//   ];
// };

const Profile: React.FC<any> = ({ history, myUsername, userProfile, posts, data, abbr, session }) => {
  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['user']['profile'];

  const header = {
    left: <BackIcon />,
    onClickLeft: () => {
      history.goBack();
    },
    middle: userProfile?.username || text['header'],
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
    <Layout
      header={header}
    >
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
                <UserPhoto abbr={abbr} src={userProfile.avatar} />
              </div>
              <div className={styles['profile-user-full-name']}>
                {userProfile?.fullName}
              </div>
              <div className={styles['profile-user-info']}>
                {userProfile?.info}
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
            <Route exact path={`/${userProfile.username}`}>
              <div className={styles['profile-posts']}>
                <div className={styles['profile-tabs']}>
                  <div
                    className={joinClass(
                      styles['profile-tabs-links-post'],
                      styles['tab-link'],
                      styles['active']
                    )}
                  >
                    <Link to={`/${userProfile.username}`}>
                      <span>
                        {posts?.length || null} {text['post']}
                      </span>
                    </Link>
                  </div>
                  <div
                    className={joinClass(
                      styles['profile-tabs-links-rank'],
                      styles['tab-link']
                    )}
                  >
                    {/* <Link to={`/${profile.username}/r`}> */}
                    <span style={{ color: '#CACFD4' }}>
                      {userProfile?.rank || ''} {text['rank']}
                    </span>
                    {/* </Link> */}
                  </div>
                </div>
                {posts ? (
                  <PostFeedPreview>
                    {posts.map(
                      (
                        post: any,
                        index: number,
                      ): ReactChild => {
                        return (
                          <Link
                            key={index}
                            to={{
                              pathname: `/p/${post.id}`,
                              state: {
                                profile: JSON.parse(JSON.stringify(userProfile)),
                                post: JSON.parse(JSON.stringify(post)),
                              },
                            }}
                          >
                            {post.resources.map((resource: IPostResource, index: number) => (
                              <PostImage key={index} id={post.id} src={resource.origin} />
                            ))}
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
            <Route exact path={`/${userProfile.username}/r`}>
              <div className={styles['profile-tabs']}>
                <div
                  className={joinClass(
                    styles['profile-tabs-links-post'],
                    styles['tab-link']
                  )}
                >
                  <Link to={`/${userProfile.username}`}>
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
                  <Link to={`/${userProfile.username}/r`}>
                    <span>
                      {userProfile?.rank} {text['rank']}
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
            <Redirect from='*' to='/404' />
          </Switch>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(observer(Profile));
