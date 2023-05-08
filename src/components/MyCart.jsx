import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';

export default function MyCart({itemList, setItemList}) {
    const [sum, setSum] = useState('');
    const [allPrice, setAllPrice] = useState('0');

    const {state, action} = useContext(DataContext);

    const deleteItem = (id) => {
        const newItemList = itemList.filter((i)=>(i.id !== Number(id)));
        setItemList(newItemList);
    }
    const upNum = (list) => {
        // 1 수정된 객체 생성
        const newItem = {
            ...list,
            itemNum : list.itemNum++
        }
        console.log(newItem)

        // 2 동일한 배열 들고 와서 집어넣기
        const newItemlist = itemList.map(
            (i)=>(i.id === list.id ? newItem : i))
        setItemList(newItemlist);
        
        
        console.log(newItemlist) // 반영안되었음!
        console.log(list.itemNum) // +1
        console.log(itemList) // +1 반영됨
        
    }
    const downNum = (list) => {
        // 1 수정된 객체 생성
        const newItem = {
            ...itemList,
            itemNum : list.itemNum--
        }
        // 2 동일한 배열 들고 와서 집어넣기
        const newItemlist = itemList.map(
            (i)=>(i.id === list.id ? newItem : i))
        setItemList(newItemlist);

        console.log(itemList.itemNum)
        console.log(itemList)
    }
    if (itemList.length < 1) {
        return (
            <div>
                <h3>
                    장바구니가 비어있습니다.
                </h3>
            </div>
        )
    }
    else {
        return (
            <div className='mycart'>
                <h3>YOUR CART</h3>
                <ul className='cart-list'>
                    {
                        itemList.map((list, index)=>
                            <li style={{display:"flex"}}
                                key={index}
                            >   
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/${list.image}`} alt="" width={80} height={80}/>
                                </div>
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
                                            onClick={()=>{downNum(list)}}
                                        >-</button>
                                        <input type="text" value={itemList[index].itemNum}
                                            onChange={(e)=>(e.target.value)}
                                        />
                                        <button
                                            onClick={()=>{upNum(list)}}
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
