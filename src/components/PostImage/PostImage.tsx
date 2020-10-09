import React from 'react';
import styles from './PostImage.module.scss';

interface IPreviewPostProps {
  src: string;
  id: string | number;
}

const PostImage: React.FC<IPreviewPostProps> = ({ src, id }) => {
  const image = (<img src={src} alt='preview post' />)

  return (
    <div data-post-id={id} className={styles['preview-post']}>
      {image}
    </div>
  );
}

export default PostImage;
