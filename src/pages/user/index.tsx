import React from 'react';
import { observer } from 'mobx-react';
import { testData } from "../../data";
import { RouteChildrenProps } from 'react-router-dom';
import MyProfile from '../user/profile/myProfile/myProfile';


export interface testDataProps extends RouteChildrenProps {
    test: testData;
}

const Page = (props: testDataProps) => {
    console.log(props);
    return (
        // <h1>User</h1>
        <MyProfile />
    )

}

export const User = observer(Page);