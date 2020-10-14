import React, {useContext} from 'react';
import { withRouter } from "react-router-dom";
import Layout from "../../containers/Layout/Layout";
import styles from './AddPhoto.module.scss'
import { BackIcon, MoreIcon } from "../../components/Icons/Icons";
import { Button } from '../../components/Button';
import { IUser } from '../Settings/Interfaces';
import { LangContext } from './../../components/LangContext/LangContext';

function AddPhoto(props: any) {
  const user: IUser = {
    mainPhoto: 'https://images.unsplash.com/photo-1591473696086-11d2478006f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    quantityPosts: 16,
    rank: 195,
    firstName: 'Anna',
    lastName: 'Hanney',
    username: 'anna_hanney',
    age: '25',
    size: 'S-M',
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    get info() {
      return `${this.age} years, ${this.size}`;
    },
  }

  if (props.location?.state?.img === undefined) {
    props.history.push('/')
  }

  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['addPhoto'];

  const header = {
    left: <BackIcon />,
    onClickLeft: () => {
      props.history.goBack();
    },
    middle: text['headerTitle'],
    right: <span style={{ opacity: .4, lineHeight: 0, marginTop: -2 }}><MoreIcon /></span>,
    // onClickRight: () => {
    //   history.push('/settings')
    // }
  }



  return (
    <Layout
      NavBarDisabled={true} header={header}
      user={user}
    >
      <div className={styles["add-photo__page"]}>
        <div className={styles['user-image']}>
          <img src={props.location?.state?.img} alt="Red dot" style={{ width: "100%" }} />
        </div>
        <div className={styles['content']} >
          <div style={{ marginTop: "auto" }}><Button title={text['buttonTitle']}></Button></div>

        </div>
      </div>


    </Layout>
  )

}
export default withRouter(AddPhoto)