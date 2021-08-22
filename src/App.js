import React, {useState, useEffect} from 'react';
import './styles/App.css';
import axios from 'axios';
import Header from './components/Header';
import Add from './components/Add';
import ItemList from './components/ItemList';
import Search from './components/Search';
const {serverUrl} = require('./constants');
const moment = require('moment');


const App = () => {
    const [tasks, setTasks] = useState([]);
    const [keyWord, setKeyWord] = useState('');

    useEffect(() => {
        const getTasks = async () => {
            const response = await axios.get(serverUrl + 'get');
            console.log('get all data', response.data);
            setTasks(response.data);
        }
        getTasks();
    }, [])

    const deleteAll = async () => {
        console.log('deleting all tasks');
        const confirm = window.confirm('Are you sure to delete all tasks?');
        if (confirm){
            const response = await axios.get(serverUrl + 'del/all');
            
        }
    }

    const addTask = async (newTask, setNewTask) => {
        if (newTask !== ''){
            console.log('new task name:', newTask);
            const obj = {
                name : newTask,
                date : moment().format('L'),
                is_done : 0,
            };

            const response = await axios.post(serverUrl + 'add', obj);
            setTasks(response.data);
            console.log('response after add', response.body);
            document.getElementById('task-input').value = '';
            
            // callback func resets states in add component
            setNewTask('');
        }
    }

    const searchTask = (e) => {
        console.log('key word:', e.target.value);
        setKeyWord(e.target.value);
    }

    const deleteTask = async (id ,name) => {
        const confirm = window.confirm("Are you sure to delete task " + name + "?");
        if (confirm){
            const response = await axios.delete(serverUrl + 'del?id=' + id);
            console.log('deleted?', response);
            setTasks(response.data);
        }
    }

    const changeStatus = async (id) => {
        const response = await axios.put(serverUrl + 'upd?id=' + id);
        setTasks(response.data);
    }

    // {console.log('-----list all tasks', tasks)}
    return (
        <div className="container">
            
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
                <div className='col-lg'>
                    <ItemList title = {'To Do'} tasks = {tasks} keyWord = {keyWord} isDone = '0' onDelete = {deleteTask} changeStatus = {changeStatus}/>
                </div>
                <div className='col-lg'>
                    <ItemList title = {'Done'} tasks = {tasks} keyWord = {keyWord} isDone = '1' onDelete = {deleteTask} changeStatus = {changeStatus}/>
                </div>
            </div>

        </div>
    )
}

export default App;