import React from 'react';

const Data = (props) => {
    const {info, setInfo} = props;

    let task = {
        name: "",
        isComplete: false
    };

    const onChange = (e) => {
        task.name = e.target.value;
    }

    const onClick = (e) => {
        setInfo([...info, task]);
        e.target.value = "";
    }

    return (
        <div className="container">
            <input className="mt-5" onChange={onChange} type="text" name="task"></input>
            <button onClick={onClick} className="btn btn-dark ml-2">Add</button>
        </div>
    )
}

export default Data;