import React from 'react';
import styles from './index.less';

interface NavHeaderProps {
  title: string;
}

const NavHeader: React.FC<NavHeaderProps> = ({ title }) => {
  return <div className={styles.container}>{title}</div>;
};

export default NavHeader;
