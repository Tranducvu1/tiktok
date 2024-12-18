import { Sidebar } from '../../components/Layout/DefaultLayout';
import Header from '../../components/Layout/components/Header';
function Home() {
    return (
        <div>
            <Header />
            <div className="container mx-auto px-4">
                <Sidebar />
                <h1>Home</h1>
            </div>
        </div>
    );
}

export default Home;
