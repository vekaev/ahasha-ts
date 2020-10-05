
import React, { ReactChild } from 'react';
import './myProfile.scss';
import Header from '../../../../components/Header/Header';
import MoreIcon from '../../../../components/Icons/MoreIcon';
import UserPhoto from '../../../../components/UserAvatar/UserPhoto';
import Tabs from '../../../../components/Tabs/Tabs';
import PreviewPost from '../../../../components/PreviewPost/PreviewPost';
import PostFeedPreview from '../../../../components/PostFeedPreview/PostFeedPreview';

interface IMyProfileProps {

}

{/* <UserPhoto
            src='https://images.unsplash.com/photo-1588358641419-458f7616cbf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
          /> */}

const MyProfile: React.FC<IMyProfileProps> = () => {
  // const tabList: any[] = [
  //   { title: 'a', body: <MoreIcon /> }
  // ];
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

  return (
    <>
      <Header
        middle={'Username'}
        onClickMiddle={() => {
          console.log('middle')
        }}
        right={<MoreIcon />}
        onClickRight={() => {
          console.log('right')
        }}
      />
      <main className='profile'>
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
          <div className="profile-tabs">
            <PostFeedPreview>
              {posts.map((post: { img: string, url: string }, index: number): ReactChild => {
                // console.log(index)
                return (
                  <div key={index}>
                    <PreviewPost
                      src={post.img}
                    />
                  </div>
                )
              })}
            </PostFeedPreview>
          </div>
        </div>
      </main>
    </>
  );
}

export default MyProfile;
