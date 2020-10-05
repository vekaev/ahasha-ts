import React from 'react';
import { observer } from 'mobx-react';
import {testData} from "../../data";
import { RouteChildrenProps } from 'react-router-dom';


export interface testDataProps extends RouteChildrenProps {
    test: testData;
}

const Page = (props:testDataProps) => {
    console.log(props);
    return (
        <h1>{props.test}</h1>
    )

}

export const User = observer(Page);