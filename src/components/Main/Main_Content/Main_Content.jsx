import React from 'react';
import s from './Main_Content.module.css';
import page_wrapp from '../Name_service/Page_product.module.css';

import Top_List from '../Top_List/Top_List'
import Nav from '../../Nav/Nav';

const Main_Content = (props) => {

    return(
        <div  className={page_wrapp.wrapp_page}>
            <div className={page_wrapp.sidebar}>
                <Nav nav_services={props.nav_services}/>
            </div>
            <div className={s.main_content}>
                <h2>Главная</h2>
                <Top_List />
            </div>
        </div>
    )
}

export default Main_Content;