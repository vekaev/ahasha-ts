import React, { ReactChild, useContext } from 'react';
import styles from './MyProfile.module.scss';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import PostImage from '../../../components/PostImage/PostImage';
import PostFeedPreview from '../../../components/PostFeedPreview/PostFeedPreview';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Layout from '../../../containers/Layout/Layout';
import { MoreIcon } from '../../../components/Icons/Icons';
import joinClass from '../../../utils/join';
import { Upload } from '../../../components/Navbar/NavBar';
import { LangContext } from './../../../components/LangContext/LangContext';
import cloneObject from '../../../utils/cloneObject';
import { IPostResource } from '../../../data/dto';

// interface IMyProfileProps {
//   history: RouteComponentProps;
//   user: {};
//   posts: [
//     {
//       id: number;
//       likes: number;
//       myLike: boolean;
//       img: string;
//     }
//   ];
// }

const MyProfile: React.FC<any> = ({ history, profile, posts, abbr }) => {
  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['user']['profile'];

  const header = {
    middle: profile?.username || text['header'],
    right: <MoreIcon />,
    onClickRight: () => {
      history.push('/account/edit');
    },
  };

  return (
    <Layout header={header}>
      <div className={styles['profile']}>
        <div className={'container'}>
          <div className={styles['profile-user']}>
            <div className={styles['profile-user-photo']}>
              <UserPhoto style={{ fontSize: 32, letterSpacing: '0.025em' }} abbr={abbr} src={profile.mainPhoto} />
            </div>
            <div className={styles['profile-user-full-name']}>
              {profile?.fullName}
            </div>
            <div className={styles['profile-user-info']}>{profile?.info}</div>
          </div>

          <Switch>
            <Route exact path={`/${profile.username}`}>
              <div className={styles['profile-posts']}>
                <div className={styles['profile-tabs']}>
                  <div
                    className={joinClass(
                      styles['profile-tabs-links-post'],
                      styles['tab-link'],
                      styles['active']
                    )}
                  >
                    <Link to={`/${profile.username}`}>
                      <span>
                        {posts?.length || 0} {text['post']}
                      </span>
                    </Link>
                  </div>
                  <div
                    className={joinClass(
                      styles['profile-tabs-links-rank'],
                      styles['tab-link']
                    )}
                  >
                    {/* <Link to={`/${user.username}/r`}> */}
                    <span style={{ color: '#CACFD4' }}>
                      {profile?.rank || ''} {text['rank']}
                    </span>
                    {/* </Link> */}
                  </div>
                </div>
                {posts ? (
                  <PostFeedPreview>
                    {posts?.map(
                      (
                        post: any,
                        index: number
                      ): ReactChild => {
                        return (
                          <Link
                            key={index}
                            to={{
                              pathname: `/p/${post.id}`,
                              state: {
                                profile: JSON.parse(JSON.stringify(profile)),
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
                      <p>{text['share']}</p>
                      <Upload />
                    </div>
                  )}
              </div>
            </Route>
            <Route exact path={`/${profile.username}/r`}>
              <div className={styles['profile-tabs']}>
                <div
                  className={joinClass(
                    styles['profile-tabs-links-post'],
                    styles['tab-link']
                  )}
                >
                  <Link to={`/${profile.username}`}>
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
                  <Link to={`/${profile.username}/r`}>
                    <span>
                      {profile?.rank} {text['rank']}
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

export default withRouter(MyProfile);
