//import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from "/vite.svg";
import { Link } from 'react-router-dom';
//import '../App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>This is the AAC_1 component</h1>
      <div className="card">
        <Link to="/Dist_test/AA_1/dist/AAC_2">Go to next component</Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
