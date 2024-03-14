import css from './ToDoList.module.css';
import Task from '../Task/Task';
import SelectAll from '../SelectAll/SelectAll';

const ToDoList = ({
  taskList,
  onChangeTask,
  onClickCheckbox,
  onInputBlur,
  onInputFocus,
  onEditButtonClick,
  onDeleteButtonClick,
  selectCheckbox,
  isCheckedAll,
  onChangeCheckbox,
  deleteAll,
}) => {
  return (
    <>
      <SelectAll
        onChangeCheckbox={onChangeCheckbox}
        isCheckedAll={isCheckedAll}
        selectCheckbox={selectCheckbox}
        deleteAll={deleteAll}
      />
      <ul className={css.taskList}>
        {taskList.map(task => (
          <li key={task.id}>
            <Task
              task={task}
              onChangeTask={onChangeTask}
              onClickCheckbox={onClickCheckbox}
              onInputFocus={onInputFocus}
              onInputBlur={onInputBlur}
              onEditButtonClick={onEditButtonClick}
              onDeleteButtonClick={onDeleteButtonClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ToDoList;
