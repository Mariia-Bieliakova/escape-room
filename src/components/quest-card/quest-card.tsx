import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { QuestItem } from '../../types/quest';

const levelTranslation: {[key: string]: string} = {
  hard: 'Сложный',
  medium: 'Средний',
  easy: 'Легкий'
};

type QuestCardProps = {
  quest: QuestItem;
}

function QuestCard({quest}: QuestCardProps): JSX.Element {
  const {id, title, previewImg, previewImgWebp, level, peopleMinMax} = quest;
  const [minPeople, maxPeople] = peopleMinMax;

  const questLink = `${AppRoute.Root}${generatePath(AppRoute.Quest, {id: String(id)})}`;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp} 2x`} /><img src={previewImg} srcSet={`${previewImg} 2x`} width={344} height={232} alt="Мужчина в клетке в подземелье." />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={questLink}> {title} </Link>
        </div>
        <ul className="tags quest-card__tags">
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
      </div>
    </div>
  );
}

export default QuestCard;
