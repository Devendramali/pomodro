import {useAuth0} from '@auth0/auth0-react';
function LogoutButton(params) {
    const {logout}=useAuth0();
    return(
        <button onClick={()=> logout({returnTo: window.location.origin })}>LogOut</button>
    )

    
};
export default LogoutButton;