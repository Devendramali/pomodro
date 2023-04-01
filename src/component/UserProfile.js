import {useAuth0} from '@auth0/auth0-react';
import Timer from './Timer';
import '../component/Timer.css'
import LogoutButton from './LogoutButton';
function UserProfile(params) {
    const {user, isAuthenticated ,isLoading}=useAuth0();
//     if(isLoading){
// return<div>Loading....</div>
//     }
    return(
        isAuthenticated && (
            <div className='btn2'>
               <h1 className='h1'>Welcome {user.name}</h1>
                {/* <img src={user.picture}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p> */}
                <Timer/>
             </div>

             
        )
      
    )
   

    
};
export default UserProfile;