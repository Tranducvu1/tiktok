import Header from './Header';
import Sidebar from './Sidebar';
export { Header, Sidebar, DefaultLayout };
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Sidebar />
            {children}
        </div>
    );
}

export default DefaultLayout;
