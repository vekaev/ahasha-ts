
import React, { ReactChild } from 'react';
import './myProfile.scss';
import UserPhoto from '../../../../components/UserAvatar/UserPhoto';
import PreviewPost from '../../../../components/PreviewPost/PreviewPost';
import PostFeedPreview from '../../../../components/PostFeedPreview/PostFeedPreview';
import { Link, Route, Switch } from 'react-router-dom';
import Layout from '../../../../containers/Layout/Layout';
import MoreIcon from '../../../../components/Icons/MoreIcon';

interface IMyProfileProps {

}

const MyProfile: React.FC<IMyProfileProps> = () => {
  const posts: any[] = [
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
  ]

  const header = {
    middle: 'Username',
    onClickLeft: () => {
      console.log('middle')
    },
    right: <MoreIcon />,
    onClickRight: () => {
      console.log('right')
    }
  }

  return (
    <Layout
      header={header}
    >
      <div className='profile'>
        <div className="container">
          <div className="profile-user">
            <div className="profile-user-photo">
              <UserPhoto
                src='https://images.unsplash.com/photo-1591473696086-11d2478006f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
              />
            </div>
            <div className="profile-user-full-name">Anna Hanney</div>
            <div className="profile-user-info">22 years, S-M</div>
          </div>

          <Switch>
            <Route exact path="/u/username">
              <div className="profile-posts">
                <div className="profile-tabs">
                  <div className="profile-tabs-links-post tab-link active">
                    <Link to='/u/username'>
                      <span>137 post</span>
                    </Link>
                  </div>
                  <div className="profile-tabs-links-rank tab-link">
                    <Link to='/u/username/r'>
                      <span>322 rank</span>
                    </Link>
                  </div>
                </div>
                <PostFeedPreview>
                  {posts.map((post: { img: string, url: string }, index: number): ReactChild => {
                    return (
                      <PreviewPost
                        key={index}
                        id={index + 1}
                        src={post.img}
                        url={`/u/username/p/${index + 1}`}
                      />
                    )
                  })}
                </PostFeedPreview>
              </div>
            </Route>
            <Route path="/u/username/r">
              <div className="profile-tabs">
                <div className="profile-tabs-links-post tab-link">
                  <Link to='/u/username'>
                    <span>137 post</span>
                  </Link>
                </div>
                <div className="profile-tabs-links-rank tab-link active">
                  <Link to='/u/username/r'>
                    <span>322 rank</span>
                  </Link>
                </div>
              </div>
              <span>RANK</span>
            </Route>
          </Switch>
        </div>
      </div>
    </Layout>
  );
}

export default MyProfile;
