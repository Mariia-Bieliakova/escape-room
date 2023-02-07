import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import BookingForm from '../../components/booking-form/booking-form';
import Layout from '../../components/layout/layout';
import { PageLink } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchBookingQuestInfo } from '../../store/api-actions';
import { getBookingInfo, selectBookingInfoStatus } from '../../store/booking/selectors';
import { getQuestInfo } from '../../store/quests/selectors';
import ErrorScreen from '../error-screen/error-screen';

function Booking(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const bookingInfo = useAppSelector(getBookingInfo);
  const quest = useAppSelector(getQuestInfo);
  const {isError} = useAppSelector(selectBookingInfoStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchBookingQuestInfo(id));
    }
  }, [id, dispatch]);

  if (isError || !bookingInfo || !quest) {
    return <ErrorScreen />;
  }

  const {title} = quest;

  return (
    <>
      <Helmet>
        <title>
          EscapeRoom|Booking
        </title>
      </Helmet>
      <div className="wrapper">
        <Layout page={PageLink.Quest}>
          <main className="page-content decorated-page">
            <div className="decorated-page__decor" aria-hidden="true">
              <picture>
                <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
              </picture>
            </div>
            <div className="container container--size-s">
              <div className="page-content__title-wrapper">
                <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
                </h1>
                <p className="title title--size-m title--uppercase page-content__title">{title}</p>
              </div>
              <div className="page-content__item">
                <div className="booking-map">
                  <div className="map">
                    <div className="map__container"></div>
                  </div>
                  <p className="booking-map__address">Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м. Петроградская</p>
                </div>
              </div>
              <BookingForm bookingInfo={bookingInfo} quest={quest}/>
            </div>
          </main>
        </Layout>
      </div>
    </>
  );
}

export default Booking;
