/* eslint-disable no-undef */

import React from 'react';
import Login from './Login';
import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';



function App() {
  const [newtask, setNewtask]=useState('');

  const [tasks, setTasks]= useState([]);

  const addTask = () => {
    setTasks([...tasks, newtask]);
};

const deleteTask = (index) => {
 var duplikat = [...tasks];
 duplikat.splice(index, 1);
 setTasks(duplikat);
};

const tasksList = tasks.map((task, index) => {
  return (
    <div className='row justify-content-center'>
      <h1 className='col-md-6 text-start'>
        {index + 1}. {task}
      </h1>
      <button className='col-md-2 btn btn-danger'
       onClick={()=>
        {
          deleteTask(index);
        }
      
      }
      >Usuń</button>
    </div>
  );
});

return (
    <div className="App">
      <h1>Lista zadań</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
        <input type="text"
         placeholder="Nazwa zadania"
         className="form-control m-1"
         value={newtask} 
         onChange={(e)=>{setNewtask(e.target.value);
      }}
          />
          </div>
        <button className="btn btn-success col-md-2 m-1" onClick={addTask}>Dodaj zadanie 1</button>
      <div>
        {tasksList}
      </div>
      </div>
      <Login />
    </div>

  );
}

export default App;
