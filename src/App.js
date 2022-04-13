import './App.scss';
import {useState} from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import taskList from "./components/TaskList";
import TaskList from "./components/TaskList";

function* gen() {
    let id = 0;
    while (true) {
        yield id;
        id++;
    }
}

const g = gen();

function App() {
    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState('all');

    const handleInput = (event) => {
        setValue(event.target.value);
    }

    const handleAddTask = (event) => {
        if (event.key === 'Enter' && value !== '') {
            setTasks([...tasks, {
                id: g.next().value,
                name: value,
                status: false
            }]);
            setValue('');
        }
    }
    const removeTask = (task) =>{
        setTasks(tasks.filter((item)=> item !==task));
    }
    const changeStatus = (task) =>{
        setTasks(tasks.map((item) => {
            if (item === task){
                item.status = !item.status
            }

            return item;
        }))
    }
    const clearCompleted = () =>{
        setTasks(tasks.filter((item) => !item.status));
    }
  return (
    <div className="App">
        <div className='todo-border'>
         <Header/>
         <TaskInput value={value} handleInput={handleInput} handleAddTask={handleAddTask}/>
         <TaskList status={status} tasks={tasks} changeStatus={changeStatus} removeTask={removeTask}/>

         {tasks.filter((task)=> task.status).length ? <button className='button-text' onClick={clearCompleted}>Usuń zrobione</button> : ''}
          <div>
                <button className='button-color' onClick={() => setStatus('all')}>Wszystkie</button>
             <button className='button-color' onClick={() => setStatus(false)}>Nie zrobione</button>
              <button className='button-color' onClick={() => setStatus(true)}>zrobione</button>
            </div>
        </div>
    </div>
  );
}

export default App;
