import React, { useContext } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { UserDataContext } from '../../components/UserDataContext/UserDataContext';
import { IUser } from '../../pages/Settings/Interfaces';
import MyProfile from '../../pages/user/my-profile/MyProfile';
import Profile from '../../pages/user/profile/Profile';

const ProfileContainer: React.FC<RouteComponentProps> = ({ history }) => {
  const pathUsername: string = history.location.pathname.substr(1);
  const user: IUser = useContext(UserDataContext);

  let posts: any[];

  // TODO: /username/r dont get username
  console.log(user.username);

  // 
  // MYPROFILE
  // 
  if (user?.username === pathUsername) {
    posts = [
      {
        id: 1,
        likes: 91,
        myLike: false,
        img: 'http://www.ahasha.com/img/offer-models.jpg'
      },
      {
        id: 2,
        likes: 1952,
        myLike: true,
        img: 'http://www.ahasha.com/img/auth-model-13.jpg'
      },
      {
        id: 3,
        likes: 123452,
        myLike: false,
        img: 'http://www.ahasha.com/img/auth-model-5.jpg'
      },
      {
        id: 4,
        likes: 999999,
        myLike: false,
        img: 'http://www.ahasha.com/img/auth-model-12.jpg'
      },
      {
        id: 5,
        likes: 99199,
        myLike: true,
        img: 'http://www.ahasha.com/img/auth-model-11.jpg'
      },
      {
        id: 6,
        likes: 9,
        myLike: false,
        img: 'http://www.ahasha.com/img/auth-model-2.jpg'
      },
      {
        id: 7,
        likes: 1952,
        myLike: true,
        img: 'http://www.ahasha.com/img/auth-model-13.jpg'
      },
      {
        id: 8,
        likes: 91,
        myLike: false,
        img: 'http://www.ahasha.com/img/offer-models.jpg'
      },
      {
        id: 9,
        likes: 999999,
        myLike: false,
        img: 'http://www.ahasha.com/img/auth-model-12.jpg'
      },
      {
        id: 10,
        likes: 123452,
        myLike: false,
        img: 'http://www.ahasha.com/img/auth-model-5.jpg'
      },
      {
        id: 11,
        likes: 9,
        myLike: false,
        img: 'http://www.ahasha.com/img/auth-model-2.jpg'
      },
      {
        id: 12,
        likes: 99199,
        myLike: true,
        img: 'http://www.ahasha.com/img/auth-model-11.jpg'
      },
    ]

    return (
      <MyProfile
        posts={posts}
        user={user}
      />
    );
  }

  // 
  // ANOTHER USER PROFILE
  // 

  // useEffect(() => {
  //   // server request
  // })

  const anotherUser: any = {
    mainPhoto: 'https://images.unsplash.com/photo-1549570652-97324981a6fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    quantityPosts: 14,
    firstName: 'Katya',
    lastName: 'Kiluga',
    username: 'katya_katya',
    age: '31',
    size: 'X-XL',
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    get info() {
      return `${this.age} years, ${this.size}`;
    },
  }

  // if (pathUsername !== anotherUser.username) {
  //   history.push('/');
  // }

  posts = [
    {
      id: 1,
      likes: 91,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 2,
      likes: 1952,
      myLike: true,
      img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 3,
      likes: 123452,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1549570652-97324981a6fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 4,
      likes: 999999,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1525722212921-6e4e548016db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 5,
      likes: 99199,
      myLike: true,
      img: 'https://images.unsplash.com/photo-1591473692114-dfd4fd90f839?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 6,
      likes: 9,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1550524587-6bcdc279ad98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 7,
      likes: 999,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1591473696086-11d2478006f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 8,
      likes: 999,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1588358641419-458f7616cbf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 9,
      likes: 999,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1579101098070-c3f50dcbd312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 10,
      likes: 999,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1524008298606-aad1dae6d4c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 11,
      likes: 999,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1553984658-d17e19aa281a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 12,
      likes: 999,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1583167460878-be6f241204a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 13,
      likes: 999,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1563993297290-609c9406efcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 14,
      likes: 999,
      myLike: false,
      img: 'https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
  ]

  return (
    <Profile
      posts={posts}
      anotherUser={anotherUser}
      user={user}
    />
  );
}

export default withRouter(ProfileContainer);
