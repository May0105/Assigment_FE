import SchoolIcon from '@mui/icons-material/School';
import classNames from 'classnames/bind';
import styles from './logo.module.scss';
import Avata from '../../../assests/images/avt.jpg';
const cx = classNames.bind(styles);

function Logo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <SchoolIcon className={cx('icon')} />
                <h2>SAF</h2>
                <p className={cx('text')}>Student Administration Framework</p>
            </div>
            <div className={cx('account')}>
                <img src={Avata} alt="avatar" className={cx('image')} />
                <p>Admin</p>
            </div>
        </div>
    );
}

export default Logo;
