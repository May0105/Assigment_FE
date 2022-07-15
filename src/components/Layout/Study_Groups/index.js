import classNames from 'classnames/bind';
import styles from './study.module.scss';

const cx = classNames.bind(styles);

function StudyGroups() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>STUDY GROUPS</span>
            <p className={cx('amount')}>6 study groups with 62 students</p>
        </div>
    );
}

export default StudyGroups;
