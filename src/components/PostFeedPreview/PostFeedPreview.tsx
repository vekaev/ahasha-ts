import React, { ReactChildren } from 'react';
import styles from './PostFeedPreview.module.scss';

interface IPostFeedPreview {
  children: ReactChildren
}

const PostFeedPreview: React.FC = ({ children }) => {
  return (
    <div className={styles['post-feed-preview']}>
      {children}
    </div>
  );
}

export default PostFeedPreview;
