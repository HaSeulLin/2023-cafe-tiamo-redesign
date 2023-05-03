import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/headerLink.css'


export default function HeaderLink() {
    
    /** header 스크롤 시 menu바만 보이게 하기 */
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll',updateScroll);
    });

return (
    <div className='header-link'>
        {/** home 우측 상단 링크 */}
        <div className={ scrollPosition>100 ? 'off' : 'home-site' }>
            <div className={ scrollPosition>100 ? 'off' :'nav-top-site' }>
                <a href="">LOGIN</a>
                <a href="">SIGN IN</a>
                <a href="">SHOP</a>
                <a href="">CUSTORMER SERVICE</a>
            </div>
        </div>
        {/** home logo */}
        <div className={ scrollPosition>100 ? 'off' : 'nav-logo' }>
            <Link to='/'>
                <img src="/img/logo_new.png" alt="logo" />
            </Link>
        </div>
        {/** scroll OFF nav header */}
        <div className={ scrollPosition>100 ? 'off' : 'nav-wrap' }>
            <div className={ scrollPosition>100 ? 'off' : 'nav-bar' }>
                <div className='nav-menu'>
                    <Link to='/about'> About </Link>
                    <ul className='dropDownList'>
                        <li><Link to='/about'>카페띠아모</Link></li>
                        <li><Link to='/about'>브랜드컨셉</Link></li>
                        <li><Link to='/about'>띠아모 젤라또</Link></li>
                    </ul>
                </div>
                <div className='nav-menu'>
                    <Link to='/menu/bestnew'> Menu </Link>
                    <ul className='dropDownList'>
                        <li><Link to='/menu/GELATO/all'>젤라또</Link></li>
                        <li><Link to='/menu/COFFEE/all'>커피</Link></li>
                        <li><Link to='/menu/TEA/all'>티</Link></li>
                        <li><Link to='/menu/BEVERAGE/all'>음료</Link></li>
                        <li><Link to='/menu/DESSERT/all'>디저트</Link></li>
                        <li><Link to='/menu/MD/all'>MD</Link></li>
                    </ul>
                </div>
                <div className='nav-menu'>
                    <Link to='/shop'> Shop </Link>
                    <ul className='dropDownList'>
                        <li><Link to='/shop'>매장 찾기</Link></li>
                    </ul>
                </div>
                <div className='nav-menu'>
                    <Link to='/franchise'> Franchise </Link>
                    <ul className='dropDownList'>
                        <li><Link to='/franchise'>띠아모만의 경쟁력</Link></li>
                        <li><Link to='/franchise'>가맹 절차</Link></li>
                        <li><Link to='/franchise'>가맹 상담</Link></li>
                    </ul>
                </div>
                <div className='nav-menu'>  
                    <Link to='/community'> Community </Link>
                    <ul className='dropDownList'>
                        <li><Link to='/community'>공지사항</Link></li>
                        <li><Link to='/community'>이벤트</Link></li>
                        <li><Link to='/community'>뉴스</Link></li>
                        <li><Link to='/community'>고객센터</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        {/** scroll ON header */}
        <div className='nav-wrap_s'>
            <div className={ scrollPosition>100 ? 'nav-bar-scroll' : 'off' }>
                <div className='nav-bar2'>
                    <div className='nav-menu_s'>
                        <Link to='/' className='nav-menu_s-logo'>
                            <img src="/img/logo_new.png" alt="logo" />
                        </Link>
                    </div>
                    <div className='nav-menu_s'>
                            <Link to='/about'> About </Link>
                            <ul className='dropDownList_s'>
                                <li><Link to='/about'>카페띠아모</Link></li>
                                <li><Link to='/about'>브랜드컨셉</Link></li>
                                <li><Link to='/about'>띠아모 젤라또</Link></li>
                            </ul>
                        </div>
                        <div className='nav-menu_s'>
                            <Link to='/menu/bestnew'> Menu </Link>
                            <ul className='dropDownList_s'>
                                <li><Link to='/menu/GELATO/all'>젤라또</Link></li>
                                <li><Link to='/menu/COFFEE/all'>커피</Link></li>
                                <li><Link to='/menu/TEA/all'>티</Link></li>
                                <li><Link to='/menu/BEVERAGE/all'>음료</Link></li>
                                <li><Link to='/menu/DESSERT/all'>디저트</Link></li>
                                <li><Link to='/menu/MD/all'>MD</Link></li>
                            </ul>
                        </div>
                        <div className='nav-menu_s'>
                            <Link to='/shop'> Shop </Link>
                            <ul className='dropDownList_s'>
                                <li><Link to='/shop'>매장 찾기</Link></li>
                            </ul>
                        </div>
                        <div className='nav-menu_s'>
                            <Link to='/franchise'> Franchise </Link>
                            <ul className='dropDownList_s'>
                                <li><Link to='/franchise'>띠아모만의 경쟁력</Link></li>
                                <li><Link to='/franchise'>가맹 절차</Link></li>
                                <li><Link to='/franchise'>가맹 상담</Link></li>
                            </ul>
                        </div>
                        <div className='nav-menu_s'>  
                            <Link to='/community'> Community </Link>
                            <ul className='dropDownList_s'>
                                <li><Link to='/community'>공지사항</Link></li>
                                <li><Link to='/community'>이벤트</Link></li>
                                <li><Link to='/community'>뉴스</Link></li>
                                <li><Link to='/community'>고객센터</Link></li>
                            </ul>
                        </div>

                </div>
            </div>
        </div>
        {/** 오른쪽 하단 고정 아이콘 바 */}
        <div className='right-scroll-menu'>
            <div>
                <Link to={'/shop'}>
                    <img src="/img/icon-marker.png" alt="Cart" />
                    <div className='rsm-info'>
                        <h4>MAP</h4>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={'/menu'}>
                    <img src="/img/icon-cart.png" width={28} height={28} alt="Cart" />
                    <div className='rsm-info'>
                        <h4>CART</h4>
                    </div>
                </Link>
            </div>
            <div>
            <a href="#">
                <img src="/img/icon-top.png" alt="Top" />
                <div className='rsm-info'>
                    <h4>TOP</h4>
                </div>
            </a>
        </div>
    </div>
    </div>
);
}
