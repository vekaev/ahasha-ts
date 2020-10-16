import React, { ChangeEvent, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BackIcon } from '../../components/Icons/Icons';
import EditProfile from '../../pages/settings/EditProfile/EditProfile';
import { IUserData } from '../../Interfaces';
import BirthDayModal from '../../pages/settings/ModalForm/BirthDayModal/BirthDayModal';
import FullNameModal from '../../pages/settings/ModalForm/FullNameModal/FullNameModal';
import GenderModal from '../../pages/settings/ModalForm/GenderModal/GenderModal';
import withModal from '../../components/Modal/Modal';
import UserNameModal from '../../pages/settings/ModalForm/UserNameModal/UserNameModal';
import Layout from '../Layout/Layout';
import { LangContext } from './../../components/LangContext/LangContext';
import { ProfileContext } from '../../components/ProfileContext/ProfileContext';

const EditProfileContainer: React.FC<any> = (props) => {
  const history = useHistory();
  const profileContext: any = useContext(ProfileContext);
  const profile = profileContext?.profile;

  const [userData, setUserData] = useState<IUserData>({
    avatar: 'https://modnaya.org/uploads/posts/2013-08/1376555614_emo-stil.jpg',
    firstName: 'Andrei',
    lastName: 'Lukashenko',
    userName: 'AndreiLukashenko',
    birthDay: {
      day: 18,
      month: 10,
      year: 1997,
    },
    gender: 'Male',
  });

  useEffect(() => {
    if (profile) {
      const [year, day, mounth] = profile.birthday.split('-');

      setUserData({
        avatar: profile.mainPhoto,
        firstName: profile.firstName,
        lastName: profile.lastName,
        userName: profile.username,
        birthDay: {
          day: day,
          month: mounth.slice(0, 2),
          year: year,
        },
        gender: profile.gender,
      })
    }
  }, [profile])

  const changeAvatar = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setUserData({
        ...userData,
        avatar: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const [isOpenModal, setIsOpenModal] = useState<{
    flag: boolean;
    component: React.FC<any>;
  }>({
    flag: false,
    component: () => null,
  });

  let ModalWindow: React.FC<any> = isOpenModal.component;

  const showModal = (command: string) => {
    let component: React.FC<any> = () => null;

    switch (command) {
      case 'fullName':
        component = withModal(FullNameModal);
        break;
      case 'userName':
        component = withModal(UserNameModal);
        break;
      case 'birthDay':
        component = withModal(BirthDayModal);
        break;
      case 'gender':
        component = GenderModal;
        break;
      case 'close':
        setIsOpenModal({
          flag: false,
          component: () => null,
        });
        return;
      default:
        setIsOpenModal({
          flag: false,
          component: () => null,
        });
        return;
    }

    setIsOpenModal({
      flag: true,
      component: component,
    });
  };

  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['editProfile'];

  const header = {
    middle: text['headerTitle'],
    onClickMiddle: () => {
      console.log('middle');
    },
    left: <BackIcon />,
    onClickLeft: () => {
      history.goBack();
    },
  };

  return (
    <Layout header={header}>
      {isOpenModal.flag && (
        <ModalWindow
          showModal={showModal}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      <EditProfile
        userData={userData}
        changeAvatar={changeAvatar}
        showModal={showModal}
      />
    </Layout>
  );
};

export default EditProfileContainer;
