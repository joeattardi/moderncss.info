import React from 'react';

import { Link } from 'gatsby';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1><Link to="/">Modern CSS</Link></h1>
      <nav className={styles.nav}>
        <Link to="/chapters">Chapters</Link>
      </nav>
    </header>
  );
}
