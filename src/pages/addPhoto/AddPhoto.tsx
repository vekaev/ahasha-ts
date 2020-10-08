import React  from 'react';
import {withRouter} from "react-router-dom";
import Layout from "../../containers/Layout/Layout";
import styles from './AddPhoto.module.scss'
import MoreIcon from "../../components/Icons/MoreIcon";
import { Button } from '../../components/Button';

function AddPhoto (props:any) {

    if(props.location?.state?.img === undefined){
        props.history.push('/')
    }

    const header = {
        middle: 'New post',
        right: <MoreIcon />,
        onClickRight: () => {
            console.log('right')
        }
    }



    return (
        <Layout NavBarDisabled={true} header={header}>
            <div className={styles["add-photo__page"]}>
              <div className={styles['user-image']}>
                <img src={props.location?.state?.img} alt="Red dot" style={{width: "100%"}}/>
              </div>
              <div className={styles['content']} >
                <div style={{marginTop:"auto"}}><Button title='Publish'></Button></div>

              </div>
            </div>


        </Layout>
    )

}
export default  withRouter(AddPhoto)