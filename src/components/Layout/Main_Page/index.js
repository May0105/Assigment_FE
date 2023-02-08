import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './main_page.module.scss';
import LeftBlock from './Left_Block';
import MiddleBlock from './Middle_Block';
import Header from './Header';

import Minions1 from '../../../assests/images/minion1.jpg';
import Minions2 from '../../../assests/images/minion2.jpg';
import Minions3 from '../../../assests/images/minion3png.png';
import Data from '../../../mocks/data';
const cx = classNames.bind(styles);

function MainPage() {
    const [data, setData] = useState('');
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    let itemsPerPage = 5;

    useEffect(() => {
        const getData = async () => {
            setData(Data);
        };
        getData();
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [data, itemOffset, itemsPerPage]);

    const handlePageClick = (page) => {
        const newOffset = ((page - 1) * itemsPerPage) % data.length;

        setItemOffset(newOffset);
    };

    if (data) {
        data[0].avatar = Minions1;
        data[1].avatar = Minions2;
        data[2].avatar = Minions3;
        data.forEach((element) => {
            let groupString = '';
            if (element.groups.length !== 0) {
                for (let i = 0; i < element.groups.length - 1; i++) {
                    groupString += element.groups[i] + ', ';
                }
                groupString += element.groups[element.groups.length - 1];
            }
            element.groupString = groupString;
        });
    } else return null;

    return (
        <div className={cx('wrapper')}>
            <Header
                data={Data}
                totalPages={pageCount}
                handlePageClick={handlePageClick}
            />
            <div className={cx('block')}>
                <LeftBlock className={cx('left-block')} />
                <MiddleBlock
                    data={currentItems}
                    className={cx('middle-block')}
                />
            </div>
        </div>
    );
}

export default MainPage;
