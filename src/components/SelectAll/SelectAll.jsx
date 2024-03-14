import css from './SelectAll.module.css';
import { useId, useState, useEffect } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const SelectAll = ({ taskList, selectAllTask }) => {
  const checkboxId = useId();

  const savedCheckbox = localStorage.getItem('selectCheckbox');
  const [selectCheckbox, setSelectCheckbox] = useState(() => {
    return savedCheckbox.length ? savedCheckbox : false;
  });

  const everyCheckboxChecked = taskList.every(task => {
    return task.checkboxChecked === true;
  });

  const onChangeCheckbox = e => {
    const isChecked = e.target.checked;
    setSelectCheckbox(isChecked);
    selectAllTask(isChecked);
  };

  useEffect(() => {
    localStorage.setItem('selectCheckbox', selectCheckbox);
  }, [selectCheckbox]);

  return (
    <div className={css.selectWrapper}>
      <div>
        <input
          type="checkbox"
          id={checkboxId}
          checked={everyCheckboxChecked}
          onChange={onChangeCheckbox}
        />
        <label htmlFor={checkboxId}>Select All</label>
      </div>

      {everyCheckboxChecked && (
        <div>
          <button type="button">
            <MdDeleteForever size={30} color="#fbfbfb" />
          </button>
          <p>Delete All</p>
        </div>
      )}
    </div>
  );
};
export default SelectAll;
