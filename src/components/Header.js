import React from 'react'

const Header = (props) => {
    return (
        <header>
            <h1 id="title" >Marvelous v2.0</h1>
            <a href="" id="delete-all" onClick = {props.onClick}>Delete All Tasks</a>
        </header>
    )
}

export default Header
