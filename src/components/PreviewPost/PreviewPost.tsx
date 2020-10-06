import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PreviewPost.module.scss';

interface IPreviewPostProps {
  src: string;
  url?: string;
  id: string | number;
}

const PreviewPost: React.FC<IPreviewPostProps> = ({ src, url, id }) => {
  const image = (<img src={src} alt='preview post' />)

  return (
    <div data-post-id={id} className={styles['preview-post']}>
      <Link to={`${url}`}>{image}</Link>
    </div>
  );
}

export default PreviewPost;
