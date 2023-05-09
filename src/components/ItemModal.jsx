import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';

import MyCart from '../components/MyCart'


export default function ItemModal({open, onClose, name}) {
    // 장바구니 담을 아이템 개수
    const [itemN, setItemN] = useState(1);

    const {state, action} = useContext(DataContext);
    if(!open) {return null};


    const {menuDetaillist} = state;
    const ModalData = menuDetaillist.filter((menu)=>menu.name==name);
//  배열 [0]으로 불러와야 함  console.log(ModalData[0].name);
    
    const addItemList = () => {
        const newItem = {
            id : state.id,
            image : ModalData[0].image,
            name : ModalData[0].name,
            price : ModalData[0].price,
            itemNum : itemN
        };
        const newItemlist = state.itemList.concat(newItem);
        if (itemN<1) {
            alert("수량은 1개 이상이어야 합니다.")
        }
        else {
            action.setItemList(newItemlist);
            action.idCount();
            console.log(newItem.id)
            setItemN(1);
        }
    }

    if (ModalData[0].menus === "MD") {
        return (
            <div className='modal'
            style={{
                width:"80vw", height:"auto",
                backgroundColor:"rgb(255,255,255)",
                margin:"auto", marginTop:"300px",
                position:"fixed", top:"-20vh",
                left:"0%", right:"0%",
                padding:"auto",
                borderRadius:"30px", border:"1px solid black",
                overflow:"hidden",
                display:"flex", flexDirection:"column", justifyContent:"flex-start",
                zIndex:"1000"
            }}
        >
            <div className='modal-btn'>
                <button
                    onClick={onClose}
                >x</button>
            </div>
            <div className='modal-explain'>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/${ModalData[0].image}`} alt="" width={200}/>
                </div>
                <div className='menu-explain modal-m-e'>
                    <h4>{ModalData[0].name}</h4>
                    <p style={{textAlign:"left"}}>{ModalData[0].content}</p>
                    <h5 style={{textAlign:"left", margin:"10px 0"}}>{ModalData[0].price}원</h5>
                </div>
            </div>
            <div className='cart-add-btn'>
                <div>
                    <button
                        onClick={()=>{setItemN(itemN-1)}}
                        disabled={itemN<2 ? true : false}
                    >-</button>
                    <input type="text" value={itemN}
                        onChange={(e)=>(e.target.value)}
                    />
                    <button
                        onClick={()=>{setItemN(itemN+1)}}
                    >+</button>
                </div>
                <button
                    onClick={addItemList}
                >카트에 추가</button>
            </div>
            <div>
                <MyCart
                    itemList={state.itemList} setItemList={action.setItemList}
                />
            </div>
        </div>
        )
    }
    else {
            return (
                <div className='modal'
                    style={{
                        width:"80vw", height:"auto",
                        backgroundColor:"rgb(255,255,255)",
                        margin:"auto", marginTop:"300px",
                        position:"fixed", top:"-20vh",
                        left:"0%", right:"0%",
                        padding:"auto",
                        borderRadius:"30px", border:"1px solid black",
                        overflow:"hidden",
                        display:"flex", flexDirection:"column", justifyContent:"flex-start",
                        zIndex:"1000"
                    }}
                >
                    <div className='modal-btn'>
                        <button
                            onClick={onClose}
                        >x</button>
                    </div>
                    <div className='modal-explain'>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/${ModalData[0].image}`} alt="" width={200}/>
                        </div>
                        <div className='menu-explain modal-m-e'>
                            <h4>{ModalData[0].name}</h4>
                            <p style={{textAlign:"left"}}>{ModalData[0].content}</p>
                            <h5 style={{textAlign:"left", margin:"10px 0"}}>{ModalData[0].price}원</h5>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>열량(Kcal)</th>
                                        <th>당류(g)</th>
                                        <th>단백질(g)</th>
                                        <th>포화지방(g)</th>
                                        <th>나트륨(mg)</th>
                                        <th>카페인(mg)</th>
                                        <th>알레르기 유발성분</th>
                                    </tr>
                                    <tr>
                                        <td>{ModalData[0].component.kacl}</td>
                                        <td>{ModalData[0].component.suga}</td>
                                        <td>{ModalData[0].component.prot}</td>
                                        <td>{ModalData[0].component.fat}</td>
                                        <td>{ModalData[0].component.na}</td>
                                        <td>{ModalData[0].component.cf==undefined ? '-' : ModalData[0].component.cf}</td>
                                        <td>{ModalData[0].allergy=='' ? '-' : ModalData[0].allergy}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='cart-add-btn'>
                        <div>
                            <button
                                onClick={()=>{setItemN(itemN-1)}}
                                disabled={itemN<2 ? true : false}
                            >-</button>
                            <input type="text" value={itemN}
                                onChange={(e)=>(e.target.value)}
                            />
                            <button
                                onClick={()=>{setItemN(itemN+1)}}
                            >+</button>
                        </div>
                        <button
                            onClick={addItemList}
                        >카트에 추가</button>
                    </div>
                    <div>
                        <MyCart
                            itemList={state.itemList} setItemList={action.setItemList}
                        />
                    </div>
                </div>
)

        }
}
