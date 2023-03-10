import { MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, PageLink } from '../../const';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { logoutAction } from '../../store/api-actions';

type LayoutProps = {
  children: ReactNode;
  page: PageLink;
}

function Layout({children, page}: LayoutProps): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const questsClassName = cn('link', {
    'active': page === PageLink.Quest
  });

  const contactsClassName = cn('link', {
    'active': page === PageLink.Contact
  });

  const reservationClassName = cn('link', {
    'active': page === PageLink.MyQuests
  });

  const handleSignoutClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <>
      <header className="header">
        <div className="container container--size-l">
          <Logo />
          <nav className="main-nav header__main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link
                  className={questsClassName}
                  to={AppRoute.Root}
                >
                  Квесты
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className={contactsClassName} to={AppRoute.Contacts}>Контакты</Link>
              </li>
              {authStatus === AuthorizationStatus.Auth
                &&
                <li className="main-nav__item">
                  <Link className={reservationClassName} to={AppRoute.Reservations}>Мои бронирования</Link>
                </li>}
            </ul>
          </nav>
          <div className="header__side-nav">

            {authStatus === AuthorizationStatus.Auth ?
              <Link
                className="btn btn--accent header__side-item"
                to={AppRoute.Root}
                onClick={handleSignoutClick}
              >Выйти
              </Link>
              :
              <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>}

            <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
          </div>
        </div>
      </header>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
