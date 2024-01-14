import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../NavBar/Navbar.css"
import { AuthContext } from '../../Provider/AuthProvider';


const NavbarComponent = () => {
  const { user, logOut } = useContext(AuthContext);
  // const {loggedInUserDetails}= useUserDetails()
  // console.log("user is", user);
  // console.log("loggin user details",loggedInUserDetails);



  const handalSignout = () => {
    logOut()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <Navbar fluid rounded>
      <Link href="/" className='flex'>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-[#363E51]">IE<span className='text-[#FF1F1F]'>Plan</span></span>
      </Link>
      <div className="flex md:order-2">
        {
          !user ?
            <Link to="/login">
              <button className="btn btn-sm h-10 pr-1">Login</button>
            </Link>
            :
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user.photoURL} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.displayName}</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item> <span onClick={handalSignout}>Sign out</span></Dropdown.Item>
            </Dropdown>
        }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add-order">Order</NavLink></li>
        <Dropdown
              arrowIcon={true}
              inline
              label={
                <li><NavLink to="#">knitting</NavLink></li>
              }
            >
              <Dropdown.Item> <li><NavLink to="/add-knitting">knit Production</NavLink></li></Dropdown.Item>
            </Dropdown>
            <Dropdown
              arrowIcon={true}
              inline
              label={
                <li><NavLink to="#">Dyeing</NavLink></li>
              }
            >
              <Dropdown.Item> <li><NavLink to="/add-Batch">Add Batch</NavLink></li></Dropdown.Item>
              <Dropdown.Item> <li><NavLink to="/add-Dyeing">Add Dyeing</NavLink></li></Dropdown.Item>
              <Dropdown.Item> <li><NavLink to="/add-Slitting">Add Slitting</NavLink></li></Dropdown.Item>
              <Dropdown.Item> <li><NavLink to="/add-Dryer">Add Dryer</NavLink></li></Dropdown.Item>
              <Dropdown.Item> <li><NavLink to="/add-Stenter">Add Stenter</NavLink></li></Dropdown.Item>
              <Dropdown.Item> <li><NavLink to="/add-Compacting-1">Add Compacting-1</NavLink></li></Dropdown.Item>
              <Dropdown.Item> <li><NavLink to="/add-Compacting-2">Add Compacting-2</NavLink></li></Dropdown.Item>
              <Dropdown.Item> <li><NavLink to="/add-Poly">Add Poly</NavLink></li></Dropdown.Item>
              <Dropdown.Item> <li><NavLink to="/add-Delivery">Add Delivery</NavLink></li></Dropdown.Item>
            </Dropdown>    
        <li><NavLink to="/">Cutting</NavLink></li>     


      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComponent;