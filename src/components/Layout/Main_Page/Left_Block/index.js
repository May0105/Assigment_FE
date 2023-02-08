import classNames from 'classnames/bind';
import styles from './left.module.scss';

const cx = classNames.bind(styles);

function LeftBlock() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>FILTERS FOR STUDY GROUPS</div>
            <div className={cx('box')}>
                <input type="checkbox" />
                <p>Typography</p>
            </div>
            <div className={cx('box')}>
                <input type="checkbox" id="squaredcheck" />
                <p>Biologists</p>
            </div>
            <div className={cx('box')}>
                <input type="checkbox" />
                <p>Web designers</p>
            </div>
            <div className={cx('box')}>
                <input type="checkbox" />
                <p>Black magicians</p>
            </div>
        </div>
    );
}

export default LeftBlock;
