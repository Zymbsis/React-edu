import css from './SelectAll.module.css';
import { useId } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const SelectAll = ({
  onChangeCheckbox,
  isCheckedAll,
  selectCheckbox,
  deleteAll,
}) => {
  const checkboxId = useId();

  return (
    <div className={css.selectWrapper}>
      <div>
        <input
          type="checkbox"
          id={checkboxId}
          checked={selectCheckbox}
          onChange={onChangeCheckbox}
        />
        <label htmlFor={checkboxId}>Select All</label>
      </div>

      {isCheckedAll && (
        <div className={css.buttonWrapper}>
          <button type="button" onClick={deleteAll}>
            <MdDeleteForever size={30} color="#fbfbfb" />
          </button>
          <p>Delete All</p>
        </div>
      )}
    </div>
  );
};
export default SelectAll;
