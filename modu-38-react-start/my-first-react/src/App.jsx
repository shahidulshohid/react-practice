import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Todo 
      task="Learn react" 
      isDone={true}></Todo>
      <Todo 
      task="Explore core concept" 
      isDone={false}></Todo>
      <Todo 
      task="Try jsx" 
      isDone={true}></Todo>
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="15"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props)
  return (
    <div>
      <h2>
        This Device: {props.name} price: {props.price}
      </h2>
    </div>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "shakib", age: 12 };
  return (
    <h3>
      I am a {person.name} with age:{age + money}
    </h3>
  );
}

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade} </p>
      <p>Score: {score} </p>
    </div>
  );
}
function Developer() {
  const developerStyle = {
    padding: "20px",
    margin: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coddng: </p>
    </div>
  );
}

export default App;
