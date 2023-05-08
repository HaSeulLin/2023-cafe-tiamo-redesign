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
                    <input type="text" value={itemList[index].itemNum}
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