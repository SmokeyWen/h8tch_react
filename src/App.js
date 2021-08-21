import React from 'react';
import Header from './components/Header';
import Add from './components/Add';
import ItemList from './components/ItemList';
import Search from './components/Search';

import './styles/App.css';


const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg">
                    <Header />
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