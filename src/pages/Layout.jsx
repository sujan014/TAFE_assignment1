import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>        
            <nav className="nav-bar">
                <img
                    className="nav-img"                            
                    height='100px'
                    width='100px'
                    src='https://openlearning-cdn.s3.amazonaws.com/iatdigital-rn9p0k-avatar-120-ts1672186746.jpg'
                />
                <Link to='/' className="nav-link"><h1 style={{display: 'inline'}} >Home</h1></Link>
                <Link to='/about' className="nav-link"><h1 style={{display: 'inline'}} >About</h1></Link>                
            </nav>
            <Outlet/>
        </>
    )
}