/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import styles from './middle.module.scss';

const cx = classNames.bind(styles);

function MiddleBlock({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <input type="checkbox" disabled />

                <p className={cx('header-name')}>NAME</p>
                <p className={cx('header-sex')}>SEX</p>
                <p className={cx('header-place')}>PLACE AND DATE OF BIRTH</p>
                <p className={cx('header-groups')}>GROUPS</p>
            </div>
            {data &&
                data.map((element) => {
                    return (
                        <div className={cx('info')} key={element.id}>
                            <div className={cx('input-avt')}>
                                <input type="checkbox" />
                                <img
                                    src={element.avatar}
                                    alt="image"
                                    className={cx('image')}
                                />
                            </div>
                            <p className={cx('name')}>{element.name}</p>
                            <p className={cx('sex')}>{element.sex}</p>
                            <p className={cx('place-date')}>
                                {element.birth_date +
                                    ', ' +
                                    element.birth_place}
                            </p>
                            <p className={cx('groups')}>
                                {element.groupString}
                            </p>
                        </div>
                    );
                })}
        </div>
    );
}

export default MiddleBlock;
