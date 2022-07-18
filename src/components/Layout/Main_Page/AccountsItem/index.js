import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './accounts.module.scss';
const cx = classNames.bind(styles);
function AccountsItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img src={data.avatar} alt={data.full_name} />
            </div>
            <div className={cx('info')}>
                <h4>
                    <span className={cx('name')}>{data.full_name}</span>
                </h4>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </div>
    );
}

export default AccountsItem;
