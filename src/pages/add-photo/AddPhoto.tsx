import React, { useState, useContext, useEffect } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import Layout from '../../containers/Layout/Layout';
import { withRouter } from "react-router-dom";
import styles from './AddPhoto.module.scss'
import { BackIcon, MoreIcon } from '../../components/Icons/Icons';
import { Button } from '../../components/Button';
import { LangContext } from './../../components/LangContext/LangContext';
import { Session, Post } from '../../data';
import { observer } from 'mobx-react';

interface AddPhotoProps extends RouteChildrenProps {
  session: Session;
  post: Post;
}

const Component = (props: AddPhotoProps) => {
  const [img, setImg] = useState<string | null>(null);
  const user: any = {
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

  const locationState: any = props.location.state;

  if (locationState?.files === undefined) {
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
    // onClickRight: (  ) => {
    //   history.push('/settings')
    // }
  };

  useEffect(() => {
    const reader: any = new FileReader();
    reader.addEventListener("load", () => setImg(reader.result));
    reader.readAsDataURL(locationState?.files[0]);
  }, [locationState?.files]);

  const onSubmit = async () => {
    try {
      await props.post.add({
        resources: locationState.files,
      });
      await props.post.fetch();
      props.history.replace(`/${props.session.profile.username}`)
    } catch (exception) {
      console.error(exception);
    }
  };

  return (
    <Layout
      NavBarDisabled={true}
      header={header}
    >
      <div className={styles['add-photo__page']}>
        <div className={styles['user-image']}>
          {img && <img src={img} alt='Red dot' style={{ width: '100%' }} />}
        </div>
        <div className={styles['content']} >
          <div style={{ marginTop: "auto" }}>
            <Button title={text['buttonTitle']} onClick={onSubmit} disabled={props.post.loading.upload} />
          </div>
        </div>
      </div>
    </Layout>
  )

}

export const AddPhoto = observer(Component);
