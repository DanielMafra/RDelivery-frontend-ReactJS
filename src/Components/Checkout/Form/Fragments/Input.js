import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, placeholder, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input id={name} name={name} placeholder={placeholder} className={styles.input} type={type} value={value} onChange={onChange} onBlur={onBlur} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input;