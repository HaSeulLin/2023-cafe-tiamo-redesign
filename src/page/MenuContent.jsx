import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import '../css/menu.css'

import { Pagination, Navigation, Autoplay } from "swiper";

import DataContext from '../context/DataContext';
import { Outlet, useParams } from 'react-router-dom';

import ItemModal from '../components/ItemModal';


export default function MenuContent() {
    // 세부페이지 /menu/:id
    const {menus} = useParams();
    console.log(menus);

    // 후에 메뉴 수정 가능
    const {state, action} = useContext(DataContext);
    // 전체 메뉴 (상위-전체 메뉴 리스트 데이터)
    const {allMenulist} = state;
    const MenuData = allMenulist.find((d)=>(d.name===menus));

    
    // 각 하위 메뉴 (각 메뉴 아이템 리스트 데이터)
    const {menuDetaillist} = state;

    const newMenuData = menuDetaillist.filter((d)=>(d.itemState==='new'));
    const bestMenuData = menuDetaillist.filter((d)=>(d.itemState==='best'));

    const [showMenus, setShowMenus] = useState(true);

    // 상세 페이지 모달창, 상태
    const [showModal, setShowModal] = useState(false);
    const [modalName, setModalName] = useState("dummy data");

    const openModal = (name) => {
        setShowModal(true);
        setModalName(name);
    }

    if (menus === "bestnew") {
        return (
            // menu or new&best 클릭 시 보여줄 메인 카테고리
            <div className='best-new-menu' style={{margin:'auto', maxWidth:'1200px'}}>
                <div className='new-menu menu-detail'>
                    <h2>NEW PRODUCT</h2>
                    {
                        <ul className='new-menulist-ul'>
                            <Swiper
                                slidesPerView={'auto'}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                className="mySwiper"
                            >
                        {
                            newMenuData.map((menu)=>
                                <SwiperSlide key={menu.id}
                                    className='menulist-li'
                                >
                                    <div className='new-list-content'>
                                        <div
                                            // NEW label
                                            style={
                                                menu.itemState==="new" ?
                                                    {
                                                        backgroundImage:`url("${process.env.PUBLIC_URL}/img/newLabel.png")`,
                                                        width:"65px", height:"65px", backgroundRepeat:"no-repeat", backgroundPosition:"center",
                                                        top:"30px", left:"20px"
                                                    }
                                                    : {display:"none"}
                                            }
                                        >
                                        </div>
                                        <div className='modal-open'
                                            onClick={()=>{openModal(menu.name)}}
                                        >
                                            <img src={`${process.env.PUBLIC_URL}/${menu.image}`} alt="" width={220} height={220}
                                                className='menu-li-img'
                                            />
                                        <div className='menu-explain'>
                                            <h4>{menu.name}</h4>
                                        </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                            </Swiper>
                        </ul>
                    }
                </div>
                <div className='best-menu menu-detail'>
                    <h2>BEST PRODUCT</h2>
                    {
                        <ul className='best-menulist-ul'>
                            <Swiper
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                slidesPerView={'auto'}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                className="mySwiper"
                            >
                                {
                                    bestMenuData.map((menu)=>
                                        <SwiperSlide key={menu.id}
                                            className='menulist-li'
                                        >
                                            <div className='best-list-content'>
                                                <div
                                                    // BEST label
                                                    style={
                                                        menu.itemState==="best" ?
                                                            {backgroundImage:`url("${process.env.PUBLIC_URL}/img/bestLabel.png")`,
                                                            width:"65px", height:"65px", backgroundRepeat:"no-repeat", backgroundPosition:"center",
                                                            top:"30px", left:"20px"
                                                            }
                                                            : {display:"none"}
                                                    }
                                                ></div>
                                                <div className='modal-open'
                                                    onClick={()=>{openModal(menu.name)}}
                                                >
                                                    <img src={`${process.env.PUBLIC_URL}/${menu.image}`} alt="" width={220} height={220}
                                                        className='menu-li-img'
                                                    />
                                                </div>
                                                <div className='menu-explain'>
                                                    <h4>{menu.name}</h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </ul>
                    }
                </div>
                {/** Modal 창 공간 */}
                <ItemModal
                    open={showModal}
                    onClose={()=>{setShowModal(false)}}
                    name={modalName}
                />
            </div>
        )
    }
    else {
        return (
            // menu/:menus 클릭 시 보여줄 각 카테고리
            <div className='menu-content'>
                <div className='sub-menus'>
                    {
                        <ul>
                            <li>
                                <NavLink to={`/menu/${menus}/all`}
                                    onClick={()=>{setShowMenus(true)}}
                                    style={({ isActive }) => isActive ? 
                                    {backgroundColor:" rgb(240, 81, 54)", color:"white"}
                                    : {}}
                                    >all</NavLink>
                            </li>
                            {
                            MenuData.submenu.map((m, index)=>(
                                <li key={index}>
                                    <NavLink to={`/menu/${menus}/${m}`}
                                        onClick={()=>{setShowMenus(false)}}
                                        style={({ isActive }) => isActive ? 
                                        {backgroundColor:" rgb(240, 81, 54)", color:"white"}
                                        : {}}
                                    >
                                    {m}
                                    </NavLink>
                                </li>
                            ))
                            }
                        </ul>
                    }
                        <div className='menu-content-title'>
                            <h3>{MenuData.name}</h3>
                            <p>{MenuData.explain}</p>
                        </div>
                </div>
                <Outlet />
            </div>
        )
    }
}
