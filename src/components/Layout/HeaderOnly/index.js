import Header from './Header';
export { Header, DefaultLayout };
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default DefaultLayout;
