import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../css/menu.css'

// data 들고오기
import DataContext from '../context/DataContext';

export default function Menu() {

    const menus = ["GELATO", "COFFEE", "LATTE|TEA", "BEVERAGE", "DESSERT", "MD"];

//    const value = useContext(DataContext);
//     const {state, action} = useContext(DataContext);
//    const {allmenulist} = state.allMenulist;
//     const {gelatolist} = state.gelatolist;

//    const allMenuData = allmenulist.find((d)=>(d.id==id));

// menu state 선택해서 보여주기
//    const [menustate, setMenustate] = useState("all");
    const [backimg, setBackimg] = useState("/img/gelato-backimg.jpg")
    const ClickBackImg = (m) => {
        switch (m) {
            case "GELATO" :
                setBackimg("/img/gelato-backimg.jpg");
                break;
            case "COFFEE" :
                setBackimg("/img/coffee-backimg.jpg");
                break;
            case "LATTE|TEA" :
                setBackimg("/img/tea-backimg.jpg");
                break;
            case "BEVERAGE" :
                setBackimg("/img/beverage-backimg.jpg");
                break;
            case "DESSERT" :
                setBackimg("/img/dessert-backimg.jpg");
                break;
            case "MD" :
                setBackimg("/img/md-backimg.jpg");
                break;
            default : 
                setBackimg("/img/gelato-backimg.jpg")
            }
        }

    // menu main에 보여주는 메뉴들 >> best, new 넣기
    const {state, action} = useContext(DataContext);

    return (
        <div>
            <div className='menu-page'>
                <div className='menu-page-top'>
                    <div className='menu-backimg'>
                        <img src={backimg} alt="" />
                    </div>
                    <div>
                        <h2>Menu</h2>
                        <h3>홈메이드 식으로 만든 맛있고 건강한 메뉴</h3>
                    </div>
                    <ul className='menu-list-top'>
                        {
                        menus.map((m, index)=>(
                            <li key={index}>
                                <Link to={`/menu/${m}`}
                                    onClick={()=>{ClickBackImg(m)}}
                                >
                                    {m}
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <Outlet />
                { /* 하위 페이지 클릭 시 사라지게 만들기
                    <ul className='menulist-ul'>
                        {
                            mainMenuData.map((menu, index) => (
                            <li
                                className='menulist-li'
                                key={index}
                            >
                                <div>
                                    <img src={menu.image} alt="" width={250}/>
                                </div>
                                <div className='menu-explain'>
                                    <h4>{menu.name}</h4>
                                    <p>{menu.content}</p>
                                </div>
                            </li>
                        ))
                        }
                    </ul>
                */
                }
            </div>
        </div>
    );
}
