import React, { useState } from 'react';
import styles from './Container.module.css'
const Content = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({})
    const onSubmit = (e) => {
        e.preventDefault();
        if (todo.todo.length > 0 && todos.length < 4)
            setTodos([...todos, todo])
        else {
            if (todos.length >= 4)
                alert("Full!")
            else
                alert("Empty String")
        }
        setTodo({ todo: "", isDone: false })
    }
    const onDelete = (index) => {
        setTodos(todos.filter((item, idx) => idx !== index))
    }
    const onChange = (e) => {
        setTodo({ todo: e.target.value, isDone: false })
    }
    const onToggle = (idx) => {
        setTodos(todos.map((item, index) => index === idx ? { todo: item.todo, isDone: !item.isDone } : item))
    }
    const onFinish = () => {
        let cnt = 0;
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].isDone) {
                cnt++;
            }
        }
        setCount(cnt)
        setTodos(todos.filter((item) => item.isDone === false))
    }
    return (
        <div>
            <button className={styles.Submit} onClick={onFinish}> submit</button>
            <form onSubmit={onSubmit}>
                <input value={todo.todo || ""} onChange={onChange} className={styles.Input} placeholder='Add To Do !'></input>
                <button className={styles.Btn} type="submit"> Add</button>
            </form>
            {todos.map((todo, idx) =>
                <h3 className={styles.List} key={idx}>
                    <input className={styles.CheckBox} onChange={() => onToggle(idx)} type="checkbox"></input>
                    <span className={styles.Content} style={todo.isDone ? { color: "gray", textDecoration: "line-through" } : null}>{todo.todo}</span>
                    <button className={styles.Del} onClick={() => onDelete(idx)}>삭제</button>
                </h3>)}
        </div>
    );
};

export default Content;