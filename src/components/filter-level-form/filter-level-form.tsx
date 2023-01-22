import { Level, SortByLevelType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeLevel } from '../../store/ui/ui';
import { getLevel } from '../../store/ui/selectors';

function FilterLevelForm(): JSX.Element {
  const currentLevelFilter = useAppSelector(getLevel);
  const dispatch = useAppDispatch();

  const handleInputChange = (level: Level) => {
    dispatch(changeLevel({level}));
  };

  return (
    <ul className="filter__list">
      {Object.values(SortByLevelType).map((value) => {
        const {id, title} = value;
        return (
          <li className="filter__item" key={id}>
            <input
              type="radio"
              name="level"
              id={id}
              checked={id === currentLevelFilter}
              onChange={() => handleInputChange(id)}
            />
            <label className="filter__label" htmlFor={id}>
              <span className="filter__label-text">{title}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default FilterLevelForm;
