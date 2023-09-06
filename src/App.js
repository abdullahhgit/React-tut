import { useState } from 'react';
import './App.css';
import Job from './components/Job';

function App() {
  const [salary, setSalary] = useState("100000");

  const incrementHandle = () => {
    // return(
      setSalary(salary * 2.5);
      console.log(salary);
    // );
}

  return (
    <div className="App">
      <Job 
      salary={salary} 
      position="Frontend Developer" 
      company="abc.com" 
      incrementHandle={incrementHandle}
      />
    </div>
  );
}

export default App;
