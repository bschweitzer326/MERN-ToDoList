import React from 'react';

const List = (props) => {
    const {task, index, info, setInfo} = props;

    const onClick = () => {
        setInfo(() => info.filter(task => info.indexOf(task) !== index));
    }

    const onChange =() => {
        info[index].isComplete = !info[index].isComplete;
        setInfo([...info]);
    }

    const complete = {
        textDecoration: "line-through"
    }

    const notcomplete = {
        textDecoration: "none"
    }

    return (
        <div className="container">
            <h3 style={task.isComplete ? complete: notcomplete}>{task.name}</h3>
            <div className="container">
                <label className="p-2" htmlFor="checkbox">Completed?</label>
                <input onChange={onChange} type="checkbox" name="" checked={task.isComplete}></input>
                <button onClick={onClick} className="btn btn-danger ml-2">Delete</button>
            </div>
        </div>
    )
}

export default List;