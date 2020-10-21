import React from 'react';
import { Link } from 'react-router-dom';
import { IconStar, LikeIcon, OthersIcon } from '../../components/Icons/Icons';
import styles from './PostFeed.module.scss';
import { IPostFeedStore } from './../../data/postFeed';

interface IPostFeedProps extends IPostFeedStore {
  openModalActions: boolean;
  openActions(
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>,
    postID: number
  ): void;
  setLike(event: any): void;
  activePost: number | null;
}

const PostFeed: React.FC<IPostFeedProps> = ({
  userPhoto,
  firstName,
  lastName,
  postID,
  postPhoto,
  likes,
  openModalActions,
  openActions,
  setLike,
  activePost,
}) => {
  return (
    <div className={styles['publication']}>
      <div className={styles['publication-header']}>
        <div className={styles['user']}>
          <div className={styles['user-photo']}>
            <img src={userPhoto} alt={`${firstName} ${lastName}`} />
          </div>
          <span className={styles['user-name']}>
            {firstName} {lastName}
          </span>
        </div>

        <div className={styles['publication-likes']}>
          <IconStar />
          <span>{likes}</span>
        </div>
      </div>

      <Link
        to={`/post${postID}`}
        className={`${styles['publication-content']} ${
          activePost === postID && openModalActions ? styles['active'] : ''
        }`}
        onClick={(e) => openActions(e, postID)}
        style={
          activePost === postID && openModalActions
            ? { zIndex: 3 }
            : { zIndex: 1 }
        }
      >
        <img src={postPhoto} alt='post' />

        <div className={styles['publication-options']}>
          <div
            className={styles['publication-options-like']}
            onClick={(e) => setLike(e)}
          >
            <LikeIcon />
          </div>

          <div
            className={styles['publication-options-others']}
            onClick={(e) => openActions(e, postID)}
          >
            <OthersIcon />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostFeed;
