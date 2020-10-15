import React, { useEffect } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Session } from '../../data';

interface VerifyProps extends RouteChildrenProps {
  session: Session;
}

export const Verify = (props: VerifyProps) => {
  useEffect(() => {
    // TODO: verify auth token
  }, []);

  return (
    <p>Verify</p>
  );
}
