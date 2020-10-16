import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from '../components/ProfileContext/ProfileContext';
import { UserDataContext } from '../components/UserDataContext/UserDataContext';
import Layout from '../containers/Layout/Layout';

export const PageNotFound: React.FC = () => {
  const profileContext: any = useContext(ProfileContext);
  const profile = profileContext?.profile;

  const header = {
    middle: 'Ooops!',
  };

  const link = (profile) ? (
    <Link to={`/${profile.username}`}>Go to profile</Link>
  ) : (
      <Link to='/'>Go to home</Link>
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
