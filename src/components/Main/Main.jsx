import React from 'react';
import s from './Main.module.css';

import { Route } from 'react-router-dom';

import Main_Content from './Main_Content/Main_Content';
import Building_Materials from './Name_service/Building_Materials/Building_Materials';
import Building_Services from './Name_service/Building_Services/Building_Services';
import Furniture from './Name_service/Furniture/Furniture';
import Plumbing from './Name_service/Plumbing/Plumbing';
import Useful_info from './Name_service/Useful_info/Useful_info';
import Electrika from './Name_service/Electrika/Electrika';

import Page_User from '../Page_User/Page_User';

import Syhie_Smesi from './Name_service/Building_Materials/Syhie_Smesi/Syhie_Smesi';
import Color_Materials from './Name_service/Building_Materials/Color_Materials/Color_Materials';
import Gips_Complect from './Name_service/Building_Materials/Gips_Complect/Gips_Complect';
import Electrica_Materials from './Name_service/Building_Materials/Electrica_Materials/Electrica_Materials';
import Plumbing_Materials from './Name_service/Building_Materials/Plumbing_Materials/Plumbing_Materials';
import Krovlya_Materials from './Name_service/Building_Materials/Krovlya_Materials/Krovlya_Materials';
import Materils_Building from './Name_service/Building_Materials/Materials_Bulding/Materils_Building'
import Les_Materials from './Name_service/Building_Materials/Les_Materials/Les_Materials';
import Beton_Rastvor from './Name_service/Building_Materials/Beton_Rastvor/Beton_Rastvor';
import Pesok_Sypychi from './Name_service/Building_Materials/Pesok_Sypychi/Pesok_Sypychi';
import Metall_baza from './Name_service/Building_Materials/Metall_baza/Metall_baza';

const Main = (props) => {

    return (
            <main className={s.main}>
                <div className='app-wrapp-content'>                  
                    <Route path='/Main_Content' render={ () => <Main_Content nav_services={props.nav_services}/> } />
                    <Route path='/Building_Materials'  render={ () => <Building_Materials nav_product={props.nav_product}/>} />
                    <Route path='/Building_Services'  render={ () => <Building_Services />} />
                    <Route path='/Furniture' render={ () => <Furniture />} /> 
                    <Route path='/Electrika' render={ () => <Electrika />} />           
                    <Route path='/Plumbing' render={ () => <Plumbing />} />
                    <Route path='/Useful_info' render={ () => <Useful_info />} />
                </div>
                <div className={s.page_pro_service}>
                    <Route path='/Syhie_Smesi' render={ () => <Syhie_Smesi nav_product={props.nav_product}/>} />
                    <Route path='/Color_Materials' render={ () => <Color_Materials nav_product={props.nav_product}/>} />
                    <Route path='/Gips_Complect' render={ () => <Gips_Complect nav_product={props.nav_product}/>} />
                    <Route path='/Electrica_Materials' render={ () => <Electrica_Materials nav_product={props.nav_product}/>} />
                    <Route path='/Plumbing_Materials' render={ () => <Plumbing_Materials nav_product={props.nav_product}/>} />
                    <Route path='/Krovlya_Materials' render={ () => <Krovlya_Materials nav_product={props.nav_product}/>} />
                    <Route path='/Materils_Building' render={ () => <Materils_Building nav_product={props.nav_product}/>} />
                    <Route path='/Les_Materials' render={ () => <Les_Materials nav_product={props.nav_product}/>} />
                    <Route path='/Beton_Rastvor' render={ () => <Beton_Rastvor nav_product={props.nav_product}/>} />
                    <Route path='/Pesok_Sypychi' render={ () => <Pesok_Sypychi nav_product={props.nav_product}/>} />
                   <Route path='/Metall_baza' render={ () => <Metall_baza nav_product={props.nav_product}/>} />
                </div>
                <div className={s.page_users}>
                    <Route path='/Page_User' component={Page_User} />
                </div>
            </main>    
    )
};

export default Main;