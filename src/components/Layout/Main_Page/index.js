import classNames from 'classnames/bind';
import styles from './main_page.module.scss';
import LeftBlock from './Left_Block';
import MiddleBlock from './Middle_Block';
import Header from './Header';
const cx = classNames.bind(styles);
function MainPage() {
    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('block')}>
                <LeftBlock className={cx('left-block')} />
                <MiddleBlock className={cx('middle-block')} />
            </div>
        </div>
    );
}

export default MainPage;
