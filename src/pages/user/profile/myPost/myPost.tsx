import React from 'react';
import { useParams, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import MoreIcon from '../../../../components/Icons/MoreIcon';
import Like from '../../../../components/Like/Like';
import PostImage from '../../../../components/PostImage/PostImage';
import UserPhoto from '../../../../components/UserAvatar/UserPhoto';
import Layout from '../../../../containers/Layout/Layout';
import styles from './myPost.module.scss';

const MyPost: React.FC<RouteComponentProps> = ({ history }) => {
  let { id }: any = useParams();

  const user: any = {
    mainPhoto: 'https://images.unsplash.com/photo-1591473696086-11d2478006f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    firstName: 'Anna',
    lastName: 'Hanney',
    username: 'username',
    age: '22',
    size: 'S-M',
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    get info() {
      return `${this.age} years, ${this.size}`;
    },
    post: {
      img: 'https://images.unsplash.com/photo-1524053795143-282efcc92f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
      likeCounter: 10,
      save: false,
    }
  }

  const header = {
    middle: 'Username',
    onClickMiddle: () => {
      console.log('middle')
    },
    right: <MoreIcon />,
    onClickRight: () => {
      history.push('/settings')
    }
  }

  return (
    <Layout
      header={header}
    >
      <div className={styles['post']}>
        <div className='container'>
          <div className={styles['post-user']}>
            <div className={styles['post-user-photo']}>
              <Link to={`/u/${user.username}`}>
                <UserPhoto
                  src={user.mainPhoto}
                />
              </Link>
            </div>
            <div className={styles['post-user-info']}>
              <div className={styles['post-user-info-full-name']}>
                <Link to={`/u/${user.username}`}>
                  {user.fullName}
                </Link>
              </div>
              <div className={styles['post-user-info-descripiton']}>
                {user.info}
              </div>
            </div>
          </div>
          <div className={styles['post-image']}>
            <img src={user.post.img} alt="" />
          </div>
          <div className={styles['post-actions']}>
            <div className={styles['post-actions-like']}>
              {/* <Like /> */}
            </div>
          </div>
          <p>test: {id}</p>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(MyPost);
