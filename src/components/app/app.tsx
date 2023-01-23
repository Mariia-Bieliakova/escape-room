import {Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
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

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<Main />} />
            <Route
              path={AppRoute.Login}
              element={<Login />}
            />
            <Route
              path={AppRoute.Contacts}
              element={<Contact />}
            />
            <Route
              path={AppRoute.Reservations}
              element={
                <PrivateRoute>
                  <MyQuests />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Booking}
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Quest}
              element={<Quest />}
            />
          </Route>
          <Route path={AppRoute.NotFound} element={<PageNotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
