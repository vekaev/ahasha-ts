import React from 'react';
// import { Saved } from '../Icons/Icons';
// import Like from '../Like/Like';
import styles from './PostImage.module.scss';

interface IPreviewPostProps {
  src: string;
  id: string | number;
}

const PostImage: React.FC<IPreviewPostProps> = ({ src, id }) => {
  const image = (<img src={src} alt='preview post' />)
  // const [like, setLike] = useState(false);

  return (
    <div data-post-id={id} className={styles['preview-post']}>
      {image}
      {/* <div className={styles['preview-post-hover']}>
        <div className={styles['preview-post-hover-buttons']}>
          <Like
            icon={like}
            setLike={setLike}
          />
          <Saved />
        </div>
      </div> */}
    </div>
  );
}

export default PostImage;
