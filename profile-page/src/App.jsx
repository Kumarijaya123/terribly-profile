// App.jsx

import './App.css';
import Logo from './assets/logo.png';
import Profile from './components/Profile';
import './index.css'
function App() {
  return (
    <>
    <div className="container">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo" />
        <hr className="sidebarHr" />
        <h2 className='text'>STORIES</h2>
        <button className="course">Courses</button>
      </div>
    </div>
    <Profile/>
    </>
  );
}

export default App;
