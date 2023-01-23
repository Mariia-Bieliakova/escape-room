import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { generatePath, Link, useParams } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import { APIRoute, AppRoute, genreTranslation, levelTranslation, PageLink } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchQuestInfoAction } from '../../store/api-actions';
import { getQuestInfo, selectQuestInfoStatus } from '../../store/quests/selectors';
import ErrorScreen from '../error-screen/error-screen';

function Quest(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {isError} = useAppSelector(selectQuestInfoStatus);
  const quest = useAppSelector(getQuestInfo);

  useEffect(() => {
    if (id) {
      dispatch(fetchQuestInfoAction(id));
    }
  }, [id, dispatch]);

  if (isError || !quest) {
    return <ErrorScreen />;
  }

  const {title, level, type, peopleMinMax, description, coverImg, coverImgWebp} = quest;
  const [minPeople, maxPeople] = peopleMinMax;
  const bookingLink = `${AppRoute.Root}${generatePath(AppRoute.Quest, {id: String(id)})}${APIRoute.Booking}`;

  return (
    <>
      <Helmet>
        <title>
          EscapeRoom|Quest
        </title>
      </Helmet>
      <div className="wrapper">
        <Layout page={PageLink.Quest}>
          <main className="decorated-page quest-page">
            <div className="decorated-page__decor" aria-hidden="true">
              <picture>
                <source type="image/webp" srcSet={`${coverImgWebp}, ${coverImgWebp} 2x`} />
                <img src={coverImg} srcSet={`${coverImg} 2x`} width="1366" height="768" alt="" />
              </picture>
            </div>
            <div className="container container--size-l">
              <div className="quest-page__content">
                <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
                <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{genreTranslation[type]}
                </p>
                <ul className="tags tags--size-l quest-page__tags">
                  <li className="tags__item">
                    <svg width="11" height="14" aria-hidden="true">
                      <use xlinkHref="#icon-person" />
                    </svg>{minPeople}&ndash;{maxPeople}&nbsp;чел
                  </li>
                  <li className="tags__item">
                    <svg width="14" height="14" aria-hidden="true">
                      <use xlinkHref="#icon-level" />
                    </svg>{levelTranslation[level]}
                  </li>
                </ul>
                <p className="quest-page__description">{description}</p>
                <Link className="btn btn--accent btn--cta quest-page__btn" to={bookingLink}>Забронировать</Link>
              </div>
            </div>
          </main>
        </Layout>
      </div>
    </>
  );
}

export default Quest;
