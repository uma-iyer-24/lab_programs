import React from 'react'

// CLASS
class MyClass extends React.Component {
  render() {
    return <h2>Class Component</h2>
  }
}

// INSTANCE
function MyFunction() {
  return <h2>Functional Component</h2>
}

export default function App() {
  return (
    <div>
      <MyClass />
      <MyFunction />
    </div>
  )
}
