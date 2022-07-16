import { useState } from 'react';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const cx = classNames.bind(styles);

function Header({ handlePageClick, totalPages }) {
    const [page, setPage] = useState(1);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        handlePageClick(newPage);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <h4 className={cx('search-title')}>SEARCH FOR NAME</h4>
                <div className={cx('search-input')}>
                    <input type="text" />
                    <button className={cx('search-btn')}>
                        <SearchRoundedIcon className={cx('icon')} />
                    </button>
                </div>
            </div>

            <div className={cx('middle')}>
                <span className={cx('left')}>
                    <PersonOutlineRoundedIcon className={cx('icon')} />
                    <p>125 STUDENTS </p>
                </span>

                <div className={cx('right')}>
                    <div className={cx('icon')}>
                        <BorderColorOutlinedIcon />
                    </div>
                    <p>New</p>
                </div>
            </div>
            <div className={cx('page')}>
                <button
                    className={cx('arrow-btn')}
                    disabled={page <= 1}
                    onClick={() => handlePageChange(page - 1)}
                >
                    <KeyboardDoubleArrowLeftIcon
                        className={
                            page <= 1
                                ? cx('arrow-icon', 'disable')
                                : cx('arrow-icon')
                        }
                    />
                </button>
                <div className={cx('number-page')}>{page}</div>
                <button
                    className={cx('arrow-btn')}
                    disabled={page >= totalPages}
                    onClick={() => handlePageChange(page + 1)}
                >
                    <KeyboardDoubleArrowRightIcon
                        className={
                            page >= totalPages
                                ? cx('arrow-icon', 'disable')
                                : cx('arrow-icon')
                        }
                    />
                </button>
            </div>
        </div>
    );
}

export default Header;
