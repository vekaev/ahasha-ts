import React, { useState, useEffect, useRef, MutableRefObject, RefObject } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Session } from '../../data';
import { SessionUser } from '../../data/dto';

interface VerifyProps extends RouteChildrenProps {
  session: Session;
}

export const Verify = (props: VerifyProps) => {
  const [identity, setIdentity] = useState<SessionUser | null>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const email = props.location.search.match(/[a-zA-Z\.-]+@[\w\.-]+/);

    if (email) {
      localStorage.setItem('emailForSignIn', email[0]);
    }
  })

  useEffect(() => {
    props.session.waitLinkFromEmail();
    const unsubscribe = props.session.subscribe((identity: SessionUser | null) => {
      setIdentity(identity);

      if (identity) {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }

        // props.history.replace('/');
      }
    });

    // timeout.current = setTimeout(() => {
    //   props.history.replace('/');
    // }, 5000);

    return unsubscribe;
  }, []);

  return (
    <p>Verify</p>
  );
}
