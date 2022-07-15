import classNames from 'classnames/bind';
import styles from './student.module.scss';

const cx = classNames.bind(styles);

function Student() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>STUDENTS</span>
            <p className={cx('amount')}>125 student registered</p>
        </div>
    );
}

export default Student;
