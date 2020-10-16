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

const MyProfile: React.FC<any> = ({ history, user, posts }) => {
  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['user']['profile'];

  const header = {
    middle: user?.username || text['header'],
    right: <MoreIcon />,
    onClickRight: () => {
      history.push('/account/edit');
    },
  };

  return (
    <Layout header={header} user={user}>
      <div className={styles['profile']}>
        <div className={'container'}>
          <div className={styles['profile-user']}>
            <div className={styles['profile-user-photo']}>
              <UserPhoto src={user.mainPhoto} />
            </div>
            <div className={styles['profile-user-full-name']}>
              {user?.fullName}
            </div>
            <div className={styles['profile-user-info']}>{user?.info}</div>
          </div>

          <Switch>
            <Route exact path={`/${user.username}`}>
              <div className={styles['profile-posts']}>
                <div className={styles['profile-tabs']}>
                  <div
                    className={joinClass(
                      styles['profile-tabs-links-post'],
                      styles['tab-link'],
                      styles['active']
                    )}
                  >
                    <Link to={`/${user.username}`}>
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
                      {user?.rank || ''} {text['rank']}
                    </span>
                    {/* </Link> */}
                  </div>
                </div>
                {posts ? (
                  <PostFeedPreview>
                    {posts?.map(
                      (
                        post: { id: number; img: string; url: string | number },
                        index: number
                      ): ReactChild => {
                        return (
                          <Link
                            key={index}
                            to={{
                              pathname: `/${user.username}/p/${post.id}`,
                              state: {
                                user: JSON.parse(JSON.stringify(user)),
                                post: JSON.parse(JSON.stringify(post)),
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
                      <p>{text['share']}</p>
                      <Upload />
                    </div>
                  )}
              </div>
            </Route>
            <Route exact path={`/${user.username}/r`}>
              <div className={styles['profile-tabs']}>
                <div
                  className={joinClass(
                    styles['profile-tabs-links-post'],
                    styles['tab-link']
                  )}
                >
                  <Link to={`/${user.username}`}>
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
                  <Link to={`/${user.username}/r`}>
                    <span>
                      {user?.rank} {text['rank']}
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
