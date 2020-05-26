import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';

import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Modern CSS</title>
      </Helmet>
      <Header />
      <div className={styles.main}>{children}</div>
    </>
  );
}
