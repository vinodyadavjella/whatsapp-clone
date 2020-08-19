import React, { useState } from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Sidebar/ChatRoom/Chat";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./Components/Login/Login";
import { useStateValue } from './Components/ContextAPI/StateProvider';

function App() {
  // const [user, setUser] = useState(null);
  const [{user}, dispatch] =useStateValue();
  
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
        <Router>
          {/* sidebar */}
          <Sidebar />
          <Switch>
              <Route path="/rooms/:roomId">
                  {/* chat */}
                  <Chat />
              </Route>
              <Route path="/">
                <h1>Home Screen</h1>
              </Route>
          </Switch>
        </Router>        
      </div>
      )}
    </div>
  );
}

export default App;
