import FilterGenreForm from '../filter-genre-form/filter-genre-form';
import FilterLevelForm from '../filter-level-form/filter-level-form';

function FilterForm(): JSX.Element {

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <FilterGenreForm />
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <FilterLevelForm />
      </fieldset>
    </form>
  );
}

export default FilterForm;
