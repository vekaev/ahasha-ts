import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BackIcon from '../../../components/Icons/BackIcon';
import Layout from '../../../containers/Layout/Layout';
import EditProfile from '../EditProfile/EditProfile';
import { IUserData } from '../Interfaces';
import BirthDayModal from '../Modal/BirthDayModal/BirthDayModal';
import FullNameModal from '../Modal/FullNameModal/FullNameModal';
import GenderModal from '../Modal/GenderModal/GenderModal';
import withModal from '../Modal/Modal';
import UserNameModal from '../Modal/UserNameModal/UserNameModal';


const EditProfileContainer:React.FC = (props:any) => {
  const history = useHistory();

  const [userData, setUserData] = useState<IUserData>({
    avatar: "https://modnaya.org/uploads/posts/2013-08/1376555614_emo-stil.jpg",
    firstName: "Andrei",
    lastName: "Lukashenko",
    userName: "AndreiLukashenko",
    birthDay: {
      day: 18,
      month: 10,
      year: 1997,
    },
    gender: "Male",
  });

  const changeAvatar = (event: ChangeEvent<HTMLInputElement>) : void => {
    console.log("upload");
  };

  const [isOpenModal, setIsOpenModal] = useState<{flag:boolean, component: React.FC<any>}>({
    flag: false,
    component: () => null
  });

  let ModalWindow : any = isOpenModal.component;
  

  const showModal = (command : string) => {

    let component : React.FC<any> = () => null;

    switch(command) {
      case "fullName":
        component = withModal(FullNameModal);
        break;
      case "userName":
        component = withModal(UserNameModal);
        break;
      case "birthDay":
        component = withModal(BirthDayModal);
        break;
      case "gender":
        component = GenderModal;
        break;
      case "close":
        setIsOpenModal({
          flag:false,
          component: () => null
        })
        return;
      default:
        setIsOpenModal({
          flag:false,
          component: () => null
        });
    }

    setIsOpenModal({
      flag:true,
      component: component
    })
  }

  const header = {
    middle: "Edit Profile",
    onClickMiddle: () => {
      console.log("middle");
    },
    left: <BackIcon />,
    onClickLeft: () => {
      history.goBack();
    },
  };

  return (
    <Layout header={header}>
      {isOpenModal.flag && <ModalWindow showModal={showModal} userData={userData} setUserData={setUserData}/>}
      <EditProfile  userData={userData} changeAvatar={changeAvatar} showModal={showModal}/>
    </Layout>
    
  )
}

export default EditProfileContainer;