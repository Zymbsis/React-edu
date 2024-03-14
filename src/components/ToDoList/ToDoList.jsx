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
  selectAllTask,
}) => {
  return (
    <>
      <SelectAll taskList={taskList} selectAllTask={selectAllTask} />
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
