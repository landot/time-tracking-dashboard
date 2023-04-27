import { useState } from 'react';
import Category from './components/Category'
import Summary from './components/Summary'
import dataRaw from './assets/data/data.json';
import { Data, Timeframes } from './assets/data/dataTypes';
import './assets/styles/App.css'

const data: Data[] = dataRaw;

function App() {
  const [timeframe, setTimeframe] = useState<string>('weekly');

  console.log(location)

  function handleTimeframeUpdate(timeframe: string) {
    setTimeframe(timeframe);
  }

  return (
    <div className='card-wrapper'>
      <Summary handleTimeframeUpdate={handleTimeframeUpdate} activeTimeframe={timeframe}/>
      {
        data.map(category => {
          return <Category 
            key={category.title}
            category={category.title} 
            timeframe={timeframe} 
            currentTime={category.timeframes[timeframe as keyof Timeframes].current} 
            lastTime={category.timeframes[timeframe as keyof Timeframes].previous} 
          />
        })
      }
    </div>
  )
}

export default App
