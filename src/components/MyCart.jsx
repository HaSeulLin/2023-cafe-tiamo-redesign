import React, { useContext, useState } from 'react'

export default function MyCart({itemList, setItemList}) {
    const [sum, setSum] = useState('0');

    const deleteItem = (id) => {
        const newItemList = itemList.filter((i)=>(i.id !== Number(id)));
        setItemList(newItemList);
    }
    // quantity up down
    const downNum = (id) => {
        setItemList(cart =>
            cart.map((item)=>
                id === item.id ? {...item, itemNum: item.itemNum - 1} : item
        ));
    }
    const upNum = (id) => {
        setItemList(cart =>
            cart.map((item)=>
                id === item.id ? {...item, itemNum: item.itemNum + 1} : item
        ));
    }
    // total price
    const eachPrice = itemList.map((item)=>{
        return item.itemNum*item.price.replaceAll(/[^0-9]/g, "")
    });
    const totalPrice = eachPrice.reduce((a,b)=>a+b,0);

    if (itemList.length < 1) {
        return (
            <div style={{width:"100%", height:"100px", backgroundColor:"rgb(255, 245, 198)", borderTop:"1px solid black", margin:"auto",
                        display:"flex", justifyContent:"center", alignItems:"center"}}>
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
                    <p style={{fontSize:"1.3rem", fontWeight:"bold"}}>총 금액: {totalPrice}</p>
                    <button>구매하기</button>
                </div>
                <ul className='cart-list'>
                    {
                        itemList.map((list, index)=>
                            <li style={{display:"flex"}}
                                key={index}
                            >   
                                <div className='cart-img'>
                                    <img src={`${process.env.PUBLIC_URL}/${list.image}`} alt="" width={100} height={100}/>
                                    <button
                                        onClick={()=>{deleteItem(list.id)}}
                                    >x</button>
                                </div>
                                <div className='cart-item'>
                                    <div style={{display:'flex', alignItems:'flex-end', borderBottom:'1px solid black'}}>
                                        <p>{list.name}</p>
                                        <span style={{fontSize:'0.9rem'}}>{list.price}원</span>
                                    </div>
                                    <p>{list.itemNum*list.price.replaceAll(/[^0-9]/g, "")}원</p>
                                    <div className='cart-btn'>
                                        <button
                                            onClick={()=>{downNum(list.id)}}
                                            disabled={list.itemNum<2 ? true : false}
                                        >-</button>
                                        <input type="text" value={list.itemNum}
                                            onChange={(e)=>(e.target.value)
                                            // 워닝 방지용. 추후에 text로도 값 입력 받기 구현
                                            }
                                        />
                                        <button
                                            onClick={()=>{upNum(list.id)}}
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
