import { useState } from 'react'

export default function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    let res

    switch(operation) {
      case '+':
        res = a + b
        break
      case '-':
        res = a - b
        break
      case '*':
        res = a * b
        break
      case '/':
        res = b !== 0 ? a / b : 'Error: Division by zero'
        break
      default:
        res = 0
    }
    setResult(res)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Number 1"
      />
      <br />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
      />
      <br />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <br />
      <button onClick={calculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  )
}
