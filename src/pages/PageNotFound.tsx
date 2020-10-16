import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../components/UserDataContext/UserDataContext';
import Layout from '../containers/Layout/Layout';
import { IUser } from './settings/Interfaces';

export const PageNotFound: React.FC = () => {
  const user: IUser = useContext(UserDataContext);

  const header = {
    middle: 'Ooops!',
  };

  const link = (user) ? (
    <Link to={`/${user.username}`}>Go to profile</Link>
  ) : (
      <a href='https://www.ahasha.com/'>Go to home</a>
    );

  return (
    <Layout header={header}>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <div
          style={{
            marginTop: 100,
            fontSize: 150,
            fontWeight: 'bold',
            color: '#FF441B',
          }}
        >
          404
        </div>
        <div
          style={{
            marginTop: 40,
            marginBottom: 40,
            fontSize: 24,
          }}
        >
          Page not found
        </div>
        <span
          style={{
            backgroundColor: '#FFEEF0',
            color: '#FF441B',
            padding: '12px 16px',
            borderRadius: 39,
          }}
        >
          {link}
        </span>
      </div>
    </Layout>
  );
};
