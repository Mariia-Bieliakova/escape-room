import {Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Booking from '../../pages/booking/booking';
import Contact from '../../pages/contacts/contacts';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import MyQuests from '../../pages/my-quests/my-quests';
import PageNotFound from '../../pages/page-404/page-404';
import Quest from '../../pages/quest/quest';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

const authStatus = AuthorizationStatus.NoAuth;

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<Main authStatus={authStatus}/>} />
            <Route
              path={AppRoute.Login}
              element={<Login authStatus={authStatus}/>}
            />
            <Route
              path={AppRoute.Contacts}
              element={<Contact authStatus={authStatus}/>}
            />
            <Route
              path={AppRoute.Reservations}
              element={
                <PrivateRoute authorizationStatus={authStatus}>
                  <MyQuests authStatus={authStatus}/>
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Booking}
              element={
                <PrivateRoute authorizationStatus={authStatus}>
                  <Booking authStatus={authStatus}/>
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Quest}
              element={<Quest authStatus={authStatus}/>}
            />
          </Route>
          <Route path={AppRoute.NotFound} element={<PageNotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
