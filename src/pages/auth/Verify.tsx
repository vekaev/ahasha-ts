import React, { useState, useEffect, useRef, useContext } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { LangContext } from '../../components/LangContext/LangContext';
import { Loading } from '../../components/Loading/Loading';
import { Session } from '../../data';
import { SessionUser } from '../../data/dto';

interface VerifyProps extends RouteChildrenProps {
  session: Session;
}

export const Verify = (props: VerifyProps) => {
  const [identity, setIdentity] = useState<SessionUser | null>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['verify'];

  useEffect(() => {
    const email = props.location.search.match(/[a-zA-Z0-9\.-]+@[\w\.-]+/);

    if (email) {
      localStorage.setItem('emailForSignIn', email[0]);
    }
  }, []);

  useEffect(() => {
    props.session.waitLinkFromEmail();
    const unsubscribe = props.session.subscribe((identity: SessionUser | null) => {
      setIdentity(identity);

      if (identity) {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (props?.session?.profile?.username) {
      props.history.replace(`/${props.session.profile.username}`);
    }
  }, [props.session.profile])

  return (
    <Loading
      text={text.loadingText}
    />
  );
}
