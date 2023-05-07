import React, { useState } from 'react'

import menuList from '../data/menuList.json'
import menuSublist from '../data/menusublist.json'

const DataContext = React.createContext('');


const DataProvider = ({children}) => {
    const [allMenulist, setAllMenulist] = useState(menuList);

    const [menuDetaillist, setMenuDetaillist] = useState(menuSublist);

    //장바구니 리스트
    const [itemList, setItemList] = useState([]);

    // value에 담을 데이터 정리  
    const value = {
        state : {allMenulist, menuDetaillist, itemList},
        action : {setAllMenulist, setMenuDetaillist, setItemList}
    };

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}

export {DataProvider};
export default DataContext;