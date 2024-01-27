import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllR from './AllR';

function App() {
  return (
    <div className="App">
      <Router >
   <Navbar />
   <AllR/>
   </Router >
    </div>
  );
}

export default App;
