import React from 'react';
import s from'./Header.module.css';
import Region from './Region/Region';
import Nav_Header from '../Nav_Header/Nav_Header';


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapp_bg}>
                <div className={s.wrapp_header}>
                    <h1>Отличная Отделка</h1>
                    <Region />
                    <form action="">
                            <input type="text"/>
                            <button>Поиск</button>
                        </form>
                    <div className={s.btn_header}>                    
                        <button> + Подать обьявление</button>
                        <button>Вход</button>
                    </div>
                </div>
            </div>
                <div className={s.header_bottom}>                    
                    <Nav_Header nav_services={props.nav_services}/>
                </div>
            
        </header>
    )
}

export default Header;