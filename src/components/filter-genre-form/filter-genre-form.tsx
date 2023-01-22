import { QuestType, SortByGenreType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/ui/ui';
import { getGenre } from '../../store/ui/selectors';

function FilterGenreForm (): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenreFilter = useAppSelector(getGenre);

  const handleInputChange = (genre: QuestType) => {
    dispatch(changeGenre({genre}));
  };

  return (
    <ul className="filter__list">
      {Object.values(SortByGenreType).map((value) => {
        const {title, iconWidth, svgRef, id} = value;

        return (
          <li className="filter__item" key={id}>
            <input
              type="radio"
              name="type"
              id={id}
              checked={id === currentGenreFilter}
              onChange={() => handleInputChange(id)}
            />
            <label className="filter__label" htmlFor={id}>
              <svg className="filter__icon" width={iconWidth} height="30" aria-hidden="true">
                <use xlinkHref={svgRef}/>
              </svg>
              <span className="filter__label-text">{title}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default FilterGenreForm;
