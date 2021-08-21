import React, {useState, useEffect} from 'react';
import './styles/App.css';
import axios from 'axios';
import Header from './components/Header';
import Add from './components/Add';
import ItemList from './components/ItemList';
import Search from './components/Search';
const {serverUrl} = require('./constants');


const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const response = await axios.get(serverUrl + 'get');
            // console.log('get all data', response.data);
            setTasks(response.data);
        }
        getTasks();
    }, [])

    const deleteAll = async () => {
        console.log('deleting all tasks');
        const confirm = window.confirm('Are you sure to delete all tasks?');
        if (confirm){
            const response = await axios.delete(serverUrl + 'del');
            setTasks(response.data);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg">
                    <Header onClick = {deleteAll} />
                </div>
            </div>
            <div className="row">
                <div className='col-md'>
                    <Add />
                </div>
                <div className='col-md'>
                    <Search />
                </div>
            </div>
            
            <div className="row">
                <div className='col-lg'>
                    <ItemList />
                </div>
                <div className='col-lg'>
                    <ItemList />
                </div>
            </div>

        </div>
    )
}

export default App;