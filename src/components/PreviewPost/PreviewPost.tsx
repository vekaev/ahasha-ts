import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PreviewPost.module.scss';

interface IPreviewPostProps {
  src: string;
  url?: string;
}

const PreviewPost: React.FC<IPreviewPostProps> = ({ src, url }) => {
  const image = (<img src={src} alt='preview post' />)

  return (
    <div className={styles['preview-post']}>
      {(url) ? (<Link to={url}>image</Link>) : image}
    </div>
  );
}

export default PreviewPost;
