import React from 'react';
import s from './ProfileInfo.module.css';
import ava from './../../../images/82971932_170089537537022_1121280600023583315_n.jpg'


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.imgBox}>
                <img src={ava}/>

            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;