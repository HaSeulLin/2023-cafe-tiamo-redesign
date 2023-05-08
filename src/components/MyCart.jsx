import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';

export default function MyCart({itemList, setItemList}) {
    const [sum, setSum] = useState('0');
    const [allPrice, setAllPrice] = useState([]);
    const [finNum, setFinNum] = useState([itemList.itemNum]);

    const {state, action} = useContext(DataContext);

    const deleteItem = (id) => {
        const newItemList = itemList.filter((i)=>(i.id !== Number(id)));
        setItemList(newItemList);
    }
    const upNum = (list) => {
        // 수정 객체 생성
        const newItem = {
            ...itemList,
            itemNum : list.itemNum++
        }
        console.log(list.itemNum) // O

        // const newAddList = state.itemList.map(
        //     (i)=>(i.id === list.id ? newItem : i));
        
        // setItemList(newAddList);
        
        
    }
    const downNum = (list) => {
        const newItem = {
            ...itemList,
            itemNum : list.itemNum--
        }
        console.log(itemList[list.id-1].itemNum) // O

    }

    if (itemList.length < 1) {
        return (
            <div style={{width:"100%", height:"100px", backgroundColor:"rgb(255, 245, 198)", borderTop:"1px solid black", margin:"auto", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <h3 style={{margin:"0"}}>
                    장바구니에 담긴 상품이 없습니다.
                </h3>
            </div>
        )
    }
    else {
        return (
            <div className='mycart'>
                <div>
                    <h3>YOUR CART</h3>
                    <p>총 금액 : {sum}</p>
                    <button>구매하기</button>
                </div>
                <ul className='cart-list'>
                    {
                        state.itemList.map((list, index)=>
                            <li style={{display:"flex"}}
                                key={index}
                            >   
                                <div className='cart-img'>
                                    <img src={`${process.env.PUBLIC_URL}/${list.image}`} alt="" width={80} height={80}/>
                                    <button
                                        onClick={()=>{deleteItem(list.id)}}
                                    >x</button>
                                </div>
                                <div className='cart-item'>
                                    <div style={{display:'flex', alignItems:'center'}}>
                                        <p>{list.name}</p>
                                    </div>
                                    <p>{list.itemNum*list.price.replaceAll(/[^0-9]/g, "")}원</p>
                                    <div className='cart-btn'>
                                        <button
                                            onClick={()=>{downNum(list)}}
                                            disabled={list.itemNum<2 ? true : false}
                                        >-</button>
                                        <input type="text" value={list.itemNum}
                                            onChange={(e)=>setItemList(e.target.value)}
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
