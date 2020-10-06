import React from 'react';
import { observer } from 'mobx-react';
import {testData} from "../../data";
import { RouteChildrenProps } from 'react-router-dom';
import Settings from '../Settings/Settings';


export interface testDataProps extends RouteChildrenProps {
    test: testData;
}

const Page = (props:testDataProps) => {
    console.log(props);
    return (
        <Settings />
    )

}

export const User = observer(Page);