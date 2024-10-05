import css from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <div className={css.wrapper}>
      <label htmlFor="">Find contacts by name</label>
      <input className={css.field} type="text" />
    </div>
  );
};

export default SearchBox;
