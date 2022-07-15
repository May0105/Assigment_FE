// export { default as MainPage } from './Main_Page';
// export { default as Student } from './Student';
// export { default as StudyGroups } from './Study_Groups';
// export { default as Logo } from './Logo';

import classNames from 'classnames/bind';
import styles from './style.module.scss';

import MainPage from './Main_Page';
import Student from './Student';
import StudyGroups from './Study_Groups';
import Logo from './Logo';
const cx = classNames.bind(styles);

function Layout() {
    return (
        <div className={cx('lay-out')}>
            <Logo />

            <div className={cx('above')}>
                <Student />
                <StudyGroups />
            </div>

            {/* <div className="study">
            </div> */}

            <div className="main-page">
                <MainPage />
            </div>
        </div>
    );
}

export default Layout;
