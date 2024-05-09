import { Outlet } from 'react-router-dom';
import Nav from './Nav.tsx';
import Footer from './Footer';
import Banner from './Banner';
function Layout() {
    return (
        <main>
            <Nav />
            <div className='banner'>
                <Banner />
            </div>
            <Outlet />
            <Footer />
        </main>
    );
}

export default Layout;
