import{Link} from "react-router-dom"
const Navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home"> Home </Link>
                    </li>
                    <li className="nav-item">    
                        <Link className="nav-link"  to="/about"> About Us </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to="/contact"> Contact Us </Link>
                    </li>
                     <li className="nav-item">
                        <Link className="nav-link"  to="/login"> Login </Link>
                    </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/blogs"> Blogs</Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"> Student  </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/student/Register"  > Register</Link></li>
                            <li><Link className="dropdown-item" to="/student/delete"> Delete </Link></li>
                            <li><Link className="dropdown-item" to="/student/update"> Update </Link></li>
                             <li><Link className="dropdown-item" to="/student/view"> View</Link></li>
                              <li><Link className="dropdown-item"to="/student/details" >Details</Link></li>
                              
                        </ul>
                    </li> 
                </ul>
            </div>
        </nav>
        

      
        </>
    )
}
export default Navbar;