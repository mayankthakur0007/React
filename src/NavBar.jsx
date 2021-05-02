import Strings from './Strings';
import {NavLink} from 'react-router-dom'

function NavBar() {
    return(
        <>
     <ul>
         <NavLink to='/MyPage'><li>My</li></NavLink>
         <NavLink to='/YourPage'><li>Your</li></NavLink>
         <NavLink to='/OurPage'><li>Our</li></NavLink>
     </ul>
        </>
    )
}

export default NavBar;