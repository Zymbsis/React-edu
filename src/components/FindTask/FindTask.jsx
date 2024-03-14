import css from './FindTask.module.css';
import { useId } from 'react';

const FindTask = ({ setFilter, value }) => {
  const nameId = useId();

  return (
    <div className={css.wrapper}>
      <label htmlFor={nameId}>Find your task</label>
      <input
        type="text"
        name="name"
        id={nameId}
        value={value}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};
export default FindTask;
