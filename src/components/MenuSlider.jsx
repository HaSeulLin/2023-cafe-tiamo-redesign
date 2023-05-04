import React from 'react'
import { Link } from 'react-router-dom';
// 메뉴 리스트 데이터 호출 (수정 안 할 data)
import data from '../data/menuList.json'
import '../css/menuslick.css';


export default function App() {
  const menuListArray = data;

  return (
    <div className='menu-list-wrap'>
      <div>
        {            
        menuListArray.map((menu)=>(
              <div key={menu.id} className='menu-box'>
                  <Link to={`/menu/${menu.name}/all`} >
                      <div className="menu-image">
                        <img src={menu.image} alt="" />
                        <div className="explain-over">
                          <p>{menu.explain}</p>
                          <span>자세히 보기</span>
                        </div>
                      </div>
                      <div>
                        <h3>{menu.name}</h3>
                      </div>
                  </Link>
              </div>))
        }
      </div>
    </div>
  );
}