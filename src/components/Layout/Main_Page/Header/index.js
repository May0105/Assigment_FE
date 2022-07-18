import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
//Search Result
import AccountsItem from '../AccountsItem';
import axios from 'axios';
import useDebounced from '../../../hooks/useDebounce';

const cx = classNames.bind(styles);

function Header({ handlePageClick, totalPages }) {
    //nhan tu cha {yotalPages}
    const [page, setPage] = useState(1);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        handlePageClick(newPage);
    };

    //Tim kiem
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchresult] = useState([]);
    const [showResult, setShowResult] = useState(true); //true -> hien thi kq tim kiem

    const debounced = useDebounced(searchValue, 800); //truyen -> useDebounce
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchresult([]);
            return;
        }

        const fetchApi = async () => {
            const response = await axios.get(
                `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                    debounced,
                )}&type=less`,
                // 'https://tiktok.fullstack.edu.vn/api/users/search?q=h&type=less',
            );
            const list = response.data.data; //da get duoc mang
            setSearchresult(list);
        };
        fetchApi();
    }, [debounced]);

    const handleOnChange = (e) => {
        const searchvalue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchvalue);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                visible={searchResult.length >= 1 && showResult}
                placement="bottom"
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountsItem key={result.id} data={result} />
                        ))}
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <h4 className={cx('search-title')}>SEARCH FOR NAME</h4>
                    <div className={cx('search-input')}>
                        <input
                            type="text"
                            value={searchValue}
                            onChange={handleOnChange}
                            onFocus={() => setShowResult(true)}
                        />
                        <button className={cx('search-btn')}>
                            <SearchRoundedIcon className={cx('icon')} />
                        </button>
                    </div>
                </div>
            </Tippy>

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
