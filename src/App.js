import React from 'react'
import './App.css'
import MessengerChat from './MessengerChat'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App with Facebook Messenger</h1>
        <p>This is a sample application with Facebook Messenger integration.</p>
      </header>
      <MessengerChat />
    </div>
  )
}

export default App
