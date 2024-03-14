import css from './Form.module.css';
import { useId } from 'react';

const Form = ({ createNewTask, taskList }) => {
  const nameId = useId();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    createNewTask({
      text: form.elements.name.value,
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      inputDisabled: true,
      checkboxChecked: false,
      editButtonDisabled: false,
    });
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Create your task</label>
      <input type="text" name="name" id={nameId} />
      <button type="submit">Add New Task</button>
    </form>
  );
};
export default Form;
