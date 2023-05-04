import React, { useContext, useState } from 'react'

import '../css/menu.css'
import "swiper/css";
import "swiper/css/pagination";

import DataContext from '../context/DataContext';
import { useNavigate, useParams } from 'react-router-dom';

import ItemModal from '../components/ItemModal';

export default function MenuContent() {
    // 세부페이지 /menu/:id
    const {menus, sub} = useParams();
    console.log(sub);

    // 후에 메뉴 수정 가능
    const {state, action} = useContext(DataContext);
    // 각 하위 메뉴
    const {menuDetaillist} = state;
    // 전체 메뉴 (상위)
    const MenuData = menuDetaillist.filter((d)=>(d.category==sub));
    const allMenuData = menuDetaillist.filter((d)=>(d.menus==menus));

    // 상세 페이지 모달창, 상태
    const [showModal, setShowModal] = useState(false);
    const [modalName, setModalName] = useState("dummy data");

    const openModal = (name) => {
        setShowModal(true);
        setModalName(name);
    }
    console.log(modalName);
    
    if (sub=="all") {
        return (
            <div className='menu-detail'>
                {
                    <ul className='menulist-ul'>
                    {
                        allMenuData.map((menu)=>
                            <li key={menu.id}
                                className='menulist-li'
                            >
                                <div className='list-content'>
                                    <div
                                        // NEW label
                                        style={
                                                menu.itemState==="new" ?
                                                    {backgroundImage:`url("${process.env.PUBLIC_URL}/img/newLabel.png")`,
                                                    width:"65px", height:"65px", backgroundRepeat:"no-repeat", backgroundPosition:"center"
                                                    }
                                                    : {display:"none"}
                                        }
                                    >
                                    </div>
                                    <div
                                        // BEST label
                                        style={
                                                menu.itemState==="best" ?
                                                    {backgroundImage:`url("${process.env.PUBLIC_URL}/img/bestLabel.png")`,
                                                    width:"65px", height:"65px", backgroundRepeat:"no-repeat", backgroundPosition:"center"
                                                    }
                                                    : {display:"none"}
                                        }
                                    >
                                    </div>
                                    <div className='modal-open-img'
                                        onClick={()=>{openModal(menu.name)}}
                                    >
                                        <img src={menu.image} alt="" width={220}
                                            className='menu-li-img'
                                        />
                                    </div>
                                </div>
                                <div className='menu-explain'>
                                <h4>{menu.name}</h4>
                                </div>
                            </li>
                        )
                    }
                    </ul>
                }
                {/** Modal 창 공간 */}
                <ItemModal
                    open={showModal}
                    onClose={()=>{setShowModal(false)}}
                    name={modalName}
                />
            </div>
            );
    }
    else {
        return (
        <div className='menu-detail'>
            {
                <ul className='menulist-ul'>
                {
                    MenuData.map((menu)=>
                        <li key={menu.id}
                            className='menulist-li'
                        >
                            <div className='list-content'>
                                <div
                                    // NEW label
                                    style={
                                            menu.itemState==="new" ?
                                                {backgroundImage:`url("${process.env.PUBLIC_URL}/img/newLabel.png")`,
                                                width:"65px", height:"65px", backgroundRepeat:"no-repeat", backgroundPosition:"center"
                                                }
                                                : {display:"none"}
                                    }
                                >
                                </div>
                                <div
                                    // BEST label
                                    style={
                                            menu.itemState==="best" ?
                                                {backgroundImage:`url("${process.env.PUBLIC_URL}/img/bestLabel.png")`,
                                                width:"65px", height:"65px", backgroundRepeat:"no-repeat", backgroundPosition:"center"
                                                }
                                                : {display:"none"}
                                    }
                                >
                                </div>
                                <div className='modal-open-img'
                                    onClick={()=>{openModal(menu.name)}}
                                >
                                    <img src={menu.image} alt="" width={220}
                                        className='menu-li-img'
                                    />
                                </div>
                            </div>
                            <div className='menu-explain menu-name'>
                                <h4>{menu.name}</h4>
                            </div>
                        </li>
                    )
                }
                </ul>
            }
            {/** Modal 창 공간 */}
            <ItemModal
                open={showModal}
                onClose={()=>{setShowModal(false)}}
                name={modalName}
            />
        </div>
        );
    }
}
