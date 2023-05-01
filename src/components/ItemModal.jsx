import React, { useContext } from 'react'
import DataContext from '../context/DataContext';

export default function ItemModal({open, onClose, name}) {
    const {state, action} = useContext(DataContext);
    if(!open) {return null};

    const {menuDetaillist} = state;
    const ModalData = menuDetaillist.filter((menu)=>menu.name==name);
//  배열 [0]으로 불러와야 함  console.log(ModalData[0].name);

    return (
    <div>
        <div className='modal'
            style={{
                width:"50%", height:"500px",
                backgroundColor:"rgba(255,255,255)",
                margin:"auto", marginTop:"300px",
                position:"fixed", top:"0",
                padding:"50px",
                borderRadius:"30px", border:"1px solid black",
            }}
        >
            <button className='modal-btn'
                onClick={onClose}
            >X</button>
            <div className='modal-explain'>
                <img src={ModalData[0].image} alt="" width={300}/>
                <div className='menu-explain'>
                    <h4>{ModalData[0].name}</h4>
                    <p>{ModalData[0].content}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
