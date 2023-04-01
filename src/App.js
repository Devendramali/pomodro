
import './App.css';
import Timer from './component/Timer'
import Loginbutton from './component/Loginbutton';
import LogoutButton from './component/LogoutButton';
import UserProfile from './component/UserProfile';

function App() {
  return (
    <div className='App'>
     <img src='https://th.bing.com/th/id/OIP.v81OP3T4vhD2RfaPgTTrSQHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img> 

     <div className='btn'>
     <Loginbutton/>
     <LogoutButton />
     
    </div>
    <UserProfile/> 
    </div>
  );
}

export default App;
