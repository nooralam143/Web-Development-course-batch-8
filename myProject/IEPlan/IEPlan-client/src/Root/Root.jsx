import { Outlet } from "react-router-dom";
import NavbarComponent from './../Share/NavBar/NavbarComponent';
import { Footer } from "flowbite-react";




const Root = () => {
    return (
        <div>
      <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;