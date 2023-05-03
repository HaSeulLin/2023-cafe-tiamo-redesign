<div>
<div className='new-menu menu-detail'>
    <h2>NEW PRODUCT</h2>
    {
        <ul className='menulist-ul'>
        {
            newMenuData.map((menu)=>
                <li key={menu.id}
                    className='menulist-li'
                >
                    <div className='new-list-content'>
                        <div
                            // NEW label
                            style={
                                menu.itemState==="new" ?
                                    {
                                        backgroundImage:`url("${process.env.PUBLIC_URL}/img/newLabel.png")`,
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
                        <p>{menu.content}</p>
                    </div>
                </li>
            )
        }
        </ul>
    }
</div>
<div className='best-menu menu-detail'>
    <h2>BEST PRODUCT</h2>
    {
        <ul className='menulist-ul'>
            {
                bestMenuData.map((menu)=>
                    <li key={menu.id}
                        className='menulist-li'
                    >
                        <div className='best-list-content'>
                            <div
                                // BEST label
                                style={
                                    menu.itemState==="best" ?
                                        {backgroundImage:`url("${process.env.PUBLIC_URL}/img/bestLabel.png")`,
                                        width:"65px", height:"65px", backgroundRepeat:"no-repeat", backgroundPosition:"center"
                                        }
                                        : {display:"none"}
                                }
                            ></div>
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
                            <p>{menu.content}</p>
                        </div>
                    </li>
                )
            }
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