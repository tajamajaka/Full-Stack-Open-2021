import React from 'react' 
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const App = () => {
/*   const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
*/ 
  return (
    <div>
        <Header course = 'Half Stack application development' /> 
        <Content part = 'Fundamentals of React' exercises = {10} />
        <Content part = 'Using props to pass data' exercises = {7} />
        <Content part = 'State of a component' exercises = {14} />
        <Total exercises = {10 + 7 + 14} />
    </div>
  )
}

export default App