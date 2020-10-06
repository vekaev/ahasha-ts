import React from 'react';
import { observer } from 'mobx-react';
import {testData} from "../../data";
import { RouteChildrenProps } from 'react-router-dom';


export interface testDataProps extends RouteChildrenProps {
    test: testData;
}

const Page = (props:testDataProps) => {

    return (
        <h1>Setting s</h1>
    )

}

export const Settings = observer(Page);