import styles from './react-lib.module.scss';

export const TestComponent = () => {
  return (
    <div className={styles['container']}>
      <h1>Component from ReactLib!</h1>
    </div>
  );
};
