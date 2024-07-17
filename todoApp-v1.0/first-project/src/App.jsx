import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

function App() {
  return (
    <div className='container'>
      <CreateList />
    </div>
  );
}

const taskStyle = {
  borderColor: '#0000ff52',
  boxShadow: 'inset 0 0 2px 0px blue',
}

class CreateList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: '',
      todo: [],
      btn_text: 'add task',
      edit_task: false,
      task_id: '',
    }

    this.inputRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    if (this.state.title && this.state.desc) {
      // If task edit is selected edit task
      if (this.state.edit_task) {

        const taskID = this.state.task_id;

        const dataset = this.state.todo.map((task) => {
          if (task.id === taskID) {
            return { ...task, title: this.state.title, desc: this.state.desc };
          }
          return task;
        });

        this.setState({
          title: '',
          desc: '',
          todo: dataset,
          btn_text: 'add task',
          edit_task: false,
        });

      } else {
        // otherwise, save it as a new task
        // format input data
        const title = this.state.title.trim();
        const desc = this.state.desc.trim();
        // create task
        this.setState({
          title: '',
          desc: '',
          todo: [...this.state.todo, { title: title, desc: desc, date: new Date().toLocaleString(), id: self.crypto.randomUUID() }]
        });
      }

    } else {
      // if the input fields are empty
      alert('enter all values');
    }
  }

  handleEdit(taskID) {
    const task = this.state.todo.find(task => task.id === taskID);
    const { title, desc } = task || {};

    this.setState({
      title,
      desc,
      task_id: taskID,
      btn_text: 'edit task',
      edit_task: true,
    });

    this.inputRef.current.focus();
  }

  handleDelete(taskID) {
    console.log('-delete task: ' + taskID);
    const filteredTasks = this.state.todo.filter((task) => task.id != taskID);
    // UPDATE TODO LIST
    this.setState({
      title: '',
      desc: '',
      edit_task: false,
      btn_text: 'add task',
      todo: filteredTasks,
    });
  }

  render() {
    const tasks = this.state.todo.map((task) => <ListItem key={task.id} title={task.title} desc={task.desc} date={task.date} handleEdit={this.handleEdit} handleDelete={this.handleDelete} id={task.id} />);

    const List = <ul className='list'> {tasks} </ul>;
    const EmptyList = <><div className='no-items-box'><i className="bi bi-list-task"></i></div></>

    return (
      <>
        <div className='header'>
          <div className="info-container">
            <input
              type="text"
              placeholder="title"
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
              ref={this.inputRef}
              maxLength='53'
            />
            <input
              type="text"
              placeholder="description"
              name='desc'
              value={this.state.desc}
              onChange={this.handleChange}
              maxLength='72'
            />
          </div>
          <button className='add-item-btn' onClick={this.handleClick}>{this.state.btn_text}</button>
        </div>

        {this.state.todo.length == 0 ? EmptyList : List}

      </>
    );
  }
}

function ListItem(props) {

  const editTask = () => {
    const taskID = props.id;
    const handleEdit = props.handleEdit;
    handleEdit(taskID);
  }

  const deleteTask = () => {
    const taskID = props.id;
    const handleDelete = props.handleDelete;
    handleDelete(taskID);
  }

  const selectItem = (event) => {
    const parent = event.target.parentElement;
    console.log(parent);
    parent.style.borderColor = "red";
  }

  return (
    <li className='list-item'>
      <div className='item'>
        <div className='item-btn-container'>
          <button className='item-btn edit-btn' onClick={editTask}>edit</button>
          <button className='item-btn delete-btn' onClick={deleteTask}>delete</button>
        </div>
        <div className='item-info' onClick={selectItem} >
          <p className='item-title'>{props.title} <span>{props.date}</span></p>
          <p>{props.desc}</p>
        </div>
      </div>
    </li>
  );
}

export default App

/* 
border-color: #0000ff52;
box-shadow: inset 0 0 2px 0px blue;

1427_00@

*/