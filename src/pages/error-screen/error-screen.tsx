import { useAppDispatch } from '../../hooks';
import { fetchQuestsAction } from '../../store/api-actions';
import styles from './error-screen.module.css';

export default function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.errorText}> Something went wrong. Please try again </p>
      <button className={styles.replay}
        onClick={() => {
          dispatch(fetchQuestsAction());
        }}
      >
        <span className={styles.btnText}> Try again </span>
      </button>
    </div>
  );
}
