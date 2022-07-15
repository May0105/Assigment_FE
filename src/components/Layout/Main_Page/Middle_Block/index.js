import classNames from 'classnames/bind';
import styles from './middle.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Minions1 from '../../../../assests/images/minion1.jpg';
import Minions2 from '../../../../assests/images/minion2.jpg';
import Minions3 from '../../../../assests/images/minion3png.png';

const cx = classNames.bind(styles);

function MiddleBlock() {
    const [data, setData] = useState('');

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(
                'http://assignment-tuneofcode-backend.herokuapp.com/api/v1/users/students',
            );
            setData(res.data.data);
        };
        getData();
    }, []);
    if (data) {
        data.forEach((element) => {
            let groupString = '';
            if (element.groups.length !== 0) {
                for (let i = 0; i < element.groups.length - 1; i++) {
                    groupString += element.groups[i].name + ', ';
                }
                groupString += element.groups[element.groups.length - 1].name;
            }
            element.groupString = groupString;
        });
        console.log(data);
    } else return null;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <input type="checkbox" disabled />

                <p className={cx('header-name')}>NAME</p>
                <p className={cx('header-sex')}>SEX</p>
                <p className={cx('header-place')}>PLACE AND DATE OF BIRTH</p>
                <p className={cx('header-groups')}>GROUPS</p>
            </div>

            {data.map((element) => {
                return (
                    <div className={cx('info')} key={element.id}>
                        <div className={cx('input-avt')}>
                            <input type="checkbox" />
                            <img
                                src={element.avatar}
                                className={cx('image')}
                            ></img>
                        </div>
                        <p className={cx('name')}>{element.name}</p>
                        <p className={cx('sex')}>{element.sex}</p>
                        <p className={cx('place-date')}>
                            {element.birth_date + ', ' + element.birth_place}
                        </p>
                        <p className={cx('groups')}>{element.groupString}</p>
                    </div>
                );
            })}

            <div className={cx('info')}>
                <div className={cx('input-avt')}>
                    <input type="checkbox" />
                    <img src={Minions1} className={cx('image')}></img>
                </div>
                <p className={cx('name')}>Peter Erdosi</p>
                <p className={cx('sex')}>Male</p>
                <p className={cx('place-date')}>Budapest, 1989.05.21</p>
                <p className={cx('groups')}>Web designers</p>
            </div>
            <div className={cx('info')}>
                <div className={cx('input-avt')}>
                    <input type="checkbox" />

                    <img src={Minions2} className={cx('image')}></img>
                </div>
                <p className={cx('name')}>Rebeca Truli</p>
                <p className={cx('sex')}>Male</p>
                <p className={cx('place-date')}>Budapest, 1989.05.21</p>
                <p className={cx('groups')}>Web designers</p>
            </div>
            <div className={cx('info')}>
                <div className={cx('input-avt')}>
                    <input type="checkbox" />
                    <img src={Minions3} className={cx('image')}></img>
                </div>
                <p className={cx('name')}>Ted bundy</p>
                <p className={cx('sex')}>Male</p>
                <p className={cx('place-date')}>Budapest, 1989.05.21</p>
                <p className={cx('groups')}>Web designers</p>
            </div>
        </div>
    );
}

export default MiddleBlock;
