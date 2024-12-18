import Header from '../components/Header';
import Style from './Default.module.scss';
import Sidebar from '../components/Sidebar';
import classNames from 'classnames/bind';
const cx = classNames.bind(Style);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
