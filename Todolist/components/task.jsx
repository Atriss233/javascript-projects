import React, { useState } from 'react'


const Task = ({ item, handleDelete,}) => {

    const [isLineThrough, setIslineThrough] = useState(false);

    const toggleLineThrough = () => {
        setIslineThrough(!isLineThrough);
    };
    

    return (

        <>
            <div className='list' >
                <div className="task-title" >
                    <div className='list-task' style={{
                        textDecoration: isLineThrough ? 'line-through' : 'none',
                        color: isLineThrough ? 'green' : 'black'
                    }}
                        onClick={toggleLineThrough}
                    >{item}</ div>
                </div>
                <div className="icon">
                    <div className="delete" onClick={handleDelete}>Delete</div>
                </div>
            </div>
        </>

    )
}

export default Task;
