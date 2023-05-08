import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';

export default function MyCart({itemList, setItemList}) {
    const [sum, setSum] = useState('');
    const [allPrice, setAllPrice] = useState('0');
    const [itemNum, setItemNum] = useState(itemList.itemNum);

    const {state, action} = useContext(DataContext);

    const deleteItem = (id) => {
        const newItemList = itemList.filter((i)=>(i.id !== Number(id)))
        setItemList(newItemList);
    }
    const upItem = () => {
        const newItem = {
            ...itemList,
            itemNum
        }
        // const newItemlist = state.itemList.map(
        //     (i)=>(i.id===itemList.id ? newItem : i)
        // )
        // setItemList(newItemlist);
        // console.log(itemList.itemNum);
    }
    // const {state, action} = useContext(DataContext);
    // const {menuDetaillist} = state;
    // const itemData = menuDetaillist.filter((i)=>i.id==modal);
    // console.log(itemData)

    if (itemList.length < 1) {
        return (
            <div>
                장바구니가 비어있습니다.
            </div>
        )
    }
    else {
        return (
            <div className='mycart'>
                <h3>Your Cart</h3>
                <ul className='cart-list'>
                    {
                        itemList.map((list, index)=>
                            <li style={{display:"flex"}}
                                key={index}
                            >
                                <img src={list.image} alt="" width={100} height={100}/>
                                <div className='cart-item'>
                                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                        <p>{list.name}</p>
                                        <button
                                            onClick={()=>{deleteItem(list.id)}}
                                        >삭제</button>
                                    </div>
                                    <p>{list.itemNum*list.price.replaceAll(/[^0-9]/g, "")}원</p>
                                    <div className='cart-btn'>
                                        <button
                                        >-</button>
                                        <span>{list.itemNum}</span>
                                        <button
                                            onClick={upItem}
                                        >+</button>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                    
                </ul>
            </div>
        )  
    }
}
