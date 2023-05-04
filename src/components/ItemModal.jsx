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
                width:"60vw", height:"60vh",
                backgroundColor:"rgba(255,255,255,0.9)",
                margin:"auto", marginTop:"300px",
                position:"fixed", top:"-10vh",
                left:"0%", right:"0%",
                padding:"auto",
                borderRadius:"30px", border:"1px solid black",
                overflow:"hidden",
                display:"flex", flexDirection:"column", justifyContent:"center",
                zIndex:"100"
            }}
        >
            <button className='modal-btn'
                onClick={onClose}
            >X</button>
            <div className='modal-explain'>
                <div>
                    <img src={ModalData[0].image} alt="" width={300}/>
                </div>
                <div className='menu-explain modal-m-e'>
                    <h4>{ModalData[0].name}</h4>
                    <p style={{textAlign:"left"}}>{ModalData[0].content}</p>
                    <h5 style={{textAlign:"left"}}>{ModalData[0].price}</h5>
                    <table>
                        <thead>
                            <th>열량(Kcal)</th>
                            <th>당류(g)</th>
                            <th>단백질(g)</th>
                            <th>포화지방(g)</th>
                            <th>나트륨(mg)</th>
                            <th>카페인(mg)</th>
                            <th>알레르기 유발성분</th>
                        </thead>
                        <tbody>
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
            <div>
                <button>장바구니</button>
                <button>숫자셀렉버트</button>
            </div>
        </div>
    </div>
  )
}
