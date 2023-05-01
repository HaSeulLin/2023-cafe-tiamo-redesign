import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import '../css/menu.css'

import DataContext from '../context/DataContext';
import { Outlet, useParams } from 'react-router-dom';

export default function MenuContent() {
    // 세부페이지 /menu/:id
    const {menus} = useParams();
    console.log(menus);

    // 후에 메뉴 수정 가능
    const {state, action} = useContext(DataContext);
    // 전체 메뉴 (상위)
    const {allMenulist} = state;
    const MenuData = allMenulist.find((d)=>(d.name==menus));


    return (
    <div className='menu-content'>
        <div>
            <div className='menu-content-title'>
                <h3>{MenuData.name}</h3>
                <p>{MenuData.explain}</p>
            </div>
            <div>
                {
                    <ul className='sub-menus'>
                        <li>
                            <Link to={`/menu/${menus}/all`}>all</Link>
                        </li>
                        {
                        MenuData.submenu.map((m, index)=>(
                            <li key={index}>
                                <Link to={`/menu/${menus}/${m}`}>
                                {m}
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                }
            </div>
        </div>
        <Outlet />
    </div>
  )
}
