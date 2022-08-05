import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>My blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">new blog</Link>
            </div>
        </nav>
    );
    
}

export default Navbar;