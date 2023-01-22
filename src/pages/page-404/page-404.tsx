import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import styles from './page-404.module.css';

function PageNotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>
          EscapeRoom|Not Found
        </title>
      </Helmet>
      <header className="header">
        <div className="container container--size-l">
          <Logo />
        </div>
      </header>
      <section className={styles.container}>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to={AppRoute.Root}>
        Вернуться на главную страницу
        </Link>
      </section>
    </>
  );
}

export default PageNotFound;
