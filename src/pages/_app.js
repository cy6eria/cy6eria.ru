import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Loader } from '../components/Loader';
import './style.css';

const MyApp = (props) => {
  const { events } = useRouter();
  const { Component, pageProps } = props;
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsFetching(true);
    const handleEnd = () => setIsFetching(false);

    events.on('routeChangeStart', handleStart);
    events.on('routeChangeComplete', handleEnd);
    events.on('routeChangeError', handleEnd);

    return () => {
      events.off('routeChangeStart', handleStart);
      events.off('routeChangeComplete', handleEnd);
      events.off('routeChangeError', handleEnd);
    };
  }, [events]);

  return (
    <>
      {isFetching && <Loader/>}
      <Component {...pageProps} isFetching={isFetching} />
    </>
  );
}

export default MyApp;
