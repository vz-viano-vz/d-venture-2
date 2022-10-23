import React from 'react';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import Navdash from '../../component/Navdash';

const todo = () => {
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
    console.log(userInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setTodoList([userInput, ...todoList]);
    setUserInput('');
  };
  // const handleDelete = (todo) => {
  //   const updateArr = todoList.filter((todoItem) => todoList.indexOf(todoItem) != todoList.indexOf(todo));
  //   setTodoList(updateArr);
  // };
  const handleDelete = (index) => {
    var newList = todoList;
    newList.splice(index, 1);
    setTodoList([...newList]);
  };
  return (
    <div>
      <div >
        <div class={styles.containerx}>
          <Navdash />
          <h1 class="text-center">To do List</h1>
          <div class="row">
            <form class="form">
              <input onChange={handleChange} type="text" value={userInput} class="col-5 form-control " placeholder="to-do List" />
              <button class="col btn btn-success" onClick={handleSubmit}>
                Add
              </button>
            </form>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">To-do</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {todoList.length >= 1
                  ? todoList.map((todo, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td key={index}>{todo}</td>
                          <td>
                            <button class="btn btn-danger" onClick={() => handleDelete(index)}>
                              delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : 'no data input'}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default todo;
