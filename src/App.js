import ExpenseItem from "./ExpenseItem";
import ButtonClicker from './ButtonClicker';
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const c = useState('');
  return (
    <div>
      <ExpenseItem name="milen">Here</ExpenseItem>
      <ButtonClicker />
    </div>
  );
}

export default App;
