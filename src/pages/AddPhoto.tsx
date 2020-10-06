import React from 'react';
import {withRouter} from "react-router-dom";

function AddPhoto (props:any) {

    if(props.location?.state?.img === undefined){
        props.history.push('/')
    }
    console.log(props.location?.state?.img);


    return (
        <div>
            <img src={props.location?.state?.img} alt="Red dot" style={{width: "100%"}}/>
        </div>
    )

}
export default  withRouter(AddPhoto)