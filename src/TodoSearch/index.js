import './TodoSearch.css'
import { TodoContext } from '../TodoContext'
import React from 'react'

function TodoSearch(){

    const{
        searchValue,
        setSearchValue
      } = React.useContext(TodoContext)

    return(
        <input 
        className="Search"
        placeholder="Cortar Cebolla" 
        value={searchValue}
        onChange={(event)=>{
            setSearchValue(event.target.value);
        }}>
        </input>
    )
  }

  export{ TodoSearch };