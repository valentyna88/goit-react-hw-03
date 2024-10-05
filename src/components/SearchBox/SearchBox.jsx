import css from './SearchBox.module.css';

const SearchBox = ({ searchValue, onSearchChange }) => {
  return (
    <div className={css.wrapper}>
      <label htmlFor="">Find contacts by name</label>
      <input
        className={css.field}
        type="text"
        value={searchValue}
        onChange={event => onSearchChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
