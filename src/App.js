import React, {useState, useEffect} from 'react';
import './styles/App.css';
import axios from 'axios';
import Header from './components/Header';
import Add from './components/Add';
import ItemList from './components/ItemList';
import Search from './components/Search';
import Spinner from 'react-bootstrap/Spinner';
const {serverUrl} = require('./constants');
const moment = require('moment');


const App = () => {
    const [tasks, setTasks] = useState([]);
    const [keyWord, setKeyWord] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    // Load tasks from express when load
    useEffect(() => {
        const getTasks = async () => {
            setIsLoaded(false);
            const response = await axios.get(serverUrl + 'get');
            setTasks(response.data);
            setIsLoaded(true);
        }
        getTasks();
    }, [])

    // function to delete all tasks
    const deleteAll = async () => {
        console.log('deleting all tasks');
        const confirm = window.confirm('Are you sure to delete all tasks?');
        if (confirm){
            const response = await axios.get(serverUrl + 'del/all');
            setTasks(response.data);
        }
    }

    // function to add a new task
    const addTask = async (newTask, setNewTask) => {
        if (newTask !== ''){
            // check if duplicate task exists
            const isFound = tasks.find((task) => task.name === newTask);
            console.log('isFound:', isFound);
            if (isFound === undefined) {
                console.log('new task name:', newTask);
                const obj = {
                    name : newTask,
                    date : moment().format('L'),
                    is_done : 0,
                };
    
                const response = await axios.post(serverUrl + 'add', obj);
                setTasks(response.data);
                document.getElementById('task-input').value = '';
                
                // callback func resets states in add component
                setNewTask('');
            }
            else {
                alert( `Task ${newTask} exists.`);
            }
        }
    }

    // function to tasks in state
    const searchTask = (e) => {
        console.log('key word:', e.target.value);
        setKeyWord(e.target.value);
    }

    // function to delete a specific task
    const deleteTask = async (id ,name) => {
        const confirm = window.confirm("Are you sure to delete task " + name + "?");
        if (confirm){
            const response = await axios.delete(serverUrl + 'del?id=' + id);
            console.log('deleted?', response);
            setTasks(response.data);
        }
    }

    // function to change is_done field of a task
    const changeStatus = async (id) => {
        const response = await axios.put(serverUrl + 'upd?id=' + id);
        setTasks(response.data);
    }

    return (
        <div className="container task-body">
            
            <div className="row">
                <div className="col-lg">
                    <Header onDelete = {deleteAll} />
                </div>
            </div>
            <div className="row">
                <div className='col-md'>
                    <Add onClick = {addTask}/>
                </div>
                <div className='col-md'>
                    <Search onChange = {searchTask}/>
                </div>
            </div>
            
            <div className="row">
                <div className='col-lg task-list'>
                    { isLoaded === false &&
                        <Spinner animation="border" variant="primary" className = "spinner"/>
                    }
                    { isLoaded === true &&
                        <ItemList title = {'To Do'} tasks = {tasks} keyWord = {keyWord} isDone = '0' onDelete = {deleteTask} changeStatus = {changeStatus}/>
                    }
                    
                </div>
                <div className='col-lg task-list'>
                    { isLoaded === false &&
                        <Spinner animation="border" variant="primary" className = "spinner"/>
                    }
                    { isLoaded === true &&
                        <ItemList title = {'Done'} tasks = {tasks} keyWord = {keyWord} isDone = '1' onDelete = {deleteTask} changeStatus = {changeStatus}/>
                    }
                </div>
            </div>

        </div>
    )
}

export default App;