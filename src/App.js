import { useState } from 'react';
import Card from "./Card";
import './App.css';

const randNum = () => Math.floor(Math.random() * 100) + 1;

export default function App() {
  const [nums, setNums] = useState([randNum(), randNum(), randNum()]);

  const [count, setCount] = useState(0)
  
  const updateNums = () => {              /* or function updateNums(){
                                                  setNums([randNum(), randNum(), randNum()])
                                                         } */
    setNums([randNum(), randNum(), randNum()]);

    setCount(count + 1)   //updates the count variable.
  };

  return (
    <div>
      <h1>CARD VALUE SIMULATOR</h1>
      <h2>You have updated the cards' values {count} times</h2>
      
      <Card num={nums[0]} />
      <Card num={nums[1]} />
      <Card num={nums[2]} />

      <button onClick={updateNums} className="update-btn">Update Cards</button>
    </div>
  );
}
