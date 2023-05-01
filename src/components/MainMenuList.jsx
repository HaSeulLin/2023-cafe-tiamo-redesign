import React from 'react'
import { Link } from 'react-router-dom';
// 메뉴 리스트 데이터 호출 (수정 안 할 data)
import data from '../data/menuList.json'

export default function MainMenuList() {
    const menuListArray = data;

    return (
            menuListArray.map((menu)=>
            <div key={menu.id} className='menu-box'>
                <Link to='/menu' >
                    <div>
                        <img src={menu.image} alt="" />
                    </div>
                    <div>
                        <h3>{menu.name}</h3>
                        <p>{menu.explain}</p>
                    </div>
                </Link>
            </div>
            )
    )
}
