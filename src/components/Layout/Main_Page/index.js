import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './main_page.module.scss';
import LeftBlock from './Left_Block';
import MiddleBlock from './Middle_Block';
import Header from './Header';

import Minions1 from '../../../assests/images/minion1.jpg';
import Minions2 from '../../../assests/images/minion2.jpg';
import Minions3 from '../../../assests/images/minion3png.png';
const cx = classNames.bind(styles);
function MainPage() {
    const [data, setData] = useState(''); //du lieu
    const [currentItems, setCurrentItems] = useState(null); //obj: Khi được set -> chứa số phần tử itemsPerPage tren 1 page
    const [pageCount, setPageCount] = useState(0); //tong so trang
    const [itemOffset, setItemOffset] = useState(0); //index in array

    let itemsPerPage = 5; //so item tren 1 page

    //1. call Api
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(
                'http://assignment-tuneofcode-backend.herokuapp.com/api/v1/users/students',
            );
            const items = res.data.data;
            console.log('items:', items);
            setData(items);
        };
        getData();
    }, []);

    //3.
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(data.slice(itemOffset, endOffset)); //slice: cat cac ptu theo chi so
        setPageCount(Math.ceil(data.length / itemsPerPage)); //tinh ra tong so trang co the co
    }, [data, itemOffset, itemsPerPage]); //khi data - hay index - so tiem tren 1 page thay doi

    //4. truyen cho header; Khi click ->doi so page;
    const handlePageClick = (page) => {
        const newOffset = ((page - 1) * itemsPerPage) % data.length;
        /*chia -> lay ra index moi cho itemOffset*/
        setItemOffset(newOffset);
        //set lai cac ptu tren 1 page khi chi so index thay doi
    };

    //2. Cần xử li mảng groups rồi mớI truyen du lieu cho Middle
    if (data) {
        data[0].avatar = Minions1;
        data[1].avatar = Minions2;
        data[2].avatar = Minions3;
        data.forEach((element) => {
            let groupString = '';
            if (element.groups.length !== 0) {
                for (let i = 0; i < element.groups.length - 1; i++) {
                    groupString += element.groups[i].name + ', ';
                }
                groupString += element.groups[element.groups.length - 1].name; //add them ptu cuoi cua group
            }
            element.groupString = groupString; //add them groupString vao obj
        });
    } else return null;

    return (
        <div className={cx('wrapper')}>
            <Header totalPages={pageCount} handlePageClick={handlePageClick} />
            {/* <Header totalPages={pageCount} /> */}

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
