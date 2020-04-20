import React from 'react';
import styles from './scss/LoginHeader.module.scss'

export default function LoginHeader(props) {
  const { isLogin, loginTitle, loginSubTitle, loginWarningLabel, loginWelcomeLabel } = props;

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{loginTitle}</h1>
      <h2 className={styles.subTitle}>{loginSubTitle}</h2>
      <div className={styles.tips}>{isLogin ? loginWelcomeLabel : loginWarningLabel}</div>
    </div>
  )
}
