import React from 'react'

// CLASS
class MyClass extends React.Component {
  render() {
    return <h2>This is an Instance of a Class Component</h2>
  }
}

export default function App() {
  return (
    <div>
      <MyClass />
    </div>
  )
}
