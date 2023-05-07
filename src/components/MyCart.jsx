import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';

export default function MyCart({itemList, setItemList}) {
    const [sum, setSum] = useState('');
    const [allPrice, setAllPrice] = useState('3800');

    const {state, action} = useContext(DataContext);

    // const {state, action} = useContext(DataContext);
    // const {menuDetaillist} = state;
    // const itemData = menuDetaillist.filter((i)=>i.id==modal);
    // console.log(itemData)
  return (
    <div>
        <h3>Your Cart</h3>
        <ul className='cart-list'>
            {
                itemList.map((list, index)=>
                    <li style={{display:"flex"}}
                        key={index}
                    >
                        <img src={list.image} alt="" width={100} height={100}/>
                        <div className='cart-item'>
                            <p>{list.name}</p>
                            <button>삭제</button>
                            <button
                                onClick={()=>{setItemList.itemNum(list.itemNum-1)}}                            
                            >-</button>
                            <span
                                onClick={()=>{
    console.log(list.itemNum)
                                }}
                            >{list.itemNum}</span>
                            <button
                            >+</button>
                        </div>
                        <p>{list.itemNum*list.price.replaceAll(/[^0-9]/g, "")}원</p>
                    </li>
                )
            }
            
        </ul>
        <p>전체 가격 : {allPrice}</p>
    </div>
  )
}
