import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>This app for testing my Git issue to resolve my cherry pick</h2>
      <p>hope it will work</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>My Latest changes which I needed the most is here and I don't need nature image in this page</p>
      </div>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aliquam non vitae, ex suscipit iusto, molestias, dicta cum dignissimos tempora incidunt ad enim! Ipsam omnis eveniet, debitis doloribus ullam nobis.
      </p>
    </>
  )
}

export default App
