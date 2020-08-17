import React from 'react';
import s from './Region.module.css';

const Region = (props) => {    
    return(
        <div className={s.region} >                    
            <p className={s.region_name}>Region</p>
            <ul className={s.region_list}>
                <li>Минск</li>
                <li>Минская обл</li>
                <li>Брестская обл</li>
                <li>Витебская обл</li>
                <li>Гродненская обл</li>
                <li>Гомельская обл</li>
                <li>Могилевская обл</li>
            </ul>
        </div>
    ) 

}

export default Region;