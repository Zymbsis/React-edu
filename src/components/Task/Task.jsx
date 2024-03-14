import css from './Task.module.css';
import clsx from 'clsx';
import { FaPencil } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';

const Task = ({
  task: { text, id, inputDisabled, checkboxChecked, editButtonDisabled },
  onChangeTask,
  onClickCheckbox,
  onInputFocus,
  onInputBlur,
  onEditButtonClick,
  onDeleteButtonClick,
}) => {
  return (
    <>
      <input
        className={css.checkbox}
        type="checkbox"
        checked={checkboxChecked}
        disabled={!inputDisabled}
        onChange={() => onClickCheckbox(id)}
      />
      <textarea
        className={clsx(css.textarea, {
          [css.textareaBorder]: !inputDisabled,
          [css.textareaDone]: checkboxChecked,
        })}
        type="text"
        value={text}
        disabled={inputDisabled}
        onChange={e => onChangeTask(e, id)}
        onBlur={() => onInputBlur(id)}
        onFocus={() => onInputFocus(id)}
      />
      <button
        type="button"
        className={css.editButton}
        disabled={checkboxChecked || editButtonDisabled}
        onClick={() => onEditButtonClick(id)}
      >
        <FaPencil size={30} color="#fbfbfb" />
      </button>
      {checkboxChecked && (
        <button
          className={css.deleteButton}
          onClick={() => onDeleteButtonClick(id)}
        >
          <MdDeleteForever size={30} color="#fbfbfb" />
        </button>
      )}
    </>
  );
};
export default Task;
