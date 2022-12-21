import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Docs from '@/components/Docs'

function App() {
  const [count, setCount] = useState(5)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="resfsdf">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Docs text={`test ${count}`} />
    </div>
  )
}

export default App
