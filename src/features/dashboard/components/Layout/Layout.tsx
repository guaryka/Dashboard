import Navbar from '../Navbar/navbar';
import  Canhan  from '../canhan/canhan';
import './Layout.css';

const Layout = () => {
    return (
        <div id="container">
            <div id="header"></div>
            <div id="content">
                <div className='navbar-container'>
                    <Navbar />
                </div>
                <div className='items-container'>
                    <Canhan/>
                </div>
            </div>
            <div id="footer"></div>
        </div>
    )
}

export default Layout;