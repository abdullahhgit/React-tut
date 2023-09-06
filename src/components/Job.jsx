import React from 'react'

const Job = ({salary, position, company, incrementHandle}) => {

    // const salaryIncrement = (amount_in_percent) => {
        
    // }

  return (
    <div>
      <h1>Welcome OnBoard</h1>
      <h2>Your Salary is: {salary}</h2>
      <h3>Your Position is: {position}</h3>
      <h4>Your Company is: {company}</h4>
      <button onClick={incrementHandle} >5% Increment in Salary</button>
    </div>
  )
}

export default Job
