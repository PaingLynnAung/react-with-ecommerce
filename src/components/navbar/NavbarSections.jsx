import Navbar from "./Navbar";
import Search from "./Search";

const NavbarSections = () => {
    return (
        <div className="fixed w-full top-0 z-50">
            <div className=" bg-white">
                <Navbar/>
                <Search/>
            </div>
        </div>
    )
}

export default NavbarSections;