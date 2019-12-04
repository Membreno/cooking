import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('crimson');
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount = {0} />
      Counter Hooks
      <CounterHooks initialCount = {0}/>
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'crimson' ? 'skyblue' : 'crimson';
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
