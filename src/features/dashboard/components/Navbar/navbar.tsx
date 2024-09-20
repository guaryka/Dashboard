import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div id="navbar-container">
            <div>
                <ul>
                    <li><Link to="/canhan">Cá nhân</Link></li>
                    <li><Link to="/supreme-court">Tòa án nhân dân tối cao</Link></li>
                </ul>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;
