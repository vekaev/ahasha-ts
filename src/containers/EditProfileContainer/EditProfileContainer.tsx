import React, { ChangeEvent, useState, useContext, useEffect } from 'react';
import {RouteChildrenProps, useHistory} from 'react-router-dom';
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
import {observer} from "mobx-react";
import {Session} from "../../data";

interface EditProps {
  session: Session;
}

const Edit: React.FC<any> = (props: EditProps) => {
  const history = useHistory();
  const profileContext: any = useContext(ProfileContext);
  const profile = profileContext?.profile;

  const [userData, setUserData] = useState<IUserData>({
    avatar: '',
    firstName: '',
    lastName: '',
    userName: '',
    birthDay: {
      day: 0,
      month: 0,
      year: 0,
    },
    gender: '',
  });

  useEffect(() => {
    if (profile) {

      const [year, day, mounth] = profile.birthday.split('-');

      console.log({profile});
      setUserData({
        avatar: profile.avatar,
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
      props.session.profileUpdate(userData, event.target.files[0]);
      setUserData({...userData, avatar: URL.createObjectURL(event.target.files[0])})
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

  const handleFormSet = (data:any) => {
    setUserData(data)
    props.session.profileUpdate(data);
  }

  return (
    <Layout header={header}>
      {isOpenModal.flag && (
        <ModalWindow
          showModal={showModal}
          userData={userData}
          setUserData={handleFormSet}
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

export const EditProfileContainer = observer(Edit);
