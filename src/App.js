import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Routing from './Components/Routing/Routing';

import  UserStatusProvider  from './Components/useContextComponent/UserStatusProvider';

function App() {
  return (
    <>
    <Router>
      <UserStatusProvider>
        <Routing />
      </UserStatusProvider>
      </Router>

    </>
  );
}

export default App;
