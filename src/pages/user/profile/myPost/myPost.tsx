import React from 'react';
import { useParams } from 'react-router-dom';
// import styles from './myPost.module.scss';

const MyPost: React.FC = () => {
  let { id }: any = useParams();
  return (
    <p>test: {id}</p>
  );
}

export default MyPost;
