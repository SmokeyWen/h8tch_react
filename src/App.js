import React from 'react';
import Header from './components/Header';
import Add from './components/Add';
import ItemList from './components/ItemList';
import Search from './components/Search';


const App = () => {
    return (
        <div>
            <h1>Hello from React!</h1>
            <Header />
            <Add />
            <ItemList />
            <Search />
        </div>
    )
}

export default App;