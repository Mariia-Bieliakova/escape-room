import FilterForm from '../../components/filter-form/filter-form';
import Layout from '../../components/layout/layout';
import { Helmet } from 'react-helmet-async';
import { AuthorizationStatus, PageLink } from '../../const';
import { useAppSelector } from '../../hooks';
import QuestsList from '../../components/quests-list/quests-list';
import { getQuestsByGenre, getQuestsByLevel } from '../../quest';
import { getGenre, getLevel } from '../../store/ui/selectors';
import { getQuests } from '../../store/quests/selectors';

type MainProps = {
  authStatus: AuthorizationStatus;
}

function Main({authStatus}: MainProps): JSX.Element {
  const currentLevelFilter = useAppSelector(getLevel);
  const currentGenreFilter = useAppSelector(getGenre);
  const quests = useAppSelector(getQuests);

  const questsByLevel = getQuestsByLevel(currentLevelFilter, quests);
  const filteredQuests = getQuestsByGenre(currentGenreFilter, questsByLevel);

  return (
    <>
      <Helmet>
        <title>
          EscapeRoom|Quests
        </title>
      </Helmet>
      <div className="wrapper">
        <Layout page={PageLink.Quest} authStatus={authStatus}>
          <main className="page-content">
            <div className="container">
              <div className="page-content__title-wrapper">
                <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
                </h1>
                <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
              </div>
              <div className="page-content__item">
                <FilterForm />
              </div>
              <h2 className="title visually-hidden">Выберите квест</h2>
              <QuestsList quests={filteredQuests}/>
            </div>
          </main>
        </Layout>
      </div>
    </>
  );
}

export default Main;
