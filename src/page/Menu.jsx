import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../css/menu.css'

export default function Menu() {

    const menus = ["GELATO", "COFFEE", "TEA", "BEVERAGE", "DESSERT", "MD"];

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
            case "TEA" :
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
                setBackimg("/img/gelato-backimg.jpg");
            }
        }

    return (
        <div>
            <div className='menu-page'>
                <div className='menu-page-top'>
                    <div className='menu-backimg'>
                        <img src={backimg} alt="" width="100%" height="auto" />
                    </div>
                    <div>
                        <h2>Menu</h2>
                        <h3>홈메이드 식으로 만든 맛있고 건강한 메뉴</h3>
                    </div>
                    <ul className='menu-list-top'>
                        <li>
                            <Link to={`/menu/bestnew`}>NEW & BEST</Link>
                        </li>
                        {
                        menus.map((m, index)=>(
                            <li key={index}>
                                <Link to={`/menu/${m}/all`}
                                    onClick={()=>{ClickBackImg(m);}}
                                >
                                    {m}
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    );
}
