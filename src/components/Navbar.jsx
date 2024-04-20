import  { Link } from 'react-router-dom';

export default function Navbar (){
    return (
        <nav className=' navbar'>
        <Link to="/natural-api/">  Home </Link> |  <Link to="/natural-api/favoritos"> Favoritos </Link>
        </nav>
    );
}