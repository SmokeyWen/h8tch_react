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
            const response = await axios.delete(serverUrl + 'del');
            
            // setTimeout(function(){  }, 1000);
            setTasks(response.data);
            console.log('tasks after delete all', tasks);
            console.log('delete all response', response.data);
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
            setTasks(response.body);
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

    {console.log('-----list all tasks', tasks)}
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
                    <ItemList title = {'To Do'} tasks = {tasks} keyWord = {keyWord} isDone = '0'/>
                </div>
                <div className='col-lg'>
                    <ItemList title = {'Done'} tasks = {tasks} keyWord = {keyWord} isDone = '1'/>
                </div>
            </div>

        </div>
    )
}

export default App;