import React, { useState } from 'react'

import menuList from '../data/menuList.json'
import menuSublist from '../data/menusublist.json'

const DataContext = React.createContext('');


const DataProvider = ({children}) => {
    const [allMenulist, setAllMenulist] = useState(menuList);

    const [menuDetaillist, setMenuDetaillist] = useState(menuSublist);

    // value에 담을 데이터 정리  
    const value = {
        state : {allMenulist, menuDetaillist},
        action : {setAllMenulist, setMenuDetaillist}
    };

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}

export {DataProvider};
export default DataContext;