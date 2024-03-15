import './App.css';
import { useState, useEffect } from 'react';
import Form from './Form/Form';
import ToDoList from './ToDoList/ToDoList';
import FindTask from './FindTask/FindTask';

function App() {
  const getInitialStateTask = () => {
    const savedTaskList = JSON.parse(localStorage.getItem('task-list'));
    return savedTaskList ? savedTaskList : [];
  };

  const getInitialStateCheckbox = () => {
    const savedCheckbox = JSON.parse(localStorage.getItem('selectCheckbox'));
    return savedCheckbox ? savedCheckbox : false;
  };

  const [taskList, setTaskList] = useState(getInitialStateTask);
  const [taskFilter, setFilter] = useState('');
  const [selectCheckbox, setSelectCheckbox] = useState(getInitialStateCheckbox);

  const visibleTask = taskList.filter(task =>
    task.text.toLowerCase().includes(taskFilter.toLowerCase())
  );

  const isEveryCheckboxChecked = visibleTask.length
    ? visibleTask.every(task => task.checkboxChecked)
    : false;

  useEffect(() => {
    localStorage.setItem('task-list', JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem('selectCheckbox', isEveryCheckboxChecked);
    setSelectCheckbox(isEveryCheckboxChecked);
  }, [isEveryCheckboxChecked]);

  const createNewTask = newTask => {
    setTaskList(prev => {
      return [...prev, newTask];
    });
  };

  const changeCurrentTask = (e, taskId) => {
    setTaskList(
      taskList.map(task => {
        return taskId === task.id ? { ...task, text: e.target.value } : task;
      })
    );
  };

  const onClickCheckbox = taskId => {
    setTaskList(
      taskList.map(task => {
        return taskId === task.id
          ? { ...task, checkboxChecked: !task.checkboxChecked }
          : task;
      })
    );
  };

  const onInputFocus = taskId => {
    setTaskList(
      taskList.map(task => {
        return taskId === task.id
          ? { ...task, editButtonDisabled: !task.editButtonDisabled }
          : task;
      })
    );
  };

  const onInputBlur = taskId => {
    setTaskList(prev => {
      return prev.map(task => {
        return taskId === task.id
          ? {
              ...task,
              inputDisabled: !task.inputDisabled,
            }
          : task;
      });
    });
    setTimeout(() => {
      setTaskList(prev => {
        return prev.map(task => {
          return taskId === task.id
            ? {
                ...task,
                editButtonDisabled: !task.editButtonDisabled,
              }
            : task;
        });
      });
    }, 1000);
  };

  const onEditButtonClick = taskId => {
    setTaskList(
      taskList.map(task => {
        return taskId === task.id
          ? {
              ...task,
              inputDisabled: !task.inputDisabled,
              autoFocus: true,
            }
          : { ...task, inputDisabled: true, autoFocus: false };
      })
    );
  };

  const onDeleteButtonClick = taskId => {
    setTaskList(
      taskList.filter(task => {
        return taskId !== task.id;
      })
    );
  };

  const selectAllTask = checkboxState => {
    setTaskList(
      taskList.map(task => {
        return task.text.toLowerCase().includes(taskFilter.toLowerCase())
          ? { ...task, checkboxChecked: checkboxState ? true : false }
          : task;
      })
    );
  };

  const onChangeCheckbox = e => {
    const isChecked = e.target.checked;
    setSelectCheckbox(isChecked);
    selectAllTask(isChecked);
  };

  const deleteAll = () => {
    setTaskList(
      taskList.filter(task => {
        return !task.text.toLowerCase().includes(taskFilter.toLowerCase());
      })
    );
    setFilter('');
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <Form createNewTask={createNewTask} taskList={taskList} />
        <FindTask setFilter={setFilter} value={taskFilter} />
      </div>
      <div className="task-list-wrapper">
        {visibleTask.length !== 0 && (
          <ToDoList
            taskList={visibleTask}
            onChangeTask={changeCurrentTask}
            onClickCheckbox={onClickCheckbox}
            onInputFocus={onInputFocus}
            onInputBlur={onInputBlur}
            onEditButtonClick={onEditButtonClick}
            onDeleteButtonClick={onDeleteButtonClick}
            isCheckedAll={isEveryCheckboxChecked}
            onChangeCheckbox={onChangeCheckbox}
            selectCheckbox={selectCheckbox}
            deleteAll={deleteAll}
          />
        )}
      </div>
    </div>
  );
}

export default App;
