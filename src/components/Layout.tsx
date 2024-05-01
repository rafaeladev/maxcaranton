import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
function Layout() {
    return (
        <main>
            <Nav />
            <div className='siteWrapper'>
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}

export default Layout;
