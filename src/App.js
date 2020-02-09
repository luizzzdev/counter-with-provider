import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterProvider from './counter/CounterProvider';
import Counter from './counter/Counter';

function App() {
  return (
    <div className="App">      
      <main>
        <CounterProvider>
          <Counter/>
        </CounterProvider>
      </main>
    </div>
  );
}

export default App;
