import React, { Fragment, useState, useEffect } from 'react'
import Task from './task';

const TodoList = () => {


    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem('todoList'));
        if (storedList) {
          setList(storedList);
        }
      }, []);
    
      useEffect(() => {
        // Save todo list data to local storage whenever it changes
        localStorage.setItem('todoList', JSON.stringify(list));
      }, [list]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        
        
    };

    const handleClick = () => {
        
       
        if (inputValue.trim() !== '') {
            setList([...list, inputValue]);
            setInputValue(''); 

        }
    };
    const handleDelete = (index) =>{
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
    };

    
    
    return (
        <div className="container">
            <div className="heading">
                <h1>Todo List</h1>
            </div>
            <div className='inputt'>
                <input type="text" className="task" value={inputValue} onChange={handleChange} placeholder='Enter Your task' />
                <button onClick={handleClick} >Add Task</button>
            </div>
            <div className="tasks">
                {list.map((item, index) => (
                    <Fragment key={index}>
                        
                        <Task 
                        item={item} handleDelete={() => handleDelete(index)} 
                        />
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default TodoList;

