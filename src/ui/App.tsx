// import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useStatistics } from './useStatistics';
import { useMemo } from 'react';
import { Chart } from './Chart';

function App() {
  const statistics = useStatistics(20);
  const cpuUsages = useMemo(
    () => statistics.map((stat) => stat.cpuUsage),
    [statistics]
  );

  return (
    <>
      <div>
        <div style={{height:140}}>
            <Chart data={cpuUsages} maxDataPoints={20}/>
        </div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
